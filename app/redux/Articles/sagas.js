import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { getArticlesList } from '../../services/Api';
import * as globals from "../../utills/globals";

function* processGetArticlesList() {
    try {
       
            const responseData = yield call(getArticlesList);
            console.log("response ArticlesList-->", JSON.stringify(responseData))
            console.log(responseData.status,'responseData.status--------------')
            if (responseData) {
                if (responseData.httpCode) {
                    yield put(actions.getArticlesListFail(responseData));
                } else {
                    yield put(actions.getArticlesListSuccess(responseData));
                }
            } else {
                if (responseData.message.includes('timeout')) {
                    let errorMessage ={
                        message : "Timeout your request."
                    }
                    yield put(actions.getArticlesListFail(errorMessage));
                }else{
                    yield put(actions.getArticlesListFail(responseData));
                }
                
            }
    } catch (e) {
        yield put(actions.getArticlesListFail(e));
    }
}

export function* ArticlesSaga() {
    return yield all([
        yield takeLatest(actionTypes.GET_ARTICLES_LIST_REQUEST, processGetArticlesList),
    ]);
}
