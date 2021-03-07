import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from '../../styles/style';
import { Modal } from '../../utils/Modal';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
`;

const Content = styled.div`
  position: relative;
`;

const ContentImage = styled.img`
  transition-property: transform opacity;
  transition-duration: 0.5s;
  opacity: ${(props) => (props.rendered ? 1 : 0)};
  transform: ${(props) => (props.rendered ? 'translateY(0)' : 'translateY(20%)')};
  width: ${(props) => props.width / 3}px;
  ${isMobile} {
    width: ${(props) => props.width}px;
  }
`;

const ProductId = styled.div`
  position: absolute;
  z-index: 20;
  top: 5px;
  right: 5px;
  color: red;
  text-shadow: 1px 1px 10px white;
`;

export const ProductDetail = ({ product }) => {
  const [rendered, setRendered] = useState(false);
  const handleClickClose = useCallback(() => {
    Modal.emitEvent();
  }, []);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <Container onClick={handleClickClose}>
      <Wrapper>
        <Close onClick={handleClickClose} src="https://user-images.githubusercontent.com/22593217/110236681-8b048900-7f7a-11eb-81ef-249448143231.png" alt="close" />
        <Content>
          <ProductId>{product.id}</ProductId>
          <ContentImage src={product.image} alt={'Product'} width={window.innerWidth} rendered={rendered} />
        </Content>
      </Wrapper>
    </Container>
  );
};
