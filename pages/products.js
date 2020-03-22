import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayout';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';

import NavBar from '../containers/common/NavBar';
import RefactorPlan from '../containers/products/RefactorPlan';
import ExperimentEquipment from '../containers/products/ExperimentEquipment';
// import PumpStirrer from '../containers/products/PumpStirrer';
// import Safety from '../containers/products/Safety';

import { ViewContainer, ViewContent } from '../styles/style';

import refactorPlanDummy from '../data/refactorPlan';
import experimentDummy from '../data/experimentEquipment';

const Products = ({ id, productId, selectedProductMeta }) => {
    const [sideBarItems, setSideBarItems] = useState([{
        text: 'Reactor Plan',
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
        const sideBarIds = Object.values(sideBarItems).map((sideBarItem) => sideBarItem.id);

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
        <AppLayout
            metaInfo={selectedProductMeta}
        >
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
        </AppLayout>
    );
};

Products.getInitialProps = async (context) => {
    const { id, productId } = context.query;

    let products = [];
    let selectedProductMeta = {
        title: null,
        description: null,
        image: null,
    };

    if (productId) {
        if (!id || id === '1') {
            products = [...refactorPlanDummy];
        } else {
            products = [...experimentDummy];
        }

        // eslint-disable-next-line prefer-destructuring
        const selectedProduct = Object.values(products).filter((product) => product.id === id)[0];

        selectedProductMeta = {
            title: selectedProduct.title,
            description: selectedProduct.content,
            image: selectedProduct.images[0],
        };

        console.log('AAAA', selectedProductMeta);
    }

    return {
        id,
        productId,
        selectedProductMeta,
    };
};

Products.propTypes = {
    id: PropTypes.string,
    productId: PropTypes.string,
};

Products.defaultProps = {
    id: null,
    productId: null,
};

export default Products;
