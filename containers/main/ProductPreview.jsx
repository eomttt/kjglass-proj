import React, { useRef } from 'react';

import ProductPreviewTitle from '../../components/main/ProductPreviewTitle';
import ProductList from '../../components/main/ProductList';

const ProductPreview = () => {
    const products = useRef([{
        id: 1,
        image: 'http://www.kjglass.kr/images/pro_06.png',
    }, {
        id: 2,
        image: 'http://www.kjglass.kr/images/pro_06.png'
    }, {
        id: 3,
        image: 'http://www.kjglass.kr/images/pro_06.png'
    }, {
        id: 4,
        image: 'http://www.kjglass.kr/images/pro_06.png'
    }, {
        id: 5,
        image: 'http://www.kjglass.kr/images/pro_06.png'
    }]);

    const clickDownload = () => {
        console.log('Click download');
    };

    return (
        <>
            <ProductPreviewTitle clickDownload={clickDownload} />
            <ProductList products={products.current} />
        </>
    );
};

export default ProductPreview;
