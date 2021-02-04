import { StyleSheet, Platform } from 'react-native';
import { color } from 'react-native-reanimated';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({

  safeAreaView: {
    flex: 1,
    backgroundColor: colors.lightWhite
  },
  safeAreaViewWhite: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerMainView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerTitle: {
    fontFamily: globals.ProximaNovaMedium,
    color: colors.white,
    fontSize: globals.font_20,
    textAlign: 'center'
  },
  removeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',

  },
  swipeWishlistView: {
    height: 150,
    backgroundColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
  },
  addEditTitleText: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_16,
    padding: 20,
    color: colors.black,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: '100%',
    borderTopColor:colors.grayOpacity03,
    borderLeftColor:colors.white,
    borderRightColor:colors.white,
    borderBottomColor:colors.white,
    borderWidth:1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottomViewMyList: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: '100%',
    borderWidth:1,
    borderColor:colors.lightWhite,
    backgroundColor: colors.lightWhite,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  addNewAddressView: {
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: colors.red,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.red
  },
  addNewAddressText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_14,
    color: colors.white,
    padding: 12,
    textAlign: 'center'
  },
  textFiledViewFloating: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  dropdownMainView: {
    marginTop: 20,
    borderRadius:50,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    height: 40,
  },
  dropdownMainViewAllergy: {
    marginTop: 20,
    borderRadius:50,
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 10,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    // height: 50,
  },
  dropdownMainViewIOS: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius:50,
    borderWidth: 1,
    padding: 15,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
  },
  downArrowView: {
    width: 13,
    height: 13,
    marginTop: 2,
    marginRight: 10,
  },
  textFiledViewFloatingWeight: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  textFiledViewFloatingAdopt: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingBottom: 10
  },
  uploadPhotoView: {
    borderColor: colors.darkWarmGrey,
    borderWidth: 1,
    backgroundColor: colors.darkWarmGrey,
    borderRadius: 30,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadPhotoTextView: {
    fontFamily: globals.ProximaNovaBold,
    color: colors.white,
    padding: 10,
    fontSize: globals.font_16
  },
  dateIconView: {
    width: 20,
    height: 20,
    marginTop: 2,
    marginRight: 10,
  },
  datePickerRightTextStyle: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_14,
    color: colors.black,
    alignSelf: "flex-start",
  },
  datePickerRightTextStyleSmall: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_12,
    color: colors.black,
    alignSelf: "flex-start",
  },
  dobEditRightDateTextView: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_15,
    color: colors.black,
    marginTop:2,
    alignSelf: 'flex-start'
  },
  dateInput: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor:colors.white,
    borderColor: colors.darkWarmGrey,
    width: globals.screenWidth,
  },
  dateTouchBody: {
    // flex: 1,
  },
  deafualtAddressTextView: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_14,
    color: colors.black
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  cameraHeight: {
    height: globals.screenHeight * 0.25,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  graySeprator: {
    borderRadius: 2,
    marginTop: 10,
    borderWidth: 1,
    width: 100,
    borderColor: colors.graySeprator,
    backgroundColor: colors.graySeprator,
    height: 5,
    alignSelf: 'center'
  },
  enterAddressPopup: {
    justifyContent: 'space-between',
    // paddingLeft:20,
    // paddingRight:20,
    marginTop: 10
  },
  enterAddressTextView: {
    fontSize: globals.font_16,
    fontFamily: globals.ProximaNovaMedium,
    color: colors.black
  },
  cancelIcon: {
    width: 15,
    height: 15,
    alignSelf: 'center',
    tintColor: colors.blackOpacity6
  },
  cancelIconModal: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    tintColor: colors.blackOpacity6
  },
  photoUploadOptionText:{
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_16,
    color: colors.black,
    marginTop: 20
  },
  allergyModalView: {
    height: globals.screenHeight * 0.6,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  modalSeprator:{
    height:1,
    marginTop:10,
    backgroundColor:colors.warmGray02

  },
  searchInputView:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:10
  },

  allergyMainView: {
    alignItems:'center',
    borderWidth:1,
    justifyContent:'space-between',
    borderRadius:20,
    padding:5,
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    borderColor:colors.grayOpacity05
 },
 allergyTextView:{
     fontSize: globals.font_12,
     fontFamily: globals.ProximaNovaRegular,
     color: colors.black,
 }, 
 allergycancelIcon:{
     width:10,
     height:10,
     marginHorizontal:10,
 }, 
 allergyDownArrowView: {
  width: 13,
  height: 13,
  marginTop: 2,
  marginRight: 10,
},
allergyTitle:{
  fontFamily: globals.ProximaNovaRegular,
  fontSize: globals.font_14,
  color: colors.black
},

// Empty view styles
 welcomeText:{
   fontSize: globals.font_24,
   fontFamily: globals.ProximaNovaMedium,
   color: colors.black
 },
 welcomeText2:{
  fontSize: globals.font_16,
  fontFamily: globals.ProximaNovaRegular,
  color: colors.black,
  marginTop:10
},
welcomeText3:{
  fontSize: globals.font_16,
  fontFamily: globals.ProximaNovaRegular,
  color: colors.black,
  marginTop:20
},
bottomViewAdd: {
  marginTop:20, 
  width: '100%',
  borderWidth:1,
  borderColor:colors.lightWhite,
  backgroundColor: colors.lightWhite,
  justifyContent: 'center',
  alignSelf: 'center'
},
})