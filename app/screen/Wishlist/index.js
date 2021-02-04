import React, { Component,Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import AppHeader from '../../components/AppHeader';
import FastImage from 'react-native-fast-image';
import WishlistProductView from '../../components/WishlistProductView';
import {navigate} from '../../navigation/RootNavigation';
import { SwipeListView } from 'react-native-swipe-list-view';
import globalStyle from '../../assets/styles/globalStyle';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import { wp } from '../../theme';

const contextTypeLocalization = LocalizationContext;

class Wishlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      isWishlistEmpty:true,
      isUserLoggedIn : this.props.route && this.props.route.params && 
        this.props.route.params.isEmptyView ? false : true,
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
          inStock : false
        }
      ],
      
    }
  }

  isProductClick(id, rowData){
    console.log("Product Click-->"+id);
    navigate('productDetail');
  }

  render() {
    const {appLanguage,products,textTranslation, isUserLoggedIn} = this.state;
    const {navigation} = this.props;
    let getTranslations = textTranslation.getWishlistTranslatoins;

    let emptyWishlistContent = {
      "title" : getTranslations.EMPTYWISHLIST.TITLE,
      "points" : [
        {
          "id":1,
          "name": getTranslations.EMPTYWISHLIST.TEXT1,
        },
        {
          "id":2,
          "name": getTranslations.EMPTYWISHLIST.TEXT2,
        },
        {
          "id":3,
          'name': getTranslations.EMPTYWISHLIST.TEXT3,
        },
      ],
    }
    return (
      <>
      <Fragment>
        <SafeAreaView style={globalStyle.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView}>
            <AppHeader
              barStyle={"light-content"}
              androidStatusBarColor={colors.THEME_COLOR}
              LeftFlex={.20}
              LeftData={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons name={'arrow-back'} size={35} color={colors.white}/>
                </TouchableOpacity>  }
                BodyData={
                <View style={[transistionClassArray[appLanguage].flexDirection, {justifyContent:'center', alignSelf:'center', }]}>
                  <Text style={globalStyle.wishlistHeaderTitle}>
                    {getTranslations.WISHLIST}
                  </Text>
                </View>}
              BodyFlex={.80}
              RightFlex={.0}
            />
            <View style={styles.mainView}>
            {isUserLoggedIn ? 
              <View style={styles.mainWishlistView}>
                <View style={styles.wishlistView}>
                  <Text style={[styles.title,transistionClassArray[appLanguage].textAlign]}>{getTranslations.MANAGE_WISHLIST_TEXT}</Text>
                </View>  
                <View style={globalStyle.wishlistProducatViewMainView}>
                  {/* <FlatList
                    data={products}
                    renderItem={({ item, index }) => <WishlistProductView data = {item} isProductClick={this.isProductClick.bind(this)} />}
                    //inverted={appLanguage == 'ar' ? true : false}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                  /> */}
                  <SwipeListView
                        showsVerticalScrollIndicator ={false}
                        data={[...products]}
                        renderItem={ (rowData, rowMap) => (
                          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('productDetail')} style={[globalStyle.wishlistProducatViewMainView,styles.swipeView,transistionClassArray[appLanguage].flexDirection]}>
                          <View style={[globalStyle.wishlistProducatViewMainView,styles.swipeView,transistionClassArray[appLanguage].flexDirection]}>
                            <View style={{padding:8, alignItems:'center'}}>
                              <View style={{position:'relative'}}>
                                <FastImage
                                  style={globalStyle.wishlistProductViewImage}
                                  resizeMode="contain"
                                  source={rowData.item.image}
                                />
                                { !rowData.item.inStock && 
                                    <View style={{position:'absolute', bottom:35}}>
                                      <View style={globalStyle.rectangleCopy30}>
                                        <Text style={globalStyle.productViewAddToCart}>{getTranslations.OUTOFSTOCK}</Text>       
                                      </View>
                                    </View>
                                }
                              </View>
                              <Text style={globalStyle.moreChoicesText}>{textTranslation.getProductListTranslations.MORECHOICES}</Text>
                            </View>
                            <View style={{paddingRight:10,width:globals.screenWidth * 0.65}}>
                              <TouchableOpacity onPress={() => navigation.navigate('productDetail')} >
                                <Text numberOfLines={2} style={[globalStyle.wishlistProductName,transistionClassArray[appLanguage].textAlign, { maxWidth: globals.screenWidth - 150, }]}>{rowData.item.name} </Text>
                              </TouchableOpacity>
                              <View style={transistionClassArray[appLanguage].flexDirection}>
                                <Text style={[globalStyle.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>{getTranslations.SIZE} </Text>
                                <Text style={[globalStyle.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{rowData.item.configurationOptions.size}</Text>
                              </View> 
                              <View style={transistionClassArray[appLanguage].flexDirection}>
                                <Text style={[globalStyle.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>{getTranslations.FLAVOUR} </Text>
                                <Text style={[globalStyle.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{rowData.item.flavour}</Text>
                              </View>
                              <View style={transistionClassArray[appLanguage].flexDirection}>
                                <Text style={[globalStyle.productViewPrice, transistionClassArray[appLanguage].textAlign] }>{'AED'} </Text>
                                <Text style={[globalStyle.productViewPrice, transistionClassArray[appLanguage].textAlign] }> { rowData.item.price } </Text>
                              </View>
                              <TouchableOpacity style={transistionClassArray[appLanguage].alignSelf} 
                                onPress={()=> this.isProductClick(rowData.item.id, rowData.item)} >
                                <Text style={[ globalStyle.wishlistEditText, transistionClassArray[appLanguage].textAlign]}>
                                  {getTranslations.EDIT}</Text>
                              </TouchableOpacity>
                              {rowData.item.inStock ?
                                <TouchableOpacity style={globalStyle.wishlistViewAddToCart} onPress={()=>{}} >
                                  <Text style={globalStyle.productViewAddToCart}>{textTranslation.home.ADDTOCART}</Text>       
                                </TouchableOpacity>
                                :
                                <View style={ globalStyle.wishlistViewOutStock} >
                                  <Text style={globalStyle.productViewAddToCart}>{textTranslation.home.ADDTOCART}</Text>       
                                </View>
                              }
                            </View>
                          </View>
                          </TouchableOpacity>
                        )}
                        renderHiddenItem={ (rowData, rowMap) => (
                          // <View style={styles.removeContainer}>
                          //   <View style={styles.swipeWishlistView}>
                          //     <TouchableOpacity style={transistionClassArray[appLanguage].alignSelfReverse}>
                          //       <AntDesignIcon size={25} name="delete" color="white" style={{
                          //          marginLeft: appLanguage =="ar" ? 20 : 10}}/>
                          //       <Text style={[{marginRight: appLanguage =="en" ? 10 : null,
                          //          marginLeft: appLanguage =="ar" ? 15 : null},globalStyle.deleteText]}>{getTranslations.DELETE}</Text>       
                          //     </TouchableOpacity> 
                          //   </View> 
                          // </View>
                          <View style={[styles.removeContainer, styles.swipeWishlistView]}>
                              <TouchableOpacity style={transistionClassArray[appLanguage].alignSelfReverse}>
                              {/* <AntDesignIcon size={25} name="delete" color="white" style={{
                                marginLeft: appLanguage =="ar" ? 20 : 10}}/> */}
                                <FastImage
                                  style={{height:23,width:23,marginLeft: appLanguage =="ar" ? 20 : wp(3)}}
                                  resizeMode="contain"
                                  source={images.cartLanding.deleteIcon}
                                />
                              <Text style={[{marginRight: appLanguage =="en" ? 10 : null,
                                marginLeft: appLanguage =="ar" ? 15 : null},globalStyle.SwipeHiddenText]}>{getTranslations.DELETE}</Text>       
                            </TouchableOpacity> 
                          </View>
                        )}
                        // leftOpenValue={75}
                        // rightOpenValue={-75}
                        // swap left for english
                        stopLeftSwipe={(!appLanguage || appLanguage == 'en') ? -1 : 0}
                        rightOpenValue={(!appLanguage || appLanguage == 'en') ? -75 : 0}
                        disableRightSwipe={(!appLanguage || appLanguage == 'en')}

                        // swap right for arabic
                        stopRightSwipe={appLanguage == 'ar' ? -75 : 0}
                        leftOpenValue={appLanguage == 'ar' ? 75 : 0}
                        disableLeftSwipe={appLanguage == 'ar'}
                      />
                    </View>
                </View>
              :
              <View style={styles.emptyWishlistView}>
                <Text style={[styles.title,transistionClassArray[appLanguage].textAlign] }>{emptyWishlistContent.title}</Text>
                  { emptyWishlistContent.points.map((item,index) => {
                    return (
                      <View style={[styles.pointsView, transistionClassArray[appLanguage].flexDirection]}>
                        <View style={[styles.dotView,transistionClassArray[appLanguage].marginRight10]}></View>
                        <Text key={index} style={styles.pointText}>{item.name}</Text>
                      </View>
                    )})
                  }
                  <View>
                    <TouchableOpacity style={styles.wishlistSignInView}>
                      <Text style={styles.wishlistSignInText}>{getTranslations.SIGNIN}</Text>       
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wishlistAccountView}>
                      <Text style={styles.wishlistAccountText}>{getTranslations.CREATEANACCOUNT}</Text>       
                    </TouchableOpacity>
                  </View>
                </View>  
              }
            </View>
          </SafeAreaView>
        </Fragment>
      </>
    );
  }
}

export default Wishlist;
