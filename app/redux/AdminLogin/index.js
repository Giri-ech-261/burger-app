import * as actionTypes from './actionTypes';
import * as reducer from './reducers';

const initialState = {
    access_token: '',
    loading: false,
    adminLoginError: undefined,
    
};

function petListReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case actionTypes.ADMIN_LOGIN_REQUEST:
            return reducer.adminLoginRequest(state, action);
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return reducer.adminLoginSuccess(state, action);
        case actionTypes.ADMIN_LOGIN_FAILED:
            return reducer.adminLoginFail(state, action);
         
        default:
            return state;
    }

}

export default petListReducer;
