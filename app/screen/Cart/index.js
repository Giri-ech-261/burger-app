import React, { Component,Fragment } from 'react';
import { StyleSheet, TextInput,Platform,SafeAreaView, ScrollView,Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import globalStyles from "../../assets/styles/globalStyle";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AppHeader from '../../components/AppHeader';
import Badge from '../../components/BadgeView/Badge';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import FreeShippingCartView from "../../components/FreeShippingCartView";
import { SwipeListView } from 'react-native-swipe-list-view';
import FastImage from 'react-native-fast-image';
import * as globals from "../../utills/globals";
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, { RadioButtonInput } from 'react-native-simple-radio-button';
import WishlistProductView from '../../components/WishlistProductView';
import style from './style';
import {navigate} from '../../navigation/RootNavigation';
import CheckBox from 'react-native-check-box'
import Modal from 'react-native-modal';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { wp } from '../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckboxView from "../../components/CheckboxView";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import EmptyCart from '../EmptyCart';

const contextTypeLocalization = LocalizationContext;
const placeholderQty = {
  label: '1',
  value: null,
};
const placeholderFrequncy = {
  label: 'Select Frequency*',
  value: null,
};
class Cart extends Component {
  constructor(props){
    super(props);
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ?
      contextTypeLocalization._currentValue.translations._props.en :
      contextTypeLocalization._currentValue.translations._props.ar,
      selectedQtyItem: '',
      selectedStoreItem: '',
      isChecked : true,
      isPetCoinChecked : true,
      isSelectedSortById : "",
      isPetWallatChecked : true,
      storePickUpOptiosn : [
        {
          "value" : "1",
          "label":"E311 Neer Green Community - Al Sharq, Dubai"
        },
        {
          "value" : "2",
          "label" : "K423 Estate Hight - Al Sharq, Dubai UAE"
        },
        {
          "value" : "3",
          "label":"Dubai investment park Jabel Ali, Dubai"
        },
        {
          "value" : "4",
          "label" : "E311 Neer Green Community - Al Sharq, Dubai"
        },
      ],
      autoShipOptions :[
        {
          "id" : "1",
          "image" : true,
          "name" : "Yes, I want to Save AED 12.70 with"
        },
        {
          "id" : "2",
          "image" : false,
          "name" : "No, Continue without Autoship"
        },
      ],
      shippingMethodOptions :[
        {
          "id" : "1",
          "description" : "You will be getting your delivery with in 2 days",
          "name" : "Delivery"
        },
        {
          "id" : "2",
          "description" : "Lorem ipsum dolor sit nsectetur adipiscing elit.",
          "name" : "Store Pick-up"
        },
      ],
      products: [
        {
          id:1,
          name: 'Pro Plan Optiderma Salmon for Small & Mini Sensitive Skin Puppy',
          image: require('../../assets/images/wishlist/bitmapCopy12.png'),
          isConfigurable : false,
          price:'250.50',
          flavour : 'Dry Food',
          configurationOptions : { size : '5kg'},
          isSelected: false,
          inStock : true
        },
        {
          id:2,
          name: 'Royal Canin Venison & Duck Grain Free Dog Dry Food',
          image: require('../../assets/images/wishlist/bitmapCopy18.png'),
          isConfigurable : false,
          price:'150.50',
          flavour : 'Vanilla',
          configurationOptions : { size : '4kg'},
          isSelected: false,
          inStock : true
        },
        {
          id:3,
          name: 'Arden Grange Adult with Fresh Lamb & Rice',
          image: require('../../assets/images/wishlist/bitmapCopy3.png'),
          isConfigurable : false,
          price:'350.50',
          flavour : 'Natural',
          configurationOptions : { size : '6kg'},
          isSelected: false,
          inStock : true
        },
        {
          id:4,
          name: 'Arden Grange Adult with Fresh Lamb & Rice',
          image: require('../../assets/images/wishlist/bitmap.png'),
          isConfigurable : false,
          price:'150.50',
          flavour : 'Natural',
          configurationOptions : { size : '6kg'},
          isSelected: false,
          inStock : true
        }
      ],
      sortByOptions :[
        {
          "id" : "1",
          "name" : "10% Off On Dog Food",
          "description" : "Lorem Ipsum is simply dummy text of the printing"
        },
        {
          "id" : "2",
          "name" : "10% Off On Dog Food",
          "description" : "Lorem Ipsum is simply dummy text of the printing"
        },
        {
          "id" : "3",
          "name" : "10% Off On Dog Food",
          "description" : "Lorem Ipsum is simply dummy text of the printing"
        },
        {
          "id" : "4",
          "name" : "10% Off On Dog Food",
          "description" : "Lorem Ipsum is simply dummy text of the printing"
        },
        {
          "id" : "5",
          "name" : "10% Off On Dog Food",
          "description" : "Lorem Ipsum is simply dummy text of the printing"
        },
      ],
      isAutoShipMethodsById : "",
      isShippingMethodsById : "1",
      showStorePickUpView: false,
      showViewOnSelectedAutoShip : false,
      sortView: false,
      isAppliedView : false,
      isAutoshopModalOpen: false,
      selectedFrequncy:'',
      weekDatas: [
        {
          "id": 1,
          "isChecked": false,
          "title": "Sunday"
        },
        {
          "id": 2,
          "isChecked": false,
          "title": "Monday"
        },
        {
          "id": 3,
          "isChecked": false,
          "title": "Tuesday"
        },
        {
          "id": 4,
          "isChecked": false,
          "title": "Wednesday"
        },
        {
          "id": 5,
          "isChecked": false,
          "title": "Thursday"
        },
        {
          "id": 6,
          "isChecked": false,
          "title": "Friday"
        },
        {
          "id": 7,
          "isChecked": false,
          "title": "Saturday"
        },
      ],
      montsData: [
        {
          "id": 1,
          "isChecked": false,
          "title": "First"
        },
        {
          "id": 2,
          "isChecked": false,
          "title": "Second"
        },
        {
          "id": 3,
          "isChecked": false,
          "title": "Third"
        },
        {
          "id": 4,
          "isChecked": false,
          "title": "Fourth"
        },
        {
          "id": 5,
          "isChecked": false,
          "title": "Last"
        },

      ],
      autoShipName:'',
      isCartEmpty: false
    }
  }

  selectedSoryByClick =(value) => {
    this.setState({
      isAutoShipMethodsById :value.id,
      showViewOnSelectedAutoShip : (value.id == "1" ? true : false),
      isShippingMethodsById : "1"
    })
  }

  selectedOfferClick =(value) => {
    this.setState({isSelectedSortById :value.id})
  }

  selectedShippingByClick =(value) => {
    this.setState({
      isShippingMethodsById :value.id,
      showStorePickUpView : (value.id == "2" ? true : false),
    })
  }

  openModal = ()=>{
    this.setState({sortView: !this.state.sortView,isAppliedView : false})
  };

  coupanApplied = () => {
    this.setState({isAppliedView: !this.state.isAppliedView})
  }
  isContinueClick(value){
    this.setState({isCartEmpty: value })
  }
  isEmptyViewClick(value){
    this.setState({isCartEmpty: value })
  }
  render() {
    const {showStorePickUpView,showViewOnSelectedAutoShip,isShippingMethodsById,shippingMethodOptions,appLanguage,products,
      textTranslation,selectedQtyItem,autoShipOptions,storePickUpOptiosn,selectedStoreItem} = this.state;
    const {navigation} = this.props;
    let getTranslations = textTranslation.getWishlistTranslatoins;
    const {flexDirection, textAlign} = transistionClassArray[appLanguage];
    // onPress={()=>navigate('ShippingAddress')}
    return (
      <>
        <Fragment>
          <SafeAreaView style={globalStyles.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView}>
          <AppHeader
              barStyle={"light-content"}
              androidStatusBarColor={colors.THEME_COLOR}
              BodyData={
              <View style={[transistionClassArray[appLanguage].flexDirection,
                {maxWidth:200,alignItems:'center', justifyContent:'center', alignSelf:'center', }]}>
                <Text numberOfLines = {1} style={{fontFamily:globals.ProximaNovaMedium, color : colors.white,fontSize: 20, textAlign:'center'}}>
                  {'Cart'}
                </Text>
                <Text numberOfLines = {1} style={{fontFamily:globals.ProximaNovaMedium, color : colors.white, fontSize: 16, textAlign:'center'}}>
                { this.state.isCartEmpty ? ' (0 Products) ' :  ' (3 Products) '}
                </Text>
              </View>}
              BodyFlex={.80}
              LeftFlex={.10}
              LeftData={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                </TouchableOpacity>  }
              RightFlex={.0}
              RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
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
            <KeyboardAwareScrollView enableOnAndroid={true}>
            {this.state.isCartEmpty ? <EmptyCart isContinueClick={this.isContinueClick.bind(this)}/> :
              <View style={{flex:1}}>
              <ScrollView>
                <FreeShippingCartView isEmptyViewClick={this.isEmptyViewClick.bind(this)}/>
                <SwipeListView
                  data={[...products]}
                  renderItem={ (rowData, rowMap) => (
                    // <View style={[globalStyles.wishlistProducatViewMainView,styles.swipeView,transistionClassArray[appLanguage].flexDirection]}>
                      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('productDetail')} style={[globalStyles.wishlistProducatViewMainView,styles.swipeView,transistionClassArray[appLanguage].flexDirection]}>
                      <View style={{padding:8,}}>
                        <View style={{flexDirection:'row' ,position:'relative',alignItems:'center'}}>
                          <FastImage
                            style={{height:23,width:23,bottom:42}}
                            resizeMode="contain"
                            source={images.cartLanding.autoShip}
                          />
                          <FastImage
                            style={globalStyles.wishlistProductViewImage}
                            resizeMode="contain"
                            source={rowData.item.image}
                          />
                          { !rowData.item.inStock &&
                            <View style={{position:'absolute', bottom:35}}>
                              <View style={globalStyles.rectangleCopy30}>
                                <Text style={globalStyles.productViewAddToCart}>{getTranslations.OUTOFSTOCK}</Text>
                              </View>
                            </View>
                          }
                        </View>
                      </View>
                      <View style={{paddingRight:10, flex:1,}}>
                        <Text numberOfLines={3} style={[globalStyles.cartProductName,transistionClassArray[appLanguage].textAlign, { maxWidth: globals.screenWidth - 150, }]}>{rowData.item.name}</Text>
                        <View style={[transistionClassArray[appLanguage].flexDirection,{marginTop:15}]}>
                          <Text style={[globalStyles.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>{getTranslations.SIZE} </Text>
                          <Text style={[globalStyles.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{rowData.item.configurationOptions.size}</Text>
                        </View>
                        <View style={transistionClassArray[appLanguage].flexDirection}>
                          <Text style={[globalStyles.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>{getTranslations.FLAVOUR} </Text>
                          <Text style={[globalStyles.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{rowData.item.flavour}</Text>
                        </View>
                        <View style={[{justifyContent: 'space-between',  alignItems:'center', marginTop:10, marginBottom:20, }, transistionClassArray[appLanguage].flexDirection]}>
                          <View
                                style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, {width: 100}, flexDirection]}>
                              <RNPickerSelect
                                screenName="cart"
                                hideIcon={(Platform.OS === 'ios') ? true : false}
                                onValueChange={(value) => this.setState({selectedQtyItem: value})}
                                placeholder={placeholderQty}
                                style={{...pickerSelectStyles}}
                                useNativeAndroidPickerStyle={false}
                                isFrom={'small'}
                                items={[
                                  {label: '2', value: '2'},
                                  {label: '3', value: '3'},
                                ]}
                              >
                              </RNPickerSelect>
                              {(Platform.OS) === 'ios' ?
                                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                  style={styles.downArrowView}/> : null}
                            </View>
                            <View style={{alignItems:'flex-end'}}>
                              <Text style={[styles.productViewPriceWas, textAlign]}>{'was AED'} { rowData.item.price } </Text>
                              <Text style={[styles.productViewPrice,textAlign]}>{'AED'} { rowData.item.price } </Text>
                            </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  // </View>
                  )}
                  renderHiddenItem={ (rowData, rowMap) => (
                    <View style={[flexDirection, {flex:1,justifyContent: 'space-between'}]}>
                      <View style={styles.saveContainer}>
                        <TouchableOpacity style={[{  marginRight:appLanguage =="en" ? wp(8) : null},
                          transistionClassArray[appLanguage].alignSelfReverse,
                          ]}>
                          <AntDesignIcon name={'heart'} size={25} color={colors.white}                               style={{height:23,width:23,marginLeft: appLanguage =="ar" ? 20 : wp(3)}}
                              style={{marginLeft: appLanguage =="ar" ? null : 5}}
                              />
                          <Text style={globalStyles.SwipeHiddenText}>Save</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={globalStyles.removeContainer}>
                        <TouchableOpacity style={transistionClassArray[appLanguage].alignSelfReverse}>
                          {/* <AntDesignIcon size={25} name="delete" color="white" style={{
                            marginLeft: appLanguage =="ar" ? 20 : 10}}/> */}
                            <FastImage
                              style={{height:23,width:23,marginLeft: appLanguage =="ar" ? 20 : wp(3)}}
                              resizeMode="contain"
                              source={images.cartLanding.deleteIcon}
                            />
                          <Text style={[{marginRight: appLanguage =="en" ? 10 : null,
                            marginLeft: appLanguage =="ar" ? 15 : null},globalStyles.SwipeHiddenText]}>{getTranslations.DELETE}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  // swap left for english
                  // stopLeftSwipe={(!appLanguage || appLanguage == 'en') ? -1 : false}
                  // rightOpenValue={(!appLanguage || appLanguage == 'en') ? -70 : false}
                  // disableRightSwipe={(!appLanguage || appLanguage == 'en')}

                  // swap right for arabic
                  // stopRightSwipe={appLanguage == 'ar' ? -70 : false}
                  // leftOpenValue={appLanguage == 'ar' ? 70 : false}
                  // disableLeftSwipe={appLanguage == 'ar'}
                />

                <View style={{flexWrap:'wrap',width : "100%",backgroundColor:'white', padding:20, marginTop:20, }}>
                  <View style={flexDirection}>
                    <View>
                      <Text style={styles.autoShipViewTitle}>Order with</Text>
                      <Text style={styles.autoShipViewTitle}>your order</Text>
                    </View>
                    <FastImage
                      style={{height:27,width:120,marginHorizontal:5}}
                      resizeMode="contain"
                      source={images.home.autoship}
                    />
                    <Text style={styles.autoShipViewTitle}>and Save 10% on </Text>
                  </View>
                  <View style={{flex:1,marginTop:20,width : "100%",borderRadius: 14,
                    backgroundColor: "#f6f6f6"}}>
                    {autoShipOptions && autoShipOptions.length > 0 &&
                     autoShipOptions.map((item,index) => {
                      return (
                        <View key={index} style={[styles.modalRows, item.id == "2" ? styles.autoShipBottom : null,
                          // (item.image ? styles.divider : null),
                          transistionClassArray[appLanguage].flexDirection]}>
                           <RadioButtonInput
                            obj={item}
                            index={index}
                            isSelected={  this.state.isAutoShipMethodsById === item.id}
                            initial={-1}
                            borderWidth={2}
                            buttonColor={this.state.isAutoShipMethodsById === item.id ? colors.red : colors.lightWarmGrey}
                            buttonSize={15}
                            buttonOuterSize={25}
                            buttonWrapStyle={{paddingHorizontal:5,
                              marginTop :  item.image && this.state.isAutoShipMethodsById === item.id ? -110 : null}}
                            onPress={() => this.selectedSoryByClick(item)}
                          />
                          <View style={{paddingVertical:10,}}>
                            <View style={flexDirection}>
                              <Text style={[styles.autoShipRadiotitle,{marginHorizontal:5}]}>{item.name}</Text>
                              {item.image &&
                                <FastImage
                                  style={{height:null,width:60}}
                                  resizeMode="contain"
                                  source={images.home.autoship}
                                />
                              }
                            </View>
                            {item.image && this.state.isAutoShipMethodsById === item.id &&
                                <View style={styles.expandAutoShipView}>
                                  <View style={[flexDirection,{justifyContent:'space-between'}]}>
                                    <Text style={styles.autoShipYourOrder}>Your Autoship Order</Text>
                                    <TouchableOpacity onPress={() => { this.setState({ isAutoshopModalOpen: true }) }}>
                                      <Text style={styles.cartEditText}>Edit</Text>
                                    </TouchableOpacity>
                                  </View>
                                  <Text style={styles.rockyText}>Rocky</Text>
                                  <View style={flexDirection}>
                                    <FastImage
                                    style={{height:14,width:14,marginTop:3, marginRight:5}}
                                    resizeMode="contain"
                                    source={images.home.calender}
                                    />
                                    <Text >Ships Every 1st Week.</Text>
                                  </View>
                                </View>
                              }
                          </View>
                        </View>
                        )
                      })
                   }
                  </View>
                </View>
               <View style={{padding:20,}}>
                  <View style={flexDirection}>
                      <Text style={styles.mainTitle}>Shipping Method</Text>
                  </View>
                  <View style={{marginTop:20,width: globals.screenWidth * 0.9,borderRadius: 14,
                    backgroundColor: "#fff"}}>
                    {shippingMethodOptions && shippingMethodOptions.length > 0 &&
                     shippingMethodOptions.map((item,index) => {
                      return (
                        <View key={index} style={[styles.modalRows, item.id == "2" ? styles.shippingMtdBottom : null,
                          // (item.image ? styles.divider : null),
                          transistionClassArray[appLanguage].flexDirection]}>
                           <RadioButtonInput
                            obj={item}
                            index={index}
                            isSelected={ isShippingMethodsById === item.id}
                            initial={-1}
                            disabled = {showViewOnSelectedAutoShip}
                            borderWidth={2}
                            buttonColor={isShippingMethodsById === item.id ? colors.red : colors.lightWarmGrey}
                            buttonSize={15}
                            buttonOuterSize={25}
                            buttonWrapStyle={{paddingHorizontal:5, marginTop : -15}}
                            onPress={() => this.selectedShippingByClick(item)}
                          />
                          <View style={{paddingVertical:10}}>
                            <View >
                              <Text style={[styles.shippingMethodsRadiotitle,
                              {marginHorizontal:5, color : (showViewOnSelectedAutoShip && item.id =="2") ? colors.lightWarmGrey:  colors.black }]}>{item.name}</Text>
                              <Text style={[styles.shippingMethodsRadioDes,
                              {marginTop:5,marginHorizontal:5, color : (showViewOnSelectedAutoShip && item.id =="2") ? colors.lightWarmGrey: colors.lightBlack }]}>{item.description}</Text>
                            </View>
                            {/* <View >
                              <Text style={[styles.shippingMethodsRadiotitle,
                              {marginHorizontal:5, opacity:    isShippingMethodsById === item.id ? null : 0.3,
                              color : isShippingMethodsById === item.id ? colors.black : colors.darkWarmGrey}]}>{item.name}</Text>
                              <Text style={[styles.shippingMethodsRadioDes,
                              {marginTop:5,marginHorizontal:5, opacity:isShippingMethodsById === item.id ? null : 0.5,
                              color : isShippingMethodsById === item.id ? colors.darkWarmGrey : colors.lightWarmGrey}]}>{item.description}</Text>
                            </View> */}
                          </View>
                        </View>
                        )
                      })
                   }
                  </View>
                </View>
                {showStorePickUpView &&
                  <View style={{padding:20}}>
                    <Text style={[ flexDirection,styles.mainTitle,{marginTop:-14}]}>Store Selection</Text>
                      <View style={[{justifyContent: 'center',  alignItems:'center',
                        marginTop:10, }, transistionClassArray[appLanguage].flexDirection]}>
                        <View
                          style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS,
                            {backgroundColor:"#fff", width : "100%"}]}>
                              <Text style={{paddingHorizontal:(Platform.OS ==='ios') ? 10 : 6, paddingTop: Platform.OS === 'android' ? 5 : 0}}>Select Store*</Text>
                              <View style={[flexDirection,{marginTop: Platform.OS === 'android' ? -5 : 5}]}>
                                <RNPickerSelect
                                  hideIcon={(Platform.OS === 'ios') ? true : false}
                                  onValueChange={(value) => this.setState({  selectedStoreItem: value})}
                                  style={{...pickerSelectStyles}}
                                  placeholder={storePickUpOptiosn[0]}
                                  useNativeAndroidPickerStyle={false}
                                  isFrom={'small'}
                                  items={storePickUpOptiosn}
                                  screenName="cartStore"
                                >
                                </RNPickerSelect>
                                {(Platform.OS) === 'ios' ?
                                  <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                    style={styles.downArrowSize}/> : null}
                              </View>
                          </View>
                      </View>
                  </View>
                }
                {!showStorePickUpView &&

                <View style={{paddingHorizontal:20}}>
                  <View style={[flexDirection,{justifyContent:'space-between'}]}>
                    <Text style={styles.mainTitle}>Address</Text>
                    <TouchableOpacity onPress={() => navigate('ShippingAddress')}>
                      <Text style={styles.wishlistEditText}>Change</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop:20,width: "100%",borderRadius: 14,
                    backgroundColor: "#fff"}}>
                      <View style={[flexDirection, {padding:10,paddingVertical:15, borderBottomWidth:0.5, borderBottomColor:"#dae4ee"}]}>
                        <FastImage
                          style={{height:20,width:20,marginHorizontal:10,}}
                          resizeMode="contain"
                            source={images.shippingAddress.home}
                          />
                        <Text style={styles.mainTitle} >Home</Text>
                      </View>
                      <View style={{padding:10,}}>
                        <Text style={[styles.mainTitle,{marginHorizontal:10,marginVertical:5}]} >Jermy Petfather</Text>
                        <View style={[flexDirection,{marginTop:10}]}>
                          <FastImage
                            style={{height:20,width:20,marginHorizontal:10,}}
                            resizeMode="contain"
                            source={images.shippingAddress.map}
                          />
                          <Text style={styles.addressTitle}>E311 Neer Green Community - Al Sharq</Text>
                        </View>
                        <View style={[flexDirection,{marginVertical:15, marginLeft:5}]}>
                          <FastImage
                            style={{height:20,width:20,marginHorizontal:10,}}
                            resizeMode="contain"
                            source={images.shippingAddress.call}
                          />
                          <Text style={styles.addressTitle}>+971 58 522 2345</Text>
                        </View>
                      </View>
                  </View>
                </View>
                }
                <View style={{paddingHorizontal:20,marginTop:15}}>
                  <View style={[flexDirection,{justifyContent:'space-between'}]}>
                    <Text style={styles.mainTitle}>Payment Methods</Text>
                    <TouchableOpacity onPress={() => navigate('PaymentMethods')}>
                      <Text style={styles.wishlistEditText}>Change</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{padding:10,marginTop:20,width: globals.screenWidth * 0.9,borderRadius: 14,
                    backgroundColor: "#fff"}}>
                      <View style={[flexDirection, {paddingVertical:15}]}>
                          <FastImage
                            style={{height:30,width:35, marginHorizontal:10,}}
                            resizeMode="contain"
                            source={images.cartLanding.visaBox}
                          />
                        <Text style={styles.mainTitle} >Zaffer Ahamad</Text>
                      </View>
                      <View>
                        <View style={[flexDirection,{justifyContent:'space-between', }]}>
                          <Text style={[globalStyles.wishlistValueText,{marginHorizontal:10}]}>Card Ending With *** *** 754</Text>
                          <View >
                            <TextInput style={{width: 120,
                              borderRadius: 24,
                              height:40,
                              backgroundColor: "#ffffff",
                              textAlign: 'center',
                              fontSize:globals.font_14,
                              fontFamily:globals.ProximaNovaRegular,
                              borderColor:colors.darkWarmGrey,
                              borderWidth: 1,}} placeholder="Enter CVV"
                              placeholderTextColor={colors.darkWarmGrey}></TextInput>
                          </View>
                        </View>
                        <View style={[flexDirection,{marginTop:10, marginHorizontal:10}]}>
                          <CheckBox
                            style={{marginTop:5, }}
                            onClick={() => {
                              this.setState({
                                isChecked: !this.state.isChecked
                              })
                            }}
                            isChecked={this.state.isChecked}
                            checkedImage={
                              <FastImage
                              style={{height:23,width:23}}
                              resizeMode="contain"
                              source={images.shippingAddress.redCheck}/>
                            }
                            unCheckedImage={
                              <View style={styles.unCheckBox}></View>
                            }
                          />
                          <Text style={[globalStyles.defaulttValueText,{ marginHorizontal:15}]}>Default Card</Text>
                        </View>
                      </View>
                  </View>
                </View>
                { showViewOnSelectedAutoShip &&
                <View style={{paddingHorizontal:20,marginTop:15}}>
                  <View style={[flexDirection,{justifyContent:'space-between'}]}>
                      <Text style={styles.mainTitle}>Promo Code</Text>
                      <TouchableOpacity onPress={() => this.openModal()}>
                      <Text style={styles.wishlistEditText}>See All Offers</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:10,marginTop:20,width: globals.screenWidth * 0.9,borderRadius: 14,
                    backgroundColor: "#fff",}}>
                      <View style={[flexDirection,{paddingTop:10}]}>
                        <View >
                          <TextInput
                          style={[{
                            width: globals.screenWidth * 0.6,
                            height: 45,
                            borderWidth: 1,
                            //textAlign:'center',
                            backgroundColor: "#ffffff",
                            paddingLeft:10,
                            borderTopLeftRadius : appLanguage == "en" ? 22 : 0,
                            borderColor:colors.darkWarmGrey,
                            borderBottomLeftRadius:appLanguage == "en" ? 22 : 0,
                            fontSize:globals.font_14,
                            fontFamily:globals.ProximaNovaRegular,
                          },]}
                          placeholderTextColor={colors.lightBlack}
                          placeholder="Enter Promo Code"></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => {}} style={{width: 98,
                            height: 45,
                            backgroundColor:colors.black,
                            justifyContent:'center',
                            borderTopRightRadius : appLanguage == "en" ? 20 : 0,
                            borderBottomRightRadius:appLanguage == "en" ? 20 : 0,
                            }}>
                            <Text style={globalStyles.CartViewAddToCarttText}>Apply</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{padding:20}}>
                        <Text style={styles.titleGreySmall}>Applied Promo Code</Text>
                        <View style={[flexDirection,{marginTop : 15,justifyContent:'space-between'}]}>
                          <Text style={styles.promoCodeAppliedTitle}>20%OFFNEWUSER</Text>
                          <TouchableOpacity onPress={() => {}} >
                            <FastImage
                              style={{height:10,width:10,paddingTop:10}}
                              resizeMode="contain"
                              source={images.shippingAddress.cancel}
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={[flexDirection,{marginTop : 10,justifyContent:'space-between'}]}>
                          <Text style={styles.promoCodeAppliedTitle}>10%OFFTODAYBOOKING</Text>
                          <TouchableOpacity onPress={() => {}} >
                            <FastImage
                              style={{height:10,width:10,paddingTop:10}}
                              resizeMode="contain"
                              source={images.shippingAddress.cancel}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                  </View>
                </View>
                }
                <View style={{justifyContent:'center',alignItems:'center', marginTop:15}} >
                  <View style={{width: globals.screenWidth * 0.9,borderRadius: 14, }}>
                      <View  style={{padding:10,}}>
                        <View style={[flexDirection,{justifyContent:'space-between',}]}>
                          <Text style={styles.totalPrice}>Subtotal <Text style={styles.totalPriceText}>(4 Products)</Text></Text>
                          <Text style={styles.totalPriceText}>AED 430.00</Text>
                        </View>
                        <View style={[flexDirection,{justifyContent:'space-between', marginTop:10}]}>
                          <Text style={styles.totalPrice}>Shipping Fees</Text>
                          <Text style={[styles.totalPriceText,{marginTop:5}]}>Free</Text>
                        </View>
                        <View style={[flexDirection,{justifyContent:'space-between', marginTop:10}]}>
                          <Text style={styles.totalPrice}>Discount</Text>
                          <Text style={[styles.blueTotalPrice,{marginTop:5}]}>- AED 30.00</Text>
                        </View>
                      </View>
                      <View>
                        <View style={[flexDirection,{borderRadius : 10,backgroundColor:colors.white,
                          justifyContent:'space-between',marginTop:10, marginLeft:appLanguage=="en"? 10: null}]}>
                            <View style={[flexDirection,{ justifyContent:'space-between'}]}>
                              <CheckBox
                                style={{ margin:15,}}
                                onClick={() => {
                                    this.setState({
                                      isPetCoinChecked: !this.state.isPetCoinChecked
                                    })
                                }}
                                isChecked={this.state.isPetCoinChecked}
                                checkedImage={<FastImage
                                  style={{height:23,width:23}}
                                  resizeMode="contain"
                                  source={images.shippingAddress.redCheck}/>}
                                unCheckedImage={ <View style={styles.unCheckBox}></View>}
                              />
                              <Text style={[styles.walletTitle,{alignSelf:'center'}]}>Use Your Petcoin</Text>
                            </View>
                          <Text style={[styles.walletTitlePrice,{marginRight:appLanguage=="en"? 10: null, alignSelf:'center'}]}>AED 15.00</Text>
                        </View>
                        <View style={[flexDirection,{borderRadius : 10,backgroundColor:colors.white,
                          justifyContent:'space-between',marginTop:15, marginLeft:appLanguage=="en"? 10: null}]}>
                            <View style={[flexDirection,{ justifyContent:'space-between'}]}>
                              <CheckBox
                                style={{ margin:15,}}
                                onClick={() => {
                                    this.setState({
                                      isPetWallatChecked: !this.state.isPetWallatChecked
                                    })
                                }}
                                isChecked={this.state.isPetWallatChecked}
                                checkedImage={<FastImage
                                  style={{height:23,width:23}}
                                  resizeMode="contain"
                                  source={images.shippingAddress.redCheck}/>}
                                unCheckedImage={ <View style={styles.unCheckBox}></View>}
                              />
                              <Text style={[styles.walletTitle,{alignSelf:'center'}]}>Use Petshop Wallet</Text>
                            </View>
                          <Text style={[styles.walletTitlePrice,{marginRight:appLanguage=="en"? 10: null, alignSelf:'center'}]}>AED 40.00</Text>
                        </View>
                       </View>
                        <View style={[flexDirection,{padding:10,marginTop :10,justifyContent:'space-between', }]}>
                        <View style={flexDirection}>
                          <Text style={styles.orderTotalmainTitle}>Order Total</Text>
                          <Text style={styles.titleGreySmallText}> (VAT Inc.)</Text>
                        </View>
                        <Text style={styles.orderTotalmainValue}>AED 400.00</Text>
                      </View>
                  </View>
                </View>
                  <View >
                    <TouchableOpacity style={globalStyles.CartViewAddToCart} onPress={() => {}}>
                      <Text style={globalStyles.CartViewAddToCarttText}>Place Order</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
                {this.renderAutoshipModal()}
                <Modal
                  testID={'modal'}
                  isVisible={this.state.sortView}
                  // isVisible={true}
                  swipeDirection={['down']}
                  style={styles.view}
                >
                  <View style={styles.modalView}>
                    <View style={styles.rectangleCopy5}></View>
                      <View style={[styles.modalContent,transistionClassArray[appLanguage].flexDirection]}>
                        <Text style={styles.modalTitle}>Offers</Text>
                        <TouchableOpacity onPress={() => this.openModal()}>
                          <FastImage
                            style={styles.filterIconSize}
                            source={images.productListing.closeIcon}
                            resizeMode={'contain'}/>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.bottomDivider}></View>
                      { this.state.isAppliedView ?
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                          <FastImage
                            style={{height: 44,width:44}}
                            source={images.cartLanding.redCheckSuccess}
                            resizeMode={'contain'}/>
                            <View style={{marginVertical:20}}>
                              <Text style={styles.offerAppliedTitle}>AED 400.00</Text>
                            </View>
                            <View style={[{marginVertical:5},flexDirection]}>
                              <Text style={styles.mainTitle}>Saved with code </Text>
                              <Text style={styles.red}>“10% Off On Dog Food”</Text>
                            </View>
                            <Text style={styles.afterAppliedText}>Offer Applied Successfully.</Text>
                        </View>
                      :
                      <View>
                      {this.state.sortByOptions && this.state.sortByOptions.length > 0 &&
                        this.state.sortByOptions.map((item,index) => {
                          return (
                            <View key={index} style={[styles.modalRowsNEw,
                              transistionClassArray[appLanguage].flexDirection,{justifyContent:'space-between'}]}>
                                <View style={{width: '10%', paddingRight:10,  }}>
                                <RadioButtonInput
                                  obj={item}
                                  index={index}
                                  isSelected={this.state.isSelectedSortById === item.id}
                                  initial={-1}
                                  borderWidth={1}
                                  buttonColor={"#bababa"}
                                  buttonSize={17}
                                  buttonOuterSize={25}
                                  buttonWrapStyle={{paddingHorizontal:15,}}
                                  onPress={() => this.selectedOfferClick(item)}
                                />
                                </View>
                                <View style={{width: '70%', }}>
                                  <Text style={styles.modalSortText}>{item.name}</Text>
                                  <Text numberOfLines={3} style={styles.titleGreySmallText  }>{item.description}</Text>
                               </View>
                                <View style={{width: '20%', }}>
                                <TouchableOpacity onPress={() => this.coupanApplied()} style={styles.modalApplyBtn}>
                                <Text style={styles.modalApplyBtnText}>Apply</Text>
                              </TouchableOpacity>
                                </View>
                              {/* <View style={flexDirection}>
                                <RadioButtonInput
                                  obj={item}
                                  index={index}
                                  isSelected={this.state.isSelectedSortById === item.id}
                                  initial={-1}
                                  borderWidth={1}
                                  buttonColor={"#bababa"}
                                  buttonSize={17}
                                  buttonOuterSize={25}
                                  buttonWrapStyle={{paddingHorizontal:15,}}
                                  onPress={() => this.selectedOfferClick(item)}
                                />
                                <View>
                                  <Text style={styles.modalSortText}>{item.name}</Text>
                                  <Text numberOfLines={3} style={styles.titleGreySmallText,{width: 100,flexWrap:'wrap'}}>{item.description}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.coupanApplied()} style={styles.modalApplyBtn}>
                                <Text style={styles.modalApplyBtnText}>Apply</Text>
                              </TouchableOpacity>
                              </View> */}


                            </View>
                            )
                          })
                        }
                      </View>
                      }
                    </View>
                  </Modal>
            </View>
            }

            </KeyboardAwareScrollView>
          </SafeAreaView>
        </Fragment>
      </>
    )
  }
  isChecked(title){
    console.log('TITLTE-->',title);
  }
  renderAutoshipModal() {
    const { isAutoshopModalOpen, appLanguage, textTranslation, weekDatas, montsData, autoShipName } = this.state;
    return (
      <Modal testID={'modal'}
        isVisible={isAutoshopModalOpen}
        // swipeDirection={['down']}
        style={styles.view}>
        <View style={styles.autoShipHeight}>
          <View style={styles.graySeprator}></View>
          <ScrollView bounces={true} showsVerticalScrollIndicator={false} >
            <View style={{padding:20}}>
            <View style={[styles.enterAddressPopup, transistionClassArray[appLanguage].flexDirection]}>
              <View style={[{ width: '90%' }, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={styles.enterAddressTextView}>{textTranslation.cart.ORDERWITH}</Text>
                <Image
                  source={images.home.autoship_3}
                  style={styles.autoshipImage}
                  resizeMode={'contain'} />
                <Text style={styles.enterAddressTextView}>{textTranslation.cart.SAVEORDER}</Text>
              </View>
              <View style={{ width: '10%' }}>
                <TouchableOpacity onPress={() => this.setState({ isAutoshopModalOpen: false })}>
                  <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[styles.saveOrderText, transistionClassArray[appLanguage].textAlign]}>{textTranslation.cart.SAVEYOURORDER}</Text>
            <View style={{  flex: 1, marginTop:20, backgroundColor: '#fff'}}>
                <FloatingLabelInput
                  label={textTranslation.cart.AUTOSHIPNAME}
                  value={autoShipName}
                  onChangeText={(value) => {
                    this.setState({autoShipName: value});
                  }}
                  labelStyles={{
                    fontSize: globals.font_12,
                    fontFamily: globals.ProximaNovaRegular,
                    color: colors.darkWarmGrey,
                    // backgroundColor: 'red',

                  }}
                />
              </View>
            <View style={{marginTop:20}}>
             <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOSFrequncy, transistionClassArray[appLanguage].flexDirection]}>
              <RNPickerSelect
                hideIcon={(Platform.OS === 'ios') ? true : false}
                onValueChange={(value) => this.setState({ selectedFrequncy: value })}
                placeholder={placeholderFrequncy}
                style={{ ...pickerSelectStylesFrequncy }}
                isFrom={'full'}
                useNativeAndroidPickerStyle={false}
                items={[
                  { label: 'Weekly', value: 'week' },
                  { label: 'Monthly', value: 'month' },
                ]}
              />
              {(Platform.OS) === 'ios' ?
                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                  style={styles.downArrowView} /> : null}
              </View>
              </View>
              <Text style={styles.shipmentMessageText}>{textTranslation.cart.SHIPMENTMESSAGE}</Text>
              <View style={styles.modalSeprator} />
              <Text style={[styles.chooseDayWeeK, transistionClassArray[appLanguage].textAlign]}>{textTranslation.cart.CHOOSEDAY}</Text>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:10,}]}>
                <CheckboxView data={weekDatas[0]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={weekDatas[1]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={weekDatas[2]}  isChecked={this.isChecked.bind(this)} />
              </View>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:10,}]}>
                <CheckboxView data={weekDatas[3]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={weekDatas[4]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={weekDatas[5]}  isChecked={this.isChecked.bind(this)} />
              </View>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:10,}]}>
                <CheckboxView data={weekDatas[6]}  isChecked={this.isChecked.bind(this)}  />
              </View>
              <View style={styles.modalSeprator} />
              <Text style={[styles.chooseDayWeeK, transistionClassArray[appLanguage].textAlign]}>{textTranslation.cart.CHOOSEMONTH}</Text>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:10,}]}>
                <CheckboxView data={montsData[0]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={montsData[1]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={montsData[2]}  isChecked={this.isChecked.bind(this)} />
              </View>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:10,}]}>
                <CheckboxView data={montsData[3]}  isChecked={this.isChecked.bind(this)} />
                <CheckboxView data={montsData[4]}  isChecked={this.isChecked.bind(this)} />
              </View>
              <View style={[transistionClassArray[appLanguage].flexDirection, { marginTop:30,  marginRight:20, marginBottom:20,  justifyContent:'space-between'}]}>
                 <View style={styles.cancleTextView}>
                   <Text style={styles.cancleTextLable} >{textTranslation.shippingAddress.CANCEL}</Text>
                 </View>
                 <View style={styles.saveTextView}>
                   <Text style={styles.saveTextLable}>{textTranslation.cart.SAVE}</Text>
                 </View>
              </View>
             </View>
          </ScrollView>
        </View>
      </Modal>
    )
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: globals.font_15,
      color: colors.black,
      fontFamily: globals.ProximaNovaRegular,
      paddingLeft:10,
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: globals.font_15,
      color: colors.black,
      fontFamily: globals.ProximaNovaBold,
      width: globals.screenWidth,
      height: 40,
  },
});

const pickerSelectStylesFrequncy = StyleSheet.create({
  inputIOS: {
      fontSize: globals.font_15,
      color: colors.black,
      fontFamily: globals.ProximaNovaRegular,
  },
  inputAndroid: {
      fontSize: globals.font_15,
      color: colors.black,
      fontFamily: globals.ProximaNovaBold,
      width: globals.screenWidth,
      height: 50,
  },
});

export default Cart;
