import React from 'react';
import Router from 'next/router';

import PropTypes from 'prop-types';

import NoticeItemComponent from '../../components/main/NoticeItem';

const NoticeItem = ({ notice }) => {
    const onClickNotice = () => {
        Router.push({
            pathname: '/customercenter',
            query: {
                id: '1',
                noticeId: String(notice.id),
            },
        });
    };

    return (
        <NoticeItemComponent title={notice.title} clickNotice={onClickNotice} />
    );
};

NoticeItem.propTypes = {
    notice: PropTypes.object.isRequired,
};

export default NoticeItem;
