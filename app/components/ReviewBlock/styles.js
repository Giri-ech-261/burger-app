import {StyleSheet} from 'react-native';
import * as colors from '../../assets/styles/color';
import {hp, wp, Helper} from '../../theme';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    reviewBlockContainer:{
        paddingHorizontal: wp('5.5%'),
        paddingVertical: hp('2%'),
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: colors.white,
        borderColor: colors.productViewBorder,
        marginVertical: hp(2)
    },
    reviewHeader:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.black,
        paddingVertical: hp('1%'),
    },
    durationText:{
        opacity: 0.4,
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black26,
        paddingBottom: hp('0.5%')
    },
    description:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        lineHeight: 21,
        letterSpacing: 0,
    }
})
