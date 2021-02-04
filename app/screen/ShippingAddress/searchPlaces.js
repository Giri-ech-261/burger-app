import React, { Component, Fragment } from 'react';
import { SafeAreaView, Image, View, Text, FlatList, TouchableOpacity,TextInput } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import {goBack,navigate} from '../../navigation/RootNavigation';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaceSearchView from '../../components/PlaceSearchView';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
class SearchAddress extends Component {
  constructor(props){
    super(props);
    this.state={
        appLanguage: contextTypeLocalization._currentValue.appLanguage,
        textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        searchValue:'',
        searchData: pets = [
            {
                id: 1,
                name: 'E311 Neer Green Community - Al Sharq, Dubai',
             },
            {
                id: 2,
                name: 'K423 Estate Hight - Al Sharq, Dubai UAE',
                 
            },
            {
                id: 3,
                name: 'Dubai investment park Jabel Ali, Dubai',
                 
            },
            {
                id: 4,
                name: 'E311 Neer Green Community - Al Sharq, Dubai',
                 
            },
            {
                id: 5,
                name: 'Dubai investment park Jabel Ali, Dubai',
            },
            {
                id: 0,
                name: 'Set location on map',
            },


        ],
    }
  }
  setSearchText (e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  onChangeText = (newText) => this.setState({ searchValue: newText });

  isAddressClick(id, data){
    // navigate('PaymentMethods')
  }
  render() {
      const {appLanguage, textTranslation, searchValue, searchData} = this.state;
    return (
      <SafeAreaView style={{backgroundColor: colors.white, flex:1,}}>
           <AppHeader
                    barStyle={"dark-content"}
                    backgroundColor={colors.white}
                    androidStatusBarColor={colors.lightWhite}
                    LeftData={
                        <TouchableOpacity style={[{ marginLeft: 10 }, transistionClassArray[appLanguage].flexDirection]} onPress={() => goBack()}>
                            <MaterialIcons name={'arrow-back'} size={30} color={colors.black} />
                        </TouchableOpacity>}
                />
                <View style={[{justifyContent:'space-between', alignItems:'center', }, transistionClassArray[appLanguage].flexDirection]}>
                    <View style={{width: "80%"}}>
                        <View style={[styles.searchScreenView, transistionClassArray[appLanguage].flexDirection]}>
                            {/* <Image source={images.shippingAddress.search} style={styles.searchScreenIcon} resizeMode={'contain'}/>
                            <TextInput
                                style={styles.searchScreenTextInputStyleClass}
                                placeholder={textTranslation.shippingAddress.SEARCHLOACRION}
                                // onChangeText={text => this.onChangeText(text)}
                                onChange={this.setSearchText.bind(this)}
                                // editable={false}
                                value={searchValue}
                                underlineColorAndroid="transparent"
                                // onFocus={() => this.onFocus()}
                            /> */}
                            <GooglePlacesAutocomplete
                                placeholder='Search'
                                onPress={(data, details = null) => console.log(data)}
                                onFail={(error) => console.error("error-->", error)}
                                query={{
                                    key: 'AIzaSyApE5EJZZ30gzRxv7HCtg1EI-O_iiwC6Ag',
                                    language: 'en',
                                }}
                                // requestUrl={{
                                //     url:
                                //       'https://maps.googleapis.com/maps/api',
                                //     useOnPlatform: 'all',
                                //   }} 
                                />
                            <TouchableOpacity style={[{     }, transistionClassArray[appLanguage].flexDirection]} onPress={() => this.setState({searchValue:''})}>
                                <MaterialIcons name={'cancel'} size={25} color={colors.blackOpacity7} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity  style={{width:'20%'}} onPress={() => goBack()}>
                        <Text style={styles.searchCancel}>{textTranslation.shippingAddress.CANCEL}</Text>
                    </TouchableOpacity>
                </View>
                <View elelevation={5} style={{height:0.5, backgroundColor:colors.black02, width: globals.screenWidth, marginTop:10,}}/>
                <View style={{flex:1}}>
                    <FlatList
                        data={searchData}
                        renderItem={({ item, index }) => <PlaceSearchView data={item} isAddressClick={this.isAddressClick.bind(this)} />}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

      </SafeAreaView>

    );
  }
}

export default SearchAddress;
