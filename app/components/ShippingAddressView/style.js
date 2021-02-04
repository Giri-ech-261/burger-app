import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:colors.white,
      padding:20,
      borderWidth:3 
    },
    typeTextView:{
        justifyContent:'center', 
        alignSelf:'center', 
        fontFamily: globals.ProximaNovaMedium, 
        fontSize:globals.font_16
    },
    editTextView:{
        marginLeft:5, 
        justifyContent:'center', 
        alignSelf:'center', 
        fontFamily: globals.ProximaNovaSemiBold, 
        fontSize:globals.font_14,
        color: colors.red,
        textDecorationLine: 'underline',
    },
    typeIconVIew:{
        width:20, 
        height:20
    },
    editIconVIew:{
        width:15, 
        height:15
    },
    headerSeprator:{
        borderWidth:0.5, 
        borderBottomColor:colors.lightBlue, 
        marginTop:10
    },
    nameTextView:{
        fontSize:globals.font_16, 
        fontFamily:globals.ProximaNovaMedium, 
        color: colors.black
    },
    addressTextView:{
        fontSize:globals.font_14, 
        fontFamily:globals.ProximaNovaRegular, 
        color: colors.black,
        // alignSelf:'center',
        // marginLeft:10,
        lineHeight: 20,
    },
    addressMainVIew:{
        marginTop:10, 
        // alignItems:'center'
    },
    addressMainVIew1:{
        marginTop:10, 
        alignItems:'center'
    },
    mapIconView:{
        width: 20, height:20, marginTop:2
    },
    callIconView:{
        width: 16, height:16, 
    },
    headerSepratorFull:{
        height: 5, 
        width: "100%",
        backgroundColor: colors.lightWhite,
        
    },
})