import React, { useCallback } from 'react';
import Router from 'next/router';

import NavBarItemsComp from '../../components/common/NavBarItems';

const NavBarItems = () => {
    const openInfo = useCallback(() => {
        Router.push({
            pathname: '/info',
        });
    }, []);

    const openProduct = useCallback(() => {
        Router.push({
            pathname: '/products',
        });
    }, []);

    const openProductSearch = useCallback(() => {
        Router.push({
            pathname: '/shop',
        });
    }, []);

    const openEquipment = useCallback(() => {
        Router.push({
            pathname: '/equipment',
        });
    }, []);

    const openCustomerCenter = useCallback(() => {
        Router.push({
            pathname: '/customercenter',
        });
    }, []);

    return (
        <NavBarItemsComp
            openInfo={openInfo}
            openProduct={openProduct}
            openProductSearch={openProductSearch}
            openEquipment={openEquipment}
            openCustomerCenter={openCustomerCenter}
        />
    );
};

export default NavBarItems;
