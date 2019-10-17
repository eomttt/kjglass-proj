import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ShopSpecification from '../../containers/shop/ShopSpecification';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
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


const DetailContentOptions = styled.div`

`;

const ShopItemDtail = ({
    image, title, content, specification,
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
                </ProductContent>
            </DetailContent>
            <DetailContentOptions>
                {
                    specification.map((item) => <ShopSpecification key={item.id} item={item} />)
                }
                {/* <ProductDetailOptions title={'Product Details'} items={detail} /> */}
                {/* <ProductDetailOptions title={'Application'} items={application} /> */}
                {/* <ProductDetailOptions title={'Specification'} items={specification} /> */}
            </DetailContentOptions>
        </Container>
    </>
);

ShopItemDtail.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    specification: PropTypes.array.isRequired,
};

export default ShopItemDtail;
