/* eslint-disable no-alert */
import React, { useState } from 'react';
import { observer } from 'mobx-react';

import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItemDetailInfoComp from '../../components/shop/ShopItemDetailInfo';

const ShopItemDetailInfo = observer(({ itemType, itemId, specificationItem }) => {
    const { bascket } = useStore();
    const [count, setCount] = useState(0);

    const onChangeInputCount = (e) => {
        setCount(e.target.value);
    };

    const onClickAddBascket = () => {
        if (count < 1) {
            alert(' 1개 이상으로 선택해주세요');
            return;
        }
        bascket.addBasket({
            type: itemType,
            itemId,
            specificatinoItemId: specificationItem.id,
            count,
        });
        alert('장바구니에 저장되었습니다. 장바구니를 통해 확인해주세요');
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
    itemType: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    specificationItem: PropTypes.object.isRequired,
};

export default ShopItemDetailInfo;
