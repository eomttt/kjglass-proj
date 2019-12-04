import React from 'react';

import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItems from './ShopItems';

const ExpendablesItems = ({ productId }) => {
    const { itemsStore } = useStore();
    const { items } = toJS(itemsStore);

    return (
        <>
            {
                items
                && <ShopItems shopId={'2'} products={items.expendables} productId={productId} />
            }
        </>
    );
};

ExpendablesItems.propTypes = {
    productId: PropTypes.string,
};

ExpendablesItems.defaultProps = {
    productId: null,
};

export default ExpendablesItems;
