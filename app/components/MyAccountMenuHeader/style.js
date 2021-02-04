import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:colors.white,
      justifyContent:'space-between',
      padding:20,
    },
    textview:{
        fontFamily: globals.ProximaNovaLight,
        fontSize: globals.font_22,
        color: colors.blackOpacity8,
    }, 
    grayDarkSepratorFull:{
        height:1, 
        backgroundColor: colors.gray
    },
})