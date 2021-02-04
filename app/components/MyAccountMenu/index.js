import { Text } from "native-base";
import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Switch
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
import ToggleSwitch from 'toggle-switch-react-native'
class MyAccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      isEnabled: false,
    };
  }
  toggleSwitch(isEnable){
    this.setState({isEnable : !isEnable})
  }
  renderRightIcon(data) {
    const {isEnabled} = this.state;
    let item = this.props;
    if (!data.toggleView) {
      if (data.withIcon) {
        return (
          <Entypo name={'chevron-small-right'} size={30} color={colors.black} />
        )
      } else {
        return (
          <Entypo name={'chevron-small-right'} size={30} color={colors.lightGrey246} />
        )
      }
    } else {
      return (
        <ToggleSwitch
          isOn={(item.isTicked) ? true : false}
          onColor={colors.white}
          offColor={colors.inactiveToggle}
          size="medium"
          circleColor={(item.isTicked) ? colors.red : colors.white}
          onToggle={isOn => item.isValueChanged(item.id, item.isTicked)}
        />
      )
    }
  }
  render() {
    let data = this.props;
    const { appLanguage, textTranslation } = this.state;
    return (
      <TouchableOpacity onPress={() => (!data.toggleView) ? data.isItemClicked(data.id) : {}}>
        <View style={[styles.mainView, transistionClassArray[appLanguage].flexDirection, { backgroundColor: (data.withIcon) ? colors.white : colors.lightGrey246 }]}>
          <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center', }]}>
            {(data.withIcon) ? <FastImage source={data.imagePath} style={{ width: 30, height: 30 }} resizeMode={'contain'} /> : null}
            <Text style={[styles.textview, { marginHorizontal: (data.withIcon) ? 15 : 0 }]}>{data.title}</Text>
          </View>
          {this.renderRightIcon(data)}
        </View>
        {(data.withIcon) ? <View style={styles.grayDarkSepratorFull} /> : <View style={styles.grayDarkSepratorFullWithoutIcon} />}
      </TouchableOpacity>
    );
  }
}
export default MyAccountMenu;
