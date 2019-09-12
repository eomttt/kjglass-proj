import React from 'react';

import CustmoerCenterComponent from '../../components/main/CustomerCenter';

const CustmoerCenter = () => {
    const onClick = () => {
        console.log('Click customer center');
    };

    return (
        <CustmoerCenterComponent onClickCS={onClick} />
    );
};

export default CustmoerCenter;
