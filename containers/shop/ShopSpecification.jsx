import React, { useState } from 'react';

import PropTypes from 'prop-types';

import SelectItemComp from '../../components/shop/SelectItem';

const ShopSpecification = ({ item }) => {
    const [numOfSelected, setNumOfSelected] = useState(0);

    const onSetNumOfSelected = () => {
        setNumOfSelected(numOfSelected + 1);
    };

    return (
        <SelectItemComp
            number={item.number}
            content={item.content}
            numOfSelected={numOfSelected}
            setNumOfSelected={onSetNumOfSelected} />
    );
};

ShopSpecification.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ShopSpecification;
