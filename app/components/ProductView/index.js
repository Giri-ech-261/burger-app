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
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage ,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }

  render() {
      const { data } = this.props;
       const { appLanguage, textTranslation}  = this.state
    return (
        <TouchableOpacity onPress={()=>this.props.isProductClick(data.id, data)}>
         <View style={globalStyle.producatViewMainView}>
                <View style={[globalStyle.productViewHeader, transistionClassArray[appLanguage].flexDirection]}>
                    <FastImage
                      source={images.home.group4}
                      style={[globalStyle.prodcutViewNew, {marginLeft: (appLanguage === 'ar') ? 0 : 5, marginRight:(appLanguage === 'ar') ? 5 : 0 }]}
                      resizeMode={'contain'}
                    />
                    <TouchableOpacity onPress={()=>this.props.isMakeWishList(data.id, data)}>
                    <AntDesign name={(data.isSelected) ? "heart" : "hearto"} color={colors.red} size={20} style={[globalStyle.prodcutViewHeart, { paddingRight: (appLanguage === 'ar') ? 0 : 8, paddingLeft:(appLanguage === 'ar') ? 8 : 0 } ]}  />
                    </TouchableOpacity>
                </View>
                <View style={{padding:10,   marginTop: -22}}>
                  <View style={{alignItems:'center'}}>
                <FastImage
                    style={globalStyle.productViewImage}
                    resizeMode="contain"
                    source={images.product.food}
                />
                </View>
              <Text  numberOfLines={2} style={[globalStyle.productViewTitle, transistionClassArray[appLanguage].textAlign]}>{data.product_name}
                <Text numberOfLines={1} style={[globalStyle.productViewDesc, transistionClassArray[appLanguage].textAlign]}> {data.product_descriptions}</Text>
              </Text>
             
             <Text style={[globalStyle.productViewBuyOneGetOne, transistionClassArray[appLanguage].textAlign, {color: (data.buy_one) ? colors.red : colors.white}]}>{textTranslation.home.BUYONEGETONE}</Text>
             <View style={transistionClassArray[appLanguage].flexDirection}>
             <Text style={[globalStyle.productViewPrice, transistionClassArray[appLanguage].textAlign] }>{"AED"} {data.price}{' '}</Text>
             {data.actual_price ? <Text style={[globalStyle.productViewActualPrice, transistionClassArray[appLanguage].textAlign]}>{ textTranslation.home.WAS} {data.actual_price}</Text> : null }
             </View>
             <View style={[globalStyle.productViewAutoshipMainView, transistionClassArray[appLanguage].flexDirection]}>
              <Text style={[globalStyle.productViewDiscountPrice, transistionClassArray[appLanguage].textAlign]}>{"AED"} {data.discount_price} 
                <Text style={globalStyle.productViewDiscountPriceWith}> {textTranslation.home.WITH}</Text>
               </Text>
               <FastImage
               style={[globalStyle.productViewAutoShip, {marginLeft: (appLanguage === 'ar') ? 0 : 5, marginRight: (appLanguage === 'ar') ? 5 : 0}]}
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
                buttonStyle={{ marginHorizontal: -10 }}
                emptyStarColor={colors.rating}
              />
              <Text style={[globalStyle.productViewTotalRating, { marginLeft:(appLanguage == 'en') ? 10 : 0, marginRight:(appLanguage =='en') ? 0 : 15 }]}>{"("}{globals.nFormatter(data.total_rating_count)}{")"}</Text>
             </View>
            </View>
            <View style={globalStyle.prodcutViewAddToCart}>
                 <Text style={globalStyle.productViewAddToCart}>{textTranslation.home.ADDTOCART}</Text>       
             </View>
          </View>
          </TouchableOpacity>
    );
  }
}
export default ProductView;
