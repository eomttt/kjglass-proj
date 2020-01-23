import React, { useEffect } from 'react';
import Router from 'next/router';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import useStore from '../../hooks/useStore';

import BasketsComp from '../../components/customercenter/Baskets';

const Baskets = () => {
    const { bascketStore, itemsStore } = useStore();
    const { glasses, expendables } = toJS(itemsStore);
    const { glassItems } = toJS(bascketStore);
    
    useEffect(() => {
        // Nothing. But to update component
    }, [glasses, expendables]);

    const convertItem = (items, type) => items.map((item) => {
        const itemInfo = itemsStore.getItemInfo({
            type,
            itemId: item.itemId,
            specificationId: item.specificationItemId,
        });

        if (!itemInfo) {
            return null;
        }

        return {
            ...itemInfo,
            index: `${item.itemId}${item.specificationItemId}`,
            count: item.count,
        };
    }).filter((item) => {
        return !!item;
    });

    const openItem = (type, itemInfo) => {
        Router.push({
            pathname: '/shop',
            query: {
                id: `${type}`,
                classifiedId: encodeURI(`${itemInfo.selectedItem.classify}`),
                productId: `${itemInfo.selectedItem.id}`,
            },
        });
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
                glassStore={glasses}
                expendableItems={convertItem(glassItems.expendables, 'expendables')}
                expendableStore={expendables}
                onClickRemove={onClickRemove}
                openItem={openItem}
            />
        )
    );
};

export default observer(Baskets);
