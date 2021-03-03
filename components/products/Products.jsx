import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Content = styled.div`
    width: 250px;
    display: inline-block;
    margin: 30px 15px;
    vertical-align: top;
    cursor: pointer;
`;

const Title = styled.div`
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Image = styled.div`
    width: 100%;
    & img {
        width: 100%;
    }
`;

const Products = ({ products, onClickProduct }) => (
    <Container>
        {
            products.map((product) => (
                <Content onClick={() => onClickProduct(product.id)} key={product.id}>
                    <Title>
                        {product.title}
                    </Title>
                    <Image>
                        <img src={product.images[0]} alt="product" />
                    </Image>
                </Content>
            ))
        }
    </Container>
);

Products.propTypes = {
    products: PropTypes.array.isRequired,
    onClickProduct: PropTypes.func.isRequired,
};

export default Products;
