import React, { useEffect, useState, useCallback } from 'react';

import GlassProcessingsComp from '../../components/equipment/glassProcessings';

import glassProcessingsInfo from '../../data/glassProcessing';

const GlassProcessings = () => {
    const [glassProcessings] = useState(glassProcessingsInfo);
    const [selectedProcessing, setSelectedProcessing] = useState(null);

    useEffect(() => {
        if (glassProcessings) {
            setSelectedProcessing(glassProcessings.one_neck_flask);
        }
    }, [glassProcessings]);

    const clickTitle = useCallback((id) => {
        const selected = Object.values(glassProcessings).filter((glassProccessing) => glassProccessing.id === id);
        setSelectedProcessing(selected[0]);
    }, [glassProcessings]);

    return (
        <>
            {
                selectedProcessing && (
                    <GlassProcessingsComp
                        glassProcessings={glassProcessings}
                        selectedProcessing={selectedProcessing}
                        clickTitle={clickTitle}
                    />
                )
            }
        </>
    );
};

export default GlassProcessings;
