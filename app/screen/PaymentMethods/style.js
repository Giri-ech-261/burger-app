import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView:{
        flex:1, 
        backgroundColor:colors.lightWhite
    },
    cancelIcon:{
        width:15,
        height:15,
    },
    selectAddressText:{
        fontSize:globals.font_16, 
        fontFamily:globals.ProximaNovaBold, 
        marginTop:10, 
        color: colors.black,
        paddingBottom:10
    },
    paymentMethodsOptionView:{
        borderWidth:1,
        backgroundColor:colors.white,
        borderRadius:15,
        padding:20,
        borderColor:colors.lightBlue,
        justifyContent:'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop:10,
    },
    textView:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_15,
        color: colors.black,
        marginLeft: 10,
     },
    textViewLight:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_15,
        color: colors.black,
        marginLeft: 10
    },
    iconView:{
        width: 30, height:30
    },
    iconOtherView:{
        width: 35, height:35
    },
    textViewName:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_15,
        color: colors.black,
        marginHorizontal:10,
        // marginLeft: 10
    },
    textViewCardName:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_14,
        color: colors.black,
        marginTop:20,
    },
    textViewDefaultCard:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black,
    },
    paymentMethodsOptionViewCReditCard:{
        borderWidth:1,
        backgroundColor:colors.white,
        borderRadius:15,
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        borderColor:colors.lightBlue,
        justifyContent:'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop:10,
    },
})