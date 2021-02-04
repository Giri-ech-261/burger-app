import React, { Component, Fragment } from 'react';
import { SafeAreaView, Platform, View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import { color } from 'react-native-reanimated';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../../components/AppHeader';
import { goBack, navigate } from "../../navigation/RootNavigation";
import ShippingAddressView from '../../components/ShippingAddressView';
import style from './style';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButtonInput } from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box'
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../assets/styles/globalStyle';

MaterialCommunityIcons.loadFont()
class ShippingAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            addressData: pets = [
                {
                    id: 1,
                    name: 'Jermy Petfather',
                    address: 'E311 Neer Green Community - Al Sharq, Dubai UAE',
                    image: require('../../assets/images/home/dog.png'),
                    phone: '+971 58 522 2345',
                    type: 'Home',
                    isDefault: true
                },
                {
                    id: 2,
                    name: 'Amie Gill',
                    address: 'K423 Estate Hight - Al Sharq Dubai UAE',
                    phone: '+971 58 522 6351',
                    type: 'Work',
                    isDefault: false
                },
                {
                    id: 3,
                    name: 'Jermy Petfather',
                    type: 'Others',
                    address: 'K423 Estate Hight - Al Sharq Dubai UAE',
                    phone: '+971 58 522 6351',
                    isDefault: false
                },
                {
                    id: 4,
                    name: 'Amie Gill',
                    type: 'Others',
                    address: 'K423 Estate Hight - Al Sharq Dubai UAE',
                    phone: '+971 58 522 6351',
                    isDefault: false
                },
                {
                    id: 5,
                    name: 'Amie Gill',
                    type: 'Others',
                    address: 'K423 Estate Hight - Al Sharq Dubai UAE',
                    phone: '+971 58 522 6351',
                    isDefault: false
                },
                

            ],
            isModalVisible: false,
            value: '',
            selectedCityItem: '',
            selectedStateItem: '',
            selectedCountryItem: '',
            lableOptions :[
                {
                  "id" : "1",
                  "name" : "Home"
                },
                {
                  "id" : "2",
                  "name" : "Work"
                },
                {
                  "id" : "3",
                  "name" : "Others"
                },
                
              ],
              isSelectedSortById : "",
              isSelectedSortByValue : "",
              isChecked:false,
        }
    }
    isAddressClick(id, data) {
        console.log('item-->', data);
    }
    selectedSoryByClick =(value) => {
        this.setState({isSelectedSortById :value.id,isSelectedSortByValue:value.name })
        this.setState({sortView: false})
      }
    onChangeText = (newText) => this.setState({ value: newText });
   
    render() {
        const { appLanguage, addressData, textTranslation } = this.state;
        let getTranslations = textTranslation.getWishlistTranslatoins;

        return (
            <SafeAreaView style={styles.mainView}>
                <AppHeader
                    barStyle={"dark-content"}
                    backgroundColor={colors.lightWhite}
                    androidStatusBarColor={colors.lightWhite}
                    LeftData={
                        <TouchableOpacity style={[{ marginLeft: 10 }, transistionClassArray[appLanguage].flexDirection]} onPress={() => goBack()}>
                            <MaterialIcons name={'arrow-back'} size={30} color={colors.black} />
                        </TouchableOpacity>}
                    RightData={
                        <TouchableOpacity onPress={() => goBack()}>
                            <View style={[transistionClassArray[appLanguage].flexDirection]}>
                                <Image source={images.shippingAddress.cancel}
                                    resizeMode={'contain'}
                                    style={style.cancelIcon} />
                            </View>
                        </TouchableOpacity>}
                />
                <Text style={[styles.selectAddressText, { paddingLeft: (appLanguage === 'ar') ? 0 : 20, paddingRight: (appLanguage === 'ar') ? 20 : 0 }, transistionClassArray[appLanguage].textAlign]}>{textTranslation.shippingAddress.SELECTADDRESS}</Text>
                <View style={[styles.addressFlatlistView, {   paddingBottom: (globals.iPhoneX) ? globals.screenHeight * 0.06 :  globals.screenHeight * 0.1 }]}>
                <SwipeListView
                showsVerticalScrollIndicator={false}
                 data={[...addressData]}
                 renderItem={({ item, index }) => <ShippingAddressView data={item} isAddressClick={this.isAddressClick.bind(this)} />}
                 renderHiddenItem={ (rowData, rowMap) => (
                    <View style={styles.removeContainer}>
                      <View style={styles.swipeWishlistView}>
                        <TouchableOpacity style={[{marginVertical: (rowData.isDefault) ? 0 : 80,  justifyContent:'center', alignSelf:'center'  },transistionClassArray[appLanguage].alignSelfReverse,
                          ]}>
                          <AntDesignIcon size={25} name="delete" color="white" style={{
                             marginLeft: appLanguage =="ar" ? 20 : 10, marginTop:10}}/>
                          <Text style={[{marginRight: appLanguage =="en" ? 10 : null,
                             marginLeft: appLanguage =="ar" ? 15 : null},globalStyle.deleteText]}>{getTranslations.DELETE}</Text>       
                        </TouchableOpacity> 
                      </View> 
                    </View>
                  )}
                  // leftOpenValue={75}
                  // rightOpenValue={-75}
                  // swap left for english
                  stopLeftSwipe={(!appLanguage || appLanguage == 'en') ? -1 : 0}
                  rightOpenValue={(!appLanguage || appLanguage == 'en') ? -70 : 0}
                  disableRightSwipe={(!appLanguage || appLanguage == 'en')}

                  // swap right for arabic
                  stopRightSwipe={appLanguage == 'ar' ? -70 : 0}
                  leftOpenValue={appLanguage == 'ar' ? 70 : 0}
                  disableLeftSwipe={appLanguage == 'ar'}
                 >
                     
                </SwipeListView>
                    {/* <FlatList
                        data={addressData}
                        renderItem={({ item, index }) => <ShippingAddressView data={item} isAddressClick={this.isAddressClick.bind(this)} />}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    /> */}
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.addNewAddressView} onPress={()=>navigate('AddShippingAddress')}  >
                        <Text style={styles.addNewAddressText}>{textTranslation.shippingAddress.ADDNEWADDRESS}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        // paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.darkWarmGrey,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 40,
    },
});
export default ShippingAddress;
