import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayout';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';
import Notices from '../containers/customercenter/Notices';
import Contact from '../containers/customercenter/Contact';
import Baskets from '../containers/customercenter/Baskets';

import { ViewContainer, ViewContent } from '../styles/style';

const CustomerCenter = ({ id, noticeId }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: '공지사항',
        id: 1,
        clicked: false,
    }, {
        text: '견적문의',
        id: 2,
        clicked: false,
    }, {
        text: '장바구니',
        id: 3,
        clicked: false,
    }]);

    const setSelectedItem = useCallback((sideId) => {
        const sideBarIds = Object.values(sideBarItems).map((sideBarItem) => {
            return sideBarItem.id;
        });

        const isSupportSideId = sideBarIds.includes(+sideId);
        const itemId = isSupportSideId ? +sideId : 1;

        const newItmes = sideBarItems.reduce((acc, cur) => {
            acc.push({ ...cur, clicked: cur.id === itemId });
            return acc;
        }, []);

        setSideBarItems(newItmes);
    }, [sideBarItems]);

    useEffect(() => {
        setSelectedItem(id);
    }, []);

    const clickSideItem = useCallback((itemId) => {
        setSelectedItem(itemId);
        Router.push({
            pathname: '/customercenter',
            query: { id: itemId },
        });
    }, [sideBarItems]);

    return (
        <AppLayout>
            <NavBar
                sideMenuItems={sideBarItems}
                clickSideItem={clickSideItem}
            />
            <ViewContainer>
                <Header />
                <ViewContent>
                    <SideBar
                        sideBarTitle={'고객센터'}
                        sideBarItems={sideBarItems}
                        clickSideItem={clickSideItem}
                    />
                    {(!id || id === '1') && <Notices noticeId={noticeId} />}
                    {id === '2' && <Contact />}
                    {id === '3' && <Baskets />}
                </ViewContent>
            </ViewContainer>
            <Footer />
        </AppLayout>
    );
};

CustomerCenter.getInitialProps = async (context) => ({
    id: context.query.id,
    noticeId: context.query.noticeId,
});

CustomerCenter.propTypes = {
    id: PropTypes.string,
    noticeId: PropTypes.string,
};

CustomerCenter.defaultProps = {
    id: null,
    noticeId: null,
};

export default CustomerCenter;
