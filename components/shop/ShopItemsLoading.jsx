import React from 'react';
import styled from 'styled-components';

import Loading from '~/components/common/Loading';

const Container = styled.div`
    margin: 10px;
    width: 100%;
    display: flex;
    position: relative;
`;

const ShopItemsLoading = () => (
    <Container>
        <Loading text={'상품을 가져오는 중입니다...'} />
    </Container>
);

export default ShopItemsLoading;
