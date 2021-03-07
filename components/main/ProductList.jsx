import PropTypes from 'prop-types';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import styled from 'styled-components';
import Product, { ITEM_WIDTH } from '../../containers/main/Product';
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
  transform: translateX(-${(props) => props.indent}px);
  transition: transform 0.5s ease;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.next ? undefined : 0)};
  right: ${(props) => (props.next ? 0 : undefined)};
`;

const ProductList = ({ products }) => {
  const contentRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const maxProductCount = useMemo(() => products.length - 1, [products.length]);
  const maxScrollIndex = useMemo(
    () => Math.floor(maxProductCount / itemCount), [maxProductCount, itemCount]
  );

  const isShowPrevious = useMemo(() => scrollIndex > 0, [scrollIndex]);
  const isShowNext = useMemo(() => scrollIndex < maxScrollIndex, [scrollIndex, maxScrollIndex]);

  const snapIndent = useMemo(() => ITEM_WIDTH + 20, []);

  const clickPrevious = useCallback(() => {
    setScrollIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  }, []);

  const clickNext = useCallback(() => {
    setScrollIndex((prev) => (prev + 1 > maxScrollIndex ? maxScrollIndex : prev + 1));
  }, [maxScrollIndex]);

  const updateItemCount = useCallback(() => {
    if (contentRef?.current) {
      setItemCount(Math.floor(contentRef.current.offsetWidth / snapIndent));
    }
  }, [contentRef?.current, snapIndent]);

  useEffect(() => {
    window.addEventListener('resize', updateItemCount);

    return () => {
      window.removeEventListener('resize', updateItemCount);
    };
  }, []);

  useEffect(() => {
    updateItemCount();
  }, []);

  return (
    <Container>
      {isShowPrevious && (
        <Arrow next={false} onClick={clickPrevious}>
          <ArrowPrevious />
        </Arrow>
      )}
      {isShowNext && (
        <Arrow next onClick={clickNext}>
          <ArrowNext />
        </Arrow>
      )}
      <Content ref={contentRef}>
        {
          products.map((product) => (
            <ProductWrapper key={product.id} indent={(snapIndent * itemCount) * scrollIndex}>
              <Product product={product} />
            </ProductWrapper>
          ))
        }
      </Content>
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
