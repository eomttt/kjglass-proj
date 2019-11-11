import React, { useCallback, useState } from 'react';

import GlassInfoComp from '../../components/equipment/glassInfo';

import glassInfoDummy from '../../dummy/glassInfo';

const GlassInfo = () => {
    const [glassInfos] = useState(glassInfoDummy);

    const onClickGlassInfo = useCallback((id) => {
        // TODO: Click event;
    }, [glassInfos]);

    return (
        <GlassInfoComp glassInfos={glassInfos} onClickGlassInfo={onClickGlassInfo} />
    );
};

export default GlassInfo;
