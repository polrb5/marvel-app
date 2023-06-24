import { useState, useEffect, useCallback } from 'react';

import { getComics } from '../services/data.ts';
import calculateOffset from '../utils/pagination.ts';

import type { Comic, FetchDataState } from '../types/types';

const useFetchComics = (initialPage = 1, perPage = 12): FetchDataState => {
  const [data, setData] = useState<Comic[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPageState] = useState(initialPage);

  const fetchData = useCallback(async (page: number, perPage: number) => {
    setLoading(true);

    const offset = calculateOffset({ page, perPage });
    const { success, message, data: comicsData } = await getComics(offset, perPage);

    setLoading(false);

    if (success && Array.isArray(comicsData)) {
      setData(comicsData);
      return;
    }

    setError(message);
  }, []);

  useEffect(() => {
    fetchData(page, perPage);
  }, [page, perPage, fetchData]);

  const setPage = (newPage: number) => {
    window.scrollTo(0, 0);
    setPageState(newPage);
  };

  return {
    data, loading, error, setPage, page, perPage,
  };
};

export default useFetchComics;
