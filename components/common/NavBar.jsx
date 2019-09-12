import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import common, { pointColor } from '../../styles/style';

import Logo from '../../lib/images/logo.png';

const Container = styled.div`
    ${common}
    width: 100%;
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    text-align: center;
    border-bottom: 1px solid ${pointColor};
`;

const ImageContainer = styled.div`
    width: 15%;
    cursor: pointer;
`;

const Image = styled.img`
    height: 100%;
    margin-left: 20px;
`;

const Menu = styled.div`
    width: 85%;
    display: flex;
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
