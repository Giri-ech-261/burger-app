import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {hp, wp} from '../../theme';

export default StyleSheet.create({
  ServiceHeader: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    color: colors.white,
    fontSize: 20,
  },
  serviceMainView: {
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 15,
  },
  serviceHeaderBlock: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  serviceHeading: {
    fontSize: globals.font_16,
    color: colors.black,
    fontFamily: globals.ProximaNovaBold,
    lineHeight: 24,
  },
  categoryFlatViewMain: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 10,
  },
  UpcomingBtn: {
    width: wp(45),
    marginRight: hp(1),
    borderRadius: 20,
    height: Platform.OS === 'ios' ? 40 : 40,
    marginTop: Platform.OS === 'ios' ? 0 : 5,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
    backgroundColor: colors.black,
  },
  pastcomingBtn: {
    width: wp(45),
    marginRight: hp(1),
    height: Platform.OS === 'ios' ? 40 : 40,
    marginTop: Platform.OS === 'ios' ? 0 : 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  pastcomingTextView: {
    textAlign: 'center',
    lineHeight: 18,
    fontSize: globals.font_12,
    fontFamily: globals.ProximaNovaMedium,
  },
  UpcomingTextView: {
    textAlign: 'center',
    color: colors.white,
    lineHeight: 18,
    fontSize: globals.font_12,
    fontFamily: globals.ProximaNovaMedium,
  },
  icon_shape: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  iconBottomText: {
    fontFamily: globals.ProximaNovaMedium,
    fontSize: globals.font_14,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
    color: colors.blackOpacity5,
    paddingBottom: 80,
  },
});
