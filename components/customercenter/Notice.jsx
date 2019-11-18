import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`

`;

const Content = styled.div`

`;

const Notice = ({ selectedNotice }) => (
    <Container>
        <Title>
            {selectedNotice.title}
        </Title>
        <Content>
            {selectedNotice.content}
        </Content>
    </Container>
);

Notice.propTypes = {
    selectedNotice: PropTypes.object.isRequired,
};

export default Notice;
