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

const Baskets = ({
    glassItems, expendableItems, openItem, onClickRemove,
}) => {
    // console.log('glassItems', glassItems);
    // console.log('expendableItems', expendableItems);

    return (
        <Container>
            <Content>
                <Title>
                    {'광진이화학 제품군'}
                </Title>
                {
                    glassItems && glassItems.length > 0 && glassItems.map((glassItem) => (
                        <div onClick={() => openItem('1', glassItem)} key={`${glassItem.index}glasses`}>
                            <Basket
                                type={'glasses'}
                                item={glassItem}
                                onClickRemove={onClickRemove}
                            />
                        </div>
                    ))
                }
            </Content>
            <Content>
                <Title>
                    {'기타 제품군'}
                </Title>
                {
                    expendableItems && expendableItems.length > 0 && expendableItems.map((expendableItem) => (
                        <div onClick={() => openItem('2', expendableItem)} key={`${expendableItem.index}expendables`}>
                            <Basket
                                type={'expendables'}
                                item={expendableItem}
                                onClickRemove={onClickRemove}
                            />
                        </div>
                    ))
                }
            </Content>
        </Container>
    );
};

Baskets.propTypes = {
    glassItems: PropTypes.array.isRequired,
    expendableItems: PropTypes.array.isRequired,
    openItem: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
};

export default Baskets;
