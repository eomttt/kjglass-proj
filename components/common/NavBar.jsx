import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import common, {
    pointColor, navBarHeight, footerHeight, isMobile,
} from '../../styles/style';

import Logo from '../../lib/images/logo.png';

const Container = styled.div`
    ${common}
    width: 100%;
    height: ${navBarHeight};
    position: fixed;
    top: 0;
    background-color: white;
    display: flex;
    text-align: center;
    border-bottom: 1px solid ${pointColor};

    ${isMobile} {
        height: ${footerHeight};
        bottom: 0;
        top: initial;
        border-bottom: initial;
        border-top: 1px solid ${pointColor};
    }
`;

const ImageContainer = styled.div`
    width: 15%;
    cursor: pointer;
    display: flex;

    ${isMobile} {
        display: none;
    }
`;

const Image = styled.img`
    height: 100%;
    max-height: 50px;
    margin: auto;
`;

const Menu = styled.div`
    width: 85%;
    display: flex;

    ${isMobile} {
        width: 100%;
    }
`;

const Text = styled.div`
    width: 20%;
    margin: auto;
    text-align: center;
    cursor: pointer;
    $ div {
        display: inline-block;
    }
`;


const NavBar = ({
    moveMainPage, openInfo, openProduct,
    openProductSearch, openProductInfo, openCustomerCenter,
}) => (
    <Container>
        <ImageContainer onClick={moveMainPage}>
            <Image src={Logo} />
        </ImageContainer>
        <Menu>
            <Text onClick={openInfo}><div>{'회사소개'}</div></Text>
            <Text onClick={openProduct}><div>{'주요제품'}</div></Text>
            <Text onClick={openProductSearch}><div>{'제품검색'}</div></Text>
            <Text onClick={openProductInfo}><div>{'기자재정보'}</div></Text>
            <Text onClick={openCustomerCenter}><div>{'고객센터'}</div></Text>
        </Menu>
    </Container>
);

NavBar.propTypes = {
    moveMainPage: PropTypes.func.isRequired,
    openInfo: PropTypes.func.isRequired,
    openProduct: PropTypes.func.isRequired,
    openProductSearch: PropTypes.func.isRequired,
    openProductInfo: PropTypes.func.isRequired,
    openCustomerCenter: PropTypes.func.isRequired,
};

export default NavBar;
