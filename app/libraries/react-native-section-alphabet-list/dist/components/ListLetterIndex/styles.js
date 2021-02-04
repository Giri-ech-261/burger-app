"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var sizes = {
    containerWidth: 10,
    itemHeight: 15,
    itemFontSize: 20,
};
import * as colors from '../../../../../assets/styles/color';
import * as globals from '../../../../../utills/globals';
import { Platform }  from 'react-native';


exports.styles = react_native_1.StyleSheet.create({
    letterIndexContainer: {
        // width: sizes.containerWidth,
        // height: "100%",
        position: "absolute",
        backgroundColor:colors.white,
        top: 35,
        // paddingTop:10,
        right: 10,
    },
    letterIndexList: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    letterIndexItem: {
        // width: sizes.containerWidth,
        // height: "3.5%",
        // alignItems: "center",
        // justifyContent: "center",
    },
    letterIndexLabel: {
        fontSize: globals.font_12,
        color: colors.black,
        fontFamily: globals.ProximaNovaMedium,
        lineHeight: Platform.OS == "ios" ? 15 : 20,
    },
});
