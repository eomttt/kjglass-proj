import React, { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItems from '../../components/shop/ShopItmes';

import ShopItemDetail from './ShopItemDetail';

const ExpendablesItems = ({ productId }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products] = useState([{
        id: '1',
        image: 'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/glass%2FKJ-A1_l.jpg?alt=media&token=1a70698e-a7ef-4ec9-b1fd-94fdd4297866',
        classify: 'Adapters',
        title: 'Bent distillation',
        content: ['bent 105˚ angle with a outer joint at top'],
        specification: [
            {
                id: '1',
                number: 'KJ-A1-1',
                content: 'Adapter Bent Distillation 14/20',
            },
            {
                id: '2',
                number: 'KJ-A1-2',
                content: 'Adapter Bent Distillation 24/40',
            },
            {
                id: '3',
                number: 'KJ-A1-3',
                content: 'Adapter Bent Distillation 19/38',
            },
        ],
    }, {
        id: '2',
        image: 'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/glass%2FKJ-A2_l.jpg?alt=media&token=4fb5ebed-29ba-43ea-8ccb-34211705efb6',
        classify: 'Adapters',
        title: 'Bent distillation',
        content: ['outer joint at 105˚ angle with inner joint at bottom'],
        specification: [
            {
                id: '1',
                number: 'KJ-A2-1',
                content: 'Adapter Bent Distillation 14/20',
            },
            {
                id: '2',
                number: 'KJ-A2-2',
                content: 'Adapter Bent Distillation 24/40',
            },
            {
                id: '3',
                number: 'KJ-A2-3',
                content: 'Adapter Bent Distillation 29/42',
            },
        ],
    }, {
        id: '3',
        image: 'https://firebasestorage.googleapis.com/v0/b/kjglass-60495.appspot.com/o/glass%2FKJ-A3_l.jpg?alt=media&token=b491219f-762d-48a7-8717-76a7a926a89b',
        classify: 'Adapters',
        title: '75˚ angle with inner joint each end',
        content: [],
        specification: [
            {
                id: '1',
                number: 'KJ-A3-1',
                content: 'Adapter Bent Distillation 14/20',
            },
            {
                id: '2',
                number: 'KJ-A3-2',
                content: 'Adapter Bent Distillation 24/40',
            },
            {
                id: '3',
                number: 'KJ-A3-3',
                content: 'Adapter Bent Distillation 34/45',
            },
        ],
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
            pathname: '/shop',
            query: { id: '2', productId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (productId) {
            const selectedProductArr = getSelectedProduct(productId);
            setSelectedProduct(selectedProductArr[0]);
        }
    }, [productId]);

    return (
        <>
            {
                productId
                    ? <ShopItemDetail product={selectedProduct} />
                    : <ShopItems products={products} onClickProduct={clickProduct} />
            }
        </>
    );
};

ExpendablesItems.propTypes = {
    productId: PropTypes.string,
};

ExpendablesItems.defaultProps = {
    productId: null,
};

export default ExpendablesItems;