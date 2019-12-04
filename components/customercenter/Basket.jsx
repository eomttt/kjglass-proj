import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ type, item }) => {
    console.log('DDD', item, type);
    return (
        <>
            {item.content}
        </>
    )
};

Basket.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
};

export default Basket;
