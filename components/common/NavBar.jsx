import React, { useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';


import common from '../../styles/style';

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
    border-bottom: 1px solid red;
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


const NavBar = () => {
    const moveMainPage = useCallback(() => {
        Router.push({
            pathname: '/',
        });
    }, []);

    const openInfo = useCallback(() => {

    }, []);

    const openProduct = useCallback(() => {

    }, []);

    const openProductSearch = useCallback(() => {

    }, []);

    const openProductInfo = useCallback(() => {

    }, []);

    const openCustomerCenter = useCallback(() => {

    }, []);


    return (
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
};

export default NavBar;
