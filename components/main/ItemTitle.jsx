import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pointColor } from '../../styles/style';

const Container = styled.div`
    border-top: 1px solid ${pointColor}
`;

const ItemTitle = ({ title, clickTitle }) => (
    <Container onClick={clickTitle}>
        {title}
    </Container>
);

ItemTitle.propTypes = {
    title: PropTypes.string.isRequired,
    clickTitle: PropTypes.func.isRequired,
};

export default ItemTitle;
