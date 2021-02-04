import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    safeAreaViewOne: {
        flex: 0,
        backgroundColor: colors.white
    },
    safeAreaViewTwo: {
        flex: 1,
        backgroundColor: colors.white
    },
    titleTextView: {
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        marginTop: 3,
        marginHorizontal: 10
    },
    seprator: {
        height: 1,
        marginTop: 10,
        backgroundColor: colors.warmGray02,
    },
    textFiledViewFloating: {

        marginTop: 20,
        marginBottom: 10
    },
    textFiledViewFloatingPass: {
        flex: 1,
        marginTop: 20,
        marginBottom: 10
    },
    eyeView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        right: 20,
        bottom: 22
    },
    offUserButtonView: {
        backgroundColor: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 20,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    offUserLoginText: {
        color: colors.white,
        alignSelf: 'center',
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        padding: 10
    },
})