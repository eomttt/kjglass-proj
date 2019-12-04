import React from 'react';

import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItems from './ShopItems';

const GlassItems = ({ productId }) => {
    const { itemsStore } = useStore();
    const { items } = toJS(itemsStore);

    return (
        <>
            {
                items
                && <ShopItems shopId={'1'} products={items.glasses} productId={productId} />
            }
        </>
    );
};

GlassItems.propTypes = {
    productId: PropTypes.string,
};

GlassItems.defaultProps = {
    productId: null,
};

export default GlassItems;
