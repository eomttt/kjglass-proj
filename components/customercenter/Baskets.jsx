import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Basket from './Basket';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    margin: 10px;
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

const Baskets = ({ glassItems, expendableItems, openItem }) => (
    <Container>
        <Content>
            <Title>
                {'글라스'}
            </Title>
            {
                glassItems.map((glassItem) => (
                    <div onClick={() => openItem('1', glassItem)} key={`${glassItem.index}glasses`}>
                        <Basket
                            type={'glasses'}
                            item={glassItem}
                        />
                    </div>
                ))
            }
        </Content>
        <Content>
            <Title>
                {'소모품'}
            </Title>
            {
                expendableItems.map((expendableItem) => (
                    <div onClick={() => openItem('2', expendableItem)} key={`${expendableItem.index}expendables`}>
                        <Basket
                            type={'expendables'}
                            item={expendableItem}
                        />
                    </div>
                ))
            }
        </Content>
    </Container>
);

Baskets.propTypes = {
    glassItems: PropTypes.array.isRequired,
    expendableItems: PropTypes.array.isRequired,
    openItem: PropTypes.func.isRequired,
};

export default Baskets;
