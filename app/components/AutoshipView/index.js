import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
  View,
  Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AntDesign from "react-native-vector-icons/AntDesign";
import FastImage from "react-native-fast-image";
import styles from './style';
// import ss from '../../assets/images/home';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

AntDesign.loadFont();
class AutoshipView extends Component {
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
          <View style={[styles.productItemView, transistionClassArray[appLanguage].flexDirection]}>
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
        <TouchableOpacity  onPress={()=>this.props.isAutoShipSelected(data.id, data)}>
        <View  style={styles.mainView}>
            <View style={[styles.recentOrderTopView, transistionClassArray[appLanguage].flexDirection]}>
                <View style={transistionClassArray[appLanguage].flexDirection}>
                    <Text style={styles.autoshipPetName}>{data.pet_name}</Text>
                    <FastImage source={images.home.shape_3}
                    style={styles.autoshipEditIcon}
                    tintColor={colors.red}
                    resizeMode={'contain'}/>
                </View>
                <View style={[transistionClassArray[appLanguage].flexDirection]}>
                    <FastImage source={images.home.calender}
                    style={styles.calenderImage}
                    resizeMode={'contain'}/>
                    <Text style={styles.autoshipSchedule}>{textTranslation.home.EVERY} {data.order_schedule} {textTranslation.home.WEEKS}</Text>
                </View>
                {/* <Text style={styles.productCountText1}>{data.image.length} {textTranslation.home.PRODUCTS}</Text>
                <Text style={styles.orderedDaysAgo}>{textTranslation.home.ORDERED} {data.order_day} {textTranslation.home.DAYAGO}</Text> */}
            </View>
            <Text style={styles.productCountText}>{data.image.length} {textTranslation.home.PRODUCTS}</Text>
            <View style={[transistionClassArray[appLanguage].flexDirection, styles.productView]}>
            {this.renderProductImages(data.image)}
             {(data.fourImage)? <FastImage
              source={images.home.p1}
              style={styles.imgeBlurView}
              resizeMode={'contain'}/> : null}  
              {(data.viewmore)? <View style={styles.viewMoreText}>
             <Text style={styles.orderViewMore}>{'+4 '}{textTranslation.home.MORE}</Text>
             </View> : null}
              
            </View>
            <View style={[styles.recentOrderBottom, transistionClassArray[appLanguage].alignItemsReverse]}>
            <View style={[styles.autoShipNowMainView, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={styles.orderReOrderText}>{textTranslation.home.SHIPNOW}</Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    );
  }
}
export default AutoshipView;
