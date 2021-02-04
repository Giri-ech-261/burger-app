import * as actionTypes from './actionTypes';
import * as reducer from './reducers';
import {red} from "../../assets/styles/color";

const initialState = {
    acq_success: null,
    cont_success: null,
    pet_rel_success: null,
};

function formReducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
        case actionTypes.AQU_RESPONSE:
            return reducer.getresponse(state, action);
        case actionTypes.CONTACT_RESPONSE:
            return reducer.getContactresponse(state, action);
        case actionTypes.PET_REL_RESPONSE:
            return reducer.getPetRelocationresponse(state, action);
        default:
            return state;
    }

}

export default formReducer;
