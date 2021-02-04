import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
class SavedCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      };
  }
  renderCardImage(data){
    if (data.type === 'visa') {
        return(
            <Image source={images.shippingAddress.visa} style={{width: 40, height:40 }} resizeMode={'contain'}/> 
        )
    }else if (data.type === 'ae') {
        return(
            <Image source={images.shippingAddress.ae} style={{width: 40, height:40 }} resizeMode={'contain'}/> 
        )
    } else if (data.type === 'discover') {
        return(
            <Image source={images.shippingAddress.discover} style={{width: 40, height:40 }} resizeMode={'contain'}/> 
        )
    }
  }
  render() {
    const {data} = this.props;
    const { appLanguage, textTranslation } = this.state;
    return (
        <TouchableWithoutFeedback  onPress={()=>this.props.isSavedCardClick(data.id, data)}>
        <View style={{backgroundColor: colors.lightWhite}}>    
        <View  style={[styles.mainView, { borderColor:(data.isDefault) ? colors.red : colors.lightBlue }]}>
           <View style={[transistionClassArray[appLanguage].flexDirection, styles.cardView]}>
               {this.renderCardImage(data)}
            <Text style={styles.cardNameText}>{data.name}</Text>
           </View>
           <Text style={[styles.cardNumber, {paddingLeft: (appLanguage === 'ar') ? 0 : 10, paddingRight: (appLanguage === 'ar') ? 10:0 }, transistionClassArray[appLanguage].textAlign]}>{textTranslation.shippingAddress.CARDENDWITH} {data.cardNumber}</Text>
           {(data.isDefault) ?  <View style={[transistionClassArray[appLanguage].flexDirection, styles.defaultCardView]}>
               <Image source={images.shippingAddress.check} style={{width:30, height: 30}} resizeMode={'center'}/>
               <Text style={styles.defaultCardText}>{textTranslation.shippingAddress.DEFAULTCARD}</Text>
           </View>  : null}
        </View>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}
export default SavedCardView;
