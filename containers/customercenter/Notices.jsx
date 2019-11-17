import React, { useState, useCallback } from 'react';

import NoticesComp from '../../components/customercenter/Notices';
import NoticeComp from '../../components/customercenter/Notice';

import dummy from '../../dummy/notices';

const Notice = () => {
    const [notices] = useState(dummy);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const clickNotice = useCallback((noticeId) => {
        const selected = Object.values(notices).filter((notice) => notice.id === noticeId);
        setSelectedNotice(selected[0]);
    }, [notices]);

    return (
        <>
            {
                selectedNotice
                    ? <NoticeComp selectedNotice={selectedNotice} />
                    : <NoticesComp notices={notices} clickNotice={clickNotice} />
            }
        </>
    );
};

export default Notice;
