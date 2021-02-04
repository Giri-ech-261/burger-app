import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LocalizationProvider } from './localizations/LocalizationContext';
import LocalizationTest from './localizationTest'
import { NativeModules, Platform } from 'react-native';

import NavigatorStack from './navigation/NavigationStack'
import StackNavigation from './navigation/StackNavigation'
import { LocalizationContext } from './localizations';
const contextTypeLocalization = LocalizationContext;
import RNRestart from "react-native-restart";
import { I18nManager } from "react-native";

const LanguageModule = NativeModules.LanguageModule;
import NetInfo from "@react-native-community/netinfo";
import * as globals from './utills/globals';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
    }
  }
  async componentDidMount() {
    console.disableYellowBox = true
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      globals.isInternetConnected = state.isConnected;
      console.log("isInternetConnected==", globals.isInternetConnected);
    });
    // if (!I18nManager.isRTL) {
      // I18nManager.forceRTL(false);
      // RNRestart.Restart();
    // }
    
  }


  componentWillUnmount() {
    NetInfo.addEventListener(state => {
      console.log("componentWillUnmount Connection type", state.type);
      console.log("componentWillUnmount Is connected?", state.isConnected);
      globals.isInternetConnected = state.isConnected;
      console.log("componentWillUnmount isInternetConnected==", globals.isInternetConnected);
    });
  }
  render() {
    return (
      <LocalizationProvider>
        <Provider store={store}>
          {/* // add the root navigation */}
          <StackNavigation />
          {/* added below view for testing LocalizationContext */}
          {/* <LocalizationTest/> */}
        </Provider>
      </LocalizationProvider>
    );
  }
}

export default App;
