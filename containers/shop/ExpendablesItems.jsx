import React from 'react';

import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItems from './ShopItems';

const ExpendablesItems = ({ classifiedId, productId }) => {
    const { itemsStore } = useStore();
    const { expendables } = toJS(itemsStore);
    console.log('expendables', expendables)

    return (
        <>
            {
                expendables
                && (
                    <ShopItems
                        shopId={'2'}
                        products={expendables}
                        classifiedId={classifiedId}
                        productId={productId}
                    />
                )
            }
        </>
    );
};

ExpendablesItems.propTypes = {
    classifiedId: PropTypes.string,
    productId: PropTypes.string,
};

ExpendablesItems.defaultProps = {
    classifiedId: null,
    productId: null,
};

export default observer(ExpendablesItems);
