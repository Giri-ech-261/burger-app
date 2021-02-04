import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current.navigate(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function popToIndex(navigation, index = 1) {
    const popAction = StackActions.pop(index);

    navigation.dispatch(popAction);
}