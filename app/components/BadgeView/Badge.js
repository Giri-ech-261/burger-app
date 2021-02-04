import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

const Badge = ({
  itemsCount = 0,
  active,
  appLanguage,
  view,
  style,
  contentStyle,
}) => {
  return (
    <View
      style={appLanguage == 'en' ? styles.iconWrapper : styles.iconWrapperAr}>
      <View
        style={[
          styles.iconWrapperView,
          view == 'mainHeader'
            ? appLanguage == 'en'
              ? styles.iconWrapperViewEn
              : styles.iconWrapperViewAr
            : null, style
        ]}>
        <Text style={[styles.textStyle, contentStyle]}>{itemsCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: globals.ProximaNovaSemiBold,
  },
  iconWrapper: {
    paddingRight: 10,
  },
  iconWrapperAr: {
    paddingLeft: 10,
  },
  iconWrapperViewAr: {
    marginRight: -8,
  },
  iconWrapperViewEn: {
    marginLeft: -8,
  },
  iconWrapperView: {
    marginTop: -5,
    height: 23,
    width: 23,
    borderRadius: 23 / 2,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});

export default Badge;
