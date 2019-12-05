import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useStore from '../../hooks/useStore';

import BasketComp from '../../components/customercenter/Basket';

const Basket = ({ type, item }) => {
    const { itemsStore } = useStore();
    const [basketItem, setBasketItem] = useState({});
    const { count } = item;

    console.log('eee', count);

    useEffect(() => {
        console.log('START')
        const itemInfo = itemsStore.getItemInfo({
            type,
            itemId: item.itemId,
            specificationId: item.specificationItemId,
        });
        console.log('Item info', itemInfo);
        setBasketItem({
            ...itemInfo,
            count,
        });
    }, []);

    return (
        <BasketComp item={basketItem} />
    );
};

Basket.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
};

export default Basket;
