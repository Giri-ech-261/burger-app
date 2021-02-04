import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.paleGrey
    },
    recentViewedItems: {
        flex: 1,
        backgroundColor: colors.white
    },
    saveContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
        width: globals.screenWidth * 0.2,
    },
    saveContainerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop:20,
    },
    title: {
        fontSize: globals.font_16,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
    },
    recentlyViewedtitle: {
        fontSize: globals.font_16,
        color: colors.black,
        fontFamily: globals.ProximaNovaBold,
        lineHeight: 24,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 5
    },
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    topContent: {
        marginTop: 15,
        justifyContent: 'space-between',
    },
    red: {
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.red
    },
    mainTitle: {
        fontSize: globals.font_16,
        color: colors.black,
        fontFamily: globals.ProximaNovaBold,
    },
    autoshipImage: {
        width: 90,
        height: null,
        marginLeft: 5
     },
    saveFirstContainer: {
        justifyContent: 'space-between'
    },
    iconStyle: {
        width: 50,
        height: 50,
        marginTop: 25,
        marginBottom: 10

    },
    continuewButtonView:{
        backgroundColor: colors.red, 
        borderColor:colors.red, 
        width:globals.screenWidth-50, 
        marginTop:20, 
        justifyContent:'center',
        alignItems:'center', 
        padding:10, 
        borderRadius: 30, 
        borderWidth:1,
        marginBottom:20,
    },
    continueText:{
        color:colors.white, fontSize: globals.font_16, fontFamily: globals.ProximaNovaBold
    },
})