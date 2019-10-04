import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const OptionContent = styled.div`
    margin-bottom: 20px;
`;

const OptionContentTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;

const OptionContentText = styled.div`
    font-size: initial;
    padding-left: 10px;
    margin-bottom: 5px;
`;

const ProductDetailOptions = ({ title, items }) => (
    <OptionContent>
        <OptionContentTitle>
            {title}
        </OptionContentTitle>
        {
            items && items.map((item) => <OptionContentText key={item}>{`- ${item}`}</OptionContentText>)

        }
    </OptionContent>
);

ProductDetailOptions.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default ProductDetailOptions;
