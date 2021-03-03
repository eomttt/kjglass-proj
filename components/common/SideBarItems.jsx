import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SideBarItem from './SideBarItem';

const Item = styled.div`
    cursor: pointer;
`;

const SideBarItems = ({ sideBarItems, clickSideItem }) => (
    <>
        {
            sideBarItems && sideBarItems.map((sideBarItem) => (
                <Item onClick={() => clickSideItem(sideBarItem.id)} key={sideBarItem.id}>
                    <SideBarItem item={sideBarItem} />
                </Item>
            ))
        }
    </>
);

SideBarItems.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
    clickSideItem: PropTypes.func.isRequired,
};

export default SideBarItems;
