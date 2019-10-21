import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ShopItemDetailInfoComp from '../../components/shop/ShopItemDetailInfo';

const ShopItemDetailInfo = ({ specificationItem }) => {
    const [count, setCount] = useState(0);

    const onChangeInputCount = (e) => {
        setCount(e.target.value);
    };

    const onClickAddBascket = (id) => {
        console.log('Click add bascket', id, count);
    };

    return (
        <ShopItemDetailInfoComp
            onChangeInputCount={onChangeInputCount}
            onClickAddBascket={onClickAddBascket}
            content={specificationItem.content}
        />
    );
};

ShopItemDetailInfo.propTypes = {
    specificationItem: PropTypes.object.isRequired,
};

export default ShopItemDetailInfo;
