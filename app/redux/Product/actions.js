import * as actionTypes from './actionTypes'

export const getProductListRequest = () => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_REQUEST,
    };
}

export const getProductListSuccess = (productList) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_SUCCESS,
        productList
    };
}

export const getProductListFail = (productListError) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_FAILED,
        productListError
    }
}
