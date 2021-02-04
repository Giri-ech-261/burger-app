import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    articlesList: [],
    loading: false,
    articlesListError: undefined,
};

function ArticlesListReducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
        case actionTypes.GET_ARTICLES_LIST_REQUEST:
            return reducer.getArticlesListRequest(state, action);
        case actionTypes.GET_ARTICLES_LIST_SUCCESS:
            return reducer.getArticlesListSuccess(state, action);
        case actionTypes.GET_ARTICLES_LIST_FAILED:
            return reducer.getArticlesListFail(state, action);
        default:
            return state;
    }

}

export default ArticlesListReducer;
