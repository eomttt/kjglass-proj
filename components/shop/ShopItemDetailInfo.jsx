import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { isMobile } from '../../styles/style';

const Table = styled.div`
    width: inherit;
    display: flex;
    border: 1px solid black;
    min-height: ${(props) => (props.isMenu ? '30px' : '70px')};
    font-weight: ${(props) => (props.isMenu ? 'bold' : '')}; 
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => (props.isMenu ? '#8080804d' : 'transparent')};
    ${Table}:nth-child(3n+1) {
        border-right: 0;
        min-width: 20%;
    }
    ${Table}:nth-child(3n+2) {
        border-right: 0;
        min-width: 40%;
    }
    ${Table}:nth-child(3n) {
        min-width: 38%;
    }
`;

const Number = styled.div`
    margin: auto 0;
    padding-left: 1%;
    display: inline-block;
`;

const Content = styled.div`
    margin: auto 0;
    padding-left: 1%;
    display: inline-block;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
`;

const InputMenuText = styled.div`
    padding-right: 5%;
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
        padding-right: 5%;
        margin: auto;
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
    margin-right: 5%;
    max-height: 20px;
    &: active {
        box-shadow: none;
        margin-left: 1px;
        margin-right: -1px;
    }
    & div {
        margin: auto 5%;
    }
`;

const ShopItemDetailInfo = ({
    content, number, onChangeInputCount, onClickAddBascket, isMenu,
}) => (
    <Container isMenu={isMenu}>
        <Table isMenu={isMenu}>
            <Number>
                {number}
            </Number>
        </Table>
        <Table isMenu={isMenu}>
            <Content>
                {content}
            </Content>
        </Table>
        <Table isMenu={isMenu}>
            <InputContainer>
                <InputContent isMenu={isMenu}>
                    {
                        isMenu
                            ? (
                                <InputMenuText>
                                    {'수량'}
                                </InputMenuText>
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
        </Table>

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
