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
import { SwipeListView } from 'react-native-swipe-list-view';


const contextTypeLocalization = LocalizationContext;

class WishlistProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage ,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }

  render() {
    const {appLanguage,textTranslation} = this.state;
    const { data } = this.props;
    return (
        <View style={globalStyle.wishlistProducatViewMainView}>
          <View style={transistionClassArray[appLanguage].flexDirection}>
          <View style={{padding:8, flex:2, alignItems:'center'}}>
            <View style={{position:'relative'}}>
              <FastImage
                style={globalStyle.wishlistProductViewImage}
                resizeMode="contain"
                source={data.image}
              />
              { !data.inStock && 
                <View style={{position:'absolute', bottom:35}}>
                  <View style={globalStyle.rectangleCopy30}>
                    <Text style={globalStyle.productViewAddToCart}>Out Of Stock</Text>       
                  </View>
                </View>
              }
            </View>
            <Text style={globalStyle.moreChoicesText}>{textTranslation.getProductListTranslations.MORECHOICES}</Text>
          </View>
          <View style={{paddingRight:10,width:globals.screenWidth * 0.65}}>
            <Text numberOfLines={3} style={[globalStyle.wishlistProductName,transistionClassArray[appLanguage].textAlign, { maxWidth: globals.screenWidth - 150, }]}>{data.name}</Text>
            <View style={transistionClassArray[appLanguage].flexDirection}>
              <Text style={[globalStyle.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>Size : </Text>
              <Text style={[globalStyle.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{data.configurationOptions.size}</Text>
            </View> 
            <View style={transistionClassArray[appLanguage].flexDirection}>
              <Text style={[globalStyle.wishlistKeyText, transistionClassArray[appLanguage].textAlign] }>Flavour : </Text>
              <Text style={[globalStyle.wishlistValueText, transistionClassArray[appLanguage].textAlign] }>{data.flavour}</Text>
            </View>
            <Text style={[globalStyle.productViewPrice, transistionClassArray[appLanguage].textAlign] }>{data.price}</Text>
            <TouchableOpacity onPress={()=>this.props.isProductClick(data.id, data)} >
              <Text style={[globalStyle.wishlistEditText, transistionClassArray[appLanguage].textAlign]}>
                Edit</Text>
            </TouchableOpacity>
            {data.inStock ?
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
      </View>
    );
  }
}
export default WishlistProductView;
