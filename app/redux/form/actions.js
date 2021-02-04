import * as actionTypes from './actionTypes';

export const postAquariumData = (data) => {
  return {
    type: actionTypes.POST_AQUARIUM_FORM_DATA,
    data,
  };
};
export const AQU_ResponseData = (acq_success) => {
  return {
    type: actionTypes.AQU_RESPONSE,
    acq_success,
  };
};
export const CON_response = (cont_success) => {
  return {
    type: actionTypes.CONTACT_RESPONSE,
    cont_success,
  };
};
export const postContactFormData = (data) => {
  return {
    type: actionTypes.POST_CONTACTUS_FORM,
    data,
  };
};
export const postPetRelocation = (data) => {
  return {
    type: actionTypes.POST_PET_RELOCATION,
    data,
  };
};
export const PETREL_response = (pet_rel_success) => {
  return {
    type: actionTypes.PET_REL_RESPONSE,
    pet_rel_success,
  };
};
