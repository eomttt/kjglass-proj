import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    pointColor,
    subPointColor,
} from '../../styles/style';

const Container = styled.div`
    margin: 15px;
    width: 100%;
`;

const Title = styled.div`
    color: ${pointColor};
    margin-bottom: 25px;
`;

const Content = styled.div`
    width: 30%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
    color: ${subPointColor};
`;

const GlassInfo = ({ glassInfos, onClickGlassInfo }) => (
    <Container>
        <Title>
            {'제품명을 클릭하시면 자세히 보실 수 있습니다.'}
        </Title>
        {
            Object.values(glassInfos).map((glassInfo) => (
                <Content onClick={() => onClickGlassInfo(glassInfo.id)}>{glassInfo.title}</Content>
            ))
        }
    </Container>
);

GlassInfo.propTypes = {
    glassInfos: PropTypes.object.isRequired,
    onClickGlassInfo: PropTypes.func.isRequired,
};

export default GlassInfo;
