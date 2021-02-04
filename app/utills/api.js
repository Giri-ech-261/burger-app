import React from "react";
import { Alert, AsyncStorage, Platform } from "react-native";
import * as globals from "../utills/globals";
import RNRestart from 'react-native-restart'
import * as RNLocalize from "react-native-localize";

const timeoutObj = {
  success: "fail",
  message: globals.selectedLocal.TIMEOUTMSG
};

const internetErrorObj = {
  success: "fail",
  message: globals.selectedLocal.INTERNETMSG
};

export const buildHeader = (headerParams = {}) => {
  var header = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "x-language": globals.selectedLocal.CURRENTLOCAL,
    "x-appversion": globals.APPVERSION,
    "x-buildversion": globals.BUILDVERSION,
    "x-osversion": globals.OSVERSION,
    "x-ostype": globals.OSTYPE,
    "x-devicemodel": globals.DEVICEMODEL,
    "x-user-timezone": RNLocalize.getTimeZone()
  };
  Object.assign(header, headerParams);
  return header;
};

export const API = {

  userLogin: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.userLogin, buildHeader());
  },
  
};

async function request(onResponse, data, type, returnType, isHeaderRequired, featureURL, secureRequest) {

  let response = "";
  let responseJSON;
  globals.APIERRORVIEW = false
  console.log("featureURL >>> " + featureURL);
  console.log("secureRequest " + JSON.stringify(secureRequest));
  console.log("data >>> " + JSON.stringify(data));
  console.log("returnType " + returnType);
  console.log("isHeaderRequired " + isHeaderRequired);
  console.log("type " + type);
   try {
    if (type === "GET") {
      if (isHeaderRequired) {
        console.log("Request Call get with Header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest
        }));
      } else {
        console.log("Request Call get without header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: {
            "X-Gravitee-Api-Key": globals.graviteeKeyValue,
            "x-language": globals.selectedLocal.CURRENTLOCAL,
            "x-appversion": globals.APPVERSION,
            "x-buildversion": globals.BUILDVERSION,
            "x-osversion": globals.OSVERSION,
            "x-ostype": globals.OSTYPE,
            "x-devicemodel": globals.DEVICEMODEL,
            "x-user-timezone": RNLocalize.getTimeZone()
          }
        }));
      }
    } else {
      if (secureRequest["Content-Type"] === "multipart/form-data") {
        console.log("MULTIPART Request Call");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest,
          body: data
        }));
      }
      else if (secureRequest["Content-Type"] === "application/x-www-form-urlencoded") {
        console.log("Request Call stripe header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest,
          body: Object.keys(data)
            .map(key => key + "=" + data[key])
            .join("&")
        }));
      }
      else {
        console.log("Request Call post with header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest,
          body: JSON.stringify(data)
        }));
      }
    }
    // console.log("response " + JSON.stringify(response));
    console.log("response status " + response.status);
     if (returnType === "TEXT") {
      responseJSON = await response.text();
    } else if (returnType === "HTML") {
      responseJSON = await response.html();
    }
    else {
      // if(response.status == 200 || response.status == 440){
      responseJSON = await response.json();
      // }
    }
    console.log("responseJSON " + JSON.stringify(responseJSON), featureURL);
     if (featureURL.includes('user/verifyemail') && response.status === 200) {
      console.log("onResponse code 200");
      onResponse.success(responseJSON);
    } else if (response.status === 200 && responseJSON.status === "success") {
      console.log("onResponse code 200");
       onResponse.success(responseJSON);
    } else if (response.status === 440) {
      console.log("onResponse code 440 ");
      // onResponse.error(responseJSON);
      if (Platform.OS === "ios") {
        const errorMsg = globals.checkObject(responseJSON, "message") ? responseJSON.message : JSON.stringify(responseJSON);
        AsyncStorage.clear()
        Alert.alert(globals.appName, errorMsg, [{ text: 'OK', onPress: () => RNRestart.Restart() }], { cancelable: false });
      } else {
        const isErrorMsg = globals.checkObject(responseJSON, "message");
        (isErrorMsg) ? Alert.alert(globals.appName, responseJSON.message) : Alert.alert(globals.appName, JSON.stringify(responseJSON));
        AsyncStorage.clear()
        RNRestart.Restart()
      }
    } else {
      console.log("onResponse error", onResponse);
       // globals.APIERRORDATA = { onResponse, data, type, returnType, isHeaderRequired, featureURL, secureRequest }
      // globals.APIERRORVIEW = true
      onResponse.error(responseJSON);
    }
    if (onResponse.complete) {
      console.log("onResponse complete");
      onResponse.complete();
    }
  } catch (error) {
    console.log("onResponse catch error ", error, " onResponse ", onResponse);
 
    if (!globals.isInternetConnected && onResponse.error) {
      // onResponse.error(internetErrorObj);
      let data = {
        message: globals.selectedLocal.INTERNETMSG
      }
      onResponse.error(data);
      console.log("Catch error internal");
     } else if (onResponse.error && error && error != timeoutObj) {
      console.log("Catch error server");
       let data = {
        message: globals.selectedLocal.SERVERERROR
      }
      onResponse.error(data);
    } else if (error && error == timeoutObj) {
      console.log("Catch error unkonwn");
       let data = {
        message: globals.selectedLocal.SERVERERROR
      }
      onResponse.error(data);
    } else {
      console.log("Catch error unkonwn");
       let data = {
        message: globals.selectedLocal.SERVERERROR
      }
      onResponse.error(data);
    }
    if (onResponse.complete) {
      console.log("onResponse catch complete");
      onResponse.complete();
    }
  }
}

function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(JSON.stringify(timeoutObj));
    }, ms);
    promise.then(resolve, reject);
  });
}

