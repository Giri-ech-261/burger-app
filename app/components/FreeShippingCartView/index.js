import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import FastImage from "react-native-fast-image";
import * as images from "../../assets/images/map";
import styles from './styles';

const contextTypeLocalization = LocalizationContext;

class FreeShippingCartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    }
  }

  render() {
    const {textTranslation,appLanguage} = this.state;
    return (
      <TouchableOpacity onPress={()=>this.props.isEmptyViewClick(true)}>
        <View style={styles.ShippingView}>
          <View >
            <View style={transistionClassArray[appLanguage].flexDirection}>
              <Text style={globalStyle.cartFreeshippingViewTitle}> Only </Text> 
              <Text style={globalStyle.cartFreeshippingViewTitleDynamic}>10 AED </Text> 
              <Text style={globalStyle.cartFreeshippingViewTitle}>to go for </Text>
              <Text style={globalStyle.cartFreeshippingViewTitleDynamic}>FREE SHIPPING! </Text>
            </View>
            <View style={[{paddingTop:7},transistionClassArray[appLanguage].flexDirection]}>
              <View style={styles.progressBarView}>
                <View style={styles.progressBarHiighlightView}></View>
              </View>
              <Text style={globalStyle.rightSideTitle}>AED 100.00</Text>
            </View>
          </View>
          <FastImage
            style={styles.icon}
            resizeMode={'contain'}
            source={images.cartLanding.freeShipping}
          />
        </View>
        </TouchableOpacity>
    );
  }
}
export default FreeShippingCartView;
