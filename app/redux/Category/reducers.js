export const getCategoryListRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const getCategoryListSuccess = (state, action) => {
    const {categoryList} = action
    return {
        ...state,
        loading: false,
        categoryList
    };
};

export const getCategoryListFail = (state, action) => {
    const {categoryListError} = action
    return {
        ...state,
        loading: false,
        categoryListError
    };
};


