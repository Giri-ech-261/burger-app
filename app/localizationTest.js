import React, { useContext } from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { LocalizationContext } from './localizations/LocalizationContext';
import { transistionClassArray } from './utills/TranslationClasses';

const LocalizationTest = ({
}) => {

  const { translations, appLanguage } = useContext(
    LocalizationContext
  );
  const contextTypeLocalization = LocalizationContext;
  const transistionClass = transistionClassArray[appLanguage];
  let coreTranslations = contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar;
  let getCoreTranslations = coreTranslations.getCoreTranslations;
  
  return (
    <View>
        <View style={transistionClass.flexDirection}>
          <Text style={styles.textStyle}>{getCoreTranslations.WELCOME}</Text>
        </View>
        <View style={transistionClass.flexDirection}>
          <Text style={[styles.textStyle,transistionClass.textAlign]}> {getCoreTranslations.ENGLISH} </Text>
          <Text style={[styles.textStyle,transistionClass.textAlign]}> {getCoreTranslations.ARABIC}</Text>
        </View>
    </View>
  );
};

const styles = {
  textStyle:{
    color : 'black',
    fontSize : 20,
  },
};

export default LocalizationTest;