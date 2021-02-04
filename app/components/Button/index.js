import React from 'react';
import styles from './style';
import {Text, TouchableOpacity} from 'react-native';
import * as colors from '../../assets/styles/color';

const Button = (props) => {
    const {outlineButton,solidButton, outlineColor,backgroundColor, title,onPress,textColor, textStyle,style,leftIcon} = props;
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, style,
                outlineButton && {
                borderWidth: 2,
                borderColor: outlineColor ? outlineColor : colors.theme_color,
            },solidButton && {
                    backgroundColor: backgroundColor ? backgroundColor : colors.theme_color,
                }]}
            onPress={onPress}
        >
            {leftIcon && leftIcon}
            <Text
                style={[styles.buttonText,
                    {color: textColor ? textColor : colors.theme_color},
                    solidButton && {color: textColor ? textColor : colors.white},
                    textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export default Button
