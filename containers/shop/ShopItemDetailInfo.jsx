import React, { useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItemDetailInfoComp from '../../components/shop/ShopItemDetailInfo';

const ShopItemDetailInfo = observer(({ specificationItem }) => {
    const { bascket } = useStore();
    const [count, setCount] = useState(0);

    const onChangeInputCount = (e) => {
        setCount(e.target.value);
    };

    const onClickAddBascket = (id) => {
        bascket.addBasket();
    };

    return (
        <ShopItemDetailInfoComp
            onChangeInputCount={onChangeInputCount}
            onClickAddBascket={onClickAddBascket}
            content={specificationItem.content}
        />
    );
});

ShopItemDetailInfo.propTypes = {
    specificationItem: PropTypes.object.isRequired,
};

export default ShopItemDetailInfo;
