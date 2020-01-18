import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
    text-align: left;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 50px;
`;

const Content = styled.div`
    cursor: pointer;
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    text-decoration: underline;
    &:hover {
        color: ${subPointColor};
    }
`;

const ShopItemsByClassified = ({ products, clickClassify }) => (
    <Container>
        <Title>
            {'분류를 선택해 주세요.'}
        </Title>
        {
            Object.keys(products).map((classify) => (
                <Content key={classify} onClick={() => clickClassify(classify)}>
                    {classify}
                </Content>
            ))
        }
    </Container>
);

ShopItemsByClassified.propTypes = {
    products: PropTypes.object.isRequired,
    clickClassify: PropTypes.func.isRequired,
};

export default ShopItemsByClassified;
