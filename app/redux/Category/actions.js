import * as actionTypes from './actionTypes'

export const getCategoryListRequest = () => {
    return {
        type: actionTypes.GET_CATEGORY_LIST_REQUEST,
    };
}

export const getCategoryListSuccess = (categoryList) => {
    return {
        type: actionTypes.GET_CATEGORY_LIST_SUCCESS,
        categoryList
    };
}

export const getCategoryListFail = (categoryListError) => {
    return {
        type: actionTypes.GET_CATEGORY_LIST_FAILED,
        categoryListError
    }
}
