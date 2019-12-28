/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor, isMobile } from '../../styles/style';

const Container = styled.div`
    width: 100%;
    margin: 10px;
    position: relative;
    display: flex;
    border-bottom: 1px solid black;
    position: relative;
    & img {
        margin-top: 0;
        width: 100px;
        ${isMobile} {
            width: auto;
            height: 100px;
            margin: auto 0;
        }
    }
`;

const Content = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Delete = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    text-decoration: underline;
`;

const Count = styled.div`
    position: absolute;
    text-decoration: underline;
    bottom: 0;
    right: 0;
    font-size: 20px;
    color: ${subPointColor};
`;

const Basket = ({ item, onClickRemove }) => {
    const removeItem = (e, selectedItem, selectedSpecificItem) => {
        e.stopPropagation();
        e.preventDefault();

        const res = confirm('삭제 하시겠습니까?');

        if (res) {
            onClickRemove(selectedItem, selectedSpecificItem);
        }
    };

    if (item) {
        const { count, selectedItem, selectedSpecificItem } = item;
        return (
            <Container>
                <img src={selectedItem.image} alt={'basket'} />
                <Content>
                    <Delete onClick={(e) => removeItem(e, selectedItem, selectedSpecificItem)}>
                        {'삭제'}
                    </Delete>
                    <div>
                        {`${selectedSpecificItem.number}: ${selectedSpecificItem.content}`}
                    </div>
                    <Count>
                        {`갯수: ${count}`}
                    </Count>
                </Content>
            </Container>
        );
    }

    return (
        <></>
    );
};

Basket.propTypes = {
    item: PropTypes.object.isRequired,
    onClickRemove: PropTypes.func.isRequired,
};

export default Basket;
