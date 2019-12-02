import React from 'react';
import Router from 'next/router';

import ProductPreviewTitle from '../../components/main/ProductPreviewTitle';
import ProductList from '../../components/main/ProductList';

import dummy from '../../dummy/productPreview';

const ProductPreview = () => {
    const clickDownload = () => {
        Router.push({
            pathname: '/shop',
            query: {
                id: '3',
            },
        });
    };

    return (
        <>
            <ProductPreviewTitle clickDownload={clickDownload} />
            <ProductList products={dummy} />
        </>
    );
};

export default ProductPreview;
