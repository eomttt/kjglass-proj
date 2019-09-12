import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoticeItem from '../../containers/main/NoticeItem';

const Container = styled.div`

`;

const NoticeItems = ({ notices }) => (
    <Container>
        {
            notices.slice(0, 3).map((notice) => <NoticeItem notice={notice} />)
        }
    </Container>
);

NoticeItems.propTypes = {
    notices: PropTypes.array.isRequired,
};

export default NoticeItems;
