import PropTypes from 'prop-types';
import React from 'react';
import ProductComponent from '../../components/main/Product';
import { Modal } from '../../utils/Modal';

export const ITEM_WIDTH = 170;

const Product = ({ product }) => {
  const onClickProduct = () => {
    Modal.emitEvent(product);
  };

  return (
    <ProductComponent width={ITEM_WIDTH} product={product} clickProduct={onClickProduct} />
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
