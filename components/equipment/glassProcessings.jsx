import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlassProcessingTitle from './glassProcessingTitle';
import GlassProcessing from './glassProcessing';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const GlassProcessings = ({ glassProcessings, selectedProcessing, clickTitle }) => {
    const isSelected = useCallback((id) => id === selectedProcessing.id, [selectedProcessing]);

    return (
        <Container>
            {
                Object.values(glassProcessings).map((item) => (
                    <GlassProcessingTitle
                        id={item.id}
                        text={item.title}
                        isSelected={isSelected(item.id)}
                        clickTitle={clickTitle}
                        key={item.id}
                    />
                ))
            }
            <GlassProcessing imageUrl={selectedProcessing.image} />
        </Container>
    );
};

GlassProcessings.propTypes = {
    glassProcessings: PropTypes.object.isRequired,
    selectedProcessing: PropTypes.object.isRequired,
    clickTitle: PropTypes.func.isRequired,
};

export default GlassProcessings;
