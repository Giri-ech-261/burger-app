import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        borderRadius:10,
        borderColor:'transparent',
        borderWidth:1,
        width:globals.screenWidth - 100,
        marginHorizontal:10
    },
    articleImageView:{
        width: globals.screenWidth - 100,
        height: 150,
        borderRadius:10,
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
    
})