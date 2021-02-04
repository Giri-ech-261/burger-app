import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button} from 'native-base';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import AppHeader from '../../components/AppHeader';
import Badge from '../../components/BadgeView/Badge';
import * as colors from "../../assets/styles/color";

import * as images from "../../assets/images/map";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const contextTypeLocalization = LocalizationContext;

export default class ThankYou extends Component {

    constructor(props){
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        }
    }

    render() {
        const {appLanguage, textTranslation} = this.state;
        const {BtnClick} = this.props;
        return (
            <View style={styles.successBlock}>
                <View style={styles.block}>
                    <Text style={[transistionClassArray[appLanguage].flexDirection, styles.thankYouText]}>
                        {textTranslation.aquariumSuccess.THANKYOU}
                    </Text>
                </View>
                <View style={styles.messageBlock}>
                    <Text style={[transistionClassArray[appLanguage].flexDirection, styles.messageBlockText]}>
                        {textTranslation.aquariumSuccess.MESSAGE}
                    </Text>
                </View>
                <View style={styles.block}>
                    <Button rounded block style={styles.submitBtn} onPress={BtnClick}>
                        <Text style={[transistionClassArray[appLanguage].flexDirection, styles.submitText]}>{textTranslation.aquariumSuccess.CONTINUESHOPPING}</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
