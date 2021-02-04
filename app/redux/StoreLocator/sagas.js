import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { getStoresList, getStoreDetailsByStoreID } from '../../services/Api';
import * as globals from "../../utills/globals";

function* processGetStoresList() {
    try {
        const responseData = yield call(getStoresList);
        if (responseData) {
            if (responseData.httpCode) {
                yield put(actions.getStoresListFail(responseData));
            } else {
                yield put(actions.getStoresListSuccess(responseData));
            }
        } else {
            if (responseData.message.includes('timeout')) {
                let errorMessage ={
                    message : "Timeout your request."
                }
                yield put(actions.getStoresListFail(errorMessage));
            }else{
                yield put(actions.getStoresListFail(responseData));
            }
            
        }
    } catch (e) {
        yield put(actions.getStoresListFail(e));
    }
}

function* processGetStoreDetailsByStoreID(storeId) {
    try {
        const responseData = yield call(getStoreDetailsByStoreID ,storeId);
        if (responseData) {
            if (responseData.httpCode) {
                yield put(actions.getStoreDetailsFail(responseData));
            } else {
                yield put(actions.getStoreDetailsSuccess(responseData.res));
            }
        } else {
            if (responseData.message.includes('timeout')) {
                let errorMessage = {
                    message : "Timeout your request."
                }
                yield put(actions.getStoreDetailsFail(errorMessage));
            } else{
                yield put(actions.getStoreDetailsFail(responseData));
            }
        }
    } catch (e) {
        yield put(actions.getStoreDetailsFail(e));
    }
}

export function* storesSaga() {
    return yield all([
        yield takeLatest(actionTypes.GET_STORES_LIST_REQUEST, processGetStoresList),
        yield takeLatest(actionTypes.GET_STORE_DETAILS_REQUEST, processGetStoreDetailsByStoreID),
    ]);
}
