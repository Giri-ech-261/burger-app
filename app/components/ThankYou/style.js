import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {Helper, hp, wp} from '../../theme';

export default StyleSheet.create({
    submitBtn: {
        backgroundColor: colors.THEME_COLOR,
        marginVertical: 20,
        width: wp('90%'),
    },

    submitText: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.white
    },

    successBlock: {
        flex: 1,
        height: hp('100%'),
        justifyContent: 'center',
        alignSelf: 'center',
    },

    block: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5,
    },

    messageBlock: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5,
        width: wp('60%')
    },

    thankYouText: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_28,
        color: colors.THEME_COLOR,
    },

    messageBlockText: {
        fontFamily: globals.ProximaNovaLight,
        color: colors.lightBlack,
        lineHeight: 24,
        textAlign: 'center',
        fontSize: globals.font_16,
    },

    continueBtnBlock: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5
    },

})
