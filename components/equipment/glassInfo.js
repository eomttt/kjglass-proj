import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    subPointColor,
} from '../../styles/style';

const Container = styled.div`
    margin: 15px;
    width: 100%;
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
