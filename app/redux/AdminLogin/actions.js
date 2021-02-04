import * as actionTypes from './actionTypes'

export const adminLoginRequest = () => {
    return {
        type: actionTypes.ADMIN_LOGIN_REQUEST,
    };
}

export const adminLoginSuccess = (access_token) => {
    return {
        type: actionTypes.ADMIN_LOGIN_SUCCESS,
        access_token
    };
}

export const adminLoginFail = (petListError) => {
    return {
        type: actionTypes.ADMIN_LOGIN_FAILED,
        petListError
    }
}

 