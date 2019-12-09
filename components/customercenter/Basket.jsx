import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    & img {
        width: 100px;
    }
`;

const Content = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Count = styled.div`
    margin-top: 10px;
    margin-left: auto;
    text-decoration: underline;
    color: ${subPointColor};
`;

const Basket = ({ item }) => {
    if (item) {
        const { count, selectedItem, selectedSpecificItem } = item;
        return (
            <Container>
                <img src={selectedItem.image} alt={'basket'} />
                <Content>
                    <div>
                        {selectedItem.content[0]}
                    </div>
                    <div>
                        {selectedSpecificItem.content}
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
};

export default Basket;
