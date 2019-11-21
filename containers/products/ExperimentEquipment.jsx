import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

// Presentation
import Products from '../../components/products/Products';

// Container
import ProductDetail from './ProductDetail';

import experimentDummy from '../../dummy/experimentEquipment';

const ExperimentEquip = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState(experimentDummy);

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
            query: { id: '2', productId: selectedProductArr[0].id },
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

ExperimentEquip.propTypes = {
    productId: PropTypes.string,
};

ExperimentEquip.defaultProps = {
    productId: null,
};

export default ExperimentEquip; 
