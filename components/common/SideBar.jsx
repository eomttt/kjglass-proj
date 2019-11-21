import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBarItemComponent from './SideBarItem';

import { isMobile, sideBarWidth, subPointColor, footerHeight } from '../../styles/style';

const Container = styled.div`
    position: absolute;
    left: 0;
    width: ${sideBarWidth};
    height: 100%;
    ${isMobile} {
        position: fixed;
        top: 0;
        width: 100%;
        height: ${footerHeight};
        background-color: black;
    }
`;

const Item = styled.div`
    cursor: pointer;
    ${isMobile} {
        display: none;
    }
`;

const Title = styled.div`
    font-size: 30px;
    text-align: center;
    color: ${subPointColor};
    margin-top: 20px;
    margin-bottom: 20px;
    ${isMobile} {
        display: none;;
    }
`;

const SideBar = ({ sideBarItems, sideBarTitle, clickSideItem }) => (
    <Container>
        <Title>
            {sideBarTitle}
        </Title>
        {
            sideBarItems && sideBarItems.map((sideBarItem) => (
                <Item onClick={() => clickSideItem(sideBarItem.id)} key={sideBarItem.id}>
                    <SideBarItemComponent item={sideBarItem} />
                </Item>
            ))
        }
    </Container>
);

SideBar.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
    sideBarTitle: PropTypes.string.isRequired,
    clickSideItem: PropTypes.func.isRequired,
};

export default SideBar;
