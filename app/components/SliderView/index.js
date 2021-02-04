import React, { Component } from "react";
import {
    View
} from "react-native";
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
// import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

class SliderView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0,
            appLanguage: contextTypeLocalization._currentValue.appLanguage ,
            coreTranslations : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            // getCoreTranslations : coreTranslations.getCoreTranslations,
        };
    }

    onSwipe = (index) => {
        console.log('index changed', index);
        this.setState({currentIndex: index})
      }
    render() {
        const {banners} = this.props;
        return (
                <View style={{
                    height: (globals.iPhoneX) ? globals.screenHeight / 3.8 : globals.screenHeight / 3.3,
                    borderRadius: 2,
                    backgroundColor: colors.white,
                    }}>
                    {banners &&
                    <Swiper
                        key={banners.length}
                        showsPagination={true} pagingEnabled autoplay={true}
                        dot={<View style={{ backgroundColor: colors.inActiveDots, width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                        activeDot={<View style={{ backgroundColor: colors.activeDots, width: 22, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                        loop={true}
                        paginationStyle={{ bottom: 15, paddingBottom:(globals.iPhoneX) ? 5 : 0, flexDirection: this.state.appLanguage === 'en' ? 'row' : 'row-reverse'}}
                        // paginationStyle={{ bottom: 15, flexDirection: preferredLanguage === 'en' ? 'row' : 'row-reverse' }}
                        scrollEnabled={true}
                        autoplayTimeout={3}
                        style={{ flexDirection: this.state.appLanguage === 'en' ? 'row' : 'row-reverse'}}
                        // onIndexChanged={this.onSwipe}
                        // style={{ flexDirection: preferredLanguage === 'en' ? 'row' : 'row-reverse' }}
                    >

                        {
                            banners.map(banner => {
                                return (
                                    <FastImage
                                        style={{flex:1, marginLeft:5, marginRight:5, marginBottom:5, marginTop:-35}}
                                        resizeMode="contain"
                                        source={{uri:banner.logo_url}} // any image path
                                    />
                                );
                            })
                        }
                 </Swiper> }
                 </View>
    );
    }
}
export default SliderView;
