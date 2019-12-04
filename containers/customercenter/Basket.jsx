import React from 'react';
import { toJS } from 'mobx';

import useStore from '../../hooks/useStore';

import BasketsComp from '../../components/customercenter/Baskets';

const Basket = () => {
    const { bascketStore } = useStore();
    const { glassItems } = toJS(bascketStore);

    console.log('Bascket item', glassItems);

    return (
        toJS(bascketStore)
        && <BasketsComp glassItems={glassItems.glass} expendableItems={glassItems.expendable} />
    );
};

export default Basket;
