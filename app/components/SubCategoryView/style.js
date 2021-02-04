import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        paddingHorizontal : 10, 
    },
    categoryTitle:{
        fontSize:globals.font_13,
        textAlign:'center',
        fontFamily: globals.ProximaNovaRegular
    },
    categoryImageView:{
        width: 30,
        height:30
    },
    catCard :{
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightBlueListingBorder,
        justifyContent:'center'
    }    
})