import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Content = styled.div`
    border: 1px solid black;
    padding: 15px;
    line-height: 25px;
`;

const Notice = ({ selectedNotice }) => (
    <Container>
        <Title>
            {selectedNotice.title}
        </Title>
        <Content dangerouslySetInnerHTML={{ __html: selectedNotice.content }} />
    </Container>
);

Notice.propTypes = {
    selectedNotice: PropTypes.object.isRequired,
};

export default Notice;
