import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
  View,
  Image
} from "react-native";
import * as images from "../../assets/images/map";
import FastImage from "react-native-fast-image";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
class RecentOrderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      };
  }
  renderProductImages(data){
    const {appLanguage} = this.state;
    let size = (data.length > 4) ? 3 : data.length
    return data.slice(0, size).map((item) => {
        return (
          <View style={[styles.productImageItem, transistionClassArray[appLanguage].flexDirection]}>
              <Image
                source={item.url}
                resizeMode={'contain'}
                style={styles.productImageView}
              />
          </View>
          
        )
      })
  }
  render() {
    const {data} = this.props;
    const {appLanguage, textTranslation} = this.state;

    return (
        <TouchableOpacity  onPress={()=>this.props.isOrderSelected(data.id, data)}>
        <View  style={styles.mainView}>
            <View style={[styles.recentOrderTopView, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={styles.productCountText}>{data.image.length} {textTranslation.home.PRODUCTS}</Text>
                <Text style={styles.orderedDaysAgo}>{textTranslation.home.ORDERED} {data.order_day} {textTranslation.home.DAYAGO}</Text>
            </View>
            <View style={[transistionClassArray[appLanguage].flexDirection, {flex:1, justifyContent:'center', alignSelf:'center'}]}>
            {this.renderProductImages(data.image)}
             {(data.fourImage)? <FastImage
              source={images.home.p1}
              style={styles.imageBlur}
              resizeMode={'contain'}/> : null}  
              {(data.viewmore)? <View style={styles.viewMoreText}>
             <Text style={styles.orderViewMore}>{'+4 '}{textTranslation.home.MORE}</Text>
             </View> : null}
              
            </View>
            <View style={[styles.recentOrderBottom, transistionClassArray[appLanguage].flexDirection]}>
            <View>
                {(data.actual_price) ? <Text style={styles.orderActualPrice}>{textTranslation.home.WAS} {data.actual_price}</Text> : <Text>{" "}</Text>}
                <Text style={styles.orderPrice}>{'AED'} {data.price}</Text>
            </View>
            <View style={[styles.reorderMainView, transistionClassArray[appLanguage].flexDirection]}>
                <FastImage
                    style={styles.reorderImageIcon}
                    resizeMode={'contain'}
                    source={images.home.group13}/>
                <Text style={styles.orderReOrderText}>{textTranslation.home.REORDER}</Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    );
  }
}
export default RecentOrderView;
