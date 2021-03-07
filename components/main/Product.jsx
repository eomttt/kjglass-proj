import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  & img {
      width: ${(props) => props.width}px;
  }
`;

const Product = ({ width, product, clickProduct }) => (
  <Container width={width} onClick={clickProduct}>
    <div>{product.id}</div>
    <img src={product.image} alt={'Product'} />
  </Container>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
  clickProduct: PropTypes.func.isRequired,
};

export default Product;
