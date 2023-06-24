import styled from 'styled-components';

const SkeletonCard = styled.div`
  border-radius: 0.5em;
  max-width: 30rem;
  height: 37.5rem;
  animation: pulse 1.5s infinite ease-in-out;
  
  @keyframes pulse {
    0% { background: ${({ theme }) => theme.colors.gray40}; }
    50% { background: ${({ theme }) => theme.colors.gray60}; }
    100% { background: ${({ theme }) => theme.colors.gray40}; }
  }
`;

export default SkeletonCard;
