import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({

    safeAreaview:{
        backgroundColor: colors.red,
        flex:1,
    },
    mainView:{
        backgroundColor: colors.white,
        flex:1,
    },
    userProfileView:{
        justifyContent:'space-between', 
        backgroundColor: colors.lightWhite, 
        // alignItems:'center', 
        padding:20
    },
    userImageView:{
        width: 60, 
        height: 60
    },
    userNameView:{
        justifyContent:'center', 
        marginHorizontal: 10
    },
    userLableView:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.black,
    },
    userLableDescView:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_13,
        color: colors.blackOpacity6,
        marginTop: 10
    },
    userEditText:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.red,
        textDecorationLine:'underline'
    },
    userOptioneView:{
        padding:12, 
        justifyContent: 'space-between'
    },
    userOptioneSubView:{
        width: globals.screenWidth *  0.18, 
        height: globals.screenWidth *  0.18, 
        borderColor: colors.red, 
        borderRadius: globals.screenWidth *  0.18/2, 
        borderWidth:1, 
        margin: 10,
        alignItems:'center', 
        justifyContent:'center'
    },
    optionViewImage:{
        width: 30, height: 30,  
    },
    optionViewTitle:{
        justifyContent:'center',
        textAlign: 'center',
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        fontSize: globals.font_14
    },
    graySeprator:{
        height:1, 
        marginTop:10,
        backgroundColor: colors.grayOpacity03
    },
    tierView:{
        margin:15, 
        borderWidth:1, 
        borderRadius:10, 
        borderColor:colors.lightGray, 
        backgroundColor: colors.white
    },
    tierViewUpper:{
        padding:8
    },
    tierImageView:{
        width: 40, height: 50
    },
    tierPertViewTitle:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black
    },
    tierPetTotleView:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        marginTop: 10
    },
    tierrewardAvailalbeText:{
        color: colors.red,
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        textDecorationLine:'underline'
    },
    tierrewardAvailalbePriceText:{
        color: colors.red,
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        marginTop: 10,
        alignSelf:'flex-end',
        textDecorationLine:'underline'
    },
    tierNextrewardText:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        // maxWidth: 100,

    },
    grayDarkSeprator:{
        height:0.5, 
        marginLeft:10, 
        marginTop:5,
        marginRight:10,
        backgroundColor: colors.gray
    },
    tierMainView:{
        margin: 0,
    },
    grayDarkSepratorFull:{
        height:0.5, 
        marginTop:10,
        backgroundColor: colors.gray
    },
    logoutMainVIew:{
        borderColor: colors.red, 
        borderWidth:1, 
        borderRadius:20, 
        marginLeft:20, 
        marginRight:20, 
        marginTop: 20, 
        alignItems: 'center' 
    },
    logoutTextView:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.red,
        padding: 10
    },
    appVersionTextView:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        margin: 10,
        textAlign: 'center',
        color: colors.darkWarmGrey
    },
    //--- Toggle View ---

    mainViewToggle: {
        backgroundColor:colors.white,
        justifyContent:'space-between',
        padding:15,
      },
      textview:{
          fontFamily: globals.ProximaNovaMedium,
          fontSize: globals.font_16,
          color: colors.black,
        //   marginHorizontal: 10
      }, 
      toggleGrayDarkSepratorFull:{
          height:1, 
          backgroundColor: colors.gray
      },
      grayDarkSepratorFullWithoutIcon:{
          height:1, 
          backgroundColor: colors.grayOpacity03
      },
      offuserMainView:{
        padding:20, 
        justifyContent:'center', 
        alignItems:'center'
      },
      offuserUpperText:{
          fontFamily: globals.ProximaNovaRegular,
          fontSize: globals.font_15,
          color: colors.black,
          lineHeight:22
      },
      offUserImageView:{
        width:80, 
        height:80, 
        marginTop:20, 
      },
      offUserButtonView:{
        backgroundColor: colors.red, 
        borderWidth:1,
        marginTop: 20, 
        borderColor:colors.red, 
        borderRadius:20, 
        width: globals.screenWidth - 40
      },
      offUserLoginText:{
        color: colors.white, 
        alignSelf:'center', 
        fontSize: globals.font_16, 
        fontFamily: globals.ProximaNovaBold, 
        padding:10
      },
      offuserDontAccountText:{
        marginTop:20,
        color: colors.black, 
        fontSize: globals.font_14, 
        fontFamily: globals.ProximaNovaRegular, 
      },
      offuserDontSignUpText:{
        marginTop:20,
        color: colors.red, 
        fontSize: globals.font_14, 
        fontFamily: globals.ProximaNovaSemiBold,
        textDecorationLine: 'underline',
        marginHorizontal:5
      },
     progressText:{
         fontFamily: globals.ProximaNovaMedium,
         fontSize: globals.font_12,
         color: colors.red,
         marginTop:10,
         marginHorizontal:10,
     },
})