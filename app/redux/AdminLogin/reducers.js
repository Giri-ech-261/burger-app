export const adminLoginRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const adminLoginSuccess = (state, action) => {
    const {access_token} = action
    return {
        ...state,
        loading: false,
        access_token
    };
};

export const adminLoginFail = (state, action) => {
    const {adminLoginError} = action
    return {
        ...state,
        loading: false,
        adminLoginError
    };
};
 


