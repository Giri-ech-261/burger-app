import React, { Component } from "react";
import {
  Text,
  View,
} from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

class FreeDiscountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    }
  }

  render() {
    const {textTranslation} = this.state;
    return (
        <View style={{padding:7,flexDirection:'row',alignItems:'center', alignSelf:'center'}}>
          <Text style={globalStyle.topSellingTitleVIewDiscountGlobal}>
            {textTranslation.getProductListTranslations.OFFPERCENT}</Text>
          <Text style={globalStyle.topSellingTitleVIewGlobal}>
            { textTranslation.getProductListTranslations.FREESHIPPING }</Text>
        </View>
    );
  }
}
export default FreeDiscountView;
