import React, { useState, useEffect, useCallback } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItemsComp from '../../components/shop/ShopItmes';
import ShopItemDetailComp from '../../components/shop/ShopItemDetail';

const ShopItems = ({ shopId, products, productId }) => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getSelectedProduct = useCallback((id) => Object.values(products).filter((product) => {
        if (product) {
            return product.id === id;
        }
    }), [products]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/shop',
            query: { id: shopId, productId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (productId) {
            const selectedProductArr = getSelectedProduct(productId);
            setSelectedProduct(selectedProductArr[0]);
        }
    }, [productId]);

    const sortByTitle = () => {
        const newProducts = [...products];
        newProducts.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });

        setSortedProducts(newProducts);
    };

    const sortByClassify = () => {
        const newProducts = [...products];
        newProducts.sort((a, b) => {
            if (a.classify < b.classify) {
                return -1;
            }
            if (a.classify > b.classify) {
                return 1;
            }
            return 0;
        });

        setSortedProducts(newProducts);
    };

    return (
        <>
            {
                (productId && selectedProduct)
                    ? <ShopItemDetailComp {...selectedProduct} />
                    : (
                        <ShopItemsComp
                            products={sortedProducts}
                            onClickProduct={clickProduct}
                            sortByTitle={sortByTitle}
                            sortByClassify={sortByClassify}
                        />
                    )
            }
        </>
    );
};

ShopItems.propTypes = {
    shopId: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    productId: PropTypes.string,
};

ShopItems.defaultProps = {
    productId: null,
};

export default ShopItems;
