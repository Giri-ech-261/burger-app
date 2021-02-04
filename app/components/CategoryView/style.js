import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      borderRadius:15,
      height: (Platform.OS === 'ios') ? 70 : 65,
      width: (Platform.OS === 'ios') ? 70 : 65,
      backgroundColor:colors.white,
      justifyContent:'center',
    //   marginTop:10,
      // marginLeft:5,
      // marginRight:5,
      // marginBottom:5
    },
    categoryTitle:{
        fontSize:globals.font_13,
        textAlign:'center',
        alignSelf:'center',
        justifyContent:'center',
        marginTop:10,
        color: colors.black,
        fontFamily: globals.ProximaNovaMedium
    },
    categoryImageView:{
        width: (Platform.OS === 'ios') ? 30 : 35,
        height:(Platform.OS === 'ios') ? 30 : 35,
        alignSelf:'center',
        justifyContent:'center',
        // alignItems:'center'
        // padding: 40
    },
})