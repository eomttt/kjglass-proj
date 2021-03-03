import React, { useCallback } from 'react';
import Router from 'next/router';

import ItemTitle from '../../components/main/ItemTitle';
import CustmoerCenterComponent from '../../components/main/CustomerCenter';

const CustmoerCenter = () => {
    const onClick = useCallback(() => {
        Router.push({
            pathname: '/customercenter',
            query: {
                id: '2',
            },
        });
    }, []);

    return (
        <>
            <ItemTitle title={'고객 센터'} clickTitle={onClick} />
            <CustmoerCenterComponent onClickCS={onClick} />
        </>
    );
};

export default CustmoerCenter;
