import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';
import RefactorPlan from '../containers/products/RefactorPlan';
import ExperimentEquipment from '../containers/products/ExperimentEquipment';
// import PumpStirrer from '../containers/products/PumpStirrer';
// import Safety from '../containers/products/Safety';

import { ViewContainer, ViewContent } from '../styles/style';


const Products = ({ id, productId }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: 'Refactor Plan',
        id: 1,
        clicked: false,
    }, {
        text: '실험기자재',
        id: 2,
        clicked: false,
    },
    // {
    //     text: 'Pump & Stirrer',
    //     id: 3,
    //     clicked: false,
    // }, {
    //     text: 'Safety',
    //     id: 4,
    //     clicked: false,
    // }
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
            pathname: '/products',
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
                        sideBarTitle={'주요제품'}
                        sideBarItems={sideBarItems}
                        clickSideItem={clickSideItem}
                    />
                    {(!id || id === '1') && <RefactorPlan productId={productId} />}
                    {id === '2' && <ExperimentEquipment productId={productId} />}
                    {/* {id === '3' && <PumpStirrer productId={productId} />} */}
                    {/* {id === '4' && <Safety productId={productId} />} */}
                </ViewContent>
            </ViewContainer>
            <Footer />
        </>
    );
};

Products.getInitialProps = async (context) => ({
    id: context.query.id,
    productId: context.query.productId,
});

Products.propTypes = {
    id: PropTypes.string,
    productId: PropTypes.string,
};

Products.defaultProps = {
    id: null,
    productId: null,
};

export default Products;
