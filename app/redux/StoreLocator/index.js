import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    storesList: [],
    loading: false,
    storesListError: undefined,
    storeDetails : null,
    storeDetailsError : undefined
};

function StoresListReducer(state = initialState, action) {
    const {type} = action;

    switch (type) {

        // Get Stores List

        case actionTypes.GET_STORES_LIST_REQUEST:
            return reducer.getStoresListRequest(state, action);
        case actionTypes.GET_STORES_LIST_SUCCESS:
            return reducer.getStoresListSuccess(state, action);
        case actionTypes.GET_STORES_LIST_FAILED:
            return reducer.getStoresListFail(state, action);

        // Get store details by storeId

        case actionTypes.GET_STORE_DETAILS_REQUEST:
            return reducer.getStoreDetailsRequest(state, action);
        case actionTypes.GET_STORE_DETAILS_SUCCESS:
            return reducer.getStoreDetailsSuccess(state, action);
        case actionTypes.GET_STORE_DETAILS_FAILED:
            return reducer.getStoreDetailsFail(state, action);

        default:
            return state;
    }

}

export default StoresListReducer;
