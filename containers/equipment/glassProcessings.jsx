import React, { useEffect, useState, useCallback } from 'react';

import GlassProcessingTitle from '../../components/equipment/glassProcessingTitle';
import GlassProcessingComp from '../../components/equipment/glassProcessing';

import glassProcessingsInfo from '../../dummy/glassProcessing';

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

    const isSelected = useCallback((id) => id === selectedProcessing.id, [selectedProcessing]);

    return (
        <>
            {
                selectedProcessing
            && (
            <>
                {
                    Object.values(glassProcessings).map((item) => (
                        <GlassProcessingTitle
                            id={item.id}
                            text={item.title}
                            isSelected={isSelected(item.id)}
                            clickTitle={clickTitle}
                        />
                    ))
                }
                <GlassProcessingComp imageUrl={selectedProcessing.image} />
            </>
            )
            }
        </>

    );
};

export default GlassProcessings;
