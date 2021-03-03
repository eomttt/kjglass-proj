import React, { useCallback } from 'react';
import Router from 'next/router';

import ItemTitle from '../../components/main/ItemTitle';
import NoticeItems from '../../components/main/NoticeItems';

import dummy from '../../data/notices';

const Notice = () => {
    const onClickTitle = useCallback(() => {
        Router.push({
            pathname: '/customercenter',
            query: {
                id: '1',
            },
        });
    }, []);

    return (
        <>
            <ItemTitle title={'공지 사항'} clickTitle={onClickTitle} />
            <NoticeItems notices={dummy} />
        </>
    );
};

export default Notice;
