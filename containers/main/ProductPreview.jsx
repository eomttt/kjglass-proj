import React from 'react';

import ProductPreviewComponent from '../../components/main/ProductPreview';

const ProductPreview = () => {
    const clickDownload = () => {
        console.log('Click download');
    };

    return (
        <ProductPreviewComponent clickDownload={clickDownload} />
    );
};

export default ProductPreview;
