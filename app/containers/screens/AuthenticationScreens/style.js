import {
  Platform,
  StyleSheet,
} from "react-native";
import * as globals from "../../../utills/globals";
import * as colors from "../../../assets/styles/color";


module.exports = StyleSheet.create({
  // ================== Initial Screen  ====================
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoHeaderView: {
    height: globals.screenHeight * 0.64,
    paddingTop: globals.screenHeight * 0.2,
  },
  emailView: {
    flexDirection: "row",
    borderWidth: globals.screenWidth * 0.0034,
    borderRadius: globals.screenWidth * 0.06,
    height: globals.screenHeight * 0.05665,
    marginLeft: globals.screenWidth * 0.064,
    marginRight: globals.screenWidth * 0.064,
    marginBottom: globals.screenHeight * 0.03,
    alignItems: "center",
  },
  emailImage: {
    marginLeft: globals.screenWidth * 0.08,
    marginRight: globals.screenWidth * 0.04,
    alignSelf: "center",
  },
  emailText: {
    color: colors.darkgrey,
    fontSize: globals.font_14,
    fontFamily: globals.SFProTextMedium,
    alignSelf: "center",
  },
  facebookView: {
    flexDirection: "row",
    borderWidth: globals.screenWidth * 0.0034,
    borderRadius: 23,
    height: globals.screenHeight * 0.05665,
    marginLeft: globals.screenWidth * 0.064,
    marginRight: globals.screenWidth * 0.064,
    marginBottom: globals.screenHeight * 0.072,
    alignItems: "center",
  },
  facebookImage: {
    marginLeft: globals.screenWidth * 0.08,
    marginRight: globals.screenWidth * 0.04,
    alignSelf: "center",
  },
  facebookText: {
    color: colors.darkgrey,
    fontSize: globals.font_14,
    fontFamily: globals.SFProTextMedium,
    alignSelf: "center",
  },
  instaGmailView: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginBottom: globals.screenHeight * 0.13,
  },
  instaTouch: {
    width: "50%",
    borderRightWidth: 1,
  },
  instaText: {
    color: colors.darkgrey,
    fontSize: globals.font_14,
    fontFamily: globals.SFProTextMedium,
    marginRight: 25,
    alignSelf: "flex-end",
  },
  gmailTouch: {
    width: "50%",
    borderRightWidth: 1,
  },
  gmailText: {
    color: colors.darkgrey,
    fontSize: globals.font_14,
    fontFamily: globals.SFProTextMedium,
    marginLeft: 25,
  },

  keyboardViewResetPass: { flex: 1 },

  // ================== Sign Up =======================
  flexRowView: {
    flexDirection: "row",
    flex: 1,
  },
  nameView: {
    flex: 1,
    marginRight: 10,
  },
  surnameView: {
    flex: 1,
  },
  textInputView: {
    marginLeft: globals.screenWidth * 0.05,
    marginRight: globals.screenWidth * 0.05,
  },
  forgotPasswordText: {
    alignSelf: "flex-end",
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_13,
    color: colors.black,
    opacity: 0.8
  },
  buttonView: {
    marginTop: globals.screenHeight * 0.07,
    marginLeft: globals.screenWidth * 0.06,
    marginRight: globals.screenWidth * 0.06,
  },
  LoginbuttonView: {
    marginTop: globals.screenHeight * 0.03,
    marginLeft: globals.screenWidth * 0.06,
    marginRight: globals.screenWidth * 0.06,
  },
  conditionTextView: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: globals.screenHeight * 0.04,
    marginLeft: globals.screenWidth * 0.07,
    marginRight: globals.screenWidth * 0.07,
    marginBottom: 8,
    flex: 1,
    lineHeight: 18,
  },
  mainTextStyle: {
    textAlign: "center",
    color: colors.lightgray,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_10,
  },
  mainSignUPTextStyle: {
    textAlign: "center",
    color: colors.lightgray,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_11,
  },
  conidtionTextStyle: {
    textDecorationLine: "underline",
    color: colors.lightblack,
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_11,

  },
  loginTextViewStyle: {
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: globals.screenWidth * 0.013,
    borderBottomWidth: 0.5,
    flex: 1,
    bottom: 10,
    marginTop: (Platform.OS == "android") ? globals.screenHeight * 0.15 : (globals.iPhoneX) ? globals.screenHeight * 0.13 : globals.screenHeight * 0.13,
  },
  signUpTextViewStyle: {
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: globals.screenWidth * 0.013,
    borderBottomWidth: 0.5,
    flex: 1,
    marginTop: globals.screenHeight * 0.07,
    bottom: 10
  },
  loginTextView: {
    textAlign: "center",
    color: colors.lightblack,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_12,
  },
  loginTextStyle: {
    fontFamily: globals.SFProDisplayBold,
    fontSize: globals.font_12,
    color: colors.lightblack,

  },
  passworndHintView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  atLeast6CharCheck: {
    height: 16,
    width: 16,
    marginRight: 8,
    borderBottomWidth: 1,
    borderRadius: 16 / 2
  },
  atLeast6CharLabel: {
    fontSize: globals.font_15,
    fontFamily: globals.SFProTextRegular,
    color: colors.atLeasetChar
  },
  // ================== forgotpassword  ======================
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: globals.screenHeight * 0.05
  },
  forgotPasswordLabel: {
    color: colors.black,
    fontFamily: globals.SFProDisplayBold,
    fontSize: globals.font_24,
    textAlign: "center",
  },
  forgotPasswordSubLabel: {
    marginTop: globals.screenHeight * 0.01,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_15,
    color: colors.darkgrey,
    marginHorizontal: globals.screenWidth * 0.05,
    textAlign: "center",
  },
  forgotPasswordInputView: {
    marginTop: 10
  },
  ActivityIndicator: {
    // position: "absolute",
    // zIndex: 999,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  // ================== Terms and policy screen  =======================
  webViewTC: {
    height: globals.screenHeight,
  },
  tabViewStyleTC: {
    width: globals.screenWidth,
    alignSelf: "center",
    backgroundColor: colors.white,
    height: globals.screenHeight - (globals.iPhoneX ? 120 : 80),
  },
  viewTermsAndPolicy: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: 16,
  },
  textTermPolicyNoteTitle: {
    fontSize: globals.font_20,
    fontFamily: globals.SFProDisplayBold,
    marginBottom: 15,
    color: colors.darkgrey,
  },
  textTermPolicyNoteHeader: {
    fontSize: globals.font_15,
    fontFamily: globals.SFProDisplayBold,
    marginBottom: 15,
    color: colors.kellyGreen,
    letterSpacing: globals.ltr_sp_044,
  },
  textTermPolicyNoteDetail: {
    fontSize: globals.font_15,
    fontFamily: globals.SFProTextRegular,
    color: colors.darkgrey,
  },
  tabbar: {
    left: 16,
    backgroundColor: colors.white,
    width: globals.screenWidth - 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.proUnderline,
    alignContent: "center",
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_15,
    elevation: 0,
    shadowOpacity: 0,
    height: 55,
    justifyContent: 'center',
  },
  tabStyle: {
    backgroundColor: colors.transparent,
    width: globals.screenWidth * 0.45,
  },
  indicatorStyleclubDetail: {
    backgroundColor: colors.black,
    height: 2,
  },
  labelStyle: {
    color: colors.black,
    backgroundColor: colors.transparent,
    textAlign: "center",
    fontSize: globals.font_15,
    width: globals.screenWidth / 2,
    fontFamily: globals.SFProTextMedium,
    letterSpacing: 0.16,
    paddingHorizontal: globals.screenWidth * 0.0336
  },
  tabinitialLayout: {
    width: globals.screenWidth - 50,
    flex: 1,
    height: 50,
  },
  viewTermsContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  goBackButtonView: {
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  bottomButtonView: {
    paddingTop: globals.screenWidth * 0.03,
    paddingBottom: globals.screenWidth * 0.03,
    marginLeft: globals.screenWidth * 0.06,
    marginRight: globals.screenWidth * 0.06,
    backgroundColor: colors.lightGreen,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.white,
  },
  bottomButtonText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_14,
  },
  SubmitButtonStyle: {
    paddingTop: globals.screenWidth * 0.04,
    paddingBottom: globals.screenWidth * 0.04,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: "center",
    flex: 1,
  },
  SubmitHomeClubButtonStyle: {
    paddingTop: globals.screenWidth * 0.04,
    paddingBottom: globals.screenWidth * 0.04,
    borderRadius: globals.screenWidth * 0.0613, // 23
    justifyContent: "center",
    width: globals.screenWidth * 0.6,
  },
  TextStyle: {
    color: colors.white,
    textAlign: "center",
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_11,
  },
  termsServiceWebViewView: {
    flex: 1,
    flexDirection: "column",
    // overflow: "hidden", 
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: colors.white
  },
  mainErrorTextStyle: {
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_15,
    letterSpacing: 0,
    color: colors.lightWhiteWithoutAlpha,
  },
  apiErrorTextView: {
    textAlign: "center",
    marginTop: 10,
    justifyContent: "center"
  },
  apiErrorMainView: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },

  // ================== Sign Up screen  =======================
  signUpKeyBoardView: {
    flex: 1,
  },
  signUpForgotPasswordView: {
    flex: 1,
  },
  signUpForgotTouchView: {
    alignSelf: "flex-end",
  },
  signInInputContainerView: {
    marginTop: globals.screenHeight * 0.05
  },

  // ================== SELECT_HOME_CLUB  =======================
  headerHomeClub: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  SHC_touchHomeStack: {
    elevation: 6,
    position: "absolute",
    bottom: globals.screenWidth * 0.1,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: colors.gradient,
    height: globals.screenWidth * 0.25,
    width: globals.screenWidth * 0.25,
    borderRadius: (globals.screenWidth * 0.25) / 2,
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
    overflow: "hidden",
  },
  SHC_imgDoneButton: {
    width: "100%",
    height: "100%",
  },
  SHC_ContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  SHC_ChooseBelowStyle: {
    fontFamily: globals.SFProDisplayBold,
    fontSize: globals.font_24,
    color: colors.darkgrey,
    marginHorizontal: globals.screenWidth * 0.064,
  },
  SHC_SearchMainviewStyle: {
    height: 36,
    flexDirection: "row",
    marginHorizontal: globals.screenWidth * 0.043,
    marginTop: globals.screenHeight * 0.0246,
    alignItems: "center",
    backgroundColor: colors.steel10,
    borderRadius: globals.screenWidth * 0.027,
  },
  SHC_SearchSearchIconStyle: {
    marginHorizontal: globals.screenWidth * 0.021,
  },
  SHC_SearchTextStyle: {
    width: globals.screenWidth * 0.82,
    marginLeft: globals.screenWidth / 4,
    fontSize: globals.font_15,
    padding: 0,
    color: colors.lightWhiteWithoutAlpha,
    opacity: 0.8,
    alignSelf: "center",
  },
  SHC_SearchTextInputStyle: {
    width: globals.screenWidth * 0.82,
    height: 36,
    marginLeft: globals.screenWidth * 0.08,
    fontSize: globals.font_15,
    padding: 0,
    backgroundColor: colors.transparent,
    position: "absolute",
  },
  SHC_FlatlistStyle: {
    marginHorizontal: globals.screenWidth * 0.064,
    backgroundColor: colors.white,
    marginTop: globals.screenHeight * 0.0197,

  },
  SHC_FlatlistRowItemStyle: {
    flexDirection: "row",
    paddingTop: globals.screenHeight * 0.011,
    paddingBottom: globals.screenHeight * 0.011,
  },
  SHC_FlatlistRowItemIconStyle: {
    marginTop: 3,
    marginRight: globals.screenWidth * 0.043,
  },
  SHC_FlatlistRowItemHeaderLabelStyle: {
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_17,
    color: colors.darkgrey,
  },
  SHC_FlatlistRowItemSubLabelStyle: {
    color: colors.lightWhiteWithAlpha,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_13,
    marginTop: 2
  },
  SHC_FlatlistItemSepratorStyle: {
    alignSelf: "flex-end",
    height: 1,
    width: "95%",
    backgroundColor: colors.white,
  },
  SHC_buttonView: {
    marginLeft: globals.screenWidth * 0.17,
    marginRight: globals.screenWidth * 0.17,
    bottom: globals.screenHeight * 0.08,
  },
  SHC_buttonViewSelectHome: {
    marginHorizontal: globals.screenWidth * 0.2,
    bottom: globals.screenHeight * 0.06,
    zIndex: 1,
    position: 'absolute',
  },
  SHC_apiErrorContainerView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
    padding: globals.screenWidth * 0.1,
    alignSelf: 'center'
  },
  SHC_apiErrorImageView: {
    alignSelf: "center",
    justifyContent: 'center'
  },
  SHC_apiErrorTextView: {
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_15,
    color: colors.lightWhiteWithoutAlpha,
    textAlign: "center",
    top: 20
  },
  SHC_backButtonTextView: {
    marginLeft: 5,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_17,
    color: colors.darkgrey,
    marginBottom: 3
  },
  SHC_loaderActivityIndicator: {
    flex: 1,
    top: globals.screenHeight * 0.1
  },
  SHC_footerView: {
    height: globals.screenHeight * 0.12
  },
  SHC_logoutButtonText: {
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_17,
    color: colors.darkgrey,
    marginRight: 20
  },

  // ================== SIGNUP_WITH_ID_CARD  ======================
  scanImageView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 18,
  },
  btnMarginTop: {
    marginTop: globals.screenHeight * 0.045,
  },
  bottomView: {
    height: Platform.OS == "android" ? globals.screenHeight * 0.047 : (globals.iPhoneX) ? 0 : globals.screenHeight * 0.047,
  },
  signUpWithIdInputView: {
    letterSpacing: 2,
    fontFamily: globals.SFProTextRegular
  },
  modalViewStyle: {
    backgroundColor: colors.cameraLinearGradient
  },

  // ================== QRCODE SCANNING  ======================
  qrCodeTopView: {
    marginTop: globals.screenHeight * 0.050,
  },

  qrCodeBottomView: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    position: 'absolute',
    bottom: 0,
    paddingBottom: globals.screenHeight * 0.03,
    justifyContent: 'flex-end',
  },

  qrCodeLogoView: {
    alignItems: "center",
    justifyContent: "center"
  },

  logoImageView: {
    width: globals.screenWidth * 0.18,
    height: globals.screenHeight * 0.15,
    resizeMode: 'contain',
  },

  golfClixText: {
    fontSize: globals.font_24,
    fontFamily: globals.OswaldBold,
    color: colors.white
  },

  golfClixSubText: {
    color: "rgb(138, 151, 154)"
  },

  scanQRCodeUpView: {
    height: globals.screenHeight * 0.07005
  },

  isLoadingView: {
    height: globals.screenHeight * 0.05
  },

  scanQRCodeBottomView: {
    height: globals.screenHeight * 0.1500
  },

  scanQrTextView: {
    alignItems: "center",
    justifyContent: "center",
  },

  scanQrText: {
    textAlign: "center",
    fontSize: globals.font_22,
    fontFamily: globals.SFProDisplayMedium,
    color: colors.white
  },

  qrCameraView: {
    height: (Platform.OS == "android") ? globals.screenWidth * 0.6500 : globals.screenWidth * 0.7000,
    width: (Platform.OS == "android") ? globals.screenWidth * 0.6500 : globals.screenWidth * 0.7000,
    alignSelf: "center",
    borderRadius: 8,
    overflow: 'hidden',
  },

  cancelButtonView: {
    marginLeft: globals.screenWidth * 0.27,
    marginRight: globals.screenWidth * 0.27
  },

  cancelButtonText: {
    paddingBottom: globals.screenWidth * 0.020,
    paddingTop: globals.screenWidth * 0.020,
    paddingLeft: globals.screenWidth * 0.010,
    paddingRight: globals.screenWidth * 0.010,
    textAlign: "center",
    fontSize: globals.font_14,
    fontFamily: globals.SFProTextRegular
  },

  topOverlay: {
    flex: 1,
    height: globals.screenWidth,
    width: globals.screenWidth,
    backgroundColor: colors.blackWithAlpha,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  blurModalView: {
    backgroundColor: (Platform.OS == "android") ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)',
    flex: 1,
    height: globals.screenHeight,
    width: globals.width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  APICallLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  APIloaderView: {
    height: globals.screenHeight * 0.05,
    marginLeft: 20,
    marginRight: 20
  },
  // ================== Change Password screen  =======================
  containerView: {
    flex: 1,
    paddingTop: globals.screenWidth * 0.106, //40
    paddingLeft: globals.screenWidth * 0.064, //24
    paddingRight: globals.screenWidth * 0.064, //24
    backgroundColor: colors.white
  },
  tipsTxt: {
    fontFamily: globals.SFProDisplayBold,
    fontSize: globals.font_24,
    letterSpacing: 0,
    color: colors.darkgrey,
  },
  tipsContentText: {
    marginTop: globals.screenWidth * 0.04, //15
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_16,
    color: colors.darkgrey,
  },
  currentPassInputView: {
    marginTop: globals.screenHeight * 0.088
  },
  changePassNewInput: {
    marginTop: globals.screenHeight * 0.049
  },
  changePassRepeatInput: {
    marginTop: globals.screenHeight * 0.012
  },
  confirmPassButtomView: {
    // marginTop: globals.screenHeight * 0.162
  },
  // ================== Reset Password screen  =======================
  resetPassLabel: {
    marginHorizontal: globals.screenWidth * 0.085
  },
  resetPassInputContainer: {
    marginTop: globals.screenWidth * 0.1
  },
  // ================== Privacy Policy screen  =======================
  privacypolicyScrollView: {
    flex: 1,
    backgroundColor: colors.white
  },
  privacypolicyContainerView: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    paddingBottom: 20,
    backgroundColor: colors.white
  },
  conditionTextView1: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: globals.screenHeight * 0.02,
    marginLeft: globals.screenWidth * 0.05,
    marginRight: globals.screenWidth * 0.05,
    // marginBottom: 8,
    flex: 1,
    lineHeight: 18,
  },

});
