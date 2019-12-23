import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { subPointColor } from '../../styles/style';

import DownArrow from '../../lib/images/downwards-pointer.png';

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
    font-size: 18px;
    color: ${subPointColor}
`;

const Content = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 12px;
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
    width: 60%;
    padding-left: 10px;
    display: inline-block;
    position: relative;
    & img {
        position: absolute;
        width: 20px;
        right: 10%;
    }
`;

const Classify = styled.div`
    width: 25%;
    display: inline-block;
    position: relative;
    & img {
        position: absolute;
        width: 20px;
        right: 10%;
    }
`;

const Specifications = styled.div`
    width: 15%;
    display: inline-block;
`;

const ShopItems = ({ products, onClickProduct, sortByTitle, sortByClassify }) => (
    <Container>
        <MenuContent>
            <Image>
                {'사진'}
            </Image>
            <Detail>
                <Title onClick={sortByTitle}>
                    {'품명'}
                    <img src={DownArrow} alt={'Down arrow'} />
                </Title>
                <Classify onClick={sortByClassify}>
                    {'분류'}
                    <img src={DownArrow} alt={'Down arrow'} />
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
                                    <Classify>
                                        {product.classify}
                                    </Classify>
                                    <Specifications>
                                        {product.specification.length}
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

ShopItems.propTypes = {
    products: PropTypes.array.isRequired,
    onClickProduct: PropTypes.func.isRequired,
    sortByTitle: PropTypes.func.isRequired,
    sortByClassify: PropTypes.func.isRequired,
};

export default ShopItems;
