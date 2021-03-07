import React from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import ProductComponent from '../../components/main/Product';

export const ITEM_WIDTH = 170;

const Product = ({ product }) => {
  const onClickProduct = () => {
    Router.push({
      pathname: '/shop',
    });
  };

  return (
    <ProductComponent width={ITEM_WIDTH} product={product} clickProduct={onClickProduct} />
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
