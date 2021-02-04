import {
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";

const styles = StyleSheet.create({
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerBack: {
    marginLeft: 5,
    fontFamily: globals.SFProTextRegular,
    // fontSize: globals.font_17,
    color: colors.darkgrey,
    marginBottom: 3,
  },
  headerWhiteBack: {
    marginLeft: 5,
    fontFamily: globals.SFProTextRegular,
    fontSize: globals.font_17,
    color: colors.white,
    marginBottom: 3,
  },
  bottomButtonView: {
    paddingTop: globals.screenWidth * 0.03,
    paddingBottom: globals.screenWidth * 0.03,
    marginLeft: globals.screenWidth * 0.06,
    marginRight: globals.screenWidth * 0.06,
    backgroundColor: colors.lightGreen,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.white,
  },
  bottomButtonText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: globals.SFProTextMedium,
    fontSize: globals.font_14,
  },
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
    textAlign: "center",
  },
  headerStyleLightGray: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: colors.white,
    textAlign: "center",
  },
  moreChoicesText:{
    fontFamily: globals.ProximaNovaBold,
    fontSize: 12,
    color:colors.black, 
    textAlign:'center', 
    marginTop: Platform.OS =="android" ? 15 : 15,
  },
  headerStyleGreen: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: colors.teeTimeSearchHeader,
    textAlign: "center",
  },
  headerStyleCourseScoreCard: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
    textAlign: "center",
    // marginTop: 15,
    backgroundColor: colors.white
  },
  headerStyleKellyGreen: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
    backgroundColor: colors.kellyGreen,
  },
  floatingButton: {
    elevation: 6,
    position: "absolute",
    bottom: 30,
    right: 28,
    justifyContent: "flex-end",
    shadowColor: colors.gradient,
    borderRadius: 5,
    height: 60,
    width: 60,
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
  },
  headerTitleStyle: {
    fontFamily: globals.SFProTextRegular,
    fontSize: (Platform.OS == "ios") ? Dimensions.get("window").width * 0.0500 : Dimensions.get("window").width * 0.0450,
    color: colors.darkgrey,
    textAlign: "center",
    flex: 2,
    fontWeight: "normal",
    // marginTop: 5
  },
  headerWhiteTitleStyle: {
    color: colors.white,
    fontFamily: globals.SFProTextRegular,
    fontSize: (Platform.OS == "ios") ? Dimensions.get("window").width * 0.0500 : Dimensions.get("window").width * 0.0450,
    textAlign: "center",
    flex: 2,
    fontWeight: "normal",
  },
  headerTitleTeeHeader: {
    fontFamily: globals.SFProTextRegular,
    fontSize: (Platform.OS == "ios") ? Dimensions.get("window").width * 0.0500 : Dimensions.get("window").width * 0.0450,
    color: colors.darkgrey,
    textAlign: "center",
    fontWeight: "normal",
  },
  horizontalSeprator:{
    // marginTop: 10,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: colors.horizontalSeprator
  },
  producatViewMainView:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    width:globals.screenWidth / 1.9 ,
    backgroundColor:colors.white,
    borderRadius:10,
    borderWidth: 1,
    justifyContent:'space-between',
    borderColor: colors.productViewBorder
  },
  listingProducatViewMainView:{
    //marginTop:3,
    // marginLeft:10,
    // marginRight:10,
    width:globals.screenWidth,
    backgroundColor:colors.white,
    padding:10,
    //borderRadius:10,
    borderWidth: 1,
    justifyContent:'space-between',
    borderColor: colors.productViewBorder
  },
  wishlistProducatViewMainView:{
    width:globals.screenWidth ,
    backgroundColor:colors.white,
    borderBottomWidth: 5,
    borderBottomColor: colors.paleGrey,
  },
  prodcutViewNew:{
    width:45,
    height: 45,
    marginLeft:-10,
    marginTop:-8  
  },
  prodcutViewIconText:{
    width:47,
    height: 45,
  },
  prodcutViewHeart:{
    paddingRight:10,
    paddingTop:5
  },
  productViewHeader: {
    flexDirection:'row',
    // alignSelf:'flex-end',
    justifyContent:'space-between'
  },
  productViewImage:{
    width:100,
    height:100,
    // marginLeft:40,
  },
  rectangleCopy30 : {
    width: 110,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(50, 50, 50, 0.7)",
    justifyContent:'center'
  },
  listingProductViewImage:{
    width:106,
    height:Platform.OS =="android" ? 130 : 110
  },
  wishlistProductViewImage:{
    width:110,
    height:125
  },
  productViewTitle:{
    fontSize: globals.font_14,
    marginTop: 10,
    color: colors.black,
    fontFamily: globals.ProximaNovaSemiBold,
    lineHeight: 20,
  },
  productViewDesc:{
    fontSize: globals.font_14,
    fontFamily: globals.ProximaNovaSemiBold,
    color: colors.black,
  },
  productViewBuyOneGetOne:{
    fontSize: globals.font_12,
    marginTop:10,
    fontFamily: globals.ProximaNovaBoldItalic,
    color: colors.red
  },
  wishlistProductName:{
    fontSize: globals.font_14,
    marginTop: 10,
    color: colors.black,
    fontFamily: globals.ProximaNovaBold,
    lineHeight: 20,
  },
  cartProductName:{
    fontSize: globals.font_14,
    marginTop: 10,
    color: colors.black,
    fontFamily: globals.ProximaNovaRegular,
    lineHeight: 20,
  },
  wishlistEditText:{
    fontSize: globals.font_12,
    marginTop:8,
    fontFamily: globals.ProximaNovaBold,
    color: colors.red,
    borderBottomColor:colors.red,
    textDecorationLine: 'underline',
  },
  wishlistKeyText:{
    fontSize: globals.font_14,
    marginTop:7,
    fontFamily:globals.ProximaNovaSemiBold,
    color: colors.greyishBrown60
  },
  wishlistValueText:{
    fontSize: globals.font_14,
    marginTop:7,
    fontFamily:globals.ProximaNovaSemiBold,
    color: colors.black
  },
  defaulttValueText:{
    fontSize: globals.font_14,
    marginTop:7,
    fontFamily:globals.ProximaNovaRegular,
    color: colors.black40
  },
  productViewPrice:{
    fontSize: globals.font_14,
    marginTop:10,
    fontFamily:globals.ProximaNovaBold,
    color: colors.black
  },
  productViewPriceREd:{
    fontSize: globals.font_14,
    marginTop:10,
    fontFamily:globals.ProximaNovaBold,
    color: colors.red
  },
  productViewActualPrice:{
    fontSize: globals.font_14,
    marginTop:10,
    color: colors.lightBlack,
    fontFamily: globals.ProximaNovaRegular,
    textDecorationLine: 'line-through'
  },
  productPriceOld:{
    fontSize: globals.font_12,
    marginTop:10,
    color: colors.lightBlack,
    fontFamily: globals.ProximaNovaRegular,
    textDecorationLine: 'line-through',
  },
  productViewDiscountPrice:{
    fontSize: globals.font_14,
    fontFamily: globals.ProximaNovaBold,
    color:colors.blue
  },
  productViewDiscountPriceWith:{
    fontSize: globals.font_12,
    fontFamily: globals.ProximaNovaRegular,
    color:colors.lightBlack
  },
  productViewTotalRating:{
    fontSize: 14,
    marginLeft:10,
    color:colors.darkGray,
    fontFamily: globals.ProximaNovaLight
  },
  productViewRating:{
    flexDirection:'row', marginLeft:10, marginTop:10 
  },
  horizontalSepratorService:{
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.horizontalSeprator
  },
  leftSideTitle:{
    fontSize: globals.font_16,
    color: colors.categoryUnSelected,
    fontFamily: globals.ProximaNovaBold
  },
  rightSideTitle:{
    fontSize: globals.font_14,
    color: colors.red,
    fontFamily: globals.ProximaNovaMedium
  },
  prodcutViewAddToCart:{
    marginTop:10,
    padding:10,
    width:globals.screenWidth / 2.4  ,
    backgroundColor:colors.red,
    borderRadius:20,
    //position: 'absolute', //Here is the trick
    bottom: 10,
    // justifyContent: 'flex-end',
    alignSelf:'center',
    borderColor: colors.productViewBorder
  },
  CartViewAddToCart:{
    marginVertical:20,
    padding:15,
    width:globals.screenWidth /1.2  ,
    backgroundColor:colors.red,
    borderRadius:24,
    alignSelf:'center',
  },
  wishlistViewAddToCart:{
    marginTop:10,
    padding:15,
    width: globals.screenWidth *0.6,
    backgroundColor:colors.red,
    borderRadius:25,
    marginVertical:25,
    alignSelf:'center',
  },
  wishlistViewOutStock:{
    marginTop:10,
    padding:15,
    width: globals.screenWidth *0.6,
    backgroundColor:colors.lightWarmGrey,
    borderRadius:25,
    marginVertical:25,
    alignSelf:'center',
  },
  productViewAddToCart:{
    alignSelf:'center',
    color: colors.white,
    fontFamily: globals.ProximaNovaBold
  },
  CartViewAddToCarttText:{
    alignSelf:'center',
    color: colors.white,
    fontSize: globals.font_15,
    fontFamily: globals.ProximaNovaBold
  },
  deleteText:{
    //marginRight:10,
    marginTop:5,
    textAlign:'center',
    color: colors.white,
    fontFamily: globals.ProximaNovaBold,
  },
  removeContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:globals.screenWidth * 0.2,
    backgroundColor : colors.black,
  },
  SwipeHiddenText:{
    //marginRight:10,
    fontSize:globals.font_14,
    marginTop:3,
    textAlign:'center',
    color: colors.white,
    fontFamily: globals.ProximaNovaMedium,
  },
  wishlistHeaderTitle:{
    alignSelf:'center',
    fontSize:globals.font_20,
    color: colors.white,
    fontFamily: globals.ProximaNovaMedium,
  },
  productViewAutoShip:{
    height:null,
    marginLeft: 5,
    width: 60
  },
  productViewAutoShipList:{
    marginLeft: 5,
    width: 75,
    height:null,
  },
  productViewAutoshipMainView:{
    marginTop:10,
  },
  safeAreaViewHeader:{
    flex:0, backgroundColor: colors.red
  },
  mainLogoStyle:{
    width: 100,
    height:100,
    marginLeft:(Platform.OS === 'ios') ? 5 : 0,
  },
  mainView: {
    flex: 1,
    // marginTop:(Platform.OS === 'android') ? 60 : 0,
  },
  cartFreeshippingViewTitle:{
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_15,
    justifyContent:'center',
    alignSelf:'center',
    color: colors.black
  },
  
  cartFreeshippingViewTitleDynamic:{
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_15,
    justifyContent:'center',
    alignSelf:'center',
    color: colors.black
  },
  topSellingTitleVIewDiscount:{
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent:'center',
    alignSelf:'center',
    paddingTop:10,
    color: colors.red
  },
  topSellingTitleVIewDiscountGlobal:{
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent:'center',
    alignSelf:'center',
    // paddingTop:10,
    color: colors.red
  },
  topSellingTitleVIew:{
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent:'center',
    alignSelf:'center',
    paddingTop:10,
    color:colors.activeDots
  },
  topSellingTitleVIewGlobal:{
    fontFamily: globals.ProximaNovaSemiBold,
    fontSize: globals.font_14,
    justifyContent:'center',
    alignSelf:'center',
    color:colors.activeDots
  },
  comingSoonText:{
    fontSize: globals.font_17,
    marginTop: 10,
    color: colors.red,
    fontFamily: globals.ProximaNovaSemiBold
  },
});

export default styles;
