import styled from 'styled-components';

const SkeletonDetail = styled.div`
  background: ${({ theme }) => theme.colors.gray40};
  animation: pulse 1s infinite ease-in-out;

  @keyframes pulse {
    0% { background: ${({ theme }) => theme.colors.gray40}; }
    50% { background: ${({ theme }) => theme.colors.gray60}; }
    100% { background: ${({ theme }) => theme.colors.gray40}; }
  }
`;

export default SkeletonDetail;
