import React from 'react';

import PropTypes from 'prop-types';

import ProductComponent from '../../components/main/Product';

const Product = ({ product }) => {
    const onClickProduct = () => {
        console.log('Click product');
    };

    return (
        <ProductComponent product={product} clickProduct={onClickProduct} />
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
