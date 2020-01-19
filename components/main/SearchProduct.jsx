import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    cursor: pointer;
    padding: 10px;
    background-color: #7d8ecb;
`;

const Right = styled.div`
    cursor: pointer;
    padding: 10px;
    background-color: #7dbfcb;
`;

const Title = styled.div`
    color: white;
    font-size: 18px;
    margin-bottom: 15px;
`;

const Content = styled.div`
    color: white;
    margin-bottom: 18px;
`;

const Button = styled.div`
    cursor: pointer;
    font-size: 12px;
    padding: 5px 9px;
    border: 1px solid white;
    color: white;
    float: right;
`;


const ProductSearch = ({ openGlass, openConsumer }) => (
    <Container>
        <Left onClick={openGlass}>
            <Title>
                {'광진이화학 제품군'}
            </Title>
            <Content>
                {'광진이화학의 제품을 검색 할 수 있는 페이지로 이동합니다.'}
            </Content>
            <Button>
                {'더 보기'}
            </Button>
        </Left>
        <Right onClick={openConsumer}>
            <Title>
                {'소모품'}
            </Title>
            <Content>
                {'기타 제품을 검색 할 수 있는 페이지로 이동합니다.'}
            </Content>
            <Button>
                {'더 보기'}
            </Button>
        </Right>
    </Container>
);

ProductSearch.propTypes = {
    openGlass: PropTypes.func.isRequired,
    openConsumer: PropTypes.func.isRequired,
};

export default ProductSearch;
