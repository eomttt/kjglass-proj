import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ShopItems from './ShopItems';

import dummyItems from '../../dummy/glassItem';

const GlassItems = ({ productId }) => {
    const [products] = useState(dummyItems);

    return (
        <ShopItems shopId={'1'} products={products} productId={productId} />
    );
};

GlassItems.propTypes = {
    productId: PropTypes.string,
};

GlassItems.defaultProps = {
    productId: null,
};

export default GlassItems;
