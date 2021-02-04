export const getresponse = (state, action) => {
    const {acq_success} = action
    return {
        ...state,
        acq_success
    }
}

export const getContactresponse = (state, action) => {
    const {cont_success} = action
    return {
        ...state,
        cont_success
    }
}
export const getPetRelocationresponse = (state, action) => {
    const {pet_rel_success} = action
    return {
        ...state,
        pet_rel_success
    }
}
