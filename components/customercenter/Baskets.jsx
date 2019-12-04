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

const Title = styled.div`
    color: ${subPointColor};
`;

const Baskets = ({ glassItems, expendableItems }) => (
    <Container>
        <>
            <Title>
                {'글라스'}
            </Title>
            {
                glassItems.map((glassItem) => <Basket type={'glasses'} item={glassItem} key={`${glassItem.id}glassesType`} />)
            }
        </>
        <>
            <Title>
                {'소모품'}
            </Title>
            {
                expendableItems.map((expendableItem) => <Basket type={'expendables'} item={expendableItem} key={`${expendableItem.id}expendablesType`} />)
            }
        </>
    </Container>
);

Baskets.propTypes = {
    glassItems: PropTypes.array.isRequired,
    expendableItems: PropTypes.array.isRequired,
};

export default Baskets;
