import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {getProductList} from '../../services/Api';

function* processGetProductList() {
  try {
    const responseData = yield call(getProductList);
    console.log('response', responseData);
    yield put(actions.getProductListSuccess(responseData));
  } catch (e) {
    yield put(actions.getProductListFail(e));
  }
}
export function* productSaga() {
  return yield all([
    yield takeLatest(
      actionTypes.GET_PRODUCT_LIST_REQUEST,
      processGetProductList,
    ),
  ]);
}
