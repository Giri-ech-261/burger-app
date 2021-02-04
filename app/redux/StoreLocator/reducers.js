// Get Stores List

export const getStoresListRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const getStoresListSuccess = (state, action) => {
    const {storesList} = action
    return {
        ...state,
        loading: false,
        storesList
    };
};

export const getStoresListFail = (state, action) => {
    const {storesListError} = action
    return {
        ...state,
        loading: false,
        storesListError
    };
};

// Get store details by storeId

export const getStoreDetailsRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const getStoreDetailsSuccess = (state, action) => {
    const {storeDetails} = action
    return {
        ...state,
        loading: false,
        storeDetails
    };
};

export const getStoreDetailsFail = (state, action) => {
    const {storeDetailsError} = action
    return {
        ...state,
        loading: false,
        storeDetailsError
    };
};
