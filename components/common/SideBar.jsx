import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBarItems from './SideBarItems';

import {
    isMobile, sideBarWidth, subPointColor,
} from '../../styles/style';

const Container = styled.div`
    position: absolute;
    left: 0;
    width: ${sideBarWidth};
    height: 100%;
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
`;

const SideBar = ({ sideBarItems, sideBarTitle, clickSideItem }) => (
    <Container>
        <Title>
            {sideBarTitle}
        </Title>
        <SideBarItems sideBarItems={sideBarItems} clickSideItem={clickSideItem} />
    </Container>
);

SideBar.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
    sideBarTitle: PropTypes.string.isRequired,
    clickSideItem: PropTypes.func.isRequired,
};

export default SideBar;
