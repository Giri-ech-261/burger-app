import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    petList: [],
    loading: false,
    petListError: undefined,
    petListDropdown: {},
    dropDownData: {},
    petAdded: { added: false },
    petEdited: { edited: false },
    petDeleted: { deleted: false },
};

function petListReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case actionTypes.GET_PET_LIST_REQUEST:
            return reducer.getPetListRequest(state, action);
        case actionTypes.GET_PET_LIST_SUCCESS:
            return reducer.getPetListSuccess(state, action);
        case actionTypes.GET_PET_LIST_FAILED:
            return reducer.getPetListFail(state, action);
        case actionTypes.GET_PET_DROPDOWN_LIST:
            return reducer.getPetDropDown(state, action);
        case actionTypes.GET_PET_DROPDOWN_LIST_SUCCESS:
            return reducer.getPetDropDownSuccess(state, action);
        case actionTypes.GET_PET_DROPDOWN_LIST_FAILED:
            return reducer.getPetDropDownFail(state, action);
        case actionTypes.DELETE_PET:
            return reducer.deletePet(state, action);
        case actionTypes.DELETE_PET_FAILED:
            return reducer.deletePetFail(state, action);
        case actionTypes.DELETE_PET_SUCCESS:
            return reducer.deletePetSuccess(state, action);
        case actionTypes.ADD_PET_FAILED:
            return reducer.addPetFail(state, action);
        case actionTypes.ADD_PET_REQUEST:
            return reducer.addPetRequest(state, action);
        case actionTypes.ADD_PET_SUCCESS:
            return reducer.addPetSuccess(state, action);
        case actionTypes.EDIT_PET_FAILED:
            return reducer.editPetFail(state, action);
        case actionTypes.EDIT_PET_REQUEST:
            return reducer.editPetRequest(state, action);
        case actionTypes.EDIT_PET_SUCCESS:
            return reducer.editPetSuccess(state, action);
        default:
            return state;
    }

}

export default petListReducer;
