import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    width: 100%;
`;

const Content = styled.div`
    width: 50%;
`;

const InputContainer = styled.div`
    width: 50%;
    display: flex;
`;

const InputContent = styled.div`
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    & input {
        text-align: center;
        width: 50px;
        margin-right: 50px;
    }
`;

const ButtonContainer = styled.div`
    cursor: pointer;
    border: 1px solid black;
    padding: 5px;
    margin-right: 0;
    box-shadow: 1px 1px black;
    &: active {
        box-shadow: none;
        margin-left: 1px;
        margin-right: -1px;
    }
`;

const ShopItemDetailInfo = ({
    id, content, onChangeInputCount, onClickAddBascket,
}) => (
    <Container>
        <Content>
            {`- ${content}`}
        </Content>
        <InputContainer>
            <InputContent>
                <input onChange={onChangeInputCount} placeholder={0} type={'number'} />
                <ButtonContainer onClick={() => onClickAddBascket(id)}>
                    {'장바구니'}
                </ButtonContainer>
            </InputContent>
        </InputContainer>
    </Container>
);

ShopItemDetailInfo.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    onChangeInputCount: PropTypes.func.isRequired,
    onClickAddBascket: PropTypes.func.isRequired,
};

ShopItemDetailInfo.defaultProps = {
    id: null,
    content: null,
};

export default ShopItemDetailInfo;
