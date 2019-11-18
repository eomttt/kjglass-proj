import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

// Presentation
import Products from '../../components/products/Products';

// Container
import ProductDetail from './ProductDetail'

const ExperimentEquip = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState([{
        id: '1',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-1-1.jpeg?alt=media&token=6d428a81-3261-487a-8b3a-a3a6f9f32cd0',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-1-2.jpeg?alt=media&token=b64ee27a-8d0f-4662-b067-af727b73fd23',
        ],
        title: '전시용 샘플병 (Display Bottle)',
        content: `약품들을 넣고 보여줄떄 쓰이는 제품입니다.
                  용량과 디자인은 원하시는데로 가능 합니다.`,
        detail: ['용매와 분말을 나누어 쓰시기도 합니다.'],
        application: ['투입구를 상부와 하부 2가지로 구분제작 합니다.'],
        specification: [],
    }, {
        id: '2',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-2-1.jpeg?alt=media&token=6aec0bee-7b45-437d-a0fd-9b6cfcbe96bd',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-2-2.jpeg?alt=media&token=488a1389-8e22-416f-a846-db3c8bc413b3',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-2-3.jpeg?alt=media&token=273631c6-3d07-494f-b4ed-1ae8adc6cc99',
        ],
        title: 'Botto Filter System Reactor',
        content: 'Bottom Flange에 써스 메쉬 필터를 고정하여 필터링을 하고 분리하여 슬러리 회스를 용이하게 하도록 디자인 한 제품입니다.',
        detail: ['용량은 5리터 입니다.'],
        application: ['필터 메쉬는 원하시는 규격으로 가능합니다.', 'Glass Filter로도 가능 합니다.'],
        specification: [],
    }, {
        id: '3',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-3-1.jpg?alt=media&token=ac1cdd91-32cd-439b-978c-8f9423020801',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-3-2.jpeg?alt=media&token=f2340e34-c8e5-4980-81bb-9ded9f089d92',
            'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/exEq-3-3.jpeg?alt=media&token=13e8116d-9fbd-4c1d-8003-a7c9be993694',
        ],
        title: '20Lit. 50Lit. Reactor System',
        content: `이중 자켓 반응기와 일반 반응기 2대 설치한 것입니다.
                  하부에 드레인 벨브를 달아 내용물 회수에 용이 합니다.`,
        detail: ['이중자켓은 반응문의 온도를 조절할수가 있습니다.'],
        application: ['교반을 하여 믹싱이 잘되게 하였습니다.'],
        specification: [],
    }]);

    const getSelectedProduct = useCallback((id) => {
        return Object.values(products).filter((product) => {
            return product.id === id;
        });
    }, [products]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/products',
            query: { id: '2', productId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (productId) {
            const selectedProductArr = getSelectedProduct(productId);
            setSelectedProduct(selectedProductArr[0]);
        }
    }, []);

    return (
        <>
            {
                selectedProduct
                    ? <ProductDetail product={selectedProduct} />
                    : <Products products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

ExperimentEquip.propTypes = {
    productId: PropTypes.string,
};

ExperimentEquip.defaultProps = {
    productId: null,
};

export default ExperimentEquip; 
