import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {postAquariumData, postContactUsData, postPetRelocationData} from '../../services/Api';
import {navigate} from "../../navigation/RootNavigation";

function* AquariumPostData(data) {
  try {
    const responseData = yield call(postAquariumData, data);
    console.log('response', responseData, responseData.result[0].Success);
    // alert(JSON.stringify(responseData));
    yield put(actions.AQU_ResponseData(responseData));
    // if (responseData.result[0].Success == 1) {
    //   navigate('AquariumSuccess');
    // }
  } catch (e) {
    // yield put(actions.getProductListFail(e));
  }
}
function* ContactPostData(data) {
  try {
    const responseData = yield call(postContactUsData, data);
    console.log('response', responseData, responseData.result[0].Success);
    // alert(JSON.stringify(responseData));
    yield put(actions.CON_response(responseData));
    // if (responseData.result[0].Success == 1) {
    //   navigate('AquariumSuccess');
    // }
  } catch (e) {
    // yield put(actions.getProductListFail(e));
  }
}
function* PetRelocationPostData(data) {
  try {
    const responseData = yield call(postPetRelocationData, data);
    console.log('response', responseData, responseData.result[0].Success);
    // alert(JSON.stringify(responseData));
    yield put(actions.PETREL_response(responseData));
    // if (responseData.result[0].Success == 1) {
    //   navigate('AquariumSuccess');
    // }
  } catch (e) {
    // yield put(actions.getProductListFail(e));
  }
}

export function* formSaga() {
  return yield all([
    yield takeLatest(actionTypes.POST_AQUARIUM_FORM_DATA, AquariumPostData),
    yield takeLatest(actionTypes.POST_CONTACTUS_FORM, ContactPostData),
    yield takeLatest(actionTypes.POST_PET_RELOCATION, PetRelocationPostData),
  ]);
}
