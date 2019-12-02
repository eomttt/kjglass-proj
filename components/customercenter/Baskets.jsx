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

const Baskets = ({ glassItems, expendableItems }) => (
    <Container>
        <>
            {
                glassItems.map((glassItem) => <Basket item={glassItem} key={glassItem.id} />)
            }
        </>
        <>
            {
                expendableItems.map((expendableItem) => <Basket item={expendableItem} key={expendableItem.id} />)
            }
        </>
    </Container>
);

Baskets.propTypes = {
    glassItems: PropTypes.array.isRequired,
    expendableItems: PropTypes.array.isRequired,
};

export default Baskets;
