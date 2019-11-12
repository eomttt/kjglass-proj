import React from 'react';
import PropTypes from 'prop-types';

const GlassProcessing = ({ imageUrl }) => (
    <>
        <img src={imageUrl} alt={'glass processing'} />
    </>
);

GlassProcessing.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default GlassProcessing;
