import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { isMobile } from '../../styles/style';

import CSImage from '../../lib/images/cs_center.png';

const Container = styled.div`
    display: flex;
    & img {
        margin: auto;
        width: 100%;
        cursor: pointer;
        ${isMobile} {
            width: 90%;
        }
    }
`;

const CustomerCenter = ({ onClickCS }) => (
    <Container onClick={onClickCS}>
        <img src={CSImage} alt={'cs'} />
    </Container>
);

CustomerCenter.propTypes = {
    onClickCS: PropTypes.func.isRequired,
};

export default CustomerCenter;
