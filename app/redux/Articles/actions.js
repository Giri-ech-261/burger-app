import * as actionTypes from './actionTypes'

export const getArticlesListRequest = () => {
    return {
        type: actionTypes.GET_ARTICLES_LIST_REQUEST,
    };
}

export const getArticlesListSuccess = (articlesList) => {
    return {
        type: actionTypes.GET_ARTICLES_LIST_SUCCESS,
        articlesList
    };
}

export const getArticlesListFail = (articlesListError) => {
    return {
        type: actionTypes.GET_ARTICLES_LIST_FAILED,
        articlesListError
    }
}
