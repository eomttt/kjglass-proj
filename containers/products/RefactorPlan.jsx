import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

// Presentation
import Products from '../../components/products/Products';

// Container
import ProductDetail from './ProductDetail';

import refactorPlanDummy from '../../dummy/refactorPlan';

const RefactorPlan = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState(refactorPlanDummy);

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
            query: { id: '1', productId: selectedProductArr[0].id },
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

RefactorPlan.propTypes = {
    productId: PropTypes.string,
};

RefactorPlan.defaultProps = {
    productId: null,
};

export default RefactorPlan;
