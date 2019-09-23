import React from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import SideBarComponent from '../../components/common/SideBar';

const SideBar = ({ sideBarItems }) => (
    <>
        <SideBarComponent sideBarItems={sideBarItems} />
    </>
);

SideBar.propTypes = {
    sideBarItems: PropTypes.array.isRequired,
};

export default SideBar;
