import { StyleSheet } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import { hp, wp} from '../../theme';
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.45; // this is equivalent to 255 from a 393 device width
const rectDimensions1 = SCREEN_WIDTH * 0.85;
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "red";

const scanBarWidth = SCREEN_WIDTH * 0.80; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";



export default StyleSheet.create({
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions1,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flexDirection: 'row',
    height: 200,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: 50,
    // backgroundColor: overlayColor,
    justifyContent: 'flex-start',
    // alignItems: "center"
  },

  bodyBlock: {
    flexDirection: "row",
    alignItems: "center",
    height: hp('80%'),
    marginTop: 50,
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    // backgroundColor: overlayColor,
    paddingBottom: 30,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    // backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  },

  actionBlock: {
    width: wp('90%'),
    height: 70,
    borderRadius: 12,
    backgroundColor: "#ffffff"
  },

  imageSize:{
    height: hp('3%'),
    width: hp('3%')
  },

  actionText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: 14,
    color: colors.black
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },

  placeholderText: {
    color:colors.white,
    fontFamily: globals.ProximaNovaLight,
    fontSize: 16,
  },
  camerabtn:{
    width: 56,
    height: 56,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    margin: 2,
  },
  cameraoutlinebtn:{
    width: 70,
    height: 70,
    borderRadius:50,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#ffffff"
  },
});
