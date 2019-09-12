import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`

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
