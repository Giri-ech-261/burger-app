import React, { Component } from "react";
import {  TouchableOpacity, Text,  View } from "react-native";
import * as colors from "../../assets/styles/color";
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
AntDesign.loadFont();
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

class GetStartedView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          appLanguage: contextTypeLocalization._currentValue.appLanguage ,
          textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        };
      }

    render() {
        const {appLanguage, textTranslation} = this.state;
        return (
            <TouchableOpacity style={[styles.getStartedButtonView, transistionClassArray[appLanguage].flexDirection]} onPress={()=>this.props.isClicked()}>
                <Text style={styles.startTextView}>{textTranslation.launch.GETSTARTED}</Text>
                <AntDesign name={(appLanguage === 'en') ? 'arrowright' : 'arrowleft'} size={20} color={colors.white}/>
           </TouchableOpacity>      
        );
    }
}
export default GetStartedView;
