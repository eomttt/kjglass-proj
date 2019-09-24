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

const Item = styled.div`
    cursor: pointer;
`;

const SideBar = ({ sideBarItems, sideBarTitle, clickSideItem }) => (
    <Container>
        <div>
            {sideBarTitle}
        </div>
        {
            sideBarItems && sideBarItems.map((sideBarItem) => (
                <Item onClick={() => clickSideItem(sideBarItem.id)}>
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
