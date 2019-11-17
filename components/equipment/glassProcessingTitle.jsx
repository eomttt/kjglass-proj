import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const GlassProcessingTitle = ({
    id, text, isSelected, clickTitle,
}) => {
    const Container = styled.div`
        background-color: ${isSelected ? subPointColor : 'white'};
        width: 25%;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        padding: 10px 0;
        color: ${isSelected ? 'white' : 'black'};
    `;

    return (
        <Container onClick={() => clickTitle(id)}>
            {text}
        </Container>
    );
};

GlassProcessingTitle.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    clickTitle: PropTypes.func.isRequired,
};

export default GlassProcessingTitle;
