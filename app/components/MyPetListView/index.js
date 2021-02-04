import React, { Component } from "react";
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import * as globals from '../../utills/globals';
import * as colors from '../../assets/styles/color';
import * as images from "../../assets/images/map";

class MyPetListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            isImageLoadError: false,
        }
    }
    renderYearText(isYear, data) {
        const { appLanguage, textTranslation } = this.state;
        if (isYear) {
            return (
                <Text style={[styles.petOtherTitleViewTwo, transistionClassArray[appLanguage].textAlign, { fontFamily: globals.ProximaNovaRegular }]}>{data.ageInYears}{'.'}{data.ageInMonths} {'Years Old'}</Text>
            )
        } else {
            return (
                <Text style={[styles.petOtherTitleViewTwo, transistionClassArray[appLanguage].textAlign, { fontFamily: globals.ProximaNovaRegular }]}>{'0'}{'.'}{'0'} {'Years Old'}</Text>
            )
        }
    }
    renderImage(petImage) {
        return (
            <View>
                <Image style={[StyleSheet.absoluteFill, styles.petImageView, { opacity: (this.state.isImageLoadError) ? 0 : 1, }]}
                    source={images.noimage.noimage}
                    resizeMode='cover'
                />
                <FastImage style={[styles.petImageView]} source={{
                    uri: petImage, priority: FastImage.priority.high
                }}
                    onLoadEnd={() => {
                        this.setState({ isImageLoadError: false })
                    }}
                    onError={() => {
                        this.setState({ isImageLoadError: true })
                    }}
                    resizeMode={'cover'}
                />
            </View>
        )
    }
    renderImagePlaceHolder(){
        return(
            <FastImage style={styles.petImageView} source={images.noimage.noimage}
                resizeMode={'cover'}
            />
        )
    }
    render() {
        const { appLanguage, textTranslation } = this.state;
        const { data } = this.props;
        let petName = globals.checkObject(data, 'petName') ? data.petName : '';
        let weight = globals.checkObject(data, 'weight') ? data.weight : '0'
        let petBreed = globals.checkObject(data, 'petBreed') ? data.petBreed : 'NA'
        let ageInYears = globals.checkObject(data, 'ageInYears');
        let petImage = globals.checkImageObject(data, 'petimage_1') ? data.petimage_1 : ''
        return (
            // <TouchableWithoutFeedback onPress={() => this.props.isPetClicked(data.petId, data)}>
                <>
                    <View style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
                        {(petImage) ? this.renderImage(petImage) : this.renderImagePlaceHolder()}

                        <View style={{ flex: 1, padding: 10, marginHorizontal:10 }}>
                            <Text style={[styles.petTitleView, transistionClassArray[appLanguage].textAlign]}>{petName}</Text>
                            <View style={transistionClassArray[appLanguage].flexDirection}>
                                <Text style={[styles.petOtherTitleView, transistionClassArray[appLanguage].textAlign]}>{textTranslation.myPets.WEIGHTLABLE}</Text>
                                <Text style={styles.petOtherTitleViewRegular}>{weight} {textTranslation.myPets.KGS}</Text>
                            </View>
                            <View style={transistionClassArray[appLanguage].flexDirection}>
                                <Text numberOfLines={1} style={[styles.petOtherTitleViewTwo, transistionClassArray[appLanguage].textAlign]}>{textTranslation.myPets.SPEICES}</Text>
                                <Text style={[styles.petOtherTitleViewTwo, { fontFamily: globals.ProximaNovaRegular }]}>{petBreed}</Text>
                            </View>
                            {this.renderYearText(ageInYears, data)}
                        </View>
                        <TouchableOpacity onPress={() => this.props.isPetClicked(data.petId, data)}>
                        <View style={{ padding: 10, marginRight:10, }}>
                            <Text style={styles.editText}>{textTranslation.home.EDIT}</Text>
                        </View>
                        </TouchableOpacity>

                    </View>
                </>
         );
    }
}
export default MyPetListView;
