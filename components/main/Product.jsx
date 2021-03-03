import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    display: inline-block;
    width: 170px;
    cursor: pointer;
    & img {
        width: 100%;
    }
`;

const Product = ({ product, clickProduct }) => (
    <Container onClick={clickProduct}>
        <img src={product.image} alt={'Product'} />
    </Container>
);

Product.propTypes = {
    product: PropTypes.object.isRequired,
    clickProduct: PropTypes.func.isRequired,
};

export default Product;
