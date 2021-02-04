import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AntDesign from "react-native-vector-icons/AntDesign";
import FastImage from "react-native-fast-image";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import Mask from "react-native-mask";

AntDesign.loadFont();
class MyPetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage ,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }
  renderPetLable(data){
    const {textTranslation} = this.state;
    if (data.id === 0) {
      return <Text style={[styles.petNameText, {color:colors.red, fontFamily: globals.ProximaNovaRegular}]}>{textTranslation.home.ADDPET}</Text>  
    }
    return <Text style={[styles.petNameText, {color:(data.isSelected) ? colors.red : colors.blackOpacity4, fontFamily:(data.isSelected) ? globals.ProximaNovaBold : globals.ProximaNovaRegular}]}>{data.name}</Text>
  }
  render() {
    const {data} = this.props;
    const {appLanguage, textTranslation} = this.state;
    return (
        <TouchableOpacity  onPress={()=>this.props.isPetClick(data.id, data)}>
        <View style={styles.mainView}>
            {data.id === 0 ?
             <View style={styles.addPetViewDashed}>
                   <FastImage
                   style={styles.petAddnewIcon}
                   source={images.home.petAdd}
                   tintColor={colors.white}
                   resizeMode={'center'}/>
            </View> :
             <Mask shape={'rounded'} borderColor={(data.isSelected) ? colors.red : "transparent"} borderRadius={20} borderWidth={2}>
              <FastImage
                style={[styles.petImageView, {opacity: (data.isSelected) ? 1 : 0.4, } ]}
                source={data.image}
              />
            </Mask> 
             // <View style={[styles.petImageView,{opacity:(data.isSelected) ? 1 : 0.4 }]}>
            //   <Mask shape={'rounded'}>
            //     <FastImage
            //     style={[ { width:70, height:70, }]}
            //     // style={[ { width:70, height:70, opacity:(data.isSelected) ? 1 : 0.4 , borderColor:(data.isSelected) ? colors.red : "transparent", }]}
            //     resizeMode={'contain'}
            //     source={data.image}
            //     /> 
            //   </Mask>
            // </View>
            }
            {this.renderPetLable(data)}
            {(data.isSelected && data.id !== 0) ? <View style={[transistionClassArray[appLanguage].flexDirection, styles.petEditView]}>
              <FastImage
              style={styles.petEditIcon}
              resizeMode={'contain'}
              source={images.home.shape_3}/>
                <Text style={[styles.petNameEditText, {marginLeft:(appLanguage === 'ar') ? 0 : 5, marginRight:(appLanguage === 'ar') ? 5 : 0}]}>{textTranslation.home.EDIT}</Text>
            </View> : null }
        </View>
        </TouchableOpacity>
    );
  }
}
export default MyPetView;
