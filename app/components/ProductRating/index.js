import React from 'react'
import * as colors from '../../assets/styles/color';
import StarRating from 'react-native-star-rating';

const ProductRating = (props) => {
    return (
        <StarRating
            {...props}/>
    )
}

export default ProductRating
