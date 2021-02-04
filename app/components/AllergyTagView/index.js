import React, { Component } from "react";
import { View, Image, Text,TouchableOpacity } from "react-native";
import { screenWidth } from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import CheckBox from 'react-native-check-box'
import * as images from "../../assets/images/map";



class AllergyViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        };
    }
    render() {
        const { appLanguage, textTranslation } = this.state;
        const { data } = this.props;
        return (

            <View style={[this.props.mainView, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={styles.textView}>{data.name}</Text>
                <TouchableOpacity onPress={() => this.props.isAllergyRemove(data.id, data, this.props.isFor)}>
                    <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>

        );
    }

}

export default AllergyViewData;
