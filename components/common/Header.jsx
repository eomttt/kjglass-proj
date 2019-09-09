import React from 'react';
import styled from 'styled-components';

import HeaderImage from '../../lib/images/subvisual.png';

const Container = styled.div`
    width: 100%;
    & img {
        width: 100%;
    }
`;

const Header = () => {
    return (
        <Container>
            <img src={HeaderImage} alt={'Header'} />
        </Container>
    );
};

export default Header;
