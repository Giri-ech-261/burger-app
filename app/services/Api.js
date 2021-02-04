import {
  API_URL,
  API_DEV_URL,
  API_AQUARIUM_POST_URL,
  API_DEV_ADMIN_URL,
  API_DEV_CCSTOREUI_URL,
  API_TEST_CCSTOREUI_URL,
  API_DEV_CCSTOREX_URL,
} from './Config';
import axios from 'axios';
import * as globals from '../utills/globals';

export const getProductList = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      return json;
    }).catch((error) => {
      return error
    });
}

export const deletePetData = (payload) => {

  let url = API_DEV_URL + 'deleteMyPet?petId=' + payload.id;
  console.log("deletePetData-->", url);
  return axios
    .post(url, {
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      active: 0,
      comments: "test comment",
      updatedBy: "DPF Admin1",
      locale: "en"

    })
   // .then((res) => res.json())
    .then(async res => {
      if (res.status === 200) {
        console.log("Delete Done -->", res.data);
        return res.data
      }
    })
    .catch(err => { return err })
}

export const getPetList = () => {
  return axios
    .get(API_DEV_URL + 'getPetDetailsById?profileId='+globals.userProfileId+'&locale=en', {
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${process.env.REACT_APP_STRIPE_KEY_SK}`,
      // },
      timeout: 1000 * 60, // 1 min
    })
    .then(res => {
      if (res) {
        if (res.status === 200) {
          return res.data;
        }
      }
    })
    .catch(err => {
      return err;
    });
};
export const postAquariumData = (data) => {
  console.log(data);
  return fetch(API_AQUARIUM_POST_URL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: [
      {
        RequestType: 'AquaMaintenance',
        firstName: data.firstName,
        middleName: 'null',
        lastName: data.lastName,
        countrycode: data.countryCode,
        phoneNumber: data.mobileNumber,
        email: data.emailAddress,
        Attributes: [
          {Sequence: 0, AttributeLabel: 'store', AttributeValue: 'on'},
          {
            Sequence: 11,
            AttributeLabel: 'Message',
            AttributeValue: data.notes,
          },
          {
            Sequence: 12,
            AttributeLabel: 'PreferredDate',
            AttributeValue: data.preferredDate,
          },
          {
            Sequence: 13,
            AttributeLabel: 'PreferredTime',
            AttributeValue: data.preferredTime,
          },
        ],
      },
    ], // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });

  // return response.json();
};
export const postContactUsData = (data) => {
  console.log(data);
  return fetch(API_AQUARIUM_POST_URL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: [
      {
        RequestType: 'ContactUs',
        firstName: data.firstName,
        middleName: 'null',
        lastName: data.lastName,
        countrycode: data.CountryCode,
        phoneNumber: data.mobileNumber,
        email: data.Email,
        Attributes: [
          {Sequence: 0, AttributeLabel: 'store', AttributeValue: 'on'},
          {
            Sequence: 1,
            AttributeLabel: 'Experience',
            AttributeValue: data.Experience,
          },
          {
            Sequence: 10,
            AttributeLabel: 'Subject',
            AttributeValue: data.Subject,
          },
          {
            Sequence: 11,
            AttributeLabel: 'Message',
            AttributeValue: data.message,
          },
        ],
      },
    ], // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
export const postPetRelocationData = (data) => {
  console.log(data);
  return fetch(API_AQUARIUM_POST_URL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: [
      {
        RequestType: 'PetRelocation',
        firstName: data.firstName,
        middleName: 'null',
        lastName: data.lastName,
        countrycode: data.countryCode,
        phoneNumber: data.mobileNumber,
        email: data.emailAddress,
        Attributes: [
          {Sequence: 0, AttributeLabel: 'store', AttributeValue: 'on'},
          {
            Sequence: 11,
            AttributeLabel: 'Message',
            AttributeValue: data.notes,
          },
          {
            Sequence: 12,
            AttributeLabel: 'PreferredDate',
            AttributeValue: data.preferredDate,
          },
          {
            Sequence: 13,
            AttributeLabel: 'PreferredTime',
            AttributeValue: data.preferredTime,
          },
        ],
      },
    ], // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  // return response.json();
};


export const getCategoryList = () => {
  return axios
  .get(API_TEST_CCSTOREUI_URL+'collections/rootCategory?catalogId=cloudCatalog&maxLevel=1000&expand=childCategories&fields=childCategories(items)', {
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Basic YWRtaW46YWRtaW4=`,
     },
     // headers: {
     //   'Content-Type': 'application/json',
     //   Authorization: 'Bearer ' + globals.accessToken,
     // },
   timeout: 1000 * 60, // 1 min
 })
  .then(res => {
     if (res) {
       if (res.status === 200) {
         return res.data;
       }
     }
  })
  .catch(err => {
       console.log(err.response.status);
        return err;
  })
}


export const getArticlesList = () => {
  return axios
     .get(API_TEST_CCSTOREUI_URL+'products?totalResults=true&totalExpandedResults=true&catalogId=cloudCatalog&limit=60&offset=0&categoryId=articles&includeChildren=true&storePriceListGroupId=aed', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic YWRtaW46YWRtaW4=`,
        },
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: 'Bearer ' + globals.accessToken,
        // },
      timeout: 1000 * 60, // 1 min
    })
     .then(res => {
        if (res) {
          if (res.status === 200) {
            return res.data;
          }
        }
     })
     .catch(err => {
          console.log(err.response.status);
           return err;
     })
}

export const getStoresList =() =>{
  return axios
    .get(API_DEV_CCSTOREUI_URL+'assembler/pages/Default/storeSearch', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46YWRtaW4=`,
      },
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: 'Bearer ' + globals.accessToken,
      // },
    timeout: 1000 * 60, // 1 min
  })
    .then(res => {
      if (res) {
        if (res.status === 200) {
          return res.data;
        }
      }
    })
    .catch(err => {
        console.log(err.response.status);
          return err;
    })
}

export const getStoreDetailsByStoreID =(payload) =>{
  return axios
    .get(API_DEV_CCSTOREX_URL+`getStoreDetails?action=getStore&storeId=${payload.storeId}`, {
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Basic YWRtaW46YWRtaW4=`,
      // },
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: 'Bearer ' + globals.accessToken,
      // },
    timeout: 1000 * 60, // 1 min
  })
  .then(res => {
    if (res) {
      if (res.status === 200) {
        return res.data;
      }
    }
  })
  .catch(err => {
      console.log(err.response.status);
        return err;
  })
}

export const getPetDropDownList = () => {
  return axios
    .get(API_DEV_ADMIN_URL + 'sitesettings/PetSettings', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + globals.accessToken,
      },
      timeout: 1000 * 60, // 1 min
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      return err;
    })
}

export const addPetData = (payload) => {
  console.log("payload.data-->", payload.data);
  let url = API_DEV_URL + 'createMyPet';
  return axios
    .post(url, payload.data, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + globals.accessToken,
      },
      timeout: 1000 * 60, // 1 min
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      return err;
    })
}

export const editPetData = (payload) => {
  console.log("payload.data-->", payload);
  let url = API_DEV_URL + 'updateMyPet?petId='+payload.id;
  console.log("featureURL-->", url);
  return axios
    .post(url, payload.data, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + globals.accessToken,
      },
      timeout: 1000 * 60, // 1 min
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      return err;
    })
}

export const adminLogin = () => {

  let url = API_DEV_ADMIN_URL + 'login'
  const params = {
    grant_type: 'client_credentials'
  };

  const data = Object.keys(params)
  .map(key => key + "=" + params[key])
  .join("&")

  return axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + globals.adminAuthToken,
      },

      timeout: 1000 * 60, // 1 min
    })
    .then(res => {
      if (res) {
        if (res.status === 200) {
          return res.data;
        }
      }
    })
    .catch(err => {
      console.log("ADMIN LOGIN ERROR-->", err);
      return err;
    })
}

