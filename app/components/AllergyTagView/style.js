import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
       alignItems:'center',
       borderWidth:1,
       justifyContent:'space-between',
       borderRadius:20,
       padding:10,
       margin:5,
       borderColor:colors.grayOpacity05
    },
    textView:{
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
    }, 
    cancelIcon:{
        width:10,
        height:10,
        marginHorizontal:10,
    }, 
})