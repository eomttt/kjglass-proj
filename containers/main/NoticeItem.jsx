import React from 'react';

import PropTypes from 'prop-types';

import NoticeItemComponent from '../../components/main/NoticeItem';

const NoticeItem = ({ notice }) => {
    const onClickNotice = () => {
        console.log('Click notice id', notice.id);
    };

    return (
        <NoticeItemComponent title={notice.title} clickNotice={onClickNotice} />
    );
};

NoticeItem.propTypes = {
    notice: PropTypes.object.isRequired,
};

export default NoticeItem;
