import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        borderRadius:16,
        borderColor:'transparent',
        borderWidth:2,
        width:globals.screenWidth -20,
        marginHorizontal:10,
        backgroundColor:colors.white,
        marginBottom:20
    },
    articleImageView:{
        height:180, 
        width:globals.screenWidth -50,
        borderRadius:10,
        marginVertical:15,
        justifyContent:'center',
        alignSelf:'center'
    },    
    articleTitleView:{
        fontSize: globals.font_16,
        marginTop:10,
        fontFamily:globals.ProximaNovaBold,
        color: colors.categoryUnSelected
    },
    articleDetailTextView:{
        fontSize: globals.font_14,
        marginTop:10,
        fontFamily:globals.ProximaNovaLight,
        color: colors.articleDetailTextView
    },
    articleDateText:{
        fontSize: globals.font_14,
        fontFamily:globals.ProximaNovaRegular,
        color: colors.black,
        opacity: 0.6,
    },
    
})