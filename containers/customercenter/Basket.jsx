import React from 'react';
import { toJS } from 'mobx';

import useStore from '../../hooks/useStore';

import BasketsComp from '../../components/customercenter/Baskets';

const Basket = () => {
    const { bascket } = useStore();

    return (
        toJS(bascket) &&
        <BasketsComp glassItems={toJS(bascket).glassItems.glass} expendableItems={toJS(bascket).glassItems.expendable} />
    );
};

export default Basket;
