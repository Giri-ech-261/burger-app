import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { adminLogin} from '../../services/Api';
import * as globals from "../../utills/globals";

 
function* adminLoginRequest() {
    try {
            const responseData = yield call(adminLogin);
            console.log("response admin-->", JSON.stringify(responseData))
             if (responseData) {
                 globals.accessToken = responseData.access_token;
                 yield put(actions.adminLoginSuccess(responseData.access_token));
             }
    } catch (e) {
        yield put(actions.adminLoginFail(e));
        globals.accessToken = '';
    }
}

 

 

export function* adminSaga() {
    return yield all([
        yield takeLatest(actionTypes.ADMIN_LOGIN_REQUEST, adminLoginRequest),
    ]);
}
