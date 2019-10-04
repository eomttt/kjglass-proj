import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductDetailComp from '../../components/products/ProductDetail';

const ProductDtail = ({ product }) => {
    const [selecetedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (product) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    const clickSetToPrimayImage = useCallback((imageUrl) => {
        setSelectedImage(imageUrl);
    }, [product]);

    return (
        <>
            {
                product
            && (
                <ProductDetailComp
                    {...product}
                    primaryImage={selecetedImage}
                    onClickImage={clickSetToPrimayImage}
                />
            )
            }
        </>
    );
};

ProductDtail.propTypes = {
    product: PropTypes.object,
};

ProductDtail.defaultProps = {
    product: null,
};

export default ProductDtail;
