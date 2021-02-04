import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './style';
// import ss from '../../assets/images/home';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

// AntDesign.loadFont();
class PlaceSearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage ,
        textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      };
  }

  render() {
    const {data} = this.props;
    const {appLanguage, textTranslation} = this.state;
    return (
        <TouchableOpacity  onPress={()=>this.props.isAddressClick(data.id, data)}>
            {(data.id === 0) ? <View  style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
            <Image source={images.shippingAddress.map} style={styles.imageIcon} resizeMode={'contain'}/>  
            <Text style={styles.textViewBold}>{data.name}</Text> 
        </View> : <View  style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
            <Entypo name={'back-in-time'} size={25} color={colors.darkWarmGrey} />
            <Text style={styles.textView}>{data.name}</Text> 
        </View> }
           <View style={styles.viewSeprtor}/> 
        </TouchableOpacity>
    );
  }
}
export default PlaceSearchView;
