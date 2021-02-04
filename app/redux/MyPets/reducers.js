export const getPetListRequest = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const getPetListSuccess = (state, action) => {
    const {petList} = action
    return {
        ...state,
        loading: false,
        petList
    };
};

export const getPetListFail = (state, action) => {
    const {petListError} = action
    return {
        ...state,
        loading: false,
        petListError
    };
};
export const getPetDropDown = (state, action) => {
    const {petListDropdown} = action
    return {
        ...state,
        loading: false,
        petListDropdown
    };
};

export const getPetDropDownSuccess = (state, action) => {
    const {dropDownData} = action
    return {
        ...state,
        loading: false,
        dropDownData
    };
};
export const getPetDropDownFail = (state, action) => {
    const {dropDownData} = action
    return {
        ...state,
        loading: false,
        dropDownData
    };
};
export const deletePet = (state, action) => {
    const {deletePet} = action
    return {
        ...state,
        loading: true,
        deletePet
    };
};
export const deletePetSuccess = (state, action) => {
    const {petDeleted} = action
    return {
        ...state,
        loading: false,
        petDeleted
    };
};
export const deletePetFail = (state, action) => {
    const {petDeleted} = action
    return {
        ...state,
        loading: false,
        petDeleted
    };
};
export const addPetRequest = (state, action) => {
    return {
        ...state,
        loading: true,
        
    };
};
export const addPetSuccess = (state, action) => {
    const {petAdded} = action
    return {
        ...state,
        loading: false,
        petAdded,
    };
};
export const addPetFail = (state, action) => {
    return {
        ...state,
        loading: false,
        petAdded: false,
    };
};
export const editPetRequest = (state, action) => {
    return {
        ...state,
        loading: true,
        
    };
};
export const editPetSuccess = (state, action) => {
    const {petEdited} = action
    return {
        ...state,
        loading: false,
        petEdited,
    };
};
export const editPetFail = (state, action) => {
    return {
        ...state,
        loading: false,
        petEdited: false,
    };
};


