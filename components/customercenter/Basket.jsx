import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ item }) => {
    console.log('Basekt', item);
    return (
        <>
            {item.content}
        </>
    )
};

Basket.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Basket;
