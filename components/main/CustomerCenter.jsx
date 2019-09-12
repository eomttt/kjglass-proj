import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import CSImage from '../../lib/images/cs_center.png';

const Title = styled.div`

`;

const Content = styled.div`

`;

const CustomerCenter = ({ onClickCS }) => (
    <div onClick={onClickCS}>
        <Title>
            {'고객 센터'}
        </Title>
        <Content>
            <img src={CSImage} alt={'cs'} />
        </Content>
    </div>
);

CustomerCenter.propTypes = {
    onClickCS: PropTypes.func.isRequired,
};

export default CustomerCenter;
