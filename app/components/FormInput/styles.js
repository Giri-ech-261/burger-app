import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../theme';
import * as colors from '../../assets/styles/color';

export default StyleSheet.create({
    textInput: {
        padding: 0,
        paddingBottom: hp('0.4%'),
        paddingHorizontal: wp('0.8%'),
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: hp('6%') / 2,
        fontSize: 14,
        color: colors.black,
        height: hp('5%'),
        flexDirection: 'row',
        width: (Platform.OS === 'ios') ? '90%' : '85%',
        backgroundColor: colors.white
    },
    searchHeight:{
        height: hp(4),
        // alignSelf: 'center'
    },
    inputLabel: {
        color: colors.lightWarmGrey,
        fontSize: 15,
    },
    passwordIcon: {
        alignSelf: 'center',
        right: wp('7%')
    },
    leftIcon: {
        alignSelf: 'center',
        left: wp('6.4%'),
        zIndex: 100
    },
    inputPadding: {
        paddingLeft: wp('8%'),
        paddingRight: wp('11%')
    }
})
