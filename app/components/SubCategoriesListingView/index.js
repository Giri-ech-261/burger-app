import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FastImage from "react-native-fast-image";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import { font_20 } from "../../utills/globals";

const contextTypeLocalization = LocalizationContext;


AntDesign.loadFont();
class SubCategoriesListingView  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    }
  }

  render() {
    const {data} = this.props;
    const {appLanguage} = this.state;
    return (
        <TouchableOpacity onPress={()=>this.props.isSelected(data.id, data)} style={styles.mainView}>
            <View style={[styles.catCard,  transistionClassArray[appLanguage].flexDirection]}>
              <View style={{width:'50%',  alignSelf:'center',
        justifyContent:'center'}}>
              <FastImage 
                  style={styles.categoryImageView}
                  source={data.image}
                  // tintColor={(data.isSelected) ? colors.red : colors.categoryUnSelected}
                  resizeMode={'center'}/>
              </View>
              <View style={{width:'50%', paddingRight:10,  alignSelf:'center',
        justifyContent:'center'}}>
              <Text style={[styles.categoryTitle,transistionClassArray[appLanguage].textAlign]}>{data.name}</Text> 
              </View>
              {/* <FastImage 
                  style={styles.categoryImageView}
                  source={data.image}
                  // tintColor={(data.isSelected) ? colors.red : colors.categoryUnSelected}
                  resizeMode={'center'}/>
                  <Text style={[styles.categoryTitle,transistionClassArray[appLanguage].textAlign]}>{data.name}</Text> */}
              </View>
        </TouchableOpacity>
    );
  }
}
export default SubCategoriesListingView
