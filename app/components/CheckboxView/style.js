import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      borderRadius:15,
      padding:globals.screenWidth * 0.04,
      backgroundColor:colors.white,
    //   marginTop:10,
      marginLeft:10,
      marginRight:10,
      marginBottom:5
    },
     checkboxTitle:{
      alignSelf:'center', 
      fontFamily: globals.ProximaNovaRegular,
      fontSize:globals.font_14,
      color:colors.black,
      marginHorizontal:5,
      
     },
})