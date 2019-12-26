import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { subPointColor } from '../../styles/style';

import SortDescending from '../../lib/images/sort-descending.png';
import SortAscending from '../../lib/images/sort-ascending.png';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const MenuContent = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 11px;
    color: ${subPointColor}
`;

const Content = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 11px;
`;

const Image = styled.div`
    width: 50px;
    margin-right: 15px;
    & img {
        width: 100%;
    }
`;

const Detail = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
`;

const Title = styled.div`
    width: 42%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    margin-right: 3%;
    word-break: break-all;
    & img {
        position: absolute;
        height: 13px;
        right: 10%;
    }
`;

const Number = styled.div`
    width: 20%;
    display: inline-block;
    position: relative;
    word-break: break-all;
`;

const Classify = styled.div`
    width: 20%;
    display: inline-block;
    position: relative;
    word-break: break-all;
    & img {
        position: absolute;
        height: 13px;
        right: 10%;
    }
`;

const Specifications = styled.div`
    width: 15%;
    display: inline-block;
    text-align: right;
    word-break: break-all;
`;

const ShopItems = ({
    products, onClickProduct, isSortByTitle, sortByTitle, isSortByClassify, sortByClassify,
}) => {
    const getItemNumber = (product) => {
        if (product.specification) {
            return `${product.specification[0].number.split('-')[0]}-${product.specification[0].number.split('-')[1]}`;
        }
        return '';
    };

    const toggleSortByTitle = () => {
        sortByTitle();
    };

    const toggleSortByClassify = () => {
        sortByClassify();
    };

    return (
        <Container>
            <MenuContent>
                <Image>
                    {'사진'}
                </Image>
                <Detail>
                    <Title onClick={toggleSortByTitle}>
                        {'품명'}
                        {
                            isSortByTitle
                                ? <img src={SortDescending} alt={'Descending icon'} />
                                : <img src={SortAscending} alt={'Asceding'} />
                        }
                    </Title>
                    <Number>
                        {'품번'}
                    </Number>
                    <Classify onClick={toggleSortByClassify}>
                        {'분류'}
                        {
                            isSortByClassify
                                ? <img src={SortDescending} alt={'Descending icon'} />
                                : <img src={SortAscending} alt={'Asceding'} />
                        }
                    </Classify>
                    <Specifications>
                        {'품목수'}
                    </Specifications>
                </Detail>
            </MenuContent>
            {
                products.map((product) => (
                    <>
                        {
                            product
                            && (
                                <Content onClick={() => onClickProduct(product.id)} key={product.id}>
                                    <Image>
                                        <img src={product.image} alt="product" />
                                    </Image>
                                    <Detail>
                                        <Title>
                                            {product.title}
                                        </Title>
                                        <Number>
                                            {getItemNumber(product)}
                                        </Number>
                                        <Classify>
                                            {product.classify}
                                        </Classify>
                                        <Specifications>
                                            {product.specification ? product.specification.length : 0}
                                        </Specifications>
                                    </Detail>
                                </Content>
                            )
                        }
                    </>

                ))
            }
        </Container>
    );
};

ShopItems.propTypes = {
    products: PropTypes.array.isRequired,
    onClickProduct: PropTypes.func.isRequired,
    sortByTitle: PropTypes.func.isRequired,
    isSortByTitle: PropTypes.bool.isRequired,
    sortByClassify: PropTypes.func.isRequired,
    isSortByClassify: PropTypes.bool.isRequired,
};

export default ShopItems;
