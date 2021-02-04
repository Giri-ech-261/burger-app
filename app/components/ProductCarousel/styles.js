import {StyleSheet} from 'react-native';
import {hp, wp} from '../../theme';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainContainer:{
        height: globals.screenHeight / 2.5,
        borderRadius: 2,
        marginBottom: 20,
    },
    inActiveDotStyle: {
        backgroundColor: colors.inActiveDots, width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5,
    },
    activeDotStyle: {
        backgroundColor: colors.activeDots, width: 22, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5,
    },
    paginationCustomStyle: {
        bottom: 0, paddingBottom: 5,
    },
    imageStyle:{
        width: wp('55%'),
        height: hp('38%'),
        alignSelf: 'center'
    }
});
