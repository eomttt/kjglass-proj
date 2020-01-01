import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { isMobile } from '../../styles/style';

const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    height: ${(props) => (props.isMenu ? '30px' : '')};
    background-color: ${(props) => (props.isMenu ? '#8080804d' : 'transparent')};
`;

const Number = styled.div`
    min-width: 20%;
    margin: auto 0;
    padding-left: 1%;
`;

const Content = styled.div`
    min-width: 40%;
    margin: auto 0;
    padding-left: 1%;
`;

const InputContainer = styled.div`
    min-width: 38%;
    display: flex;
`;

const InputContent = styled.div`
    width: 100%;
    margin-top: ${(props) => (props.isMenu ? 'auto' : '0')};
    margin-bottom: ${(props) => (props.isMenu ? 'auto' : '0')};
    margin-left: 0;
    display: flex;
    & input {
        font-size: 16px;
        text-align: center;
        width: 40px;
        height: 20px;
        margin: auto 0;
        ${isMobile} {
            width: 20px;
        }
    }
`;

const ButtonContainer = styled.div`
    cursor: pointer;
    border: 1px solid black;
    padding: 5px;
    box-shadow: 1px 1px black;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    max-height: 20px;
    &: active {
        box-shadow: none;
        margin-left: 1px;
        margin-right: -1px;
    }
    & div {
        margin: auto;
    }
`;

const ShopItemDetailInfo = ({
    content, number, onChangeInputCount, onClickAddBascket, isMenu,
}) => (
    <Container isMenu={isMenu}>
        <Number>
            {number}
        </Number>
        <Content>
            {content}
        </Content>
        <InputContainer>
            <InputContent isMenu={isMenu}>
                {
                    isMenu
                        ? (
                            <div>
                                {'수량'}
                            </div>
                        )
                        : (
                            <>
                                <input onChange={onChangeInputCount} placeholder={0} type="number" min="0" />
                                <ButtonContainer onClick={onClickAddBascket}>
                                    <div>
                                        {'장바구니'}
                                    </div>
                                </ButtonContainer>
                            </>
                        )
                }
            </InputContent>
        </InputContainer>
    </Container>
);


ShopItemDetailInfo.propTypes = {
    number: PropTypes.string,
    content: PropTypes.string,
    isMenu: PropTypes.bool,
    onChangeInputCount: PropTypes.func,
    onClickAddBascket: PropTypes.func,
};

ShopItemDetailInfo.defaultProps = {
    number: null,
    content: null,
    isMenu: false,
    onChangeInputCount: () => {},
    onClickAddBascket: () => {},
};

export default ShopItemDetailInfo;
