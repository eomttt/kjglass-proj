import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { subPoringColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    color: ${subPoringColor}
`;

const ProductText = styled.div`

`;


const DetailContentOptions = styled.div`
    margin-top: 30px;
`;

const DetailTitle = styled.div`
    margin-bottom: 20px;
`;

const DetailText = styled.div`
    margin-bottom: 10px
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
                <DetailTitle>
                    {'Specification'}
                </DetailTitle>
                {
                    specification.map((spec) => {
                        return <DetailText>{`- ${spec.content}`}</DetailText>;
                    })
                }
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
