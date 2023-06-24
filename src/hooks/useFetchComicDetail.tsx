import { useState, useEffect } from 'react';

import { getComicDetail } from '../services/data.ts';

import type { Comic, ComicId } from '../types/types';

export type FetchComicDetailState = {
  data: Comic | null;
  loading: boolean;
  error: string | null;
}
const useFetchComicDetail = ({ id }: ComicId): FetchComicDetailState => {
  const [data, setData] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { success, message, data: comicsData } = await getComicDetail({ id });
      setLoading(false);

      if (success && !Array.isArray(comicsData)) {
        setData(comicsData);
        return;
      }

      setError(message);
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useFetchComicDetail;
