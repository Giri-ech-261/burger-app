import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
class ServiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage ,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }

  render() {
    const {data} = this.props;
    const {appLanguage, textTranslation} = this.state;
    return (
        <TouchableOpacity  onPress={()=>this.props.isServiceClick(data.id, data)}>
            <View style={styles.mainView}>
                <Image
                style={styles.serviceImageBG}
                source={data.image}
                resizeMode={'contain'}
                />
                <View style={styles.serviceTextMainView}>
                    <Text style={styles.serviceTitleTextView}>{data.name}</Text>
                    <Text style={styles.serviceBookNowTextView}>{textTranslation.home.BOOKNOW}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
export default ServiceView;
