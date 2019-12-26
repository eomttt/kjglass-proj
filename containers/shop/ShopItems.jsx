import React, { useState, useEffect, useCallback } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItemsComp from '../../components/shop/ShopItmes';
import ShopItemDetailComp from '../../components/shop/ShopItemDetail';

const ShopItems = ({ shopId, products, productId }) => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isSortByTitle, setIsSortByTitle] = useState(false);
    const [isSortByClassify, setIsSortByClassify] = useState(true);

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
            if (isSortByTitle) {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
            } else {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                } 
            }

            return 0;
        });
        setIsSortByTitle(!isSortByTitle);
        setIsSortByClassify(false);
        setSortedProducts(newProducts);
    };

    const sortByClassify = () => {
        const newProducts = [...products];
        newProducts.sort((a, b) => {
            if (isSortByClassify) {
                if (a.classify < b.classify) {
                    return 1;
                }
                if (a.classify > b.classify) {
                    return -1;
                }
            } else {
                if (a.classify < b.classify) {
                    return -1;
                }
                if (a.classify > b.classify) {
                    return 1;
                } 
            }
            return 0;
        });
        setIsSortByTitle(false);
        setIsSortByClassify(!isSortByClassify)
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
                            isSortByTitle={isSortByTitle}
                            sortByClassify={sortByClassify}
                            isSortByClassify={isSortByClassify}
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
