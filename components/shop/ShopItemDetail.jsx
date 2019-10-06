import React from 'react';
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


const DetailContentOptions = styled.div`

`;

const ShopItemDtail = ({
    image, classify, title, content,
}) => (
    <>
        <Container>
            <DetailContent>
                <PrimaryImage>
                    <img src={image} alt={'Primay'} />
                </PrimaryImage>
                <ProductContent>
                    <ProductTitle>
                        {title}
                    </ProductTitle>
                    <ProductText>
                        {content}
                    </ProductText>
                    <DetailContentOptions>
                        {/* <ProductDetailOptions title={'Product Details'} items={detail} /> */}
                        {/* <ProductDetailOptions title={'Application'} items={application} /> */}
                        {/* <ProductDetailOptions title={'Specification'} items={specification} /> */}
                    </DetailContentOptions>
                </ProductContent>
            </DetailContent>
        </Container>
    </>
);

ShopItemDtail.propTypes = {
    image: PropTypes.string.isRequired,
    classify: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
};

export default ShopItemDtail;
