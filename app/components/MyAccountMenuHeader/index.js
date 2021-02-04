import { Text } from "native-base";
import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import * as images from "../../assets/images/map";
import * as colors from "../../assets/styles/color";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

class MyAccountMenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }

  render() {
    let data = this.props;
    const {appLanguage , textTranslation} = this.state;
    return (
        <>
        <View  style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
            <Text style={styles.textview}>{data.title}</Text>
        </View>
        </>
    );
  }
}
export default MyAccountMenuHeader;
