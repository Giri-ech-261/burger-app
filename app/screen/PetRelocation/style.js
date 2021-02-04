import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {Helper, hp, wp} from '../../theme';

export default StyleSheet.create({
    screenLayout: {
        backgroundColor: colors.white,
        height: hp('100%'),
        flex: 1
    },

    elementBlock: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 21,
    },

    aquariumDetailHeaderText: {
        fontFamily: globals.ProximaNovaLight,
        fontSize: globals.font_14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0,
        color: colors.BLACK,
        paddingHorizontal: 5,
    },

    confirmText: {
        height: 22,
        fontFamily: globals.ProximaNovaLight,
        fontSize: globals.font_14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0,
        color: colors.BLACK,
        paddingHorizontal: 5,
    },

    nameTextBox: {
        width: wp('90%'),
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.darkWarmGrey,
        paddingVertical: 12,
        paddingHorizontal: 15,
    },

    mobileTextBox:{
        width: wp('60%'),
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.darkWarmGrey,
        paddingVertical: 12,
        paddingHorizontal: 15,
    },

    notesBox: {
        width: wp('90%'),
        borderRadius: 22,
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.darkWarmGrey,
        paddingVertical: 12,
        paddingHorizontal: 15,
    },

    pickerImage: {
        width: wp('6%'),
        height: hp('6%'),
        justifyContent: 'center',
        alignSelf: 'center',
        right: 10
    },

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

    mobileCode: {
        borderRadius: 22,
        backgroundColor: colors.white,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.darkWarmGrey,
        height: 44
    },
    loader: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        top: wp(80),
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: colors.red,
        borderWidth: 1,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50
    },
    modalText: {
        marginBottom: 15,
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        textAlign: "center"
    },
})
