import React, { useCallback } from 'react';

import ItemTitle from '../../components/main/ItemTitle';
import SearchProductComponent from '../../components/main/SearchProduct';

const SearchProduct = () => {
    const onClickTitle = useCallback(() => {
        console.log('Click search products title');
    }, []);

    const openGlass = useCallback(() => {
        console.log('Click open glass');
    }, []);

    const openConsumer = useCallback(() => {
        console.log('Click open consumer');
    }, []);

    return (
        <>
            <ItemTitle title={'제품 검색'} clickTitle={onClickTitle} />
            <SearchProductComponent openGlass={openGlass} openConsumer={openConsumer} />
        </>
    );
};

export default SearchProduct;