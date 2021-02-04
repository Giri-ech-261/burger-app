export const getProductListRequest = (state, action) => {
    return {
        ...state,
    };
};

export const getProductListSuccess = (state, action) => {
    const {productList} = action
    return {
        ...state,
        productList
    };
};

export const getProductListFail = (state, action) => {
    const {productListError} = action
    return {
        ...state,
        productListError
    };
};

