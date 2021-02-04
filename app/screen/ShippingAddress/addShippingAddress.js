/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    PermissionsAndroid,
    Platform
} from 'react-native';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButtonInput } from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box'
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import AppHeader from '../../components/AppHeader';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Callout } from 'react-native-maps';
import { Images } from '../../theme';
import { goBack, navigate } from "../../navigation/RootNavigation";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
var _ = require('lodash');
const contextTypeLocalization = LocalizationContext;
const placeholderCity = {
    label: 'City',
    value: null,
};

const placeholderState = {
    label: 'State',
    value: null,
};

const placeholderCountry = {
    label: 'Country',
    value: null,
};

const placeholderCode = {
    label: 'CODE',
    value: null,
};

const markerList = [
    {
        latitude: 37.78825,
        longitude: -122.4324,
        title: 'E311 Neer Green Community - Al Sharq, Dubai',

    }

]
let placeAddresCompoponent = {
    ZIP_CODE: 'postal_code',
    COUNTRY: 'country',
    STATE: 'administrative_area_level_1',
    CITY: 'administrative_area_level_2',
    TOWN: 'sublocality_level_1',
    AREA: 'sublocality_level_2',
    NEAREST_ROAD: 'route'
}

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };


export default class AddShippingAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            isModalVisible: false,
            searchValue: '',
            selectedCityItem: '',
            selectedStateItem: '',
            selectedCountryItem: '',
            lableOptions: [
                {
                    "id": "1",
                    "name": "Home"
                },
                {
                    "id": "2",
                    "name": "Work"
                },
                {
                    "id": "3",
                    "name": "Others"
                },

            ],
            isSelectedSortById: "",
            isSelectedSortByValue: "",
            isChecked: false,
            markers: [
                // {
                //     latitude: 25.1972,
                //     longitude: 55.2744,
                //     title: 'E311 Neer Green Community - Al Sharq, Dubai',
                // },
                // {
                //   latitude: 37.76633215340853,
                //   longitude: -122.44571417570113,
                //   title: 'Rajkot',
                // }
            ],
            firstName: '',
            flateName: '',
            lastName: '',
            mobileNo: '',
            currentLat: '',
            currentLng: '',
            placeLat: 25.1972,
            placeLng: 55.2744,
            region: {
                latitude: 25.1972,
                longitude: 55.2744,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
        }
        this.mapRef = null;
    }
    componentDidMount() {
        if (!globals.isInternetConnected) {
            alert("Network not available")
        }
        (Platform.OS == "ios") ? this.getLocationIOS() : null;
    }
    getLocationIOS() {
        Geolocation.getCurrentPosition(position => {
            this.setState({
                currentLat: position.coords.latitude,
                currentLng: position.coords.longitude,
            }, () => {
                console.log("lat", this.state.currentLat);
                console.log("lng", this.state.currentLng);
            });
        }, (error) => {
            console.log("DPF Info Location IOS---->", error);
            this.setState({
                currentLat: "",
                currentLng: "",
            });
        });
    }
    async componentWillMount() {
        await (Platform.OS == "android") ? this.getLocationAndroid() : null;
    }
    async getLocationAndroid() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(position => {
                    this.setState({
                        currentLat: position.coords.latitude,
                        currentLng: position.coords.longitude,
                    }, () => {
                        console.log("DPF ADR LAT---->", this.state.currentLat);
                        console.log("DPF ADR LNG---->", this.state.currentLng);
                    });
                }, (error) => {
                    console.log("DPF Info Location---->", error);
                    this.setState({
                        currentLat: "",
                        currentLng: "",
                    });
                });
            }
            else {
                this.setState({
                    currentLat: "",
                    currentLng: "",
                });
            }
        } catch (err) {
            this.setState({
                currentLat: "",
                currentLng: "",
            });
            console.log(err)
        }

    }
    selectedSoryByClick = (value) => {
        this.setState({ isSelectedSortById: value.id, isSelectedSortByValue: value.name })
    }
    renderModal() {
        const { appLanguage, textTranslation, flateName, firstName, lastName, mobileNo, isModalVisible } = this.state;
        return (
            <Modal
                visible={isModalVisible}
                transparent
                animationType={'slide'}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.graySeprator}></View>
                        <View style={[styles.enterAddressPopup, transistionClassArray[appLanguage].flexDirection]}>
                            <Text style={styles.enterAddressTextView}>{textTranslation.shippingAddress.ENTERADDRESS}</Text>
                            <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
                                <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalSeprator} />
                        <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}   >
                                <Text style={[styles.generalInfoText, { paddingRight: (appLanguage === 'ar') ? 20 : 0, paddingLeft: (appLanguage === 'ar') ? 0 : 20 }]}>{textTranslation.shippingAddress.ADDRESSDETAIL}</Text>
                                <View style={styles.textFiledViewFloating}>
                                    <FloatingLabelInput
                                        label={textTranslation.shippingAddress.FLATNAME}
                                        value={flateName}
                                        onChangeText={(value) => {
                                            this.setState({ flateName: value });
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                            // backgroundColor: 'red',

                                        }}
                                    />
                                </View>
                                <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                                    <RNPickerSelect
                                        hideIcon={(Platform.OS === 'ios') ? true : false}
                                        onValueChange={(value) => this.setState({ selectedCityItem: value })}
                                        placeholder={placeholderCity}
                                        style={{ ...pickerSelectStyles }}
                                        isFrom={'full'}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: 'Sharjah', value: 'sr' },
                                            { label: 'Dubai', value: 'db' },
                                            { label: 'Abudhabi', value: 'ad' },
                                        ]}
                                    />
                                    {(Platform.OS) === 'ios' ?
                                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                            style={styles.downArrowView} /> : null}
                                </View>
                                <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection, {}]}>
                                    <RNPickerSelect
                                        hideIcon={(Platform.OS === 'ios') ? true : false}
                                        onValueChange={(value) => this.setState({ selectedStateItem: value })}
                                        placeholder={placeholderState}
                                        style={{ ...pickerSelectStyles }}
                                        isFrom={'full'}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: 'Emirates', value: 'sr' },
                                            { label: 'Arab', value: 'db' },
                                        ]}
                                    />
                                    {(Platform.OS) === 'ios' ?
                                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                            style={styles.downArrowView} /> : null}
                                </View>
                                <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                                    <RNPickerSelect
                                        hideIcon={(Platform.OS === 'ios') ? true : false}
                                        onValueChange={(value) => this.setState({ selectedStateItem: value })}
                                        placeholder={placeholderCountry}
                                        style={{ ...pickerSelectStyles }}
                                        isFrom={'full'}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: 'Dubai', value: 'sr' },
                                            { label: 'Oman', value: 'db' },
                                        ]}
                                    />
                                    {(Platform.OS) === 'ios' ?
                                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                            style={styles.downArrowView} /> : null}
                                </View>
                                <Text style={[styles.generalInfoText, { paddingRight: (appLanguage === 'ar') ? 20 : 0, paddingLeft: (appLanguage === 'ar') ? 0 : 20 }]}>{textTranslation.shippingAddress.GENERALINFO}</Text>
                                <View style={[styles.generalInfoView, transistionClassArray[appLanguage].flexDirection]}>
                                    <View style={{ width: '45%', marginTop: 10 }}>
                                        <FloatingLabelInput
                                            label={textTranslation.shippingAddress.FIRSTNAME}
                                            value={firstName}
                                            onChangeText={(value) => {
                                                this.setState({ firstName: value });
                                            }}
                                            labelStyles={{
                                                fontSize: globals.font_12,
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                        />
                                    </View>
                                    <View style={{ width: '45%', marginTop: 10, }}>
                                        <FloatingLabelInput
                                            label={textTranslation.shippingAddress.LASTNAME}
                                            value={lastName}
                                            onChangeText={(value) => {
                                                this.setState({ lastName: value });
                                            }}
                                            labelStyles={{
                                                fontSize: globals.font_12,
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                        />

                                    </View>
                                </View>
                                <View style={[styles.generalInfoView, transistionClassArray[appLanguage].flexDirection]}>
                                    <View style={{ width: '40%', }}>
                                        <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS,
                                        { width: 110, top: (Platform.OS === 'ios') ? -10 : -10, right: (appLanguage === 'ar') ? -20 : 0, marginLeft: 0, marginRight: 0 },
                                        transistionClassArray[appLanguage].flexDirection]}>
                                            <RNPickerSelect
                                                hideIcon={(Platform.OS === 'ios') ? true : false}
                                                onValueChange={(value) => this.setState({ selectedStateItem: value })}
                                                placeholder={placeholderCode}
                                                style={{ ...pickerSelectStyles, }}
                                                isFrom={'small'}
                                                useNativeAndroidPickerStyle={false}
                                                items={[
                                                    { label: '+971', value: 'sr' },
                                                    { label: '+972', value: 'db' },
                                                ]}
                                            />
                                            {(Platform.OS) === 'ios' ?
                                                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                                    style={styles.downArrowView} /> : null}
                                        </View>
                                    </View>
                                    <View style={{ width: '60%', marginTop: 10, }}>
                                        <FloatingLabelInput
                                            label={textTranslation.shippingAddress.MOBILE}
                                            value={mobileNo}
                                            keyboardType='numeric'
                                            onChangeText={(value) => {
                                                this.setState({ mobileNo: value });
                                            }}
                                            labelStyles={{
                                                fontSize: globals.font_12,
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                        />
                                        {/* <View style={styles.textFiledView}>
                                        <Text style={styles.flatTextView}>{textTranslation.shippingAddress.MOBILE}</Text>
                                        <TextInput
                                            style={styles.textFiledTextView}
                                            onChangeText={text => this.setState({ mobileNo: text })}
                                            value={mobileNo}
                                            keyboardType='numeric'
                                            underlineColorAndroid={'transparent'}
                                        />
                                    </View> */}
                                    </View>
                                </View>
                                <Text style={[styles.lableTextView, { paddingRight: (appLanguage === 'ar') ? 20 : 0, paddingLeft: (appLanguage === 'ar') ? 0 : 20 }]}>{textTranslation.shippingAddress.LABLE}</Text>
                                <RadioForm
                                    formHorizontal={true}
                                    animation={true}
                                >
                                    {this.state.lableOptions && this.state.lableOptions.length > 0 &&
                                        this.state.lableOptions.map((item, index) => {
                                            return (
                                                <View key={index} style={[styles.modalRows, transistionClassArray[appLanguage].flexDirection]}>
                                                    <RadioButtonInput
                                                        obj={item}
                                                        index={index}
                                                        isSelected={this.state.isSelectedSortById === item.id}
                                                        initial={-1}
                                                        borderWidth={1}
                                                        buttonColor={(this.state.isSelectedSortById === item.id) ? colors.red : colors.radioGray}
                                                        buttonSize={10}
                                                        buttonOuterSize={20}
                                                        buttonWrapStyle={{ width: "22%", paddingHorizontal: 20 }}
                                                        onPress={() => this.selectedSoryByClick(item)}
                                                    />
                                                    <Text style={styles.modalSortText}>{item.name}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </RadioForm>
                                <View style={[styles.deafualtAddressView, transistionClassArray[appLanguage].flexDirection]}>
                                    <CheckBox
                                        style={{ padding: 10, marginLeft: 5, }}
                                        onClick={() => {
                                            this.setState({
                                                isChecked: !this.state.isChecked
                                            })
                                        }}
                                        isChecked={this.state.isChecked}
                                        checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                        unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                    />
                                    <Text style={styles.deafualtAddressTextView}>{textTranslation.shippingAddress.DEFAULTADDRESS}</Text>
                                </View>
                                <View style={styles.saveAddressView}>
                                    <Text style={styles.saveAddressTextView}>{textTranslation.shippingAddress.SAVEADDRESS}</Text>
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </Modal>
        )
    }
    onChangeText = (newText) => this.setState({ searchValue: newText });
    onFocus() {
        // alert('SAS')
        this.setState({ searchValue: 'E311 Neer Green Community - Al Sharq, Dubai' })
    }
    isButtonClick(value) {
        if (value) {
            this.setState({ isModalVisible: true })
        } else {
            this.setState({ isModalVisible: false })
            navigate('SearchPlaces')
        }
    }
    getData(data, detail) {
        console.log("getData Data-->", JSON.stringify(data));
        console.log("getData Detail-->", JSON.stringify(detail));

        let zipCode = this.getAddressComponent(detail.address_components, placeAddresCompoponent.ZIP_CODE)
        let country = this.getAddressComponent(detail.address_components, placeAddresCompoponent.COUNTRY)
        let state = this.getAddressComponent(detail.address_components, placeAddresCompoponent.STATE)
        let city = this.getAddressComponent(detail.address_components, placeAddresCompoponent.CITY)
        let town = this.getAddressComponent(detail.address_components, placeAddresCompoponent.TOWN)
        let road = this.getAddressComponent(detail.address_components, placeAddresCompoponent.NEAREST_ROAD)
        let area = this.getAddressComponent(detail.address_components, placeAddresCompoponent.AREA)
        let fullAddress = '';
        if (!_.isEmpty(area)) {
            fullAddress = area;  
        }
        if (!_.isEmpty(road)) {
            fullAddress = fullAddress + "," + road;  
        }
        if (!_.isEmpty(town)) {
            fullAddress = fullAddress + "," + town;  
        }
        if (_.isEmpty(town) && _.isEmpty(road) && _.isEmpty(area)) {
            fullAddress = detail.formatted_address;
        }

        console.log('area : ', area)
        console.log('road : ', road)
        console.log('town : ', town)
        console.log('city : ', city)
        console.log('state : ', state)
        console.log('country : ', country)
        console.log('zipCode : ', zipCode)
        console.log('lat : ', detail.geometry.location.lat)
        console.log('long : ', detail.geometry.location.lng)
        
        this.setState({ placeLat: detail.geometry.location.lat, placeLng: detail.geometry.location.lng }, () => {
            console.log('placeLat', this.state.placeLat);
            console.log('placeLng', this.state.placeLng);
            let markersDetail = [];
            let region = {
                latitude: this.state.placeLat,
                longitude: this.state.placeLng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
            this.mapRef.animateToRegion(region,1000)
            markersDetail.push({ latitude: detail.geometry.location.lat, longitude: detail.geometry.location.lng, title: detail.formatted_address })
            this.setState({ markers: markersDetail, searchValue: true, flateName: fullAddress.replace(/,+/g,",").replace(/(,\s*$)|(^,*)/, "")})
        })

    }
    getAddressComponent(address_components, key) {
        let value = '';
        let postalCodeType = address_components.filter(aComp =>
            aComp.types.some(typesItem => typesItem === key))
        if (postalCodeType != null && postalCodeType.length > 0)
            value = postalCodeType[0].long_name
        return value;
    }
   
    render() {
        const { appLanguage, textTranslation, searchValue, isModalVisible, placeLat, placeLng, markers, region } = this.state;
        return (
            <>
                <MapView
                    initialRegion={{
                        latitude: placeLat,
                        longitude: placeLng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    // region={region}
                    // onRegionChange={this.onRegionChange.bind(this)}
                    ref={(ref) => { this.mapRef = ref; }}
                    // onLayout={() => this.mapRef.fitToCoordinates(markers, 
                    //     { edgePadding: { top: 100, right: 200, bottom: 100, left: 200 }, animated: false })} 
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                >
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            // draggable
                            // fitToElements={true}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.title}
                            image={images.shippingAddress.pin}
                            // onDragEnd={(e) => console.log("onDrag Coodinate---> ", e.nativeEvent.coordinate)}
                        >
                            <Callout tooltip onPress={() => alert(marker.title)}>
                                <View>
                                    <View style={styles.bubble}>
                                        <Text style={styles.bubbleTitleView}>{marker.title}</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
                <View style={{ position: 'absolute', top: 30, width: globals.screenWidth, }}>
                    <TouchableOpacity style={[{ marginLeft: 20, marginTop: 10, marginBottom: 10, }, transistionClassArray[appLanguage].flexDirection]} onPress={() => goBack()}>
                        <MaterialIcons name={'arrow-back'} size={30} color={colors.black} />
                    </TouchableOpacity>
                    {/* <View style={styles.MainContainer}>
                    <Image source={images.shippingAddress.search} style={styles.searchIcon} resizeMode={'contain'}/>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        placeholder={textTranslation.shippingAddress.SEARCHLOACRION}
                        underlineColorAndroid={'transparent'}
                        onChangeText={text => this.onChangeText(text)}
                        // editable={false}
                        value={searchValue}
                        underlineColorAndroid="transparent"
                        onFocus={() => this.onFocus()}
                    />
                </View> */}
                    <GooglePlacesAutocomplete
                        placeholder={textTranslation.shippingAddress.SEARCHLOACRION}
                        onPress={(data, details = null) => this.getData(data, details)}
                        onFail={(error) => console.error("error-->", error)}
                        query={{
                            key: 'AIzaSyApE5EJZZ30gzRxv7HCtg1EI-O_iiwC6Ag',
                            language: 'en',
                            types: 'geocode' // default: 'geocode'
                        }}
                        numberOfLines={1}
                        fetchDetails={true}
                        renderDescription={row => row.description}
                        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        // GooglePlacesSearchQuery={{
                        //     // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        //     rankby: 'distance',
                        //    // types: 'landmark'
                        // }}

                        // filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3', 'street_address', 'street_number', 'sublocality']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        styles={{
                            textInputContainer: {
                                //   backgroundColor: 'red',
                                marginLeft: 20,
                                marginRight: 20,
                                flexDirection: 'row',
                                borderRadius: 30,
                                borderColor: colors.white,
                                borderWidth: 1,
                                backgroundColor: colors.white
                            },
                            textInput: {
                                height: 35,
                                color: colors.black,
                                fontSize: globals.font_16,
                                backgroundColor: 'transparent'
                            },
                            predefinedPlacesDescription: {
                                color: colors.red,
                            },
                            poweredContainer: {
                                marginRight: 20,
                                marginLeft: 20,
                            },
                            row: {
                                marginLeft: 20,
                                marginRight: 20
                            },
                            
                        }}
                    />
                </View>
                {(searchValue) ? <TouchableOpacity style={styles.bottomButton} onPress={() => this.isButtonClick(searchValue)}>
                     <Text style={styles.buttonTextView}>{textTranslation.shippingAddress.CONFIMRLOCATION}</Text>  
                </TouchableOpacity> : null }
                {(isModalVisible) ? <View style={{ flex: 1, height: globals.screenHeight, width: globals.screenWidth, borderWidth: 1, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                </View> : null}
                {this.renderModal()}
            </>
        );
    }

};


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        // paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 40,
    },
});