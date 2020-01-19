/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ShopItemDetailInfoComp from './ShopItemDetailInfo';

import ShopItemDetailInfo from '../../containers/shop/ShopItemDetailInfo';

import { subPointColor, isMobile } from '../../styles/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-direction: column;
`;

const DetailContent = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    ${isMobile} {
        display: inline-block;
    }
`;

const PrimaryImage = styled.div`
    width: 35%;
    display: flex;
    padding: 15px;
    & img {
        margin: auto;
        width: 80%;
    }
    ${isMobile} {
        width: 100%;
        margin-top: 10px;
        padding: 0;
        display: block;
        text-align: center;
        & img {
            width: 40%;
        } 
    }
`;

const ProductContent = styled.div`
    width: 65%;
    padding-top: 15px;
    ${isMobile} {
        width: 100%;
    }
`;

const ProductTable = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    & table {
        font-weight: initial;
        font-size: initial;
        color: initial;
        margin-top: 10px;
        margin-bottom: 20px;
        th {
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            background-color: #8080804d;
            height: 30px;
        }
        th:nth-child(1) {
            border-left: 1px solid black;
        }
        th:nth-child(n + 1) {
            border-right: 1px solid black;
        }
        td {
            border-bottom: 1px solid black;
            text-align: center;
            height: 30px;
        }
        td:nth-child(1) {
            border-left: 1px solid black;
        }
        td:nth-child(n + 1) {
            border-right: 1px solid black;
        }
    }
`;

const ProductTitle = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
    color: ${subPointColor};
    ${isMobile} {
        display: none;
    }
`;

const ProductText = styled.div`

`;


const DetailContentOptions = styled.div`

`;

const ProductTitleMobile = styled.div`
    display: none;
    ${isMobile} {
        color: ${subPointColor};
        display: flex;
    }
`;

const ShopItemDetail = ({
    type, id, image, title, content, specification, tableItems, classifiedId,
}) => (
    <>
        <Container>
            <DetailContent>
                <ProductTitleMobile>
                    {title}
                </ProductTitleMobile>
                <PrimaryImage>
                    <img src={`${image}?70x70`} alt={'Primay'} />
                </PrimaryImage>
                <ProductContent>
                    <ProductTitle>
                        {title}
                    </ProductTitle>
                    <ProductText>
                        {
                            content && content.map((text) => (
                                <div key={text}>
                                    {text}
                                </div>
                            ))
                        }
                    </ProductText>
                </ProductContent>
            </DetailContent>
            {
                tableItems
                    && (
                        <ProductTable dangerouslySetInnerHTML={{
                            __html: tableItems,
                        }}
                        >
                        </ProductTable>
                    )
            }
            <DetailContentOptions>
                <ShopItemDetailInfoComp
                    number={'Cat.No'}
                    content={'Description'}
                    isMenu
                />
                {
                    specification && specification.map((item) => (
                        <ShopItemDetailInfo
                            key={item.id}
                            itemType={type}
                            itemId={id}
                            specificationItem={item}
                            classifiedId={classifiedId}
                        />
                    ))
                }
            </DetailContentOptions>
        </Container>
    </>
);

ShopItemDetail.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
    specification: PropTypes.array,
    tableItems: PropTypes.array,
    classifiedId: PropTypes.string.isRequired,
};

ShopItemDetail.defaultProps = {
    content: [],
    specification: [],
    tableItems: '',
};

export default ShopItemDetail;
