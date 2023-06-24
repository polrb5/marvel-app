import type { Response } from '../../types/types';

const response = <T>(success: boolean, message: string | null, data: T | T[] | null): Response<T> => ({
  success,
  message: !success && !message ? 'UnexpectedError' : message,
  data,
});

export default response;
