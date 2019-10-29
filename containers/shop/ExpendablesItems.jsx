import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItems from '../../components/shop/ShopItmes';
import ShopItemDetail from '../../components/shop/ShopItemDetail';

import dummyItems from '../../dummy/expendablesItem';

const ExpendablesItems = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState(dummyItems);

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
            query: { id: '2', productId: selectedProductArr[0].id },
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
                selectedProduct
                    ? <ShopItemDetail {...selectedProduct} />
                    : <ShopItems products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

ExpendablesItems.propTypes = {
    productId: PropTypes.string,
};

ExpendablesItems.defaultProps = {
    productId: null,
};

export default ExpendablesItems;
