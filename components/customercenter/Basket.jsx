import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`

`;

const Basket = ({ item }) => {
    console.log('Basket item', item);
    const { count, selectedItem, selectedSpecificItem } = item;
    return (
        <Container>
            <img src={selectedItem.image} alt={'basket'} />
            {selectedItem.content[0]}
            {selectedSpecificItem.content}
            {`Count: ${count}`}
        </Container>
    );
};

Basket.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Basket;
