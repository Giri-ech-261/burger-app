import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
         marginTop:15,
        marginBottom:15,
        padding:20,
        marginLeft:10,
        marginRight:10,
        backgroundColor:colors.backgorundAdvertizment,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.borderAdvertizment
    },
    mainViewAccount: {
        // backgroundColor:colors.white,
        // marginTop:10,
        marginBottom:15,
        padding:20,
        marginLeft:15,
        marginRight:15,
        backgroundColor:colors.backgorundAdvertizment,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.borderAdvertizment
    },
    advertizementTitleOne:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black
        
    },
    advertizementTitleOneGold:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaBold,
        color: colors.gold
        
    },
    advertizementTitleTwo:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        marginTop:10,
    },
    advertizementTitleTwoBold:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        marginTop:10,
    },
    advertizementTitleTwoRegular:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        marginTop:10,
    },
    advertizementTitleThree:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.blackOpacity4,
        marginTop:10,
    },
    advertizementImage:{
        width: 50, height: 60
    },
    barcodeMainView:{
        marginTop:10,
        borderColor: colors.black,
        borderRadius:30,
        borderWidth:1,
        padding:5,
        justifyContent:'center',
        backgroundColor:colors.white,
        width:150
    },
    barcodeTextView:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_12,
        color: colors.black,
        marginTop:3
    },
   
})