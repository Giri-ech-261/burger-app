import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { getCategoryList } from '../../services/Api';
import * as globals from "../../utills/globals";

function* processGetCategoryList() {
    try {
        const responseData = yield call(getCategoryList);
        console.log("response CategoryList-->", JSON.stringify(responseData))
        if (responseData) {
            if (responseData.httpCode) {
                yield put(actions.getCategoryListFail(responseData));
            } else {
                yield put(actions.getCategoryListSuccess(responseData));
            }
        } else {
            if (responseData.message.includes('timeout')) {
                let errorMessage ={
                    message : "Timeout your request."
                }
                yield put(actions.getCategoryListFail(errorMessage));
            }else{
                yield put(actions.getCategoryListFail(responseData));
            }
            
        }
    } catch (e) {
        yield put(actions.getCategoryListFail(e));
    }
}

export function* categorySaga() {
    return yield all([
        yield takeLatest(actionTypes.GET_CATEGORY_LIST_REQUEST, processGetCategoryList),
    ]);
}
