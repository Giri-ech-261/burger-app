import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:colors.lightWhite,
        marginBottom:100
    },
    subHeaderCotent:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor:colors.white
    },
    subHeaderText:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        letterSpacing: 0,
        color: "#1a1a1a"
    },
    productCountView:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
    },
    productCountText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.recentOrderProductCount
    },
    detaileDataView:{
        height:50,
        paddingHorizontal:20,
        alignItems:'center'
    },
    detailsArticleNameText:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_18,
        color: colors.black,
        paddingVertical:10
    },
    detailsDescriptionview:{
        marginHorizontal:10,
        padding:10,
        //alignItems:'center',
        backgroundColor:colors.white,
        borderRadius:15
    },
    bottomButton:{
        margin:20,
        width: "90%",
        padding:15,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#8b8b8b",
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    maskCopy21 : {
        width: "40%",
        alignItems:'center',
        // justifyContent:'center',
        borderStyle: "solid",
        borderWidth: 1.5,
        borderRadius:19,
        borderColor: colors.red,
        padding:10
    },
    detailsArticleNameTextRed:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.red
    },
   gromingText:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.lightBlack
    },
    articleImageView:{
        height:180, 
        width:globals.screenWidth -40,
        borderRadius:10,
        marginBottom:10,
        justifyContent:'center',
        alignSelf:'center'
    },    
        
})