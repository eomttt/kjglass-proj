import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
    isMobile,
} from '../../styles/style';

const Text = styled.div`
    width: 20%;
    margin: auto;
    text-align: center;
    cursor: pointer;
    $ div {
        display: inline-block;
    }

    ${isMobile} {
        font-size: 12px;
    }
`;

const NavBarItems = ({
    openInfo, openProduct,
    openProductSearch, openEquipment, openCustomerCenter,
}) => (
    <>
        <Text onClick={openInfo}><div>{'회사소개'}</div></Text>
        <Text onClick={openProduct}><div>{'주요제품'}</div></Text>
        <Text onClick={openProductSearch}><div>{'제품검색'}</div></Text>
        <Text onClick={openEquipment}><div>{'기자재정보'}</div></Text>
        <Text onClick={openCustomerCenter}><div>{'고객센터'}</div></Text>
    </>
);

NavBarItems.propTypes = {
    openInfo: PropTypes.func.isRequired,
    openProduct: PropTypes.func.isRequired,
    openProductSearch: PropTypes.func.isRequired,
    openEquipment: PropTypes.func.isRequired,
    openCustomerCenter: PropTypes.func.isRequired,
};

export default NavBarItems;
