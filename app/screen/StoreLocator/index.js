import React, { Component, Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import AppHeader from '../../components/AppHeader';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated, Callout } from 'react-native-maps';
import { Images } from '../../theme';
import { goBack, navigate } from "../../navigation/RootNavigation";
import globalStyles from "../../assets/styles/globalStyle";
import FastImage from 'react-native-fast-image';
import FreeDiscountView from '../../components/FreeDiscountView';
import { connect } from "react-redux";
import { getStoresListRequest, getStoresListFail } from '../../redux/StoreLocator/actions';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import {BASE_URL} from "../../services/Config";
import CheckBox from 'react-native-check-box'
import { firebase } from '../../firebase/config';

const contextTypeLocalization = LocalizationContext;

class StoreLocator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            isModalVisible: false,
            searchValue: '',
            isFilterApply : false,
            isStoreCheck : false,
            isStoreCheck1 : false,
            storeContentList : [],
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
        }
        this.mapRef = null;
    }

    componentDidMount() {
        this.callMyStoresListAPI();
        firebase.database().ref('/store_locator_listing_page/SLP_content').once('value')
        .then(snapshot => {
            const content = snapshot.val();
            this.setState({ storeContentList: content })
        });
    }

    callMyStoresListAPI = () => {
        if (globals.isInternetConnected) {
            this.props.getStoresList();    

        }else{
            alert('Network not available.')
        }
    }

    clickTryNow(apiFor){
        if (apiFor === 'storesList') {
            this.callMyStoresListAPI();
        }
    }
    clickApply = () => {
        const {isFilterApply} = this.state;

        this.setState({isFilterApply : !isFilterApply})
    }

    onRegionChangeComplete(region) {
        console.log("new region", region)
    }

    distance(lat1, lon1, lat2 = 25.1972, lon2 = 55.2744, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist.toFixed(2);
        }
    }

    renderListOfStores = (markerList) => {
        const {appLanguage,textTranslation} = this.state;
        //Accordion Content view
        let storesTranslator = textTranslation.getStoresLocator;

        return (
            <View>
                {markerList && markerList.length > 0 &&
                    markerList.map((item,i) => {
                    let bgImage = item.attributes.hasOwnProperty(["store.imageURL"]) && 
                        item.attributes["store.imageURL"][0] &&
                        item.attributes["store.imageURL"][0] ?
                        BASE_URL + "/file" + item.attributes["store.imageURL"][0] : null
                    return (
                    <TouchableOpacity  onPress={() => navigate('StoreDetails', { storeID : item.attributes["record.id"]}) }>    
                    <View style={{backgroundColor:colors.white, margin:15,
                        borderRadius : 20,}}>
                        {bgImage != null ?
                            <FastImage
                                source={{uri : bgImage}}
                                style={{
                                    width: "100%",
                                    height: 199,
                                    borderTopLeftRadius : 20,
                                    borderTopRightRadius:20
                                }}
                                resizeMode={'cover'}
                            />
                        :
                            <FastImage
                                source={images.storeLocator.noImage}
                                style={{
                                    width: "100%",
                                    height: 199,
                                    borderTopLeftRadius : 20,
                                    borderTopRightRadius:20
                                }}
                                resizeMode={'cover'}
                            />
                        }
                        <View style={{padding:10, paddingHorizontal:15}}>
                            <Text style={[transistionClassArray[appLanguage].textAlign,transistionClassArray[appLanguage].marginLeft10, styles.addNewAddressText,{paddingTop:10}]}>{item.attributes["store.name"][0]}</Text>
                            <Text style={[transistionClassArray[appLanguage].textAlign,styles.subContent,{padding:10}]}>{item.attributes["store.address1"][0]}</Text>
                            <Text style={[transistionClassArray[appLanguage].textAlign,styles.subContent,{padding:10}]}>{item.attributes["store.address2"][0]}</Text>
                            <View >
                            <View style={[transistionClassArray[appLanguage].flexDirection, {paddingVertical:10}]}>
                                <FastImage
                                    source={images.storeLocator.timer}
                                    style={{
                                        width: 19,
                                        height: 18,
                                        marginHorizontal:5,
                                        marginRight : 10,
                                        marginTop:7
                                    }}
                                    resizeMode={'contain'}
                                />
                                <View>
                                    <Text style={[styles.subContent,transistionClassArray[appLanguage].textAlign]}>{storesTranslator.OPENING_HOURS}</Text>
                                    <Text style={[styles.subContent,transistionClassArray[appLanguage].textAlign]}>{item.attributes["store.hours"][0]}</Text>
                                </View>
                            </View>
                            <View style={[transistionClassArray[appLanguage].flexDirection, {paddingVertical:10}]}>
                                <FastImage
                                    source={images.storeLocator.phone}
                                    style={{
                                        width: 19,
                                        height: 18,
                                        marginHorizontal:5,
                                        marginRight : 10,
                                        marginTop:7
                                    }}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.subContent}>{item.attributes["store.phoneNumber"][0]} {storesTranslator.TOLL_FREE}</Text>
                            </View>
                            <View style={[transistionClassArray[appLanguage].flexDirection, { justifyContent:'space-between', paddingVertical:10}]}>
                                <View style={[transistionClassArray[appLanguage].flexDirection,{justifyContent:'space-between', width:250}]}>
                                    <TouchableOpacity onPress={() => navigate('StoreDetails', { storeID : item.attributes["record.id"]}) }>
                                        <Text style={styles.subContentRed}>{storesTranslator.STORE_DETAILS}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.subContentRed}>|</Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Text style={styles.subContentRed}>{storesTranslator.DIRECTIONS}</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.subContentKM}>
                                    {this.distance(item.attributes["store.latitude"][0],item.attributes["store.longitude"][0])} { 'Km'}</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    </TouchableOpacity>

                    )
                    })
                }
            </View>
        );
    };

    renderFirebaseContent = (contentList) => {
        const {appLanguage,textTranslation} = this.state;
        //Accordion Content view
        return (
            <View style={{padding:20,marginVertical:15, backgroundColor:colors.white}}>
                {contentList && contentList.length > 0 &&
                    contentList.map((item,i) => {
                    return (
                        <View key={item.SLP_content_id}>
                            <Text style={styles.subServicesText}>{item.SLP_content_title}</Text>
                            <Text style={styles.firebaseContentDescText} >{item.SLP_content_description}</Text>
                        </View>
                    )
                    })
                }
            </View>
        )   
    }

    render() {
        const {appLanguage, textTranslation,isStoreCheck1,isStoreCheck, 
            searchValue, isModalVisible, isFilterApply,storeContentList} = this.state;
        const {flexDirection, textAlign} = transistionClassArray[appLanguage];
        const {navigation, storesList, loading, storesListError } = this.props;
        const coordinates = []
        storesList && storesList.forEach(element => {
            coordinates.push({
                latitude : parseFloat(element.attributes["store.latitude"][0]),
                longitude : parseFloat(element.attributes["store.longitude"][0])
            })
        });
        let storesTranslator = textTranslation.getStoresLocator;
        return (
            <>
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                <SafeAreaView style={styles.mainView} >
                <AppHeader
                    barStyle={"light-content"}
                    androidStatusBarColor={colors.THEME_COLOR}
                    BodyData={
                    <View style={[transistionClassArray[appLanguage].flexDirection, 
                        {alignItems:'center', justifyContent:'center', alignSelf:'center', }]}>
                        <Text numberOfLines = {1} style={{fontFamily:globals.ProximaNovaMedium, color : colors.white,
                            fontSize: 20, textAlign:'center'}}>
                        {storesTranslator.STORE_LOCATOR}
                        </Text>
                    </View>}
                    BodyFlex={.70}
                    LeftFlex={.15}
                    LeftData={
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                        </TouchableOpacity>  }
                    RightFlex={.14}
                    RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                        <MaterialIcons name={'search'} size={32} color={colors.white} style={{paddingHorizontal:15}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Wishlist',{isEmptyView : true})} style={transistionClassArray[appLanguage].flexDirection}>
                        <FastImage
                            source={images.home.shape_5}
                            style={{
                                width: 28,
                                height: 28,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                            resizeMode={'contain'}
                        />
                        {/* <Badge itemsCount={1} appLanguage={appLanguage} view="mainHeader"/> */}
                        </TouchableOpacity>
                    </View>}
                />
                {(loading) ? <>
                    <View style={{justifyContent:'center', alignSelf:'center'}}>
                        <Loader/>
                    </View> 
                    </> : (storesListError) ? 
                    <View style={{justifyContent:'center', alignSelf:'center'}}>
                        <ErrorView apiFor={'storesList'} message={storesListError.message}
                        clickTryNow={this.clickTryNow.bind(this)} /> 
                    </View> 
                    : 
                <ScrollView style={{flex:1, paddingBottom:100}}>
                    <FreeDiscountView/>
                    { isFilterApply ?
                    <View style={{backgroundColor:'white', flex:1}}>
                        <Text style={[transistionClassArray[appLanguage].marginLeft10,styles.addNewAddressText,{paddingTop:20,paddingHorizontal:15}]}>{storesTranslator.FIND_A_STORE}</Text>
                            <View style={[flexDirection,
                                {justifyContent:'center', alignSelf:'center', 
                                width: globals.screenWidth *0.9,borderRadius: 20,
                                borderWidth:1,borderColor:colors.darkWarmGrey,
                                backgroundColor: "#fff", marginVertical:15}]}>
                                {/* <View style={[flexDirection,{paddingTop:10,}]}> */}
                                    <TextInput
                                        style={[flexDirection, styles.sotreCityText,{
                                            paddingLeft: appLanguage == "en" ? 20 :null,
                                            paddingRight: appLanguage == "ar" ? 20 :null,
                                        },]}
                                        placeholderTextColor={colors.lightBlack}
                                        //onChangeText={(text) => this.setState({searchValue : text})}
                                        placeholder={storesTranslator.SERACH_FOR_STORE}>
                                    </TextInput>
                                    <TouchableOpacity style={{justifyContent:'center', alignSelf:'center'}} onPress={() =>this.clickApply()}>
                                        <MaterialIcons name={'search'} size={32} color={colors.black} 
                                            style={{paddingHorizontal:15}}/>
                                    </TouchableOpacity>
                                {/* </View> */}
                            </View>
                        <View style={{justifyContent:'center', alignSelf:'center', 
                            width: globals.screenWidth * 0.9,
                            backgroundColor: "#fff",}}>
                                <View style={flexDirection}>
                                    <CheckBox
                                        style={{margin : 10, }}
                                        onClick={() => {
                                            this.setState({
                                                isStoreCheck: !isStoreCheck
                                            })
                                        }}
                                        isChecked={isStoreCheck}
                                        checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                        unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                    />
                                    <Text style={[transistionClassArray[appLanguage].marginLeft10,
                                        styles.addNewAddressText,{paddingTop:10}]}>
                                            Pet Training</Text>
                                </View>
                                <View style={flexDirection}>
                                 <CheckBox
                                        style={{margin : 10, }}
                                        onClick={() => {
                                        this.setState({
                                            isStoreCheck1: !isStoreCheck1
                                        })
                                    }}
                                    isChecked={isStoreCheck1}
                                    checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                    unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                />
                                <Text style={[transistionClassArray[appLanguage].marginLeft10,
                                        styles.addNewAddressText,{paddingTop:10}]}>
                                            DIY Dog Wash</Text>
                                </View>
                            </View>
                            <View style={[flexDirection,{marginHorizontal : 20, marginTop:10}]}>
                                <TouchableOpacity style={styles.filterButton} onPress={() => this.clickApply()}>
                                    <Text style={styles.ButtonText}>{storesTranslator.APPLY}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                padding:20,
                                borderTopWidth: 1, borderColor : colors.lightGray
                                }}>
                                <View style={flexDirection}>
                                    <View style={[flexDirection,{margin:7, padding: 3,borderColor:colors.darkWarmGrey, borderRadius:15, borderWidth:1}]}>
                                        <Text style={styles.selectedFilterText}>
                                            Pet Training
                                        </Text>
                                        <TouchableOpacity style={{marginHorizontal:5,alignSelf:'center'}} onPress={() => {}}>
                                            <Image source={images.shippingAddress.cancel} style={{width:10,height:10}} resizeMode={'contain'} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[flexDirection,{margin:7, padding: 3,borderColor:colors.darkWarmGrey, borderRadius:15, borderWidth:1}]}>
                                        <Text style={styles.selectedFilterText}>
                                            Pet Grooming
                                        </Text>
                                        <TouchableOpacity  style={{marginHorizontal:5, alignSelf:'center'}} onPress={() => {}}>
                                            <Image source={images.shippingAddress.cancel} style={{width:10,height:10}} resizeMode={'contain'} />
                                        </TouchableOpacity>
                                    </View> 
                                    <View style={[flexDirection,{margin:7, padding: 3,borderColor:colors.darkWarmGrey, borderRadius:15, borderWidth:1}]}>
                                        <Text style={styles.selectedFilterText}>
                                            Pet Grooming
                                        </Text>
                                        <TouchableOpacity  style={{marginHorizontal:5, alignSelf:'center'}} onPress={() => {}}>
                                            <Image source={images.shippingAddress.cancel} style={{width:10,height:10}} resizeMode={'contain'} />
                                        </TouchableOpacity>
                                    </View>    
                                </View>
                                <Text style={[styles.resultText, textAlign,{paddingVertical:15}]}>
                                    2 {storesTranslator.RESULTS}
                                </Text>
                                <View>
                                    <View style={{padding :20,borderWidth:1,borderRadius:10,borderColor:colors.darkWarmGrey}}>
                                        <Text style={styles.RedText}>
                                        The Pet Shop, Dubai Investment Park 1, Dubai
                                        </Text>
                                        <Text style={[styles.resultText,{paddingTop:10}]}>
                                        Dubai investment park Jabel Ali, Dubai
                                        </Text>
                                        <View style={[transistionClassArray[appLanguage].flexDirection,
                                             {paddingVertical:10, paddingTop:10}]}>
                                            <FastImage
                                                source={images.storeLocator.timer}
                                                style={{
                                                    width: 19,
                                                    height: 18,
                                                    marginHorizontal:5,
                                                    marginRight : 10,
                                                    marginTop:7
                                                }}
                                                resizeMode={'contain'}
                                            />
                                            <Text style={[styles.resultText,{paddingTop:5},transistionClassArray[appLanguage].textAlign]}>
                                            08:00am - 10:00pm, 7 days a week</Text>
                                        </View>
                                        <View style={[transistionClassArray[appLanguage].flexDirection,
                                             {paddingVertical:10}]}>
                                            <FastImage
                                                source={images.storeLocator.phone}
                                                style={{
                                                    width: 19,
                                                    height: 18,
                                                    marginHorizontal:5,
                                                    marginRight : 10,
                                                    marginTop:7
                                                }}
                                                resizeMode={'contain'}
                                            />
                                            <View style={[flexDirection, {width: 350, justifyContent:'space-between'}]}>
                                                <Text style={[styles.resultText,{paddingTop:5},transistionClassArray[appLanguage].textAlign]}>
                                                738 7467 (Toll Free)</Text>
                                                <Text style={[styles.resultText,{paddingTop:10}]}>
                                                    5Km
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        :
                        <View style={{backgroundColor:'white', height : 200,}}>
                        <Text style={[transistionClassArray[appLanguage].marginLeft10,styles.addNewAddressText,{paddingTop:20,paddingHorizontal:15}]}>{storesTranslator.FIND_A_STORE}</Text>
                        <View style={{
                            justifyContent:'center', alignSelf:'center', 
                            width: globals.screenWidth * 0.9,borderRadius: 14,
                            backgroundColor: "#fff",}}>
                            <View style={[flexDirection,{paddingTop:10}]}>
                                <View >
                                    <TextInput
                                        style={[flexDirection, styles.entreCityText,{
                                            paddingLeft: appLanguage == "en" ? 20 :null,
                                            paddingRight: appLanguage == "ar" ? 20 :null,
                                            borderTopLeftRadius : appLanguage == "en" ? 22 : 0,
                                            borderBottomLeftRadius:appLanguage == "en" ? 22 : 0,
                                            borderTopRightRadius : appLanguage == "ar" ? 22 : 0,
                                            borderBottomRightRadius:appLanguage == "ar" ? 22 : 0,
                                        },]}
                                        placeholderTextColor={colors.lightBlack}
                                        onChangeText={(text) => this.setState({searchValue : text})}
                                        placeholder={storesTranslator.ENTER_CITY}>
                                    </TextInput>
                                </View>
                                <TouchableOpacity onPress={() => this.clickApply()} style={[styles.applyBtn,{
                                    borderTopRightRadius : appLanguage == "en" ? 20 : 0,
                                    borderBottomRightRadius:appLanguage == "en" ? 20 : 0,
                                    borderTopLeftRadius : appLanguage == "ar" ? 22 : 0,
                                    borderBottomLeftRadius:appLanguage == "ar" ? 22 : 0,
                                    }]}>
                                    <Text style={styles.ButtonText}>{storesTranslator.APPLY}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[flexDirection,{marginHorizontal : 20, marginTop:10}]}>
                            <TouchableOpacity style={styles.filterButton} onPress={() => this.clickApply()}>
                                <Text style={styles.ButtonText}>{storesTranslator.FILTERS}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  

                    }
                         
                    <MapView
                        initialRegion={{
                            latitude: 25.6495678,
                            longitude: 55.7749903,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        ref={(ref) => { this.mapRef = ref; }}
                        onLayout={() => this.mapRef.fitToCoordinates(coordinates, 
                        { edgePadding: { top: 100, right: 200, bottom: 100, left: 200 }, animated: false })} 
                        provider={PROVIDER_GOOGLE}
                        style={{width: globals.screenWidth,
                            height: 450}}
                        >
                        {storesList && storesList.map((marker, index) => (
                            <Marker
                                key={index}
                                draggable
                                coordinate={{ 
                                    latitude: parseFloat(marker.attributes["store.latitude"][0]), 
                                    longitude: parseFloat(marker.attributes["store.longitude"][0]),
                                }}
                                cacheEnabled={true}
                                onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                                fitToElements={true}
                                pinColor={colors.red}
                                title={marker.attributes["store.name"][0]}
                                image={images.shippingAddress.pin}
                                onDragEnd={(e) => console.log("onDrag Coodinate---> ", e.nativeEvent.coordinate)}
                            >
                                <Callout tooltip onPress={() => alert(marker.attributes["store.name"][0])}>
                                    <View>
                                        <View style={styles.bubble}>
                                            <Text style={styles.bubbleTitleView}>{marker.attributes["store.name"][0]}</Text>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}
                    </MapView>
                    <View style={{flex:1, paddingBottom:10}}>
                        <Text style={[transistionClassArray[appLanguage].marginLeft10,styles.addNewAddressText,{paddingTop:20,paddingHorizontal:5}]}>{storesTranslator.OUR_LOCATIONS}</Text>
                        { this.renderListOfStores(storesList)}
                    </View>
                    <View style={{flex:1, paddingBottom:100}}>
                        { this.renderFirebaseContent(storeContentList)}
                    </View>
                    </ScrollView>
                    }
                </SafeAreaView>
                </Fragment>
            </>
        );
    }
};


const mapStateToProps = state => {
    return {
        storesList: state.StoreLocator.storesList && 
                    state.StoreLocator.storesList.resultsList &&
                    state.StoreLocator.storesList.resultsList.records,
        loading: state.StoreLocator.loading,
        storesListError: state.StoreLocator.storesListError,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getStoresList: () => dispatch(getStoresListRequest()),
        getStoresListFail: () => dispatch(getStoresListFail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocator)