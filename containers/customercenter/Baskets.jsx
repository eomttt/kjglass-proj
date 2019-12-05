import React from 'react';
import { toJS } from 'mobx';

import useStore from '../../hooks/useStore';

import BasketsComp from '../../components/customercenter/Baskets';

const Baskets = () => {
    const { bascketStore } = useStore();
    const { glassItems } = toJS(bascketStore);

    console.log('Glass items', glassItems);

    return (
        toJS(bascketStore)
        && <BasketsComp glassItems={glassItems.glass} expendableItems={glassItems.expendable} />
    );
};

export default Baskets;
