import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Basket from './Basket';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    margin: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.div`
    color: ${subPointColor};
`;

const GetProducts = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 30px;
`;

const Baskets = ({
    glassItems, glassStore, expendableItems, expendableStore, openItem, onClickRemove,
}) =>
// console.log('glassItems', glassItems);
// console.log('expendableItems', expendableItems);

    (
        <Container>
            <Content>
                <Title>
                    {'광진이화학 제품군'}
                </Title>
                {
                    glassStore.length > 0
                        ? glassItems && glassItems.length > 0 && glassItems.map((glassItem) => (
                            <div onClick={() => openItem('1', glassItem)} key={`${glassItem.index}glasses`}>
                                <Basket
                                    type={'glasses'}
                                    item={glassItem}
                                    onClickRemove={onClickRemove}
                                />
                            </div>
                        ))
                        : (
                            <GetProducts>
                                {'제품을 가져오는 중 입니다...'}
                            </GetProducts>
                        )
                }
            </Content>
            <Content>
                <Title>
                    {'기타 제품군'}
                </Title>
                {
                    expendableStore.length > 0
                        ? expendableItems && expendableItems.length > 0 && expendableItems.map((expendableItem) => (
                            <div onClick={() => openItem('2', expendableItem)} key={`${expendableItem.index}expendables`}>
                                <Basket
                                    type={'expendables'}
                                    item={expendableItem}
                                    onClickRemove={onClickRemove}
                                />
                            </div>
                        ))
                        : (
                            <GetProducts>
                                {'제품을 가져오는 중 입니다...'}
                            </GetProducts>
                        )
                }
            </Content>
        </Container>
    );
Baskets.propTypes = {
    glassItems: PropTypes.array.isRequired,
    glassStore: PropTypes.array.isRequired,
    expendableItems: PropTypes.array.isRequired,
    expendableStore: PropTypes.array.isRequired,
    openItem: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
};

export default Baskets;
