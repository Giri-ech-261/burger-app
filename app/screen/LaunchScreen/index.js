import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
// import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import styles from './style';
import StatusBar from '../../components/StatusBar'; 
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import AntDesign from 'react-native-vector-icons/AntDesign';
import GetStartedView  from '../../components/GetStartedView';
import AsyncStorage from '@react-native-community/async-storage';
class LaunchScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        isFirstTime: false,
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      }
    }
    componentDidMount(){
        SplashScreen.hide()
        this.getData();
    }
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('isFirstTimeUser')
        if(value !== null) {
          this.props.navigation.navigate('TabNavigation')
        }else{
          this.setState({isFirstTime: true})
        }
      } catch(e) {
        // error reading value
        this.setState({isFirstTime: true})
      }
    }
    storeData = async (value) => {
      try {
        await AsyncStorage.setItem('isFirstTimeUser', value)
      } catch (e) {
        // saving error
      }
    }
    isClicked(){
      this.storeData('yes')
      this.props.navigation.navigate('TabNavigation')
      // AsyncStorage.storeData('isFirstTimeUser', 'yes') 
    }
  render() {
      const {textTranslation,appLanguage, isFirstTime} = this.state;
    return (
       <View style={{flex:1,}}>
          {/* <StatusBar barStyle = "light-content" backgroundColor = {colors.red} /> */}
          {(isFirstTime) ?
          <View style={{flex:1,}}> 
            <Swiper
             showsPagination={true} pagingEnabled autoplay={true}
             dot={<View style={{ backgroundColor: colors.inActiveDots, width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
             activeDot={<View style={{ backgroundColor: colors.activeDots, width: 22, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
             loop={true}
             paginationStyle={{ bottom: 0, paddingBottom:(globals.iPhoneX) ? globals.screenHeight / 8 : globals.screenHeight / 8, flexDirection: this.state.appLanguage === 'en' ? 'row' : 'row-reverse'}}
             scrollEnabled={true}
             autoplayTimeout={3}
             style={{ flexDirection: this.state.appLanguage === 'en' ? 'row' : 'row-reverse'}}
            >
            <FastImage
                style={{flex:1, }}
                resizeMode="stretch"
                source={images.launchImage.intro_one} // any image path
            />

            <FastImage
                style={{flex:1 , }}
                resizeMode="stretch"
                source={images.launchImage.intro_two} // any image path
             />
             <FastImage
                style={{flex:1 }}
                resizeMode="stretch"
                source={images.launchImage.intro_three} // any image path
             />
           </Swiper>
              <GetStartedView isClicked={this.isClicked.bind(this)}/>
            </View> : null }
          
       </View>
    );
  }
}

export default LaunchScreen;
