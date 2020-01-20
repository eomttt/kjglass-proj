import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';
import GlassItems from '../containers/shop/GlassItems';
import ExpendablesItems from '../containers/shop/ExpendablesItems';
import DownloadCatalog from '../containers/shop/DownloadCatalog';

import { ViewContainer, ViewContent } from '../styles/style';

const Shop = ({ id, classifiedId, productId }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: '광진이화학 제품군',
        id: 1,
        clicked: false,
    }, {
        text: '기타 제품군',
        id: 2,
        clicked: false,
    }, {
        text: '카타로그 다운로드',
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
            pathname: '/shop',
            query: { id: itemId },
        });
    }, [sideBarItems]);

    return (
        <>
            <NavBar
                sideMenuItems={sideBarItems}
                clickSideItem={clickSideItem}
            />
            <ViewContainer>
                <Header />
                <ViewContent>
                    <SideBar
                        sideBarTitle={'제품검색'}
                        sideBarItems={sideBarItems}
                        clickSideItem={clickSideItem}
                    />
                    {(!id || id === '1') && <GlassItems classifiedId={classifiedId} productId={productId} />}
                    {id === '2' && <ExpendablesItems classifiedId={classifiedId} productId={productId} />}
                    {id === '3' && <DownloadCatalog productId={productId} />}
                    {/* {id === '4' && <Safety productId={productId} />} */}
                </ViewContent>
            </ViewContainer>
            <Footer />
        </>
    );
};

Shop.getInitialProps = async (context) => ({
    id: context.query.id,
    classifiedId: decodeURI(context.query.classifiedId),
    productId: context.query.productId,
});

Shop.propTypes = {
    id: PropTypes.string,
    classifiedId: PropTypes.string,
    productId: PropTypes.string,
};

Shop.defaultProps = {
    id: null,
    classifiedId: null,
    productId: null,
};

export default Shop;
