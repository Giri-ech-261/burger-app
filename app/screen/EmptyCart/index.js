
import React, { Component, Fragment } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import globalStyles from "../../assets/styles/globalStyle";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import FastImage from 'react-native-fast-image';
import * as globals from "../../utills/globals";
import Button from '../../components/Button';
import { navigate } from '../../navigation/RootNavigation';
import productData from "../../../productData.json";
import ProductView from '../../components/ProductView';
import { Images } from '../../theme';

const contextTypeLocalization = LocalizationContext;
class EmptyCart extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage,
        textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        newArrivalData: productData.data.products
    };

    isProductClick(id, data) {
        console.log("Product Click-->" + id);
        navigate('productDetail');
    }
    isMakeWishList(id, data) {
        console.log("Wishlist name -->", data.name);
        const dataCopy = this.state.newArrivalData;
        const indexItem = dataCopy.findIndex((item) => item.id == id);
        for (let i = 0; i < dataCopy.length; i++) {
            if (indexItem == i) {
                dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
            }
        }
        this.setState({ newArrivalData: dataCopy })
    }
    render() {

        // onPress={()=>navigate('ShippingAddress')}
        const { appLanguage, textTranslation, newArrivalData } = this.state;
        return (
            <>
                <Fragment>
                    <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                    <SafeAreaView style={styles.mainView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.saveContainerView}>
                                <Text style={[styles.title, styles.topContent]}>
                                    Your Shopping Cart Is Empty
                            </Text>
                                <View style={transistionClassArray[appLanguage].flexDirection, { marginTop: 10 }}>
                                    <View style={[transistionClassArray[appLanguage].flexDirection,]}>
                                        <View style={[transistionClassArray[appLanguage].flexDirection, globalStyles.leftSideTitle]}>
                                            <Text style={styles.red}>Save 30% </Text>
                                            <Text style={styles.title}>On Your First</Text>
                                        </View>
                                        <FastImage
                                            source={images.home.autoship_3}
                                            style={styles.autoshipImage}
                                            resizeMode={'contain'} />
                                    </View>
                                </View>
                                <FastImage
                                    style={styles.iconStyle}
                                    source={Images.bottom_nav_Cart}
                                    resizeMode={'cover'}
                                    tintColor={colors.bottomTabInActive}
                                />
                                <TouchableOpacity onPress={()=>this.props.isContinueClick(false)}>
                                <View style={styles.continuewButtonView}>
                                    <Text style={styles.continueText}>{'Continue Shopping'}</Text>
                                </View>
                                </TouchableOpacity>
                                {/* <Button title={'Continue Shopping'}
                                    solidButton
                                    backgroundColor={colors.red}
                                    style={{ width: '80%', alignItems: 'center' }}
                                /> */}
                            </View>
                            <View style={styles.recentViewedItems}>
                                <Text style={styles.recentlyViewedtitle}>Recently Viewed Products</Text>
                                <FlatList
                                    data={newArrivalData}
                                    renderItem={({ item, index }) => <ProductView data={item} isProductClick={this.isProductClick.bind(this)} isMakeWishList={this.isMakeWishList.bind(this)} />}
                                    horizontal
                                    inverted={appLanguage === 'ar' ? true : false}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </Fragment>
            </>
        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaSemiBold,
        paddingLeft: 10,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaBold,
        width: globals.screenWidth,
        height: 40,
    },
});

export default EmptyCart;
