import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
       margin:10,
       justifyContent:'center',
       alignItems:'center',
       flex:1,
    },
    errorTextMessageView:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        alignSelf:'center'
    }, 
     
    addNewAddressView:{
        borderRadius:22,
        borderColor:colors.red,
        width: globals.screenWidth - 30,
        marginTop: 20,
        backgroundColor: colors.red
    },
    addNewAddressText:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.white,
        padding: 10,
        textAlign:'center'
    },
})