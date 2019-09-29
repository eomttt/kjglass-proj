import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Products from '../../components/products/Products';
import ProductDetail from '../../components/products/ProductDetail';

const RefactorPlan = ({ productId }) => {
    const [products] = useState([{
        id: '1',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/refactorPlan-image-1%3A1.jpg?alt=media&token=e6cded15-3b38-4d38-942f-920f0bfb254d'
        ],
        title: '핵산 회수 장치',
        content: `반응물에 핵산을 회수하는 장치 입니다.
                  회수율 90%  이상으로 나온다고 합니다.
                  (펌프라인 회수장치 추가 할 예정) 연결부분 죠인트가 KF50,  O-ring Ball Joint 이므로 니크 발생율 제로 입니다.
                  핵산이기 때문에 진공구리스 전혀 없습니다. `,
        detail: ['맨틀까지 쎝트로 구성하였습니다.', '용매 20Lit.  Receiving Flask  10Lit. 입니다.'],
        application: [],
        specification: [],
    }, {
        id: '2',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/refactorPlan-image-2%3A1.jpeg?alt=media&token=265a877f-270e-42b1-9562-b154671f23ee',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/refactorPlan-image-2%3A2.jpeg?alt=media&token=f88c19d9-9f54-4ce8-97dd-4b072137935b',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/refactorPlan-image-2%3A3.jpeg?alt=media&token=060757f2-ad2b-493e-a5c3-38e2b711ecaf'
        ],
        title: 'Vacuum Mainfold 2',
        content: '',
        detail: [],
        application: [],
        specification: [],
    }, {
        id: '3',
        images: [],
        title: '핵산 회수 장치',
        content: `반응물에 핵산을 회수하는 장치 입니다.
                  회수율 90%  이상으로 나온다고 합니다.
                  (펌프라인 회수장치 추가 할 예정) 연결부분 죠인트가 KF50,  O-ring Ball Joint 이므로 니크 발생율 제로 입니다.
                  핵산이기 때문에 진공구리스 전혀 없습니다. `,
        detail: [],
        application: [],
        specification: [],
    }]);

    const clickProduct = useCallback((id) => {
        console.log('Clicked product id. ', id);
    }, []);

    return (
        <>
            {
                productId
                    ? <ProductDetail />
                    : <Products products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

RefactorPlan.propTypes = {
    productId: PropTypes.string,
};

RefactorPlan.defaultProps = {
    productId: null,
};

export default RefactorPlan;
