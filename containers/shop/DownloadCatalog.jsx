import React, { useState } from 'react';

import Catalogs from '@/components/shop/Catalogs';

import dummyItems from '@/data/catalogs';

const DownloadCatalog = () => {
    const [products] = useState(dummyItems);

    return (
        <Catalogs products={products} />
    );
};

export default DownloadCatalog;
