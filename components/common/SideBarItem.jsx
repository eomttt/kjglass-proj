import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`

`;

const Selected = styled.div`
    color: white;
`;

const Unselected = styled.div`

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
