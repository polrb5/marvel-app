import md5 from 'js-md5';

import response from './lib/response.ts';

import type {
  ApiResponseData, Comic, ComicId, Response,
} from '../types/types';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const baseURL = import.meta.env.VITE_MARVEL_BASE_URL;

const ts: string = new Date().getTime().toString();
const hash: string = md5(ts + privateKey + publicKey);

export const getComics = async (offset = 0, limit = 12): Promise<Response<Comic>> => {
  const url = `${baseURL}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`;

  try {
    const res = await fetch(url);
    const data = await res.json() as ApiResponseData;
    return response(true, null, data.data.results);
  } catch (error) {
    console.error('getComics -> error', error);
    const errorMessage: string = (error as Error).message || 'An unexpected error occurred';
    return response(false, errorMessage, []);
  }
};

export const getComicDetail = async ({ id }: ComicId): Promise<Response<Comic | null>> => {
  const url = `${baseURL}/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const res = await fetch(url);
    const data = await res.json() as ApiResponseData;
    return response(true, null, data.data.results[0]);
  } catch (error) {
    console.error('getComicDetail -> error', error);
    const errorMessage: string = (error as Error).message || 'An unexpected error occurred';
    return response(false, errorMessage, null);
  }
};
