import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:'transparent',
      margin:10
    },
    petImageView:{
        width: 70,
        height: 70,
        borderRadius: 20,
        // borderColor: colors.red,
        // borderWidth:2,
        overflow: "hidden",
    },
    addPetViewDashed:{
      width: 70,
      height: 70,
      borderRadius: 20,
      borderColor: colors.red,
      borderWidth:1,
      alignSelf:'center',
      justifyContent:'center',
      marginTop:5,
      backgroundColor:colors.red
    
      // borderStyle: 'dashed',
    },
    petNameText:{
      fontSize: globals.font_14,
      fontFamily: globals.ProximaNovaBold,
      // color: colors.red,
      alignSelf:'center',
      marginTop:10
    },
    petNameEditText:{
      fontSize: globals.font_13,
      fontFamily: globals.ProximaNovaRegular,
      color: colors.lightBlack,
      alignSelf:'center',
      // marginLeft: 5,
      marginTop:5
    },
    petEditIcon:{
      width:11, height:null, marginTop:5 
    },
    petEditView:{
      justifyContent:'center', alignSelf:'center'
    },
    petAddnewIcon:{
      width:30, height:30, alignSelf:'center' ,
    },
    
})