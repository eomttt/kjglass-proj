import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavBarItems from '../../containers/common/NavBarItems';

import common, {
    pointColor, navBarHeight, mobileNavBar, isMobile,
} from '../../styles/style';

import Logo from '../../lib/images/logo.png';
import MenuImage from '../../lib/images/menu.png';

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
    z-index: 5;

    ${isMobile} {
        height: ${mobileNavBar};
    }
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
`;

const ImageContainer = styled.div`
    width: 15%;
    cursor: pointer;
    display: flex;

    ${isMobile} {
        width: 100%;
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
        display: none;
    }
`;

const MenuIcon = styled.div`
    display: none;

    ${isMobile} {
        display: block;
        position: absolute;
        width: 20%;
        height: 100%;

        & div {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
        }
    
        & img {
            width: 20px;
            margin: auto 10px;
        }
    }
`;

const NavBar = ({ moveMainPage, openSideMenu }) => (
    <Container>
        <Content>
            <MenuIcon
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openSideMenu();
                }}
            >
                <div>
                    <img src={MenuImage} alt={'Menu'} />
                </div>
            </MenuIcon>
            <ImageContainer onClick={moveMainPage}>
                <Image src={Logo} />
            </ImageContainer>
            <Menu>
                <NavBarItems />
            </Menu>
        </Content>
    </Container>
);

NavBar.propTypes = {
    moveMainPage: PropTypes.func.isRequired,
    openSideMenu: PropTypes.func.isRequired,
};

export default NavBar;
