import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent:'center',
        marginTop: 20, 
    },
    serviceImageBG:{
        flex: 1,
        width:globals.screenWidth - 30,
        height:90,
        resizeMode:'contain',
        borderRadius:10,
    },
    serviceTextMainView:{
        position:'absolute'
    },
    serviceTitleTextView:{
        fontSize:globals.font_16,
        color: colors.black,
        marginLeft:10,
        fontFamily:globals.ProximaNovaBold
    },
    serviceBookNowTextView:{
        fontSize: globals.font_14,
        color: colors.red,
        marginLeft: 10,
        fontFamily: globals.ProximaNovaRegular,
        marginTop: 10
    },
})