import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
       justifyContent:'space-between',
       backgroundColor: colors.white,
    //    marginTop:10,
       
    },
    petImageView:{
        width: 130, height: 130 
    },
    petTitleView:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
    },
    petOtherTitleView:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaLight,
        color: colors.black,
        marginTop:20,
    },
    petOtherTitleViewRegular:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        marginTop:20,
    },
    petOtherTitleViewTwo:{
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaLight,
        color: colors.black,
        marginTop:10,
    },
    editText:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        color: colors.red,
        textDecorationLine:'underline'
    },
})