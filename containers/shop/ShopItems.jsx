import React, { useState, useEffect, useCallback } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

import ShopItemsLoading from '../../components/shop/ShopItemsLoading';
import ShopItemsComp from '../../components/shop/ShopItmes';
import ShopItemDetailComp from '../../components/shop/ShopItemDetail';
import ShopItemsByClassified from '../../components/shop/ShopItemsByClassified';

const ShopItems = ({
    shopId, products, classifiedId, productId,
}) => {
    const [productsByClassify, setProductsByClassify] = useState({});

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [sortedSelectedProducts, setSortedSelectedProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isSortByTitle, setIsSortByTitle] = useState(false);

    const getSelectedProduct = useCallback((candidates, id) => Object.values(candidates).filter((product) => {
        if (product) {
            return product.id === id;
        }
    }), []);

    const clickClassify = useCallback((classify) => {
        setSelectedProducts([...productsByClassify[classify]]);
        setSortedSelectedProducts([...productsByClassify[classify]]);

        Router.push({
            pathname: '/shop',
            query: {
                id: shopId,
                classifiedId: encodeURI(classify),
            },
        });
    }, [shopId, productsByClassify]);

    const clickProduct = useCallback((id) => {
        const selectedProductArr = getSelectedProduct(sortedSelectedProducts, id);
        setSelectedProduct(selectedProductArr[0]);

        Router.push({
            pathname: '/shop',
            query: {
                id: shopId,
                classifiedId: encodeURI(classifiedId),
                productId: selectedProductArr[0].id,
            },
        });
    }, [shopId, classifiedId, sortedSelectedProducts]);

    const sortByTitle = () => {
        const newProducts = [...sortedSelectedProducts];
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
        setSortedSelectedProducts(newProducts);
    };

    const getItemNumber = (product) => {
        if (product.specification) {
            return `${product.specification[0].number.split('-')[0]}-${product.specification[0].number.split('-')[1]}`;
        }
        return '';
    };

    const findByText = (findedText) => {
        const lowerText = findedText.toLowerCase();
        const newProducts = products.filter((product) => {
            if (product.title.toLowerCase().indexOf(lowerText) > -1) {
                return true;
            }
            if (getItemNumber(product).toLowerCase().indexOf(lowerText) > -1) {
                return true;
            }
            return false;
        });
        setSortedSelectedProducts(newProducts);
    };

    const setInitItems = () => {
        setSortedSelectedProducts([...selectedProducts]);
        setIsSortByTitle(false);
    };

    useEffect(() => {
        const classifiedProducts = products.reduce((acc, cur) => {
            if (cur) {
                if (cur.classify) {
                    if (acc[cur.classify]) {
                        acc[cur.classify].push(cur);
                    } else {
                        acc[cur.classify] = [cur];
                    }
                }
            }
            return acc;
        }, {});

        if (productId) {
            const selectedProductArr = getSelectedProduct(products, productId);
            setSelectedProduct(selectedProductArr[0]);
        }

        if (classifiedId && classifiedProducts[classifiedId]) {
            setSelectedProducts([...classifiedProducts[classifiedId]]);
            setSortedSelectedProducts([...classifiedProducts[classifiedId]]);
        }

        setProductsByClassify(classifiedProducts);
    }, [shopId, products]);

    const renderShops = () => {
        if (!products || products.length < 1) {
            return (
                <ShopItemsLoading />
            );
        }

        if (classifiedId && productId && selectedProduct) {
            return (
                <ShopItemDetailComp
                    type={selectedProduct.type}
                    id={selectedProduct.id}
                    image={selectedProduct.image}
                    title={selectedProduct.title}
                    content={selectedProduct.content}
                    specification={selectedProduct.specification}
                    tableItems={selectedProduct.tableItems || []}
                    classifiedId={selectedProduct.classify}
                />
            );
        }
        if (classifiedId) {
            return (
                <ShopItemsComp
                    products={sortedSelectedProducts}
                    onClickProduct={clickProduct}
                    sortByTitle={sortByTitle}
                    isSortByTitle={isSortByTitle}
                    findByText={findByText}
                    setInitItems={setInitItems}
                />
            );
        }
        console.log('products', productsByClassify)
        return (
            <ShopItemsByClassified
                shopId={shopId}
                products={productsByClassify}
                clickClassify={clickClassify}
            />
        );
    };

    return (
        <>
            {renderShops()}
        </>
    );
};

ShopItems.propTypes = {
    shopId: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    classifiedId: PropTypes.string,
    productId: PropTypes.string,
};

ShopItems.defaultProps = {
    classifiedId: null,
    productId: null,
};

export default ShopItems;
