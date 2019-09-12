import React, { useRef } from 'react';

import ItemTitle from '../../components/main/ItemTitle';
import NoticeItems from '../../components/main/NoticeItems';

const Notice = () => {
    const notices = useRef([{
        id: 1,
        title: 'kjglass 유사상표 주의 하여 주십시요',
        content: 'test content',
    }, {
        id: 2,
        title: 'kjglass 유사상표 주의 하여 주십시요2',
        content: 'test content',
    }, {
        id: 3,
        title: 'kjglass 유사상표 주의 하여 주십시3',
        content: 'test content',
    }, {
        id: 4,
        title: 'kjglass 유사상표 주의 하여 주십시요4',
        content: 'test content',
    }, {
        id: 5,
        title: 'kjglass 유사상표 주의 하여 주십시요5',
        content: 'test content',
    }]);

    const onClickTitle = () => {
        console.log('Notice click title');
    };

    return (
        <>
            <ItemTitle title={'공지 사항'} clickTitle={onClickTitle} />
            <NoticeItems notices={notices.current} />
        </>
    );
};

export default Notice;
