import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  & img {
      width: ${(props) => props.width}px;
  }
`;

const ProductId = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: red;
  text-shadow: 1px 1px 10px white;
`;

const Product = ({ width, product, clickProduct }) => (
  <Container width={width} onClick={clickProduct}>
    <ProductId>{product.id}</ProductId>
    <img src={product.image} alt={'Product'} />
  </Container>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
  clickProduct: PropTypes.func.isRequired,
};

export default Product;
