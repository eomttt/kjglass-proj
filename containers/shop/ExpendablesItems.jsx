import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ShopItems from './ShopItems';

import dummyItems from '../../dummy/expendablesItem';

const ExpendablesItems = ({ productId }) => {
    const [products] = useState(dummyItems);

    return (
        <ShopItems shopId={'2'} products={products} productId={productId} />
    );
};

ExpendablesItems.propTypes = {
    productId: PropTypes.string,
};

ExpendablesItems.defaultProps = {
    productId: null,
};

export default ExpendablesItems;
