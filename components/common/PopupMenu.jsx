import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cancel from '../../lib/images/cancel.png';

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    z-index: 100;
`;

const PopupHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    & img {
        margin: auto 10px auto auto;
        width: 20px;
    }
`;

const PopupMenu = ({ children, closePopup }) => (
    <Container>
        <PopupHeader onClick={closePopup}>
            <img src={Cancel} alt={'Cancel'} />
        </PopupHeader>
        {children}
    </Container>
);

PopupMenu.propTypes = {
    children: PropTypes.any.isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default PopupMenu;
