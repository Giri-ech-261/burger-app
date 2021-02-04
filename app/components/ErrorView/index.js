import React, {Component} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { screenWidth } from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;



class ErrorView extends Component  {
    constructor(props){
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage ,
            textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
          };
    }
    render(){
        const {appLanguage, textTranslation} = this.state;
        return (
            <>
                <View style={styles.mainView}>
                    <Text style={styles.errorTextMessageView}>{this.props.message}</Text>
                    <TouchableOpacity style={styles.addNewAddressView} onPress={() => this.props.clickTryNow(this.props.apiFor)}  >
                        <Text style={styles.addNewAddressText}>{textTranslation.getCoreTranslations.TRYNOW}</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
    
}

export default ErrorView;
