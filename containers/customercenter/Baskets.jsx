import React from 'react';
import Router from 'next/router';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import useStore from '../../hooks/useStore';

import BasketsComp from '../../components/customercenter/Baskets';

const Baskets = () => {
    const { bascketStore, itemsStore } = useStore();
    const { glassItems } = toJS(bascketStore);

    const convertItem = (items, type) => items.map((item) => {
        const itemInfo = itemsStore.getItemInfo({
            type,
            itemId: item.itemId,
            specificationId: item.specificationItemId,
        });

        return {
            ...itemInfo,
            index: `${item.itemId}${item.specificationItemId}`,
            count: item.count,
        };
    });

    const openItem = (type, itemInfo) => {
        Router.push({
            pathname: '/shop',
            query: {
                id: `${type}`,
                productId: `${itemInfo.selectedItem.id}`,
            },
        });
        // console.log('itemInfo', itemInfo);
    };

    const onClickRemove = (selectedItem, selectedSpecificItem) => {
        bascketStore.removeBasket({
            type: selectedItem.type,
            itemId: selectedItem.id,
            specificationItemId: selectedSpecificItem.id,
        });
    };

    return (
        toJS(bascketStore)
        && (
            <BasketsComp
                glassItems={convertItem(glassItems.glass, 'glasses')}
                expendableItems={convertItem(glassItems.expendable, 'expendables')}
                onClickRemove={onClickRemove}
                openItem={openItem}
            />
        )
    );
};

export default observer(Baskets);
