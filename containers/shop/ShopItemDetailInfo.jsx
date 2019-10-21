import React from 'react';

import PropTypes from 'prop-types';

import ShopItemDetailInfoComp from '../../components/shop/ShopItemDetailInfo';

const ShopItemDetailInfo = ({ specificationItem }) => {
    const onChangeInputCount = () => {

    };

    const onClickAddBascket = () => {

    };

    return (
        <ShopItemDetailInfoComp onChangeInputCount={onChangeInputCount} 
                                onClickAddBascket={onClickAddBascket} 
                                content={specificationItem.content} />
    );
};

ShopItemDetailInfo.prototype = {
    specificationItem: PropTypes.object.isRequired,
};

export default ShopItemDetailInfo;
