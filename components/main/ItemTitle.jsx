import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pointColor, lightGrayColor } from '../../styles/style';

const Container = styled.div`
    padding: 12px;
    font-size: 19px;
    margin-bottom: 10px;
    border-top: 2px solid ${pointColor};
    border-bottom: 1px solid ${lightGrayColor};
    cursor: pointer;
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
