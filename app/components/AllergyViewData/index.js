import React, { Component } from "react";
import { View, Image, Text } from "react-native";
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

            <View style={[styles.mainView,  transistionClassArray[appLanguage].flexDirection]}>
                <CheckBox
                    style={{ padding: 10, marginLeft: 5, }}
                    onClick={() => {
                        this.props.isAllergySelected(data.id, data, this.props.isFor)
                    }}
                    isChecked={data.isSelected}
                    checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                    unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                />
                <Text style={styles.textView}>{data.name}</Text>
            </View>

        );
    }

}

export default AllergyViewData;
