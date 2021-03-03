import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import NavBarComponent from '../../components/common/NavBar';
import SideBarItems from '../../components/common/SideBarItems';
import PopupMenu from '../../components/common/PopupMenu';

import NavBarItems from './NavBarItems';

const NavBar = ({ sideMenuItems, clickSideItem }) => {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

    const [scrollTop, setScrollTop] = useState(0);

    const fixBodyStyle = useCallback(() => {
        const { pageYOffset } = window;
        const { body } = document;

        body.style.position = 'fixed';
        body.style.overflow = 'hidden';
        body.style.left = '0';
        body.style.right = '0';
        body.style.top = `-${pageYOffset}px`;

        setScrollTop(pageYOffset);
    // tslint:disable-next-line: align
    }, []);

    const releaseBodyStyle = useCallback(() => {
        const { body } = document;

        body.style.position = '';
        body.style.overflow = '';
        body.style.left = '';
        body.style.right = '';
        body.style.top = '';

        window.scrollTo(0, scrollTop);
    // tslint:disable-next-line: align
    }, [scrollTop]);

    const moveMainPage = useCallback(() => {
        Router.push({
            pathname: '/',
        });
    }, []);

    const openSideMenu = useCallback(() => {
        setIsOpenSideMenu(true);
        fixBodyStyle();
    }, [fixBodyStyle]);

    const closeSideMenu = useCallback(() => {
        setIsOpenSideMenu(false);
        releaseBodyStyle();
    }, [releaseBodyStyle]);

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
