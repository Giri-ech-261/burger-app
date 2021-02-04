import React, { Component } from "react";
import {
    Text,
    View
} from "react-native";
import * as images from "../../assets/images/map";
import FastImage from 'react-native-fast-image'
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

class AdvertizementView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage ,
            textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        };
    }
 
    render() {
         const { appLanguage, textTranslation } = this.state;
         const { screenName } = this.props;
        return (
            <View style={(screenName === 'home') ? styles.mainView : styles.mainViewAccount}>
               <View style={[transistionClassArray[appLanguage].flexDirection, {justifyContent:'space-between'}]}>
                   <View>
                        <FastImage
                         style={styles.advertizementImage}
                         source={images.home.group23Copy}
                         resizeMode={'contain'}
                        />
                   </View>
                <View style={{justifyContent:'center', marginLeft:10, paddingRight:10   }}>
                    <Text style={[transistionClassArray[appLanguage].textAlign, styles.advertizementTitleOne]}>{textTranslation.home.ADVONE_1}
                        <Text style={styles.advertizementTitleOneGold}> {textTranslation.home.ADVONE_2} 
                                <Text style={styles.advertizementTitleOne}> {textTranslation.home.ADVONE_3}</Text>
                        </Text>
                    </Text>   
                    <Text style={[transistionClassArray[appLanguage].textAlign, styles.advertizementTitleTwo]}>{textTranslation.home.ADVTWO_1}
                        <Text style={styles.advertizementTitleTwoBold}> {textTranslation.home.ADVTWO_2} 
                                <Text numberOfLines={2} style={styles.advertizementTitleTwoRegular}> {textTranslation.home.ADVTWO_3}</Text>
                        </Text>
                    </Text> 
                    <Text style={[transistionClassArray[appLanguage].textAlign,styles.advertizementTitleThree]}>{textTranslation.home.ADV3}</Text> 
                    <View style={[{flex:1,}, transistionClassArray[appLanguage].alignSelf]}>
                    <View style={[styles.barcodeMainView, transistionClassArray[appLanguage].flexDirection]}>
                        <FastImage
                        style={{width:20, height:20}}
                        source={images.home.group_3}
                        resizeMode={'contain'}/>
                        <Text style={[styles.barcodeTextView,{marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0} ]}>{textTranslation.home.SHOWBARCODE}</Text>
                    </View>
                    </View>
                </View>    
                 
               </View>
            </View>
    );
    }
}
export default AdvertizementView;
