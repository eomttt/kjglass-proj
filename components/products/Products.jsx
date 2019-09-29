import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
`;

const Image = styled.div`
    width: 100px;
    & img {
        width: 100%;
    }
`

const Products = ({ products, onClickProduct }) => (
    <>
        {
            products.map((product) => (
                <Container onClick={() => onClickProduct(product.id)} key={product.id}>
                    <div>
                        {product.title}
                    </div>
                    <Image>
                        <img src={product.images[0]} alt="product" />
                    </Image>
                </Container>
            ))
        }
    </>
);

Products.propTypes = {
    products: PropTypes.array.isRequired,
    onClickProduct: PropTypes.func.isRequired,
};

export default Products;
