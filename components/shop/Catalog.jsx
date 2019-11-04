import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    width: 100%;
    margin-bottom: 25px;
    cursor: pointer;
    text-align: center;
`;

const Download = styled.a`
    color: ${subPointColor};
    cursor: pointer;
`;

const Catalog = ({ title, link }) => (
    <>
        <Container>
            <Download href={link} target={'_blank'} download>
                {title}
            </Download>
        </Container>
    </>
);

Catalog.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Catalog;
