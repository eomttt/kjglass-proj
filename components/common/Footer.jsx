import React from 'react';

import styled from 'styled-components';

import NavBarItems from '../../containers/common/NavBarItems';
import Logo from '../../lib/images/logo.png';
import {
  isMobile,
  mobileNavBar,
  pointColor,
} from '../../styles/style';

const Container = styled.div`
    width: 100%;
    position: fixed;
    background-color: white;
    bottom: 0;
    border-top: 1px solid ${pointColor};
    display: flex;
    text-align: center;
    z-index: 5;
`;

const Content = styled.div`
    padding: 10px;
    text-align: initial;
    width: 100%;
    & div {
        font-size: 10px;
    }

    ${isMobile} {
        display: none;
    }
`;

const ImageContainer = styled.div`
    cursor: pointer;
    display: flex;
    width: 15%;
    ${isMobile} {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 100px;
    margin: auto;
`;

const Menu = styled.div`
    display: none;
    ${isMobile} {
        display: flex;
        height: ${mobileNavBar};
        flex-direction: row;
        width: 100%;
    }
`;

const Footer = () => (
  <Container>
    <ImageContainer>
      <Image src={Logo} />
    </ImageContainer>
    <Content>
      <div>
        {'사업자 등록번호 : 128-19-94958 | 광진이화학 | 대표이사 : 엄준회'}
      </div>
      <div>
        {'서울특별시 강북구 미아동 319-50 2층 | 강북구 솔샘로65길 93 2층 | Tel. 02 - 903 - 8582 / 070-7500-8100,1 | Fax. 02 - 995 - 0359 | E-mail : glassjun22@naver.com, 733@hanmail.net'}
      </div>
      <div>
        {'COPYRIGHT @ 2017 Kwangjin Scientific Galss Ware Instruments , All rights reserved'}
      </div>
    </Content>
    <Menu>
      <NavBarItems />
    </Menu>
  </Container>
);

export default Footer;
