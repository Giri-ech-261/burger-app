import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    getStartedButtonView: {
        position:'absolute',
        padding:10,
        borderWidth:1,
        marginBottom: (globals.iPhoneX) ? 30 : 20, 
        width:globals.screenWidth - 40  ,
        backgroundColor:colors.activeDots,
        borderRadius:20,
        bottom: 10,
        justifyContent: 'center',
        alignSelf:'center',
        borderColor: colors.activeDots
    },
    startTextView:{
        color: colors.white,
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        textAlign:'center'
    },
    
})