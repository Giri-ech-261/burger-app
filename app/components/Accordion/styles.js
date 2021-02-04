import {StyleSheet} from 'react-native';
import * as colors from '../../assets/styles/color';
import {hp, wp, Helper} from '../../theme';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    contentHeaderContainer: {
        paddingVertical: hp('2%'),
        backgroundColor: colors.white,
        paddingHorizontal: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 25,
    },
    contentContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: wp('5%'),
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingBottom: hp('2%'),
    },
    extraDataContainer: {
        paddingVertical: hp('2%'),
    },
    headerText: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.commonHeaderText,
        alignSelf: 'center',
    },
    sectionContentText: {
        opacity: 0.6,
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black,
    },
    plusImage: {
        width: wp('4%'),
        height: hp('4%'),
    },
    subTitleText: {
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        color: colors.black,
        paddingBottom: hp('1%'),
    },
    subContentContainer: {
        flexDirection: 'row',
    },
    dot: {
        backgroundColor: colors.theme_color,
        height: 5,
        width: 5,
        borderRadius: 50,
        marginTop: hp('1%'),
        marginRight: wp('2%'),
    },
    subContentItem: {
        opacity: 0.6,
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black,
        paddingBottom: hp(1),
        width: Helper.screenWidth - 89
    },
});
