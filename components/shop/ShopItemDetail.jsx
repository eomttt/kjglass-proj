import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ShopItemDetailInfo from '../../containers/shop/ShopItemDetailInfo';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-direction: column;
`;

const DetailContent = styled.div`
    display: flex;
    width: 100%;
`;

const PrimaryImage = styled.div`
    width: 35%;
    display: flex;
    padding: 15px;
    & img {
        margin: auto;
        width: 80%;
    }
`;

const ProductContent = styled.div`
    width: 65%;
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
    margin-top: 30px;
`;

const DetailTitle = styled.div`
    margin-bottom: 20px;
`;

const ShopItemDtail = ({
    type, id, image, title, content, specification,
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
                <DetailTitle>
                    {'Specification'}
                </DetailTitle>
                {
                    specification.map((item) => (
                        <ShopItemDetailInfo
                            key={item.id}
                            itemType={type}
                            itemId={id}
                            specificationItem={item}
                        />
                    ))
                }
            </DetailContentOptions>
        </Container>
    </>
);

ShopItemDtail.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    specification: PropTypes.array.isRequired,
};

export default ShopItemDtail;
