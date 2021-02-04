import * as actionTypes from './actionTypes'

export const getPetListRequest = () => {
    return {
        type: actionTypes.GET_PET_LIST_REQUEST,
    };
}

export const getPetListSuccess = (petList) => {
    return {
        type: actionTypes.GET_PET_LIST_SUCCESS,
        petList
    };
}

export const getPetListFail = (petListError) => {
    return {
        type: actionTypes.GET_PET_LIST_FAILED,
        petListError
    }
}

export const getPetDropDown = () => {
    return {
        type: actionTypes.GET_PET_DROPDOWN_LIST,
        
    }
}
export const getPetDropDownSuccess = (dropDownData) => {
    return {
        type: actionTypes.GET_PET_DROPDOWN_LIST_SUCCESS,
        dropDownData
    }
}
export const getPetDropDownFail = (dropDownData) => {
    return {
        type: actionTypes.GET_PET_DROPDOWN_LIST_FAILED,
        dropDownData
    }
}
export const deletePet = (id) => {
    return {
        type: actionTypes.DELETE_PET,
        id
    }
}
export const deletePetSuccess = (petDeleted) => {
    return {
        type: actionTypes.DELETE_PET_SUCCESS,
        petDeleted
    }
}
export const deletePetFail = (id) => {
    return {
        type: actionTypes.DELETE_PET_FAILED,
        id
    }
}
export const addPetRequest = (data) => {
    return {
        type: actionTypes.ADD_PET_REQUEST,
        data
    }
}
export const addPetSuccess = (petAdded) => {
    return {
        type: actionTypes.ADD_PET_SUCCESS,
        petAdded
    }
}
export const addPetFail = () => {
    return {
        type: actionTypes.ADD_PET_FAILED,
        
    }
}
export const editPetRequest = (data, id) => {
    return {
        type: actionTypes.EDIT_PET_REQUEST,
        data,
        id
    }
}
export const editPetSuccess = (petEdited) => {
    return {
        type: actionTypes.EDIT_PET_SUCCESS,
        petEdited
    }
}
export const editPetFail = () => {
    return {
        type: actionTypes.EDIT_PET_FAILED,
        
    }
}