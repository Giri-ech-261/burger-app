//---------------------------------------------------
// Libraries & Class
//---------------------------------------------------

import React from "react";
import { Alert, AsyncStorage } from "react-native";
import * as globals from "./globals";

//---------------------------------------------------
// Class: Validation
//---------------------------------------------------

class Validation {

  /**
   * Regular Expression Method for TextInput Empty
   */

  textInputCheck(txtInput, emptyMessage) {
    // var regex = /^[a-zA-Z ]+$/;
    // console.log("TXTInput-->" + txtInput);

    if (txtInput !== null && txtInput.trim().length > 0) {
      return true
    } else {
      // Alert.alert(globals.appName, emptyMessage)
      return false
    }
  }

  /**
 * Regular Expression Method for TextInput Special Character
 */

  specialCharacterCheck(txtInput, emptyMessage) {
    var regex = /^[a-zA-Z ]+$/;
    // console.log("TXTInput-->" + txtInput);

    if ((regex.test(txtInput))) {
      return true
    } else {
      Alert.alert(globals.appName, emptyMessage)
      return false
    }
  }

  qescNameDisplay() {
    let name = ""
    AsyncStorage.getItem(globals.QESCDATA, (err, qesc) => {
      let qescData = JSON.parse(qesc)
      let title = '';
      let firstname = '';
      let nameSuffix = '';
      let lastname = '';
      let qescValue = '';

      if (qesc) {
       // console.log("myclub qesc", qescData);
        qescValue = globals.checkObject(qescData, 'qesc') ;
      //  console.log("qescValue-->" + qescValue);
        
        title = (qescValue) ? globals.checkObject(qescData.qesc, 'title') ? qescData.qesc.title : '' : '';
       // console.log("qescValue title-->" + title);

        firstname = (qescValue) ? globals.checkObject(qescData.qesc, 'firstName') ? qescData.qesc.firstName : '' : '';
        //console.log("qescValue firstname-->" + firstname);

        nameSuffix = (qescValue) ? globals.checkObject(qescData.qesc, 'nameSuffix') ? qescData.qesc.nameSuffix : '' : '' ;
       // console.log("qescValue nameSuffix-->" + nameSuffix);

        lastname = (qescValue) ? globals.checkObject(qescData.qesc, 'lastName') ? qescData.qesc.lastName : '' : '';
       // console.log("qescValue lastname-->" + lastname);

        if (title) {
           name = title;
        }
        if (firstname) {
          name = name + " " + firstname
        }
        if (nameSuffix) {
          name = name + " " + nameSuffix
        }
        if(lastname)
        {
          name = name + " " + lastname
        }

        return name;
      }
    });
  }

  /**
 * Regular Expression Method for Date compare
 */
  dateCheck(date1, date2, message) {
    if (date1 > date2) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  /**
* Regular Expression Method for Textinput Empty
*/
  //Check empty TextInput
  emptyTextInput(txtInput, message) {
    if (txtInput == null || txtInput.length <= 0) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Email Validation
  isValidEmail(email, message) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(regex.test(email))) {
      // Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  /**
* Regular Expression Method for Valid card id
*/

isValidCardID(number, message) {
  var regex = /^[0-9]{5}$/;
  if (!(regex.test(number))) {
    // Alert.alert(globals.appName, message)
    return false
  }
  return true
}

  /**
* Regular Expression Method for Valid mobile number
*/

  isValidMobileNumber(number, message) {
    var regex = /^[0-9]{5,15}$/;
    if (!(regex.test(number))) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  /**
* Regular Expression Method for Valid Phone number
*/
  isValidPhoneNumber(number, message) {
    var regex = /^[0-9()+ -]+$/;
    if (!(regex.test(number))) {
      // Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check Password length greater than minimum
  passwordLength(password, min, message) {
    if (password.length < min) {
      // Alert.alert(globals.appName, message + " " + min + " characters")
      return false
    }
    return true
  }

  //Check Password length greater than minimum
  changePasswordLength(password, min, message) {
    if (password.length < min) {
      // Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check Password length greater than minimum
  passwordLength2(password, min, message) {
    if (password.length < min) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check both password matches
  matchPasswordPIN(pwd, confrmPwd, message) {
    if (pwd != confrmPwd) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check if password is same
  samePassword(currentpwd, nwpwd, message) {
    if (currentpwd == nwpwd) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check valid pin
  isValidPin(pin, message) {
    if (pin.length < 6) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  //Check valid zip code
  isValidZipCode(pin, message) {
    var regex = /^[a-zA-Z0-9]+$/;
    if (pin !== null && pin.length >= 0) {
      if (regex.test(pin) && pin.length > 6) {
        return true
      } else {
        Alert.alert(globals.appName, "Pin not valid")
      }
    } else {
      Alert.alert(globals.appName, message)
    }
    return false
  }

  //Check valid miles code
  isValidMiles(radius, message) {
    var regex = /^[0-9]+$/;
    if (radius !== null && radius.length >= 0 && regex.test(radius)) {
      return true
    } else {
      Alert.alert(globals.appName, message)
    }
    return false
  }

  //Check point validation
  pointValidation(point, message) {
    var regex = /^[0-9.]+$/;
    if (point !== null && point.length >= 0 && regex.test(point)) {
      return true
    } else {
      Alert.alert(globals.appName, message)
    }
    return false
  }

  //Check for alphanumeric zip code validation
  alphaNumericZipCodeValidation(value, message) {
    var regex = /^[a-zA-Z0-9]+$/;
    if (value !== null && value.length >= 0 && regex.test(value)) {
      return true
    } else {
      Alert.alert(globals.appName, message)
    }
    return false
  }

  // check for umber validation
  numberValidation(number, message) {
    var regex = /^[0-9]+$/;
    if (number !== null && number.length >= 0 && regex.test(number)) {
      return true
    } else {
      Alert.alert(globals.appName, message)
    }
    return false
  }

  //chekc for point compare validation
  pointCompareValidation(point1, point2, message) {
    if (point1 > point2) {
      Alert.alert(globals.appName, message)
      return false
    }
    return true
  }

  RegularExpressionEmail = function (txt) {
    var isValid = false;
    var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (txt !== "" && txt !== null) {
      if (reg.test(txt) === false) {
        isValid = false;
      } else {
        isValid = true;
      }
    } else {
      isValid = false;
    }
    return isValid;
  };

  /**
   * Regular Expression for Password
   */
  RegularExpressionPassword = function (txt) {
    var isValid = false;
    var str = txt
      .toString()
      .trim();
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    if (str.length >= 7) {
      var _valid = number.test(str) && letter.test(str);
      if (_valid == false) {
        isValid = false;
      } else {
        isValid = true;
      }
    } else {
      isValid = false;
    }
    return isValid;
  };

  /**
   * Regular Expression for Mobile number
   */
  RegularExpressionMobileNumber = function (txt) {
    var isValid = false;
    if (isNaN(txt) === false && txt !== null) {
      if (txt.length === 10) {
        if (txt.trim() !== "") {
          isValid = true;
        }
      }
    }
    return isValid;
  };
}

module.exports = new Validation()