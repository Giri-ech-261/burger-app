export const appName = "";

import React from "react";
import { Dimensions, Platform, TouchableOpacity, Text, StatusBar, AsyncStorage, PixelRatio } from "react-native";
import * as colors from "../assets/styles/color";
export const WINDOW = Dimensions.get("window");
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const mainUrl = ""
export const userLogin = "user/login";
export const iPhoneX =
  Platform.OS === "ios" &&
  (Dimensions.get("window").height === 812 || Dimensions.get("window").height === 896) &&
  (Dimensions.get("window").width === 375 || Dimensions.get("window").width === 414);

export const isInternetConnected = false;
export const adminAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0YWM0ZWY5YS1hZTQ1LTQ0ODMtOGJiMi04YmI5YjZmN2VhY2QiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE2Mzk0NjM2MDQsImlhdCI6MTYwNzkyNzYwNH0=.ixLukpwCtaxvyA8fGIiqArP8/2SucokDuO5PWQxhWjw=";
export const accessToken = ""
export const userProfileId = '3102012' // 5207634
// --------------------------------- FontSizes For Whole App -------------------------------------
// More big new
export const font_8 =
  Platform.OS == "ios" ? screenWidth * 0.025 : screenWidth * 0.0225; // 8
export const font_9 =
  Platform.OS == "ios" ? screenWidth * 0.0275 : screenWidth * 0.025; // 9
export const font_10 =
  Platform.OS == "ios" ? screenWidth * 0.03 : screenWidth * 0.0275; // 10
export const font_11 =
  Platform.OS == "ios" ? screenWidth * 0.0325 : screenWidth * 0.03; // 11
export const font_12 = screenWidth * 0.032; // 12
export const font_13 = screenWidth * 0.0346; // 13
export const font_14 =
  Platform.OS == "ios" ? screenWidth * 0.04 : screenWidth * 0.0375; // 14
export const font_15 = screenWidth * 0.04; //15
export const font_16 =
  Platform.OS == "ios" ? screenWidth * 0.0475 : screenWidth * 0.0425; // 16
export const font_17 =
  Platform.OS == "ios" ? screenWidth * 0.05 : screenWidth * 0.045; // 17
export const font_18 =
  Platform.OS == "ios" ? screenWidth * 0.048 : screenWidth * 0.0475; // 18
export const font_19 = screenWidth * 0.0475; // 19
export const font_20 = screenWidth * 0.05; // 20
export const font_22 = screenWidth * 0.055; // 22
export const font_24 = screenWidth * 0.064; // 24
// export const font_24 = screenHeight * 0.0295;// 24
export const font_26 = screenWidth * 0.0693; // 26
export const font_28 = screenWidth * 0.07; // 28
export const font_29 = screenWidth * 0.075; // 28
export const font_32 = screenWidth * 0.08; // 32
export const font_36 = screenWidth * 0.09; // 36
export const font_40 = screenWidth * 0.106; // 40
export const font_53 = screenWidth * 0.14; // 53
export const font_59 = screenWidth * 0.144; // 59

// --------------------------------- Later spacing For Whole App -------------------------------------
export const ltr_sp_013 = screenWidth * 0.000346; // 0.13 pt
export const ltr_sp_014 = screenWidth * 0.000373; // 0.14 pt
export const ltr_sp_015 = screenWidth * 0.0004; // 0.15 pt
export const ltr_sp_016 = screenWidth * 0.000426; // 0.16 pt
export const ltr_sp_024 = screenWidth * 0.00064; // 0.24 pt
export const ltr_sp_044 = screenWidth * 0.00117; // 0.44pt

// Logging Stuff

export const checkObject = function (responesData, key) {
  const responseData = responesData;
  let checkObject;
  if (typeof responseData === "string") {
    checkObject = true;
    // console.log("String-->", responesData);
  } else if (typeof responseData === "object") {
    if (responesData !== undefined && responesData !== null) {
      if (responesData.hasOwnProperty(key)) {
        if (responesData[key] !== undefined) {
          if (responesData[key] !== "") {
            if (responesData[key] !== null) {
              checkObject = true;
            } else {
              checkObject = false;
            }
          } else {
            checkObject = false;
          }
        } else {
          checkObject = false;
        }
      } else {
        checkObject = false
      }
    }
  } else if (typeof responseData === "array") {
    console.log("data-->", responseData);
    if (responesData.key !== undefined) {
      return responesData;
    }
  }
  return checkObject;
};

export const nFormatter = function intToString(value) {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
}
export const checkImageObject = function (responesData, key) {
  const responseData = responesData;
  let checkObject;
  if (typeof responseData === "string") {
    if (
      responesData.startsWith("http://") ||
      responesData.startsWith("https://")
    ) {
      checkObject = true;
    } else {
      checkObject = false;
    }
  } else if (typeof responseData === "object") {
    if (responesData !== undefined) {
      if (responesData.hasOwnProperty(key)) {
        if (responesData[key] != undefined) {
          if (responesData[key] != "") {
            if (responesData[key] != null) {
              if (
                typeof (responesData[key] === "string") &&
                (responesData[key].startsWith("http://") ||
                  responesData[key].startsWith("https://"))
              ) {
                checkObject = true;
              } else {
                checkObject = false;
              }
            } else {
              checkObject = false;
            }
          } else {
            checkObject = false;
          }
        } else {
          checkObject = false;
        }
      } else {
        checkObject = false;
      }
    } else {
      checkObject = false;
    }
  } else if (typeof responseData === "array") {
    //  console.log("data-->", responseData);
    if (responesData.key !== undefined) {
      return responesData;
    }
  }
  return checkObject;
};
export const formatDate = function convertDate(d) {
  let date = new Date(d);

  if (isNaN(date.getTime())) {
    return d;
  }
  else {
    let month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    return day + " " + month[date.getMonth()] + " " + date.getFullYear();
  }
}
export const validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export const validatePhone = function validatePhone(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  console.log("Number-->", regex.test(phone))
  return regex.test(phone);
}
export const getDensityOfDevice = function intToString() {
  if (PixelRatio.get() === 1) {
    return 10;
  } else if (PixelRatio.get() === 1.5) {
    return 10;
  } else if (PixelRatio.get() === 2) {
    return 10;
  } else if (PixelRatio.get() === 3) {
    return 10;
  } else if (PixelRatio.get() === 3.5) {
    return 10;
  }
  // return shortValue+suffixes[suffixNum];
}
// Font Family SFPro
export const SFProDisplayMedium = "SFProDisplay-Medium";
export const AvenirNextMedium = "AvenirNext-Medium";
export const ProximaNovaSemiBold = "ProximaNova-Semibold";
export const ProximaNovaBlack = "ProximaNova-Black";
export const ProximaNovaBold = "ProximaNova-Bold";
export const ProximaNovaLight = "ProximaNova-Light";
export const ProximaNovaLightItalic = "ProximaNova-LightItalic";
export const ProximaNovaRegItalic = "ProximaNova-RegItalic";
export const ProximaNovaRegular = "ProximaNova-Regular";
export const ProximaNovaRegularItalic = "ProximaNova-RegularItalic";
export const ProximaNovaBoldItalic = "ProximaNova-BoldIt";
export const ProximaNovaMedium = "ProximaNova-Medium";
export const ProximaNovaMediumItalic = "ProximaNova-MediumItalic";

