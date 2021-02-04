import {Platform, StyleSheet} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {Helper, hp, wp} from '../../theme';

export default StyleSheet.create({
  leftText: {
    color: colors.white,
    fontSize: 15,
  },
  productMainContainer: {
    backgroundColor: colors.lightWhite,
    flex: 1,
  },
  newTagImage: {
    width: wp('12%'),
    height: hp('7%'),
  },
  pdfImage: {
    width: wp('6%'),
    height: hp('3%'),
  },
  confImage: {
    width: wp('8%'),
    height: hp('5%'),
  },
  infoImage: {
    width: wp('4%'),
    height: hp('2%'),
    alignSelf: 'center',
    marginLeft: 5,
  },
  heartImage: {
    width: wp('7%'),
    height: hp(2.5),
    // alignSelf: 'center',
  },
  productInfoContainer: {
    paddingHorizontal: wp('6%'),
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: hp(1),
    paddingBottom: hp(4),
  },
  newBlock: {
    paddingTop: hp(2),
    justifyContent: 'space-between',
  },
  buyText: {
    paddingBottom: hp(2),
    fontFamily: globals.ProximaNovaBoldItalic,
    fontSize: globals.font_12,
    textTransform: 'uppercase',
    color: colors.red,
  },
  newFirstBlock: {
    position: 'absolute',
    left: 15,
  },
  mainView: {
    flex: 1,
  },
  productMainView: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerBlock: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    // paddingVertical: hp('1.5%'),
    marginTop: 20,
  },
  dropdownMainView: {
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
  },
  dropdownMainViewIOS: {
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
  },
  dropdownQTYViewIOS: {
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.darkWarmGrey,
    justifyContent: 'space-between',
  },
  downArrowView: {
    width: 13,
    height: 13,
    marginTop: 2,
    marginRight: 10,
  },
  titleText: {
    fontFamily: globals.ProximaNovaBold,
  },
  descText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_18,
    // fontWeight: 'normal',
    // fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.black28,
    paddingBottom: hp(2),
    width: wp(80),
  },
  byText: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_16,
    letterSpacing: 0,
    color: colors.black40,
  },
  typeText: {
    color: colors.theme_color,
  },
  ratingContainer: {
    justifyContent: 'space-between',
    paddingBottom: hp(1.5),
  },
  amtText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    letterSpacing: 0,
    color: colors.theme_color,
  },
  discountText: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_14,
    fontWeight: '500',
    color: colors.lightBlack,
    textDecorationLine: 'line-through',
    marginLeft: wp(1),
  },
  reviewContainer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
    backgroundColor: colors.white,
    marginBottom: hp(10),
  },
  saveText: {
    fontFamily: globals.ProximaNovaMedium,
    fontSize: globals.font_14,
    color: colors.theme_color,
    marginLeft: 5,
  },
  customerReviewText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    color: colors.black,
  },
  totalReview: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    color: colors.black,
  },
  reviewPagination: {
    opacity: 0.5,
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_16,
    textAlign: 'center',
    color: colors.black26,
  },
  reviewCountContainer: {
    justifyContent: 'space-between',
  },
  filterDrop: {
    width: wp(43),
  },
  countDrop: {
    width: wp(25),
    // height: wp(25)
  },
  cartContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: globals.screenWidth,
    paddingHorizontal: wp(5),
  },
  addToCart: {
    width: wp(60),
    marginRight: hp(1),
    borderRadius: 50,
    height: Platform.OS === 'ios' ? 40 : 40,
    marginTop: Platform.OS === 'ios' ? 0 : 5,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: colors.red,
    backgroundColor: colors.red,
  },
  addtoCartTextView: {
    textAlign: 'center',
    color: colors.white,
    fontSize: globals.font_15,
    fontFamily: globals.ProximaNovaBold,
  },
  documentContainer: {
    paddingHorizontal: wp('8%'),
    backgroundColor: colors.white,
    paddingVertical: hp('3%'),
  },
  docText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_14,
    color: colors.commonHeaderText,
    paddingHorizontal: wp(2),
    alignSelf: 'center',
  },
  pdfName: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_14,
    color: colors.theme_color,
    paddingVertical: hp(1),
  },
  pdfNames: {
    paddingVertical: hp(2),
  },
  pdfDivider: {
    height: 1,
    opacity: 0.2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.horizontalSeprator,
    marginBottom: hp(2),
  },
  confContainer: {
    paddingVertical: hp(2),
  },
  subContainerText: {
    width: Helper.screenWidth - 89,
    alignSelf: 'center',
    fontFamily: globals.ProximaNovaLight,
    fontSize: globals.font_14,
    color: colors.black59,
  },
  subContainerExtraText: {
    color: colors.red,
    fontFamily: globals.ProximaNovaBold
  },
  ratingCountText: {
    fontFamily: globals.ProximaNovaMedium,
    fontSize: globals.font_16,
    letterSpacing: 0,
    color: colors.black59,
  },
  ratingCountContainer: {
    flexDirection: 'row',
  },
  yellowBlock: {
    borderRadius: 8,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    width: wp(42),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    marginHorizontal: wp(1),
  },
  yellowBlockImage: {
    width: wp(4),
    height: hp(1.5),
    marginRight: wp(1),
  },
  yellowImageText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_11,
    lineHeight: 14,
    letterSpacing: 0,
    color: colors.black26,
    alignSelf: 'center',
  },
  yellowContainer: {
    paddingTop: hp(2),
  },
  giftBoxImage: {
    width: wp(8),
    height: hp(3),
    // alignSelf: 'center',
  },
  offerBlock: {
    borderRadius: 14,
    backgroundColor: colors.lightWhite,
    marginVertical: hp(3),
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
  },
  offerText: {
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    letterSpacing: 0,
    color: colors.black,
    alignSelf: 'center',
  },
  offerDescContainer: {
    paddingTop: hp(1),
  },
  offerDesc: {
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_14,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.black59,
  },
  newArrivalText: {
    fontSize: globals.font_16,
  },
});
