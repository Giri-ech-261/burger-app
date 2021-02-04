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
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.black,
        marginHorizontal: 10
    }, 
    grayDarkSepratorFull:{
        height:1, 
        backgroundColor: colors.gray
    },
    grayDarkSepratorFullWithoutIcon:{
        height:1, 
        backgroundColor: colors.grayOpacity03
    },
})