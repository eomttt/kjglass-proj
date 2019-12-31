import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { isMobile } from '../../styles/style';

const ShopItemDetailInfo = ({
    content, number, onChangeInputCount, onClickAddBascket, isMenu,
}) => {
    const Container = styled.div`
        margin-bottom: 10px;
        display: flex;
        width: 100%;
        height: ${isMenu ? '30px' : ''};
        background-color: ${isMenu ? '#8080804d' : 'transparent'};
    `;

    const Content = styled.div`
        width: 50%;
        margin: ${isMenu ? 'auto 0 auto 10px' : '0 0 0 10px'};
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
            font-size: 16px;
            text-align: center;
            width: 50px;
            margin-right: 50px;
            ${isMobile} {
                margin-right: 10px;
            }
        }
    `;

    const ButtonContainer = styled.div`
        cursor: pointer;
        border: 1px solid black;
        padding: 5px;
        margin-right: 0;
        box-shadow: 1px 1px black;
        display: flex;
        &: active {
            box-shadow: none;
            margin-left: 1px;
            margin-right: -1px;
        }
        & div {
            margin: auto;
        }
    `;

    return (
        <Container>
            <Content>
                {number}
            </Content>
            <Content>
                {content}
            </Content>
            <InputContainer>
                <InputContent>
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
};


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
