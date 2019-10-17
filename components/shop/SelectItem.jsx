import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const SelectItem = ({ number, content, numOfSelected,  setNumOfSelected }) => {
    return (
        <Container>
            
        </Container>
    );
};

SelectItem.propTypes = {
    number: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    numOfSelected: PropTypes.number.isRequired,
    setNumOfSelected: PropTypes.func.isRequired,
};

export default SelectItem;
