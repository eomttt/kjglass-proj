import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import NavBarComponent from '../../components/common/NavBar';
import SideBarItems from '../../components/common/SideBarItems';
import PopupMenu from '../../components/common/PopupMenu';

import NavBarItems from './NavBarItems';

const NavBar = ({ sideMenuItems, clickSideItem }) => {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

    const moveMainPage = useCallback(() => {
        Router.push({
            pathname: '/',
        });
    }, []);

    const openSideMenu = useCallback(() => {
        setIsOpenSideMenu(true);
    }, []);

    const closeSideMenu = useCallback(() => {
        setIsOpenSideMenu(false);
    }, []);

    const onClickSideItem = useCallback((itemId) => {
        closeSideMenu();
        clickSideItem(itemId);
    }, []);

    return (
        <>
            <NavBarComponent moveMainPage={moveMainPage} openSideMenu={openSideMenu}>
                <NavBarItems />
            </NavBarComponent>
            {
                isOpenSideMenu
                && (
                    <PopupMenu closePopup={closeSideMenu}>
                        <SideBarItems
                            sideBarItems={sideMenuItems}
                            clickSideItem={onClickSideItem}
                        />
                    </PopupMenu>
                )
            }
        </>
    );
};

NavBar.propTypes = {
    sideMenuItems: PropTypes.array.isRequired,
    clickSideItem: PropTypes.func.isRequired,
};

export default NavBar;
