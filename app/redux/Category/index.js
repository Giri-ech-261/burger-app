import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    categoryList: [],
    loading: false,
    categoryListError: undefined,
};

function CategoryListReducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
        case actionTypes.GET_CATEGORY_LIST_REQUEST:
            return reducer.getCategoryListRequest(state, action);
        case actionTypes.GET_CATEGORY_LIST_SUCCESS:
            return reducer.getCategoryListSuccess(state, action);
        case actionTypes.GET_CATEGORY_LIST_FAILED:
            return reducer.getCategoryListFail(state, action);
        default:
            return state;
    }

}

export default CategoryListReducer;
