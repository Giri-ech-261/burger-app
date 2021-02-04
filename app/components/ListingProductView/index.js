  import React, { Component } from "react";
  import {
    Text,
    TouchableOpacity,
    View
  } from "react-native";
  import * as globals from "../../utills/globals";
  import * as colors from "../../assets/styles/color";
  import * as images from "../../assets/images/map";
  import globalStyle from '../../assets/styles/globalStyle';
  import StarRating from 'react-native-star-rating';
  import AntDesign from "react-native-vector-icons/AntDesign";
  import FastImage from "react-native-fast-image";
  AntDesign.loadFont();
  import { LocalizationContext } from '../../localizations';
  import { transistionClassArray } from '../../utills/TranslationClasses';
  const contextTypeLocalization = LocalizationContext;

  class ListingProductView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      };
    }

    render() {
        const { data } = this.props;
        const {displayName,description,childSKUs,x_averageRating} = data.items[0];
        const {salePrice,listPrice,x_autoShipPrice} = childSKUs[0];
        const { appLanguage, textTranslation}  = this.state
        let descriptionValue = globals.checkObject(data.items[0], "description") ? description : ''
      return (
          <TouchableOpacity onPress={()=>this.props.isProductClick(data.id, data)} >
              <View style={globalStyle.listingProducatViewMainView}>
                  <View style={[globalStyle.productViewHeader, transistionClassArray[appLanguage].flexDirection]}>
                      <View style={{position:'relative'}}>
                        <FastImage
                          source={images.productListing.dealIcon}
                          style={[globalStyle.prodcutViewIconText, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight:(appLanguage === 'ar') ? 10 : 0 }]}
                          resizeMode={'contain'}
                        />
                        <Text style={{top:15,left:20,position:'absolute', color:'#fff', fontSize:12,fontFamily:globals.ProximaNovaBold}}>{'Deal'}</Text>
                      </View>
                      <TouchableOpacity onPress={()=>this.props.isMakeWishList(data.id, data)}>
                      <AntDesign name={(data.isSelected) ? "heart" : "hearto"} color={colors.red} size={18} style={[globalStyle.prodcutViewHeart, { paddingRight: (appLanguage === 'ar') ? 0 : 10, paddingLeft:(appLanguage === 'ar') ? 10 : 0 } ]}  />
                      </TouchableOpacity>
                  </View>
              <View style={transistionClassArray[appLanguage].flexDirection}>
              <View style={{padding:8, paddingHorizontal:20}}>
                <FastImage
                  style={globalStyle.listingProductViewImage}
                  resizeMode="contain"
                  source={images.product.food}
                />
                <Text style={globalStyle.moreChoicesText}>{textTranslation.getProductListTranslations.MORECHOICES}</Text>
              </View>
              <View>
                {/* <View style={transistionClassArray[appLanguage].flexDirection}> */}
                  <Text numberOfLines={3} style={[globalStyle.productViewTitle,transistionClassArray[appLanguage].textAlign, { maxWidth: globals.screenWidth - 200, }]}>{displayName}
                  {(descriptionValue) ? <Text style={[globalStyle.productViewDesc]}> {'-'} {descriptionValue}</Text> : null }
                  </Text>
                   
                {/* </View> */}
                <Text style={[globalStyle.productViewBuyOneGetOne, transistionClassArray[appLanguage].textAlign]}>{textTranslation.home.BUYONEGETONE}</Text>
                  <View style={transistionClassArray[appLanguage].flexDirection}>
                    <Text style={[globalStyle.productViewPriceREd, transistionClassArray[appLanguage].textAlign] }>
                    {"AED"} {salePrice}{' '}</Text>
                    {listPrice ? 
                    <Text style={[globalStyle.productPriceOld, transistionClassArray[appLanguage].textAlign]}>{ textTranslation.home.WAS} {listPrice}</Text> : null }
                  </View>
                  <View style={[globalStyle.productViewAutoshipMainView, transistionClassArray[appLanguage].flexDirection]}>
                    <Text style={[globalStyle.productViewDiscountPrice, 
                      transistionClassArray[appLanguage].textAlign]}>{"AED"} {x_autoShipPrice}</Text>
                    <Text style={globalStyle.productViewDiscountPriceWith}> {textTranslation.home.WITH}</Text>
                    <FastImage
                    style={globalStyle.productViewAutoShipList}
                    source={images.home.autoship}
                    resizeMode={'contain'}/>
                  </View>
                  <View style={[globalStyle.productViewRating, transistionClassArray[appLanguage].flexDirection]}>
                  <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={data.rating}
                      // selectedStar={(rating) => _this.onStarRatingPress(rating)}
                      fullStarColor={colors.rating}
                      starSize={14}
                      containerStyle={{ width:60 }}
                      buttonStyle={{ marginHorizontal: -10, paddingBottom:10 }}
                      emptyStarColor={colors.rating}
                    />
                  <Text style={[globalStyle.productViewTotalRating, { marginLeft:(appLanguage == 'en') ? 10 : 0, marginRight:(appLanguage =='en') ? 0 : 10 }]}>{"("}{globals.nFormatter(x_averageRating)}{")"}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
  export default ListingProductView;
