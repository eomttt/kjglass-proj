import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    width: 100%;
    display: flex;
    & div {
        font-size: 20px;
        margin: 25% auto auto auto;
    }
`;

const ShopItemsLoading = () => (
    <Container>
        <div>
            {'상품을 가져오는 중 입니다...'}
        </div>
    </Container>
);

export default ShopItemsLoading;
