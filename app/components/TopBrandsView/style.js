import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
      backgroundColor:'transparent',
      margin:10,
    },
    brandImageView:{
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor: colors.topBrandBorder,
        borderWidth:1,
        overflow: "hidden",
    },
})