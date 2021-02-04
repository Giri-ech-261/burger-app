import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../../assets/styles/color';
import * as globals from '../../../utills/globals';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    color: colors.darkWarmGrey,
    borderColor: colors.darkWarmGrey,
    borderWidth: 1,
    borderRadius: 30,
    // paddingHorizontal: 50,
    // backgroundColor: '#00000000',
    paddingTop:(Platform.OS==='android') ? 0 : 5,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:(Platform.OS==='android') ? 0 : 5,
    marginTop:(Platform.OS==='android') ? 5 : 5,
     
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    minHeight: 28,
    color: '#000',
    paddingVertical: 5,
    flex: 1,
    zIndex: 10,
  },
  img: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  toggleButton: {
    zIndex: 11,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  countdown: {
    position: 'absolute',
    right: 11,
    bottom: 0,
    color: colors.darkWarmGrey,
    fontSize: 10,
  },
});
