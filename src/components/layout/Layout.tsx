import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header.tsx';

const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
`;

const OutletWrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  padding-top: calc(50px + ${({ theme }) => theme.sizes.header});
  padding-bottom: 20px;
  padding-inline: 30px;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
`;

const Layout = () => (
  <>
    <Header />
    <Main>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Main>
  </>
);

export default Layout;
