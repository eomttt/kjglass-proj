import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import NoticesComp from '../../components/customercenter/Notices';
import NoticeComp from '../../components/customercenter/Notice';

import dummy from '../../dummy/notices';

const Notice = ({ noticeId }) => {
    const [notices] = useState(dummy);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const getSelectedNotice = useCallback((id) => {
        return Object.values(notices).filter((notice) => {
            return notice.id === id;
        });
    }, [notices]);

    const clickNotice = useCallback((id) => {
        const selectedProductArr = getSelectedNotice(id);
        setSelectedNotice(selectedProductArr[0]);

        Router.push({
            pathname: '/customercenter',
            query: { id: '1', noticeId: selectedProductArr[0].id },
        });
    }, []);

    useEffect(() => {
        if (noticeId) {
            const selectedProductArr = getSelectedNotice(noticeId);
            setSelectedNotice(selectedProductArr[0]);
        }
    }, []);

    return (
        <>
            {
                (noticeId && selectedNotice)
                    ? <NoticeComp selectedNotice={selectedNotice} />
                    : <NoticesComp notices={notices} clickNotice={clickNotice} />
            }
        </>
    );
};

Notice.propTypes = {
    noticeId: PropTypes.string,
};

Notice.defaultProps = {
    noticeId: null,
};

export default Notice;
