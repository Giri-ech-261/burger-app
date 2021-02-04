export const getArticlesListRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const getArticlesListSuccess = (state, action) => {
    const {articlesList} = action
    return {
        ...state,
        loading: false,
        articlesList
    };
};

export const getArticlesListFail = (state, action) => {
    const {articlesListError} = action
    return {
        ...state,
        loading: false,
        articlesListError
    };
};


