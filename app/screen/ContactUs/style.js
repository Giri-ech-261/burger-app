import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {hp, wp} from '../../theme';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
    paddingBottom: 60,
  },
  screenLayout: {
    backgroundColor: colors.white,
    height: hp('100%'),
    flex: 1
  },
  topSellingTitleVIew: {
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: Platform.OS === 'android' ? 5 : 15,
    color: colors.activeDots,
  },
  topSellingTitleVIewDiscount: {
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: Platform.OS === 'android' ? 5 : 15,
    color: colors.red,
  },
  prome1Size: {
    width: globals.screenWidth,
    height: globals.screenHeight * 0.23,
  },
  subText: {
    fontSize: globals.font_16,
    fontFamily: globals.ProximaNovaLight,
    color: colors.lightBlack,
    margin: 15,
  },
  FormView: {
    alignSelf: 'center',
    width: wp(85),
    marginTop: 10,
    borderRadius: 14,
    backgroundColor: colors.white,
  },
  RadioButtonView: {
    flex: 1,
    marginTop: 20,
    width: '100%',
    borderRadius: 14,
    backgroundColor: colors.white,
  },
    Radiotitle:{
        fontSize:globals.font_13,
        color:colors.black,
        fontFamily:globals.ProximaNovaMedium,
    },
    modalRows:{
        alignItems:'center',
        padding:10,
      paddingLeft: 0,
    },
  elementBlock: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  nameTextBox: {
    width: wp('85%'),
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.darkWarmGrey,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  mobileCode: {
    borderRadius: 22,
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.darkWarmGrey,
    height: 44,
  },
  mobileTextBox: {
    width: wp(50),
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.darkWarmGrey,
    paddingHorizontal: 15,
  },
  SelectSubject: {
    width: wp('85%'),
    borderRadius: 22,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.darkWarmGrey,
    height: 44,
  },
  MessageBox: {
    width: wp('85%'),
    borderRadius: 22,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.darkWarmGrey,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  submitBtn: {
    backgroundColor: colors.THEME_COLOR,
    marginVertical: 20,
    width: wp('85%'),
  },
  submitText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    color: colors.white
  },
  infoView: {
    alignSelf: 'center',
    width: wp(85),
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 14,
    backgroundColor: colors.white,
  },
  infoBox: {
    marginTop: 20,
  },
  HeadingInfo: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    color: colors.black,
    letterSpacing: 0,
  },
  TopHeadingInfo: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_14,
    color: colors.black,
    letterSpacing: 0,
  },
  IconTextTitle:{
    marginHorizontal: 10,
    fontSize: globals.font_14,
    color: colors.black,
    fontFamily: globals.ProximaNovaRegular,
  },
  loader: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    top: wp(80),
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: colors.red,
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 50
  },
  modalText: {
    marginBottom: 15,
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    textAlign: "center"
  },
});
