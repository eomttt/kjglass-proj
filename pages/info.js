import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';

import Greeting from '../components/info/Greeting';

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
        const itemId = sideId || +sideId > 4 ? +sideId : 1;
        const newItmes = sideBarItems.reduce((acc, cur) => {
            if (cur.id === itemId) {
                acc.push({ ...cur, clicked: true });
            } else {
                acc.push({ ...cur, clicked: false });
            }
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
                    <Greeting />
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
    id: PropTypes.string.isRequired,
}

export default Info;
