import type { PaginationParams } from '../types/types';

export const calculateOffset = ({ page, perPage }: PaginationParams): number => (page - 1) * perPage;

export default calculateOffset;
