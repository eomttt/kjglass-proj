import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Product from '../../containers/main/Product';

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #8080802b;
    overflow: scroll;
    flex-direction: row;
`;

const Content = styled.div`
    white-space: nowrap;
    overflow: scroll;
    margin: 15px auto;
`;

const ProductList = ({ products }) => (
    <Container>
        <Content>
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </Content>
    </Container>
);

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;
