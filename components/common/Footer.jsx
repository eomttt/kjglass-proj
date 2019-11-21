import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    pointColor, mobileNavBar, isMobile,
} from '../../styles/style';

import Logo from '../../lib/images/logo.png';

const Container = styled.div`
    width: 100%;
    position: fixed;
    background-color: white;
    bottom: 0;
    border-top: 1px solid ${pointColor};
    display: flex;
    text-align: center;
    z-index: 5;

    ${isMobile} {
        height: ${mobileNavBar};
        bottom: initial;
        top: 0;
        border-bottom: 1px solid ${pointColor};
        border-top: initial;
    }
`;

const Content = styled.div`
    padding: 10px;
    text-align: initial;
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
        width: 100%;
        margin: auto;
        height: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 100px;
    margin: auto;
    ${isMobile} {
        width: auto;
        height: 100%;
        margin: auto;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
`;

const Footer = ({ clickMenu }) => (
    <Container>
        <MenuContainer onClick={clickMenu}>
            {'MENU'}
        </MenuContainer>
        <ImageContainer>
            <Image src={Logo} />
        </ImageContainer>
        <Content>
            <div>
                {'사업자 등록번호 : 128-19-94958 | 광진이화학 | 대표이사 : 엄준회'}
            </div>
            <div>
                {'서울특별시 강북구 미아동 319-50 2층 | Tel. 02 - 903 - 8582 / 070-7500-8100,1 | Fax. 02 - 995 - 0359 | E-mail : glassjun22@naver.com, 733@hanmail.net'}
            </div>
            <div>
                {'COPYRIGHT @ 2017 Kwangjin Scientific Galss Ware Instruments , All rights reserved'}
            </div>
        </Content>
    </Container>
);

Footer.propTypes = {
    clickMenu: PropTypes.func.isRequired,
};

export default Footer;
