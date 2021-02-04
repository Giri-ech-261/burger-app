import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  FlatList,
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
import { Images } from '../../theme';
import { goBack, navigate } from "../../navigation/RootNavigation";
import globalStyles from "../../assets/styles/globalStyle";
import FastImage from 'react-native-fast-image';
import FreeDiscountView from '../../components/FreeDiscountView';
import { connect } from "react-redux";
import { getStoreDetailsRequest, getStoreDetailsFail } from '../../redux/StoreLocator/actions';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import {BASE_URL} from "../../services/Config";
import ServicesView from '../../components/ServicesView';

const contextTypeLocalization = LocalizationContext;

class StoreDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
          appLanguage: contextTypeLocalization._currentValue.appLanguage,
          textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
          storeId : this.props.route && this.props.route.params && 
            this.props.route.params.storeID && this.props.route.params.storeID[0],
        serviceData: [
            {
                id: 1,
                name: 'In-Store Grooming',
                image: require('../../assets/images/home/group_2.png'),
            },
            {
                id: 2,
                name: 'Mobile Grooming',
                image: require('../../assets/images/home/groupCopy.png'),
            },
            {
                id: 3,
                name: 'Relocate Pet',
                image: require('../../assets/images/home/groupCopy2.png'),
            },
            {
                id: 4,
                name: 'Aquarium Maintenance',
                image: require('../../assets/images/home/groupCopy3.png'),
            }
            ],
      }
  }

  componentDidMount() {
      this.callMystoreDetailsAPI();
  }

  callMystoreDetailsAPI = () => {
      if (globals.isInternetConnected) {
          this.state.storeId != "" && 
          this.props.getStoreDetailsByStoreID(this.state.storeId);    

      }else{
          alert('Network not available.')
      }
  }

  clickTryNow(apiFor){
      if (apiFor === 'storeDetails') {
          this.callMystoreDetailsAPI();
      }
  }
  isServiceClick(id, data) {
    console.log("Service name -->", data.name);
  }

  renderListOfStores = (item) => {
      let storeDetails = item[0]
      console.log(storeDetails,"storeDetails0000000000000000000")
      const {appLanguage,textTranslation} = this.state;
      //Accordion Content view
      let storesTranslator = textTranslation.getStoresLocator;

      let bgImage = storeDetails.attributes.hasOwnProperty(["store.imageURL"]) && 
          storeDetails.attributes["store.imageURL"][0] &&
          storeDetails.attributes["store.imageURL"][0] ?
          BASE_URL + "/file" + storeDetails.attributes["store.imageURL"][0] : null
      let servicesList = storeDetails.attributes["store.services"].length != 0 && storeDetails.attributes["store.services"]
      let result = servicesList.join().split(",")
      let servicesListLength = storeDetails.attributes["store.services"].length;
      return (
          <View>
              <View style={{backgroundColor:colors.white, margin:15,
                  borderTopLeftRadius : 20,
                  borderTopRightRadius:20}}>
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
                      <Text style={[transistionClassArray[appLanguage].textAlign,transistionClassArray[appLanguage].marginLeft10, styles.detailsStoreText,{paddingTop:10}]}>{storeDetails.attributes["store.name"][0]}</Text>
                      <Text style={[transistionClassArray[appLanguage].textAlign,styles.subContentKM,{padding:10}]}>{storeDetails.attributes["store.address1"][0]}</Text>
                      <Text style={[transistionClassArray[appLanguage].textAlign,styles.subContentKM,{padding:10}]}>{storeDetails.attributes["store.address2"][0]}</Text>
                      <View >
                      <View style={[transistionClassArray[appLanguage].flexDirection, {paddingVertical:10}]}>
                          <FastImage
                              source={images.storeLocator.timer}
                              style={{
                                  width: 19,
                                  height: 18,
                                  marginHorizontal:5,
                                  marginRight : 10,
                              }}
                              resizeMode={'contain'}
                          />
                          <View style={{width:"95%"}}>
                              <Text style={[styles.subContentKMLH,transistionClassArray[appLanguage].textAlign]}>{storesTranslator.OPENING_HOURS}</Text>
                              <Text style={[styles.subContentKMLH,transistionClassArray[appLanguage].textAlign]}>{storeDetails.attributes["store.hours"][0]}</Text>
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
                              }}
                              resizeMode={'contain'}
                          />
                          <Text style={styles.subContentKM}>{storeDetails.attributes["store.phoneNumber"][0]} {storesTranslator.TOLL_FREE}</Text>
                      </View>
                      <View style={[transistionClassArray[appLanguage].flexDirection, 
                        { justifyContent:'space-between', paddingVertical:10, paddingHorizontal:10}]}>
                        <TouchableOpacity onPress={() => {}}>
                          <Text style={styles.detailsDirectionText}>{storesTranslator.DIRECTIONS}</Text>
                        </TouchableOpacity>
                        <Text style={styles.subContentKM}>5km</Text>
                      </View>
                      <View style={{height:1,backgroundColor:colors.lightWarmGrey,marginVertical:20,marginHorizontal:10}}></View>
                      <View style={{paddingHorizontal:10}}>
                        <Text style={[styles.storeServiceTitle,{paddingBottom:15}]}>Store Services</Text>
                        {result && result[0]  &&
                          <View style={[transistionClassArray[appLanguage].flexDirection, 
                          { paddingVertical:10, paddingRight:15}]}>
                            <View style={styles.oval}>
                              <Image
                                  source={images.storeLocator.inStoreGroming}
                                  style={styles.servicesIcon}
                                  resizeMode={'contain'}
                              />
                            </View>  
                          <Text style={[styles.subServicesText,{marginHorizontal:15,marginTop:12}]}>{result[0]}</Text>
                        </View>
                        }
                        {result && result[1] &&
                          <View style={[transistionClassArray[appLanguage].flexDirection, 
                            { paddingVertical:10, paddingRight:15}]}>
                            <View style={styles.oval}>
                              <Image
                                source={images.storeLocator.mobileGroming}
                                style={styles.servicesIcon}
                                resizeMode={'contain'}
                              />
                            </View> 
                            <Text style={[styles.subServicesText,{marginHorizontal:15,marginTop:12}]}>{result[1]}</Text>
                          </View>
                        }
                        {result && result[2] &&
                          <View style={[transistionClassArray[appLanguage].flexDirection, 
                            { paddingVertical:10, paddingRight:15}]}>
                            <View style={styles.oval}>
                              <FastImage
                                  source={images.storeLocator.relocatePet}
                                  style={styles.servicesIcon}
                                  resizeMode={'contain'}
                              />
                            </View>  
                            <Text style={[styles.subServicesText,{ marginHorizontal:15, marginTop:12}]}>{result[2]}</Text>
                          </View>
                        }
                      </View>
                    </View>
                  </View>
              </View>
          </View>
      );
    };

  render() {
      const {appLanguage, textTranslation,serviceData} = this.state; 
      const {flexDirection, textAlign} = transistionClassArray[appLanguage];
      const {navigation, storeDetails, loading, storeDetailsError } = this.props;
      const coordinates = []
      let storesTranslator = textTranslation.getStoresLocator
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
                          {'Store Details'}
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
                      <MaterialIcons name={'search'} size={32} color={colors.white} style={{paddingHorizontal:15}}/>
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
                  </> : (storeDetailsError) ? 
                  <View style={{justifyContent:'center', alignSelf:'center'}}>
                      <ErrorView apiFor={'storeDetails'} message={storeDetailsError.message}
                      clickTryNow={this.clickTryNow.bind(this)} /> 
                  </View> 
                  : 
                    <ScrollView style={{flex:1, paddingBottom:100}}>
                        <FreeDiscountView/>
                        <View style={{height:2,backgroundColor:colors.white}}></View>
                        <View style={{flex:1, }}>
                            {storeDetails &&  this.renderListOfStores(storeDetails)}
                        </View>
                        <View style={[styles.serviceMainView,{flex:1,backgroundColor:colors.white, padding:20,paddingBottom:100}]}>
                            <View style={[{ paddingLeft:15,paddingRight:15,marginTop:10,justifyContent:'space-between'},transistionClassArray[appLanguage].flexDirection]}>
                            <Text style={globalStyles.leftSideTitle}>{textTranslation.getBottomTrayTranslations.SERVICES}</Text>
                            <Text style={globalStyles.rightSideTitle}>{textTranslation.home.ALLSERVICES}</Text>
                            </View>
                            <View style={{flex:1, padding:10}}>
                                <FlatList
                                    data={serviceData}
                                    renderItem={({ item, index }) => <ServicesView data={item} isServiceClick={this.isServiceClick.bind(this)} />}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
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
      storeDetails: state.StoreLocator.storeDetails && 
                  state.StoreLocator.storeDetails.resultsList &&
                  state.StoreLocator.storeDetails.resultsList.records,
      loading: state.StoreLocator.loading,
      storeDetailsError: state.StoreLocator.storeDetailsError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
      getStoreDetailsByStoreID: (storeId) => dispatch(getStoreDetailsRequest(storeId)),
      // getStoreDetailsByStoreID: () => dispatch(getStoreDetailsRequest()),
      getStoreDetailsFail: () => dispatch(getStoreDetailsFail()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetails)