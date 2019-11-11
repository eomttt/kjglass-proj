import React, { useCallback, useState } from 'react';

import GlassInfoComp from '../../components/equipment/glassInfo';

import glassInfoDummy from '../../dummy/glassInfo';

const GlassInfo = () => {
    const [glassInfos] = useState(glassInfoDummy);

    const onClickGlassInfo = useCallback((id) => {
        const clickedGlassInfo = Object.values(glassInfos).filter((glassInfo) => {
            return glassInfo.id === id;
        });
        window.open(clickedGlassInfo[0].image);
    }, [glassInfos]);

    return (
        <GlassInfoComp glassInfos={glassInfos} onClickGlassInfo={onClickGlassInfo} />
    );
};

export default GlassInfo;
