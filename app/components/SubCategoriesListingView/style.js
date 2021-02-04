import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        //paddingHorizontal : 10, 
        paddingVertical:10,
        // padding:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width: globals.screenWidth /2
    },
    categoryTitle:{
        fontSize:globals.font_14,
        textAlign:'center',
        fontFamily: globals.ProximaNovaSemiBold,
        color:colors.black,
        alignSelf:'center',
        paddingHorizontal:5,
        width: globals.screenWidth * 0.28,
        flexWrap:'wrap'
    },
    categoryImageView:{
        width: 62,
        height:58,
        justifyContent:'center',
        alignSelf:'center',
        marginRight:10
    },
    catCard :{
        width: globals.screenWidth * 0.44,
        height: 80,
        borderRadius: 12,
        backgroundColor: colors.white,
        // paddingHorizontal:10,
       
    }    
})