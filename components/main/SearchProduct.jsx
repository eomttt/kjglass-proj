import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`

`;

const Content = styled.div`

`

const ProductSearch = () => {
    return (
        <div>
            <Title>
                {'제품 검색'}
            </Title>
            <Content>
                {'제품 검색 들'}
            </Content>
        </div>
    );
};

ProductSearch.propTypes = {

};

export default ProductSearch;
