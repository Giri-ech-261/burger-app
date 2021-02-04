import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { getPetList, getPetDropDownList, deletePetData, addPetData, editPetData } from '../../services/Api';
import * as globals from "../../utills/globals";

 
function* processGetPetList() {
    try {
            const responseData = yield call(getPetList);
            console.log("response PetList-->", JSON.stringify(responseData))
            if (responseData.result) {
                    yield put(actions.getPetListSuccess(responseData.result));
            } else {
                if (responseData.message.includes('timeout')) {
                    let errorMessage ={
                        message : "Timeout your request."
                    }
                    yield put(actions.getPetListFail(errorMessage));
                }else{
                    yield put(actions.getPetListFail(responseData.result));
                }
            }
    } catch (e) {
        yield put(actions.getPetListFail(e));
    }
}

function* deletePet(id) {
    try {
        const response = yield call(deletePetData, id);
        console.log('responseData Delete-->', response);
        response.deleted = true
        if (response) {
            yield put(actions.deletePetSuccess(response))
        }
    } catch (error) {
        console.log("error ", error);
        // alert('Error', JSON.stringify(error))
    }
}

 function* addPetRequest(data) {
    try {
        const response = yield  call(addPetData, data);
        response.added = true
        // console.log('responseData AddPet-->', response);
        if (response) {
            yield put(actions.addPetSuccess(response))
        }
    } catch (error) {
        console.log("error ", error);
        // alert('Error', JSON.stringify(error))
    }
}
function* editPetRequest(data, id) {
    try {
        const response = yield  call(editPetData, data, id);
        response.edited = true
        console.log('responseData edit-->', response);
        if (response) {
            yield put(actions.editPetSuccess(response))
        }
    } catch (error) {
        console.log("error ", error);
        // alert('Error', JSON.stringify(error))
    }
}

function* getDropDownList() {
    try {
       
            const responseData = yield call(getPetDropDownList);
            // console.log("response getPetDropDownList-->", JSON.stringify(responseData))
            if (responseData.data) {
                yield put(actions.getPetDropDownSuccess(responseData.data))
            }else{
                let errorMessage = {
                    message: 'access token expired'
                }
                yield put(actions.getPetDropDownFail(errorMessage));
            }
             
    } catch (e) {
        let errorMessage = {
            message: 'access token expired'
        }
        yield put(actions.getPetDropDownFail(errorMessage));
        // yield put(actions.getPetDropDownFail(e));
    }
}

export function* petSaga() {
    return yield all([
        yield takeLatest(actionTypes.GET_PET_LIST_REQUEST, processGetPetList),
        yield takeLatest(actionTypes.GET_PET_DROPDOWN_LIST, getDropDownList),
        yield takeLatest(actionTypes.DELETE_PET, deletePet),
        yield takeLatest(actionTypes.ADD_PET_REQUEST, addPetRequest),
        yield takeLatest(actionTypes.EDIT_PET_REQUEST, editPetRequest),

    ]);
}
