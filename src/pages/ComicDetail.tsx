import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import SkeletonDetail from '../components/ui/SkeletonDetail.tsx';
import useFetchComicDetail from '../hooks/useFetchComicDetail.tsx';

const ImageSkeleton = styled(SkeletonDetail)`
  width: 30%;
  height: 50rem;
  margin-bottom: 1em;
`;

const TextSkeleton = styled(SkeletonDetail)`
  width: 70%;
  height: 1em;
  margin-bottom: 0.5em;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
`;

const ComicImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-bottom: 1em;
`;

const ComicTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
  margin-bottom: 1em;
`;

const ComicDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray80};
  text-align: justify;
  line-height: 1.6;
`;

const GoBackButton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.3em;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.lg}; 
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const ComicDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: comic, loading, error } = useFetchComicDetail({ id: Number(id) });

  if (loading) {
    return (
      <DetailContainer>
        <ImageSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </DetailContainer>
    );
  }

  if (error) {
    return (
      <div>
        Something went wrong:
        {error}
      </div>
    );
  }

  if (!comic) return null;

  return (
    <>
      <GoBackButton onClick={() => navigate('/')}>Go Back</GoBackButton>
      <DetailContainer>
        <ComicImage alt={comic.title} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
        <ComicTitle>{comic.title}</ComicTitle>
        <ComicDescription>{comic.description}</ComicDescription>
      </DetailContainer>
    </>
  );
};

export default ComicDetail;
