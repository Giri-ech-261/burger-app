import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
       alignItems:'center'
    },
    textView:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
    }, 
     
    
})