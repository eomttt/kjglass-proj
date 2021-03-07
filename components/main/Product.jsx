import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  & img {
      width: 170px;
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
