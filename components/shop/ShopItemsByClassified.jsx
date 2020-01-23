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
    margin-bottom: 10px;
    color: ${subPointColor}
`;

const SubTitle = styled.div`
    width: 100%;
    text-align: left;
    font-size: 15px;
    margin-left: 10px;
    margin-bottom: 50px;
    color: ${subPointColor};
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

const ShopItemsByClassified = ({ shopId, products, clickClassify }) => (
    <Container>
        <Title>
            {shopId === '1' ? '광진이화학 제품군' : '기타 제품군' }
        </Title>
        <SubTitle>
            {'분류를 선택해 주세요.'}
        </SubTitle>
        {
            Object.keys(products).sort((a, b) => {
                const lowA = a.toLowerCase();
                const lowB = b.toLowerCase();
                if (lowA === lowB) return 0;
                return lowA < lowB ? -1 : 1;
            }).map((classify) => (
                <Content key={classify} onClick={() => clickClassify(classify)}>
                    {classify}
                </Content>
            ))
        }
    </Container>
);

ShopItemsByClassified.propTypes = {
    shopId: PropTypes.string.isRequired,
    products: PropTypes.object.isRequired,
    clickClassify: PropTypes.func.isRequired,
};

export default ShopItemsByClassified;
