import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  AsyncStorage,
  Alert,
  Keyboard,
  PermissionsAndroid,
} from "react-native";
import ConnectyCube from 'connectycube-reactnative'
import { TextField } from "react-native-material-textfield";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextFieldInput from "../../../components/TextInput/TextInput";
import * as globals from "../../../utills/globals";
import LogoHeader from "../../../components/LogoHeader/index";
import CustomButton from "../../../components/Button/index";
import globalStyles from "../../../assets/styles/globalStyle";
import styles from "./style";
import * as colors from "../../../assets/styles/color";
import { API } from "../../../utills/api";
import Validation from "../../../utills/ValidationManager";
import { getshowLoader } from "../../../redux/actions/showLoader";
import { userLogin } from '../../../redux/actions/user';
import { getIsLogin } from './../../../redux/actions/isLogin';
import User from '../../../chatModule/services/UserService';
import { chatDisconnected } from '../../../redux/actions/connection';
import { userLogout } from '../../../redux/actions/user';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import translate from '../../../utills/translate';
import RNFS from 'react-native-fs';
import Matomo from "react-native-matomo";
import "moment/min/locales"
import moment from "moment";
import _RootNavigator from "../../navigators/_RootNavigator";

let _this = null;

class signInScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    _this = this;
    this.state = {
      userEmail: "",
      userPassword: "",
      deviceToken: "123456",
      deviceType: Platform.OS,
      btnEnable: false,
      isLogin: false
    };
  }

  componentDidMount() {
    Matomo.trackScreen('Sign In Screen', 'Sign In');
    this._isMounted = true;

    const { chatDisconnected, userLogout } = this.props;
    if (!globals.ISLOGINVALUE) {
      User.logout()
        .then(() => {
          if (this._isMounted) {
            userLogout()
            chatDisconnected()
          }
        }).catch(e => console.log("LoginWarnings==>", e))
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustResize();
      (Platform.OS == "android") ? this.requestFileWritePermission() : null;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }

  async requestFileWritePermission() {
    try {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: globals.selectedLocal.ALERTMEDIAPERMISSION,
          buttonPositive: globals.selectedLocal.SIGN_UP_WITH_ID_CARD_ALERT_OK_TXT,
          buttonNegative: globals.selectedLocal.SIGN_UP_WITH_ID_CARD_ALERT_CANCEL_TXT,
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
     //   console.log('You can use the WRITE_EXTERNAL_STORAGE');
      } else {
      //  console.log('WRITE_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  userLogin() {
   // console.log("userLogin");
    Keyboard.dismiss();
    if (Validation.textInputCheck(this.state.userEmail, "")) {
      if (Validation.isValidEmail(this.state.userEmail, "")) {
        if (Validation.textInputCheck(this.state.userPassword, "")) {
          const data = {
            password: this.state.userPassword,
            email: this.state.userEmail,
            device_token: globals.FCMTOKEN,
            device_type: this.state.deviceType,
            device_id: globals.UNIQUEID
          };
          this.props.getshowLoader(true);
          API.userLogin(this.userLoginResponseData, data, true);
        }
      }
    }
  }

  validateFields() {
    if (Validation.textInputCheck(this.state.userEmail, "")) {
      if (Validation.isValidEmail(this.state.userEmail, "")) {
        if (Validation.textInputCheck(this.state.userPassword, "")) {
          if (Validation.passwordLength(this.state.userPassword, 6, "")) {
            this.setState({ btnEnable: true })
          } else { this.setState({ btnEnable: false }) }
        } else { this.setState({ btnEnable: false }) }
      } else { this.setState({ btnEnable: false }) }
    }
  }

  userLoginResponseData = {
    success: (response) => {
     // console.log("response--->", response.data._id);
      Matomo.trackEvent('Sign In/' + response.data._id, 'Home Club List', 'Sign In Button')
      this.props.getshowLoader(false);
      let userRole;
      const isImage = globals.checkImageObject(response.data, "image");
      const isDGVUser = globals.checkObject(response.data, "qesc");
      //console.log("isDGVUser-->" + isDGVUser);
      
      if (isImage) {
        let userProfileURL = response.data.image;
        let urlSplitArray1 = userProfileURL.split("?");
        let urlSplitArray2 = urlSplitArray1[0].split("/");
        globals.USERIMAGEURL = userProfileURL
        
        let destPath = globals.userProfileImage = (Platform.OS == 'android') ? (RNFS.ExternalStorageDirectoryPath + '/GolfClixImages/' + `${response.data._id}.jpg`) : (RNFS.DocumentDirectoryPath + '/GolfClixImages/' + `${response.data._id}.jpg`)
        let path = Platform.OS == 'android' ? RNFS.ExternalStorageDirectoryPath : RNFS.DocumentDirectoryPath;
        const absolutePath = `${path}/GolfClixImages/`;

        RNFS.mkdir(absolutePath)
          .then((success) => {
            const ProfileImage = response.data.image;
            RNFS.downloadFile({ fromUrl: ProfileImage, toFile: absolutePath + `/${response.data._id}.jpg` }).promise
              .then((res) => { globals.userProfileImage = destPath })
              .catch((err) => { err });
          })
          .catch((err) => { err })
      }

      if (response.data.language === 'de') {
        AsyncStorage.setItem(globals.LANGUAGEKEY, "de".toString());
         moment.locale('de')
        globals.selectedLocal = translate.de
      } else {
        AsyncStorage.setItem(globals.LANGUAGEKEY, "en".toString());
         moment.locale('en')
        globals.selectedLocal = translate.en
      }

      let isConnectycube_id = globals.checkObject(response.data, 'connectycube_id');

      if (response.data.role === 'superadmin') {
        userRole = 0
      } else if (response.data.role === 'admin') {
        userRole = 1
      } else if (response.data.role === 'user') {
        userRole = 2
      } else if (response.data.role === 'clubuser') {
        userRole = 3
      }
      else if (response.data.role === 'advertisementuser') {
        userRole = 4
      }
      else if (response.data.role === 'guestplayer') {
        userRole = 5
      }


      if (isConnectycube_id) {
      //  console.log("isConnectycube_id---->", isConnectycube_id);

        globals.CONNECTYCUBEID = response.data.connectycube_id;
        User.signin({ login: response.data._id, password: '12345678', full_name: response.data.name })
          .then(this.props.userLogin)
          .catch(e => console.log("SIGN IN->", e))
      }
      else {
      //  console.log("isConnectycube_id else---->", isConnectycube_id);
        User.signup({
          full_name: response.data.name,
          login: response.data._id,
          password: '12345678',
          custom_data: JSON.stringify({ role: userRole })
        })
          .then(this.props.userLogin)
          .catch(e => {
         //   console.log("Sign Up Error-->", e)
            this.props.getshowLoader(false)
            if (e.code === 422) {
              var searchParams = { login: response.data._id };
              ConnectyCube.users.get(searchParams, function (error, user) {
            //    console.log("Under props-->", _this.props);
                if (!error && user) {
                  User.signin({ login: response.data._id, password: '12345678', full_name: response.data.name, })
                    .then(_this.props.userLogin)
                    .catch(e => console.log("SIGN IN->", e))
                }
              });
            }
          })
        globals.CONNECTYCUBEID = response.data.connectycube_id;
      }

      if (this.props.userLogin) {
        AsyncStorage.setItem(globals.LOGINRESPONSEKEY, JSON.stringify(response.data), () => {
          AsyncStorage.setItem(globals.APITOKENVALUE, JSON.stringify(response.data.token), () => {
            AsyncStorage.setItem(globals.ISLOGINEKY, "true", () => {
              const home_club = globals.checkObject(response.data, 'home_club')
              const homeclubId = (home_club) ? globals.checkObject(response.data.home_club, '_id') : false
              if (!home_club || Object.keys(response.data.home_club).length == 0) {
                AsyncStorage.setItem(globals.HOMECLUBNAME, "false", () => {
                  globals.ISLOGINVALUE = true;
                  globals.APITOKENVALUE = response.data.token;
                  globals.USERID = response.data._id;
                  globals.USERNAME = response.data.firstname;
                  globals.USERLASTNAME = response.data.lastname;
                  globals.HOMECLUBID = (homeclubId) ? response.data.home_club._id : null;
                  globals.COUNTRYID = response.data.country_id;
                  globals.USERDISTANCE = response.data.distance_unit;
                  globals.FCMPUSHTOKEN = response.data.device_token;
                  globals.CONNECTYCUBEID = response.data.connectycube_id;
                  globals.USEREMAIL = response.data.email;
                  globals.ISCAMERASTORE = response.data.should_save_to_camera_roll
                  if (globals.HOMECLUBID !== undefined && globals.HOMECLUBID !== '' && globals.HOMECLUBID !== null) {
                    globals.ISHOMECLUB = true
                  } else {
                    globals.ISHOMECLUB = false
                  }
                  this.props.getIsLogin(true)
                });
              }
              else {
                AsyncStorage.setItem(globals.HOMECLUBNAME, "true", () => {
                  globals.ISLOGINVALUE = true;
                  globals.APITOKENVALUE = response.data.token;
                  globals.USERID = response.data._id;
                  globals.USERNAME = response.data.firstname;
                  globals.USERLASTNAME = response.data.lastname;
                  globals.HOMECLUBID = (homeclubId) ? response.data.home_club._id : null;
                  globals.COUNTRYID = response.data.country_id;
                  globals.USERDISTANCE = response.data.distance_unit;
                  globals.FCMPUSHTOKEN = response.data.device_token;
                  globals.CONNECTYCUBEID = response.data.connectycube_id;
                  globals.USEREMAIL = response.data.email;
                  globals.ISCAMERASTORE = response.data.should_save_to_camera_roll
                  if (globals.HOMECLUBID !== undefined && globals.HOMECLUBID !== '' && globals.HOMECLUBID !== null) {
                    globals.ISHOMECLUB = true
                  } else {
                    globals.ISHOMECLUB = false
                  }
                  this.props.getIsLogin(true)
                });
              }
            });
          });
        });

      }
    },
    error: (err) => {
      console.log("File Error ", JSON.stringify(err.message));
      this.props.getshowLoader(false);
      const isErrorMsg = globals.checkObject(err, "message");
      (isErrorMsg) ? _RootNavigator.openAlert(err.message) : _RootNavigator.openAlert(JSON.stringify(err));
    },
    complete: () => {
    },
  }

  checkEmail(userEmail) {
    this.setState({ userEmail }, () => this.validateFields())
  }

  checkPassword(userPassword) {
    this.setState({ userPassword }, () => this.validateFields())
  }

  onChangeText(field, value) {
    if (field == "email") {

    }
  }

  static refreshLoginScreen() {
    if (_this !== null) {
      _this.setState({
        userEmail: "",
        userPassword: "",
        btnEnable: false
      })
    }

  }

  navigateToSignUp() {
    this.setState({
      userEmail: "",
      userPassword: "",
    }, () => {
      this.props.navigation.navigate('SigUp')
    })
  }

  render() {
    const { navigation } = this.props;
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (

      <SafeAreaView style={globalStyles.mainSafeAreaView}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView style={styles.signUpKeyBoardView} behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
            <LogoHeader />
            <View style={[styles.textInputView, styles.signInInputContainerView]}>
              <TextFieldInput
                label={globals.selectedLocal.SIGN_IN_NAME}
                value={_this.state.userEmail}
                onChangeText={(userEmail) => this.checkEmail(userEmail)}
                onSubmitEditing={() => this.passwordRef.focus()}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
                lineColor={colors.slateGreyBorder}

              />
              <TextFieldInput
                label={globals.selectedLocal.SIGN_IN_PASSWORD}
                value={_this.state.userPassword}
                onChangeText={(userPassword) => this.checkPassword(userPassword)}
                secureTextEntry
                refData={passwordRef => this.passwordRef = passwordRef}
                returnKeyType="done"
                autoCapitalize="none"
                lineColor={colors.slateGreyBorder}
              />
              <View style={styles.signUpForgotPasswordView}>
                <TouchableOpacity style={styles.signUpForgotTouchView} onPress={() => navigation.navigate("ForgotPasswordScreen")}>
                  <Text
                    allowFontScaling={(Platform.OS === 'ios') ? true : false}
                    maxFontSizeMultiplier={(Platform.OS === 'ios') ? 1.5 : 0}
                    style={styles.forgotPasswordText}>{globals.selectedLocal.SIGN_UP_FORGOT_PASS}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.LoginbuttonView}>
              <CustomButton disabled={this.state.btnEnable} text={globals.selectedLocal.SIGN_IN_LOGIN_BTN} linearGradientColor={colors.greenLinearGradient} buttonViewStyle={styles.SubmitButtonStyle} buttonTextStyle={styles.TextStyle} onPress={() => this.userLogin()} leftView={null} right={null} />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

// export default signInScreen;
const mapStateToProps = (state, ownProps) => {
  return {
    loader: state.loaderRed.loader,
    isLogin: state.auth.isLogin,
    user: state.user,
    islogin: state.isLoginReducer.islogin
  };
};

const mapDispatchToProps = dispatch => (bindActionCreators({
  getshowLoader,
  userLogin: user => userLogin(user),
  getIsLogin,
  chatDisconnected: () => chatDisconnected(),
  userLogout: () => userLogout(),
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(signInScreen);
