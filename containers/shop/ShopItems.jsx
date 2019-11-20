import React, { useState, useEffect, useCallback } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItemsComp from '../../components/shop/ShopItmes';
import ShopItemDetailComp from '../../components/shop/ShopItemDetail';

const ShopItems = ({ shopId, products, productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getSelectedProduct = useCallback((id) => {
        return Object.values(products).filter((product) => {
            return product.id === id;
        });
    }, [products]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/shop',
            query: { id: shopId, productId: selectedProductArr[0].id },
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
                (productId && selectedProduct)
                    ? <ShopItemDetailComp {...selectedProduct} />
                    : <ShopItemsComp products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

ShopItems.propTypes = {
    shopId: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    productId: PropTypes.string.isRequired,
};

export default ShopItems;
