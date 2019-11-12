import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';
import EquipmentComp from '../components/equipment/equipment';

import NavBar from '../containers/common/NavBar';
import GlassInfo from '../containers/equipment/glassInfo';
import GlassProcessing from '../containers/equipment/glassProcessings';

import { ViewContainer, ViewContent } from '../styles/style';

const Equipment = ({ id, productId }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: '초자기구 세척법',
        id: 1,
        clicked: false,
    }, {
        text: 'Glass 정보',
        id: 2,
        clicked: false,
    }, {
        text: 'Glass 가공작업',
        id: 3,
        clicked: false,
    },
    ]);

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
            pathname: '/equipment',
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
                        sideBarTitle={'기자재정보'}
                        sideBarItems={sideBarItems}
                        clickSideItem={clickSideItem}
                    />
                    {(!id || id === '1') && <EquipmentComp productId={productId} />}
                    {id === '2' && <GlassInfo productId={productId} />}
                    {id === '3' && <GlassProcessing productId={productId} />}
                </ViewContent>
            </ViewContainer>
            <Footer />
        </>
    );
};

Equipment.getInitialProps = async (context) => ({
    id: context.query.id,
    productId: context.query.productId,
});

Equipment.propTypes = {
    id: PropTypes.string,
    productId: PropTypes.string,
};

Equipment.defaultProps = {
    id: null,
    productId: null,
};

export default Equipment;
