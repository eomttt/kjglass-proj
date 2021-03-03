import React, { useCallback } from 'react';
import Router from 'next/router';

import ItemTitle from '../../components/main/ItemTitle';
import SearchProductComponent from '../../components/main/SearchProduct';

const SearchProduct = () => {
    const onClickTitle = useCallback(() => {
        Router.push({
            pathname: '/shop',
        });
    }, []);

    const openGlass = useCallback(() => {
        Router.push({
            pathname: '/shop',
            query: {
                id: '1',
            },
        });
    }, []);

    const openConsumer = useCallback(() => {
        Router.push({
            pathname: '/shop',
            query: {
                id: '2',
            },
        });
    }, []);

    return (
        <>
            <ItemTitle title={'제품 검색'} clickTitle={onClickTitle} />
            <SearchProductComponent openGlass={openGlass} openConsumer={openConsumer} />
        </>
    );
};

export default SearchProduct;