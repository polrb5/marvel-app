import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import type { Comic, ComicId } from '../../types/types';

const CardStyled = styled.div`
  border-radius: 0.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  background-color: ${({ theme }) => theme.colors.gray20};
  box-shadow: 0 2em 4em rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${({ theme }) => theme.colors.outline.main};
    box-shadow: 0 2em 5em rgba(0, 0, 0, 0.2);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee; 
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 1em;
`;

const CardButton = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.3em;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg}; 
  cursor: pointer;
  margin-top: 1em;
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Card = ({ comic }: { comic: Comic }) => {
  const {
    description, id, title, thumbnail: { path, extension },
  } = comic;

  const navigate = useNavigate();
  const [isImageLoaded, setImageLoaded] = useState(false);

  const navigateToDetail = ({ id }: ComicId): void => navigate(`/comic/${id}`);

  const handleImageLoad = (): void => setImageLoaded(true);

  return (
    <CardStyled>
      <CardImageWrapper>
        {!isImageLoaded && <div className="image-placeholder" />}
        <img alt={description || title} src={`${path}.${extension}`} onLoad={handleImageLoad} />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardButton onClick={() => navigateToDetail({ id })}>See more</CardButton>
      </CardContent>
    </CardStyled>
  );
};

export default Card;
