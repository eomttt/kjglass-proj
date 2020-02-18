import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from '~/components/common/Loading';

import SortDescending from '~/lib/images/sort-descending.png';
import SortAscending from '~/lib/images/sort-ascending.png';
import SearchIcon from '~/lib/images/search.png';

import { subPointColor } from '~/styles/style';

const Container = styled.div`
    margin: 10px;
    width: 100%;
    position: relative;
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
    align-self: center;
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
    align-self: center;
`;

const Classify = styled.div`
    width: 20%;
    display: inline-block;
    position: relative;
    word-break: break-all;
    align-self: center;
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
    align-self: center;
`;

const InputContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    margin-bottom: 20px;
`;

const InputBoxContainer = styled.div`
    position: relative;
    margin-left: auto;
    width: 80%;
    display: flex;
    & img {
        width: 15px;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
    }
    & input {
        font-size: 16px;
        padding-left: 30px;
        width: calc(100% - 100px);
        height: 20px;
    }
    & button {
        white-space: nowrap;
        margin-left: 5px;
        cursor: pointer;
    }
`;

const ItemContent = styled.div`
    position: relative;
`;


const ShopItems = ({
    products, onClickProduct,
    isSortByTitle, sortByTitle,
    findByText, setInitItems,
}) => {
    const [inputText, setInputText] = useState('');
    const [imageLoadCount, setImageLoadCount] = useState(0);
    const [isImageAllLoaded, setImageAllLoaded] = useState(false);

    useEffect(() => {
        if (imageLoadCount >= products.length) {
            setImageAllLoaded(true);
        }
    }, [imageLoadCount]);

    const getItemNumber = (product) => {
        if (product.specification) {
            return `${product.specification[0].number.split('-')[0]}-${product.specification[0].number.split('-')[1]}`;
        }
        return '';
    };

    const toggleSortByTitle = () => {
        sortByTitle();
    };

    const onChangeText = (e) => {
        setInputText(e.target.value);
    };

    const setFindItemsByText = () => {
        findByText(inputText);
    };

    const onLoadImage = () => {
        setImageLoadCount(imageLoadCount + 1);
    };

    return (
        <Container>
            <InputContainer>
                <InputBoxContainer>
                    <img src={SearchIcon} alt={'Search icon'} />
                    <input
                        placeholder={'품명 또는 품번을 검색해주세요.'}
                        value={inputText}
                        onChange={onChangeText}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                setFindItemsByText();
                            }
                        }}
                    />
                    <button type="button" onClick={setFindItemsByText}>
                        {'검색'}
                    </button>
                    <button type="button" onClick={setInitItems}>
                        {'초기화'}
                    </button>
                </InputBoxContainer>
            </InputContainer>
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
                    <Classify>
                        {'분류'}
                    </Classify>
                    <Specifications>
                        {'품목수'}
                    </Specifications>
                </Detail>
            </MenuContent>
            <ItemContent>
                {
                    products.map((product) => (
                        product
                        && (
                            <div key={product.id}>
                                {
                                    product
                            && (
                                <Content onClick={() => onClickProduct(product.id)}>
                                    <Image>
                                        <img src={`${product.image}?s=52x52`} alt="product" onLoad={onLoadImage} />
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
                            </div>
                        )
                    ))
                }
                {
                    !isImageAllLoaded && <Loading text={'이미지를 가져오고 있습니다...'} />
                }
            </ItemContent>
        </Container>
    );
};

ShopItems.propTypes = {
    products: PropTypes.array.isRequired,
    onClickProduct: PropTypes.func.isRequired,
    sortByTitle: PropTypes.func.isRequired,
    isSortByTitle: PropTypes.bool.isRequired,
    findByText: PropTypes.func.isRequired,
    setInitItems: PropTypes.func.isRequired,
};

export default ShopItems;
