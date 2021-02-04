import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:colors.paleGrey,
    },
    mainWishlistView:{
        flex: 1,
        backgroundColor:colors.paleGrey,
        height:globals.screenHeight,
        paddingBottom:80
    },
    swipeView:{
        backgroundColor:'white',
        flex: 1,
    },
    removeContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    swipeWishlistView : {
        flex: 1,
        height: globals.screenHeight * 0.257,
        backgroundColor : colors.black,
    },
    wishlistView:{
        width:globals.screenWidth ,
        padding:20
    },
    emptyWishlistView:{
        backgroundColor:colors.white,
        //height : globals.screenHeight * 0.5,
        width:globals.screenWidth * 0.9,
        margin : 17,
        borderRadius: 14,
        marginTop:50,
        padding:20
    },
    dotView : {
        width: 6,
        height: 6,
        borderRadius:6/2,
        backgroundColor: colors.black,
        //marginRight:7,
        marginTop:7,
    },
    title:{
        fontSize:globals.font_16,
        color:colors.black,
        fontFamily:globals.ProximaNovaSemiBold,
    },
    pointsView:{
        marginTop:20,
        //paddingLeft:7
    },
    pointText:{
        fontSize:globals.font_14,
        color:colors.black,
        fontFamily:globals.ProximaNovaRegular,
        //paddingLeft:7
    },
    wishlistSignInView:{
        width:globals.screenWidth / 1.3  ,
        backgroundColor:colors.red,
        alignSelf:'center',
        borderRadius: 25,
        padding:15,
        marginTop:50
    },
    wishlistAccountView:{
        width:globals.screenWidth / 1.3  ,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius: 25,
        borderWidth:1,
        borderColor:colors.red,
        padding:15,
        marginTop:15
    },
    wishlistSignInText:{
        alignSelf:'center',
        color: colors.white,
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold
    },
    wishlistAccountText:{
        alignSelf:'center',
        color: colors.red,
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold
    },
})