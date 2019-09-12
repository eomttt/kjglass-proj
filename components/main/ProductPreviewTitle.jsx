import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPoringColor } from '../../styles/style';

const Container = styled.div`
    padding: 10px;
    display: flex;
    text-align: center;
`;

const Title = styled.div`
    margin: auto;
    font-size: 25px;
    font-weight: 500;
    & span {
        color: ${subPoringColor}; 
    }
`;

const Button = styled.div`
    margin-right: 0;
    background-color: ${subPoringColor};
    color: white;
    padding: 15px;
    cursor: pointer;
`;

const ProductPreview = ({ clickDownload }) => (
    <Container>
        <Title>
            <span>
                {'광진이화학'}
            </span>
            {'의 최신 기자재를 소개합니다.'}
        </Title>
        <Button onClick={clickDownload}>
            {'카타로그 다운로드'}
        </Button>
    </Container>
);

ProductPreview.propTypes = {
    clickDownload: PropTypes.func.isRequired,
};

export default ProductPreview;
