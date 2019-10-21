import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const DetailContainer = styled.div`
    margin-bottom: 10px
`;


const ShopItemDetailInfo = ({ conetent, onChangeInputCount, onClickAddBascket }) => {
    return (
        <DetailContainer></DetailContainer>
    );
};

ShopItemDetailInfo.PropTypes = {
    content: PropTypes.string.isRequried,
    onChangeInputCount: PropTypes.func.isRequired,
    onClickAddBascket: PropTypes.func.isRequired,
}

export default ShopItemDetailInfo;
