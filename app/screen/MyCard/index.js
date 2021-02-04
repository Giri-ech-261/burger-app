import React, { Component, Fragment } from 'react';
import { SafeAreaView, Image, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import { goBack, navigate } from '../../navigation/RootNavigation';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import Entypo from 'react-native-vector-icons/Entypo';
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../assets/styles/globalStyle';
import SavedCardView from '../../components/SavedCardView';

class MyCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            isApplePayClick: false,
            isGooglePayClick: false,
            isCODClick: false,
            isCardClick: false,
            isStoreLocatorClick: false,
            petCoinValue: 3000,
            isPetCoinChecked: false,
            cardNumber:'*** *** 754',
            isDefaultCard: false,
            addressData: pets = [
                {
                    id: 1,
                    name: 'Zaffer Ahamad',
                    type: 'visa',
                    cardNumber:'*** *** 754',
                    isDefault: true
                },
                {
                    id: 2,
                    name: 'Jasim Khalid',
                    type: 'ae',
                    cardNumber:'*** *** 754',
                    isDefault: false
                },
                {
                    id: 3,
                    name: 'Jermy Petfather',
                    type: 'discover',
                    cardNumber:'*** *** 754',
                    isDefault: false
                },
                {
                    id: 4,
                    name: 'Amie Gill',
                    type: 'visa',
                    cardNumber:'*** *** 754',
                    isDefault: false
                },
                {
                    id: 5,
                    name: 'Zaffer Ahamad',
                    type: 'ae',
                    cardNumber:'*** *** 754',
                    isDefault: false
                },
                {
                    id: 6,
                    name: 'Jasim Khalid',
                    type: 'discover',
                    cardNumber:'*** *** 754',
                    isDefault: false
                }

            ],
        }
    }
    isSavedCardClick(id, data){

    }
    render() {
        const { appLanguage, textTranslation, addressData } = this.state;
        let getTranslations = textTranslation.getWishlistTranslatoins;
        return (
            <SafeAreaView style={{ backgroundColor: colors.lightWhite, flex: 1, }}>
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
                                    style={styles.cancelIcon} />
                            </View>
                        </TouchableOpacity>}
                />
                <Text style={[styles.selectAddressText, { paddingLeft: (appLanguage === 'ar') ? 0 : 20, paddingRight: (appLanguage === 'ar') ? 20 : 0 }, transistionClassArray[appLanguage].textAlign]}>{textTranslation.savedCard.SAVEDCARD}</Text>
                <View style={[styles.addressFlatlistView, { paddingBottom: (globals.iPhoneX) ? globals.screenHeight * 0.1 : globals.screenHeight * 0.13, backgroundColor: colors.lightWhite }]}>
                <SwipeListView
                 data={[...addressData]}
                 renderItem={({ item, index }) => <SavedCardView data={item} isSavedCardClick={this.isSavedCardClick.bind(this)} />}
                 renderHiddenItem={ (rowData, rowMap) => (
                    <View style={styles.removeContainer}>
                      <View style={styles.swipeWishlistView}>
                        <TouchableOpacity style={[{marginVertical: (rowData.isDefault) ? 100 : 70,  justifyContent:'center', alignSelf:'center'  },transistionClassArray[appLanguage].alignSelfReverse,
                          ]}>
                          <AntDesignIcon size={25} name="delete" color="white" style={{
                             marginLeft: appLanguage =="ar" ? 20 : 10}}/>
                          <Text style={[{marginRight: appLanguage =="en" ? 10 : null,
                             marginLeft: appLanguage =="ar" ? 15 : null},globalStyle.deleteText]}>{getTranslations.DELETE}</Text>       
                        </TouchableOpacity> 
                      </View> 
                    </View>
                  )}
                  stopLeftSwipe={(!appLanguage || appLanguage == 'en') ? -1 : 0}
                  rightOpenValue={(!appLanguage || appLanguage == 'en') ? -70 : 0}
                  disableRightSwipe={(!appLanguage || appLanguage == 'en')}

                  // swap right for arabic
                  stopRightSwipe={appLanguage == 'ar' ? -70 : 0}
                  leftOpenValue={appLanguage == 'ar' ? 70 : 0}
                  disableLeftSwipe={appLanguage == 'ar'}
                 >
                </SwipeListView>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.addNewAddressView} onPress={()=>navigate('MyCard')}  >
                        <Text style={styles.addNewAddressText}>{textTranslation.savedCard.ADDNEWCARD}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        );
    }
}

export default MyCards;
