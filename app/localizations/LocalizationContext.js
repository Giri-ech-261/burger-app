import React, {  useState } from 'react';
import translations, { DEFAULT_LANGUAGE } from './translations';
import AsyncStorage from '@react-native-community/async-storage';

const APP_LANGUAGE = 'appLanguage';
var isRTL = false;

// Creating context 
export const LocalizationContext = React.createContext({
  translations,
  isRTL,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

// Method for localization provider
export const LocalizationProvider = ({ children }) => {
  const [appLanguage, setAppLanguage ] = useState(DEFAULT_LANGUAGE);
  const setLanguage = language => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
    setLanguageRTL(language)
  };

  // code for language rtl
  const setLanguageRTL = language => {
    if(language == 'ar'){
      isRTL = true;
    }
  };

  // setting currect lanaguge in local storage
  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
    setLanguage(currentLanguage);
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
        isRTL
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};