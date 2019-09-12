import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    & img {
        width: 100%;
    }
`;

const Footer = () => (
    <Container>
        {'footer'}
    </Container>
);

export default Footer;
