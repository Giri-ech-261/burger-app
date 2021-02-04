import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:colors.white,
      borderWidth:1,
      borderColor: colors.lightBlue,
      borderRadius:20,
      margin:10,
    },
    cardView:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingBottom:10,
        alignItems:'center',
    },
    cardNameText:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.black,
        marginHorizontal:10,
    },
    cardNumber:{
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:20,
        marginHorizontal:10,
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaMedium,
        color:colors.black
    },
    defaultCardView:{
        alignItems: 'center',
        paddingBottom:10,
        paddingLeft:15, 
        paddingTop:5,
    },
    defaultCardText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black,
        marginHorizontal: 10
    },
})