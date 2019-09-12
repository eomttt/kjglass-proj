import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
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
