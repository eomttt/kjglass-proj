import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
`;

const Selected = styled.div`
    color: white;
    padding: 15px 10px;
    background-color: ${subPointColor};
`;

const Unselected = styled.div`
    padding: 15px 10px;
`;

const SideBarItem = ({ item }) => (
    <Container>
        {
            item.clicked
                ? <Selected>{item.text}</Selected>
                : <Unselected>{item.text}</Unselected>
        }
    </Container>
);

SideBarItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SideBarItem;
