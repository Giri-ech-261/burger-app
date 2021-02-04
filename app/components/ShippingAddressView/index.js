import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

AntDesign.loadFont();
class ShippingAddressView extends Component {
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
        // <TouchableOpacity  onPress={()=>this.props.isAddressClick(data.id, data)}>
        <>
        <View  style={[styles.mainView, {borderColor:(data.isDefault) ? colors.red : 'transparent'}]}>
            <View style={[{justifyContent:'space-between', }, transistionClassArray[appLanguage].flexDirection]}>
                <View style={[transistionClassArray[appLanguage].flexDirection, {paddingLeft:20, alignItems:'center'  }]}>
                    <Image source={images.shippingAddress.home} style={styles.typeIconVIew} resizeMode={'contain'}/>
                    <Text style={[styles.typeTextView, {marginLeft:(appLanguage === 'ar') ? 0 : 10, marginRight:(appLanguage === 'ar') ? 10 : 0}]}>{data.type}</Text>
                </View>
                <View style={[transistionClassArray[appLanguage].flexDirection, {paddingRight:10, alignItems:'center'}]}>
                    <TouchableOpacity style={transistionClassArray[appLanguage].flexDirection} onPress={()=>this.props.isAddressClick(data.id, data)}>
                    {/* <Image source={images.home.shape_3} style={styles.editIconVIew} resizeMode={'contain'}/> */}
                    <Text style={[styles.editTextView, {marginLeft:(appLanguage === 'ar') ? 0 : 5, marginRight:(appLanguage === 'ar') ? 5 : 0}]}>{textTranslation.home.EDIT}</Text>
                    </TouchableOpacity>
                    {(data.isDefault) ? <AntDesign name={'checkcircle'} size={15} color={colors.red} style={{marginLeft:(appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0}}/> : null }
                </View>
            </View>
            <View style={styles.headerSeprator}></View>
            <View style={{paddingLeft: (appLanguage === 'ar') ? 0 : 20, paddingRight:(appLanguage === 'ar') ? 20 : 0, marginTop:10,}}>
                <Text style={[styles.nameTextView, transistionClassArray[appLanguage].textAlign]}>{data.name}</Text>
                <View style={[transistionClassArray[appLanguage].flexDirection, styles.addressMainVIew]}>
                    <Image source={images.shippingAddress.map} style={styles.mapIconView} resizeMode={'contain'}/>
                    <Text style={[styles.addressTextView, {marginLeft : (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10: 0}]}>{data.address}</Text>
                </View>
                <View style={[transistionClassArray[appLanguage].flexDirection, styles.addressMainVIew1]}>
                    <Image source={images.shippingAddress.call} style={styles.callIconView} resizeMode={'contain'}/>
                    <Text style={[styles.addressTextView, {marginLeft : (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10: 0}]}>{data.phone}</Text>
                </View>
               {(data.isDefault) ? <View style={[transistionClassArray[appLanguage].flexDirection, styles.addressMainVIew1]}>
                    <Image source={images.shippingAddress.redCheck} style={styles.callIconView}  resizeMode={'contain'}/>
                    <Text style={[styles.addressTextView, {marginLeft : (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10: 0}]}>{textTranslation.shippingAddress.DEFAULTADDRESS}</Text>
                </View> : null} 
            </View>
            
        </View>
        <View style={styles.headerSepratorFull}></View>
         </>
    );
  }
}
export default ShippingAddressView;
