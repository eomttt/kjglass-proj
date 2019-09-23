import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBarItemComponent from './SideBarItem';

import { isMobile, sideBarWidth } from '../../styles/style';

const Container = styled.div`
    position: absolute;
    left: 0;
    width: ${sideBarWidth};
    height: 100%;
    background-color: red;
    ${isMobile} {
        display: none;
    }
`;

const SideBar = ({ sideBarItems }) => (
    <Container>
        {
            sideBarItems.map((sideBarItem) => <SideBarItemComponent sideBarItem={sideBarItem} />)
        }
    </Container>
);

SideBar.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
};

export default SideBar;
