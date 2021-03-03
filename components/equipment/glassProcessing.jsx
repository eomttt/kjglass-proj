import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    & img {
        width: 100%;
    }
`;

const GlassProcessing = ({ imageUrl }) => (
    <Container>
        <img src={imageUrl} alt={'glass processing'} />
    </Container>
);

GlassProcessing.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default GlassProcessing;
