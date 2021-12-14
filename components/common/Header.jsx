import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../../lib/images/subvisual.png';
import { isMobile } from '../../styles/style';

const Container = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }

  ${isMobile} {
    display: none;
  }
`;

const Header = () => (
  <Container>
    <img src={HeaderImage} alt={'Header'} />
  </Container>
);

export default Header;
