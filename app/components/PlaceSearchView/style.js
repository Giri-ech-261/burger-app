import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:'transparent',
      margin:10,
      padding:5,
      alignItems:'center',
      flexDirection:'row'
    },
    textView:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        marginLeft: 10
    },
    textViewBold:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.black,
        marginLeft: 10
    },
    viewSeprtor:{
        height:1, backgroundColor:colors.warmGrey
    },
    imageIcon:{
        width: 20, height: 20
    },
})