import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView:{
        flex:1, 
        backgroundColor:colors.lightWhite
    },
    cancelIcon:{
        width:15,
        height:15,
    },
    selectAddressText:{
        fontSize:globals.font_16, 
        fontFamily:globals.ProximaNovaBold, 
        marginTop:10, 
        color: colors.black,
        paddingBottom:10
    },
    bottomView:{
        position:'absolute', 
        bottom:0, 
        height:90,
        width: '100%', 
        backgroundColor:colors.lightWhite,
        justifyContent:'center',
        alignSelf:'center'
    },
    addNewAddressView:{
        borderWidth:1.5,
        borderRadius:22,
        borderColor:colors.black,
        marginLeft: 20,
        marginRight: 20,
    },
    addNewAddressText:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.black,
        padding: 10,
        textAlign:'center'
    },
    addressFlatlistView:{
        flex:1, 
        backgroundColor:colors.white, 
        marginTop:10
    },
    removeContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    swipeWishlistView : {
      height: 250,
      backgroundColor : colors.black,
      alignItems:'center',
       
      // flex:1,
  },
})