import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  width: 100%;
  min-height: ${({ theme }) => theme.sizes.header};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: 3;
`;

const Logo = styled.img`
  height: 6rem;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <Logo alt="Logo" src={logo} onClick={handleLogoClick} />
    </HeaderWrapper>
  );
};

export default Header;
