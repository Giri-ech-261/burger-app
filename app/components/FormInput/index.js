import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from '../../assets/styles/color';

const FormInput = (props) => {
  const {
    isLeftIcon,
    leftIcon,
    isRightIcon,
    rightIcon,
    inputLabel,
    onChangeText,
    style,
    isSearch,
    placeholderTextColor,
    placeholder,
    value,
    keyboardType,
    secureTextEntry,
    showPassword,
    type,
    onBlur,
    leftIconStyle
  } = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      {isLeftIcon && <View style={[styles.leftIcon,leftIconStyle]}>{leftIcon}</View>}
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={[styles.textInput, {style}, styles.inputPadding, style, isSearch && styles.searchHeight]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid={'transparent'}
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        {...props}
      />
      {isRightIcon && <View style={styles.passwordIcon}>{rightIcon}</View>}
      {type === 'password' ? (
        <TouchableOpacity style={styles.passwordIcon} onPress={showPassword}>
          <MaterialCommunityIcons
            name={secureTextEntry ? 'eye' : 'eye-off'}
            size={25}
            color={colors.lightWarmGrey}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default FormInput;
