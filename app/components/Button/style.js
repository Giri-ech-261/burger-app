import { StyleSheet } from 'react-native'
import { hp, wp, } from "../../theme";
import * as colors from '../../assets/styles/color'
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        paddingVertical: hp(1),
        flexDirection: 'row',
        borderRadius: hp(6) / 2,
        marginVertical: hp(2),
        height: hp(6),
    },
    buttonIcon: {
        fontSize: 24,
        color: colors.white,
        marginHorizontal: wp(16),
        paddingTop: hp(2),
        alignSelf: 'center'
    },
    buttonText: {
        color: colors.white,
        alignSelf: 'center',
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold
    },
})
