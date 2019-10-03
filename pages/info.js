import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';

import Ci from '../components/info/Ci';
import Greeting from '../components/info/Greeting';
import History from '../components/info/History';
import Map from '../components/info/Map';

import { ViewContainer, ViewContent } from '../styles/style';


const Info = ({ id }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: '인사말',
        id: 1,
        clicked: false,
    }, {
        text: '연혁',
        id: 2,
        clicked: false,
    }, {
        text: 'CI',
        id: 3,
        clicked: false,
    }, {
        text: '오시는 길',
        id: 4,
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
            pathname: '/info',
            query: { id: itemId },
        });
    }, [sideBarItems]);

    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
                <ViewContent>
                    <SideBar
                        sideBarTitle={'회사소개'}
                        sideBarItems={sideBarItems}
                        clickSideItem={clickSideItem}
                    />
                    {(!id || id === '1') && <Greeting />}
                    {id === '2' && <History />}
                    {id === '3' && <Ci />}
                    {id === '4' && <Map />}
                </ViewContent>
            </ViewContainer>
            <Footer />
        </>
    );
};

Info.getInitialProps = async (context) => ({
    id: context.query.id,
});

Info.propTypes = {
    id: PropTypes.string,
};

Info.defaultProps = {
    id: null,
};

export default Info;
