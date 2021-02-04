import React, {Component} from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window");

export const screenWidth = width < height ? width : height;
export const screenHeight = width < height ? height : width;
