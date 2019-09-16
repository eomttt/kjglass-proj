import React from 'react';
import Router from 'next/router';

import SideBarItemComponent from '../../components/common/SideBarItem';

const SideBar = ({ sideBarItems }) => {
    return (
        <SideBarItemComponent />
    );
};

SideBar.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
}

export default SideBar;
