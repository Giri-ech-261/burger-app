import * as actionTypes from './actionTypes'

// Get Stores List
export const getStoresListRequest = () => {
    return {
        type: actionTypes.GET_STORES_LIST_REQUEST,
    };
}

export const getStoresListSuccess = (storesList) => {
    return {
        type: actionTypes.GET_STORES_LIST_SUCCESS,
        storesList
    };
}

export const getStoresListFail = (storesListError) => {
    return {
        type: actionTypes.GET_STORES_LIST_FAILED,
        storesListError
    }
}

// Get store details by storeId

export const getStoreDetailsRequest = (storeId) => {
    return {
        type: actionTypes.GET_STORE_DETAILS_REQUEST,
        storeId
    };
}

export const getStoreDetailsSuccess = (storeDetails) => {
    return {
        type: actionTypes.GET_STORE_DETAILS_SUCCESS,
        storeDetails
    };
}

export const getStoreDetailsFail = (storeDetailsError) => {
    return {
        type: actionTypes.GET_STORE_DETAILS_FAILED,
        storeDetailsError
    }
}