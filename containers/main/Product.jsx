import React from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import ProductComponent from '../../components/main/Product';

const Product = ({ product }) => {
    const onClickProduct = () => {
        Router.push({
            pathname: '/shop',
        });
    };

    return (
        <ProductComponent product={product} clickProduct={onClickProduct} />
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
