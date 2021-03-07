import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Product from '../../containers/main/Product';
import { lightGrayColor } from '../../styles/style';
import { ArrowNext } from '../common/ArrowNext';
import { ArrowPrevious } from '../common/ArrowPrevious';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${lightGrayColor};
  overflow: hidden;
  flex-direction: row;
  position: relative;
`;

const Content = styled.div`
  white-space: nowrap;
  overflow: hidden;
  margin: 10px 30px;
  height: 310px;
  display: flex;
  align-items: center;
`;

const ProductWrapper = styled.div`
  margin: 0 10px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.next ? undefined : 0)};
  right: ${(props) => (props.next ? 0 : undefined)};
`;

const ProductList = ({ products }) => (
  <Container>
    <Arrow next={false}>
      <ArrowPrevious />
    </Arrow>
    <Arrow next>
      <ArrowNext />
    </Arrow>
    <Content>
      {
        products.map((product) => (
          <ProductWrapper>
            <Product key={product.id} product={product} />
          </ProductWrapper>
        ))
      }
    </Content>
  </Container>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
