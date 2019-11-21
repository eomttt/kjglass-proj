import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import Products from '../../components/products/Products';
import ProductDetail from '../../components/products/ProductDetail';

import safetyDummy from '../../dummy/safety';

const Safety = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState(safetyDummy);

    const getSelectedProduct = useCallback((id) => {
        return Object.values(products).filter((product) => {
            return product.id === id;
        });
    }, [products]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/products',
            query: { id: '4', productId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (productId) {
            const selectedProductArr = getSelectedProduct(productId);
            setSelectedProduct(selectedProductArr[0]);
        }
    }, []);

    return (
        <>
            {
                (productId && selectedProduct)
                    ? <ProductDetail product={selectedProduct} />
                    : <Products products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

Safety.propTypes = {
    productId: PropTypes.string,
};

Safety.defaultProps = {
    productId: null,
};

export default Safety; 
