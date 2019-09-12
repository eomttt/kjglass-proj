import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 15px;
    display: inline-block;
    width: 170px;
    cursor: pointer;
    & img {
        width: 100%;
    }
`;

const Product = ({ product, clickProduct }) => {
    return (
        <Container onClick={clickProduct}>
            <img src={product.image} alt={'Product'} />
        </Container>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    clickProduct: PropTypes.func.isRequired,
};

export default Product;
