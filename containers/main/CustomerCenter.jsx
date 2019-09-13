import React, { useCallback } from 'react';

import ItemTitle from '../../components/main/ItemTitle';
import CustmoerCenterComponent from '../../components/main/CustomerCenter';

const CustmoerCenter = () => {
    const onClick = useCallback(() => {
        console.log('Click customer center');
    }, []);

    return (
        <>
            <ItemTitle title={'고객 센터'} clickTitle={onClick} />
            <CustmoerCenterComponent onClickCS={onClick} />
        </>
    );
};

export default CustmoerCenter;
