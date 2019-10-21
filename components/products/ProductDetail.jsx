import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ProductDetailOptions from './ProductDetailOptions';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const DetailContent = styled.div`
    display: flex;
    width: 100%;
`;

const PrimaryImage = styled.div`
    width: 50%;
    padding: 15px;
    & img {
        width: 100%;
    }
`;

const ProductContent = styled.div`
    width: 50%;
    padding-top: 15px;
`;

const ProductTitle = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
    color: ${subPointColor}
`;

const ProductText = styled.div`

`;

const ImageList = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow-x: scroll;
    white-space: nowrap;
    & div {
        width: 100px;
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        & img {
            width: 100%;
        }
    }
`;

const DetailContentOptions = styled.div`

`;

const ProductDtail = ({
    title, content, images, detail, application, specification,
    primaryImage, onClickImage,
}) => (
    <>
        <Container>
            <DetailContent>
                <PrimaryImage>
                    <img src={primaryImage} alt={'Primay'} />
                </PrimaryImage>
                <ProductContent>
                    <ProductTitle>
                        {title}
                    </ProductTitle>
                    <ProductText>
                        {content}
                    </ProductText>
                    <ImageList>
                        {
                            images && images.map((image) => (
                                <div onClick={() => onClickImage(image)} key={image}>
                                    <img src={image} alt={'List'} />
                                </div>
                            ))
                        }
                    </ImageList>
                    <DetailContentOptions>
                        <ProductDetailOptions title={'Product Details'} items={detail} />
                        <ProductDetailOptions title={'Application'} items={application} />
                        <ProductDetailOptions title={'Specification'} items={specification} />
                    </DetailContentOptions>
                </ProductContent>
            </DetailContent>
        </Container>
    </>
);

ProductDtail.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    detail: PropTypes.array.isRequired,
    application: PropTypes.array.isRequired,
    specification: PropTypes.array.isRequired,
    primaryImage: PropTypes.string.isRequired,
    onClickImage: PropTypes.func.isRequired,
};

export default ProductDtail;
