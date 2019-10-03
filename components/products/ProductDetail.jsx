import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { subPoringColor } from '../../styles/style';

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
    color: ${subPoringColor}
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


const OptionContent = styled.div`
    margin-bottom: 20px;
`;

const OptionContentTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;

const OptionContentText = styled.div`
    font-size: initial;
    padding-left: 10px;
    margin-bottom: 5px;
`;


const ProductDtail = ({ product }) => {
    const [selecetedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (product) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    const clickSetToPrimayImage = useCallback((imageUrl) => {
        setSelectedImage(imageUrl);
    }, [product]);

    return (
        <>
            {
                product
            && (
                <Container>
                    <DetailContent>
                        <PrimaryImage>
                            <img src={selecetedImage} alt={'Primay'} />
                        </PrimaryImage>
                        <ProductContent>
                            <ProductTitle>
                                {product.title}
                            </ProductTitle>
                            <ProductText>
                                {product.content}
                            </ProductText>
                            <ImageList>
                                {
                                    product.images.map((image) => (
                                        <div onClick={() => clickSetToPrimayImage(image)} key={image}>
                                            <img src={image} alt={'List'} />
                                        </div>
                                    ))
                                }
                            </ImageList>
                            <DetailContentOptions>
                                <div>
                                    <OptionContent>
                                        <OptionContentTitle>
                                            {'Product Details'}
                                        </OptionContentTitle>
                                        {
                                            product.detail.map((detail) => <OptionContentText>{`- ${detail}`}</OptionContentText>)
                                        }
                                    </OptionContent>
                                    <OptionContent>
                                        <OptionContentTitle>
                                            {'Application'}
                                        </OptionContentTitle>
                                        {
                                            product.application.map((application) => <OptionContentText>{`- ${application}`}</OptionContentText>)
                                        }
                                    </OptionContent>
                                    <OptionContent>
                                        <OptionContentTitle>
                                            {'Specification'}
                                        </OptionContentTitle>
                                        {
                                            product.specification.map((specification) => <OptionContentText>{`- ${specification}`}</OptionContentText>)
                                        }
                                    </OptionContent>
                                </div>
                            </DetailContentOptions>
                        </ProductContent>
                    </DetailContent>
                </Container>
            )
            }
        </>
    );
};

ProductDtail.propTypes = {
    product: PropTypes.object,
};

ProductDtail.defaultProps = {
    product: null,
};

export default ProductDtail;
