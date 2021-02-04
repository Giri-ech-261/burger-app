import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    autoShipHeight:{
        height: globals.screenHeight * 0.7,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }, 
      graySeprator:{
        borderRadius:2,
        marginTop:10,
        borderWidth:1,
        width:100,
        borderColor:colors.graySeprator,
        backgroundColor:colors.graySeprator,
        height:5,
        alignSelf:'center'
      },
      titleTextView:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black
    },
    enterAddressPopup:{
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        marginTop:20
    },
    signUpPopup:{
      paddingLeft:20,
      paddingRight:20,
      marginTop:20,
      justifyContent:'space-between'
  },
  signUpPopupTwo:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:20
},
    cancelIcon:{
        width:15,
        height:15,
    },
    modalSeprator:{
        height:1,
        backgroundColor:colors.horizontalSeprator,
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    phoneEmailMainView:{
        borderRadius:30,
        borderColor: colors.black,
        padding:10,
        marginLeft:10,
        marginRight:10,
    },
    mainViewOne:{
        width:'35%', 
        borderColor:colors.darkWarmGrey, 
        borderWidth:1,
        padding:15,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
     
    mainViewThree:{
        width:'65%', 
        borderColor:colors.darkWarmGrey, 
        borderWidth:1,
        marginLeft:-1,
        borderLeftColor:'transparent',
        borderTopRightRadius:30,
        borderBottomRightRadius:30
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
        // marginTop: 2,
      },
      wecallTetielView:{
          marginLeft:20,
          marginRight:20,
          fontFamily: globals.ProximaNovaRegular,
          fontSize: globals.font_14,
          color: colors.blackOpacity5
      },
      offUserButtonView:{
        backgroundColor: colors.red, 
        borderWidth:1,
        marginTop: 30, 
        borderColor:colors.red, 
        borderRadius:20, 
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
      },
      offUserLoginText:{
        color: colors.white, 
        alignSelf:'center', 
        fontSize: globals.font_16, 
        fontFamily: globals.ProximaNovaBold, 
        padding:10
      },
      orDashView:{
        color:colors.grayOpacity05,
        marginTop:20,
        marginBottom:20
      },
      orTitleView:{
        color: colors.black, 
        fontSize:globals.font_16, 
        fontFamily: globals.ProximaNovaSemiBold
      },
      appleLoginMianView:{
          marginTop:20,
          marginLeft: 20,
          marginRight:20,
          borderColor: colors.lightGray,
          borderWidth:1,
          padding:8,
          borderRadius:30,
      },
      withTitleView:{
          fontFamily: globals.ProximaNovaMedium,
          fontSize: globals.font_14,
          color: colors.black,
          marginLeft:-10
      },
      textFiledViewFloating: {
        marginLeft: 20, 
        marginRight: 20,
        marginTop: 20, 
        marginBottom: 10
      },
      cancelIconModal: {
        width: 10,
        height: 10,
        alignSelf: 'center',
        tintColor: colors.blackOpacity6
      },
      textFiledViewFloatingPass: {
        marginLeft: 20, 
        marginRight: 20,
        marginTop: 20, 
        marginBottom: 10,
        flex:1
      },
      forgotText:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.red,
        textDecorationLine:'underline',
        alignSelf:'flex-end',
        marginRight:20
      },
      forgotPasswordTitle:{
        marginLeft:20, 
        marginRight:20, 
        marginTop:20, 
        lineHeight:20,
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black
      },
      textFiledViewFloatingGeneral: {
        marginLeft: 20, 
        marginRight: 20,
        marginTop: 10, 
        marginBottom: 10
      },
      emailyouText:{
        marginLeft:30,
        marginRight:20,
        fontSize:globals.font_14,
        color: colors.blackOpacity5,
        fontFamily: globals.ProximaNovaRegular
      },
      policyTextView:{
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        fontFamily: globals.ProximaNovaRegular,
        fontSize:globals.font_14,
        color: colors.warmGrayTwo,
        lineHeight:20
      },
      tosTextView:{
        color: colors.red,
        textDecorationLine:'underline'
      },
      deafualtAddressView:{
        marginTop:10, 
        marginLeft:20, 
        marginRight:30, 
        // alignItems:'center',
        // justifyContent: 'space-between'
      },
      deafualtAddressTextView:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.blackOpacity7,
        marginRight:20,
        marginHorizontal:10,
      },
    // OTP view styles
    enterDigitCodeText:{
      fontSize: globals.font_14,
      fontFamily: globals.ProximaNovaMedium,
      color: colors.black,
      lineHeight:22
    },
    underlineStyleBase: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius:12,
      marginHorizontal:5,
      color:colors.black,
      fontFamily: globals.ProximaNovaRegular,
      fontSize: globals.font_16,
      borderColor:colors.darkWarmGrey
    },
    resendView:{
      marginTop:20,
      flexDirection:'row'
    },
    resendText:{
      fontFamily: globals.ProximaNovaRegular,
      fontSize: globals.font_14,
      color: colors.red,
      textDecorationLine:'underline'
    },
    resendCodeText:{
      fontFamily: globals.ProximaNovaRegular,
      fontSize: globals.font_14,
      color: colors.black,
      marginRight:5,
    },
})