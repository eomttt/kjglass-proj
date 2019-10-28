import React, { useState, useCallback, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import Router from 'next/router';
import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItems from '../../components/shop/ShopItmes';

import ShopItemDetail from './ShopItemDetail';

const GlassItems = observer(({ productId }) => {
    const { glass } = useStore();

    const [selectedProduct, setSelectedProduct] = useState(null);

    const getSelectedProduct = useCallback((id) => Object.values(toJS(glass.glassItems)).filter((product) => product.id === id), [toJS(glass.glassItems)]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/shop',
            query: { id: '1', productId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (productId) {
            const selectedProductArr = getSelectedProduct(productId);
            setSelectedProduct(selectedProductArr[0]);
        }
    }, [productId]);

    return (
        <>
            {
                productId
                    ? <ShopItemDetail product={selectedProduct} />
                    : <ShopItems products={toJS(glass.glassItems)} onClickProduct={clickProduct} />
            }
        </>
    );
});

GlassItems.propTypes = {
    productId: PropTypes.string,
};

GlassItems.defaultProps = {
    productId: null,
};

export default GlassItems;
