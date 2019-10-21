import React from 'react';
import PropTypes from 'prop-types';

import ShopItemDetailComp from '../../components/shop/ShopItemDetail';

const ShopItemDtail = ({ product }) => {
    return (
        <>
            {
                product
            && (
                <ShopItemDetailComp
                    {...product}
                />
            )
            }
        </>
    );
};

ShopItemDtail.propTypes = {
    product: PropTypes.object,
};

ShopItemDtail.defaultProps = {
    product: null,
};

export default ShopItemDtail;
