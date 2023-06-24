import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

import CardsGrid from '../components/ui/CardsGrid.tsx';
import useFetchComics from '../hooks/useFetchComics.tsx';
import calculateOffset from '../utils/pagination.ts';

const Home = () => {
  const {
    data, error, loading, setPage, page, perPage,
  } = useFetchComics();

  const onPageChange = (event: PaginatorPageChangeEvent): void => setPage(event.page + 1);

  const first = calculateOffset({ page, perPage });

  return (
    <>
      <CardsGrid data={data} error={error} loading={loading} />
      <Paginator
        first={first}
        rows={perPage}
        totalRecords={120}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Home;
