import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import Card from './Card.tsx';
import Skeleton from './SkeletonCard.tsx';

import type { Comic } from '../../types/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 2em;
  margin: 2em;
`;

type CardsGridProps = {
  data: Comic[] | null
  loading: boolean;
  error: string | null;
}

const CardsGrid = ({ data, loading, error }: CardsGridProps) => (
  <Container>
    {loading && Array.from({ length: 12 }).map(() => <Skeleton key={uuid()} />)}
    {error && `Something went wrong: ${error}`}
    {data?.map((comic) => <Card comic={comic} key={comic.id} />)}
  </Container>
);

export default CardsGrid;
