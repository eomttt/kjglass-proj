import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Catalog from './Catalog';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`
    margin-bottom: 50px;
    font-size: 20px;
    text-align: center;
`;

const Catalogs = ({ products }) => (
    <Container>
        <Title>{'카탈로그를 눌러서 다운받으세요.'}</Title>
        {
            products && products.map((product) => (
                <Catalog
                    key={product.id}
                    title={product.title}
                    link={product.downloadLink}
                />
            ))
        }
    </Container>
);

Catalogs.propTypes = {
    products: PropTypes.array.isRequired,
};

export default Catalogs;
