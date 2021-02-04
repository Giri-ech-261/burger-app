import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    productList: [],
    productListError: undefined,
};

function galleryReducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
        case actionTypes.GET_PRODUCT_LIST_REQUEST:
            return reducer.getProductListRequest(state, action);
        case actionTypes.GET_PRODUCT_LIST_SUCCESS:
            return reducer.getProductListSuccess(state, action);
        case actionTypes.GET_PRODUCT_LIST_FAILED:
            return reducer.getProductListFail(state, action);
        default:
            return state;
    }

}

export default galleryReducer;
