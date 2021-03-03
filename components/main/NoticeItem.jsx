import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 10px;
    margin-bottom: 8px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;

const NoticeItem = ({ title, clickNotice }) => (
    <Container onClick={clickNotice}>
        {title}
    </Container>
);

NoticeItem.propTypes = {
    title: PropTypes.string.isRequired,
    clickNotice: PropTypes.func.isRequired,
};

export default NoticeItem;
