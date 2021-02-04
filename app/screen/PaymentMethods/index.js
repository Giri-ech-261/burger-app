import React, { Component, Fragment } from 'react';
import { SafeAreaView, Image, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import { goBack, navigate } from '../../navigation/RootNavigation';
import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import Entypo from 'react-native-vector-icons/Entypo';

class PaymentMethods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            isApplePayClick: false,
            isGooglePayClick: false,
            isCODClick: false,
            isCardClick: false,
            isStoreLocatorClick: false,
            petCoinValue: 3000,
            isPetCoinChecked: false,
            cardNumber:'*** *** 754',
            isDefaultCard: false,
        }
    }
    clickApplePay(isApplePayClick) {
        this.setState({ isApplePayClick: !isApplePayClick, isGooglePayClick: false, isCODClick: false, isCardClick: false })
    }
    clickGooglePay(isGooglePayClick) {
        this.setState({ isGooglePayClick: !isGooglePayClick, isApplePayClick: false, isCODClick: false, isCardClick: false })
    }
    clickCard(isCardClick) {
        this.setState({ isCardClick: !isCardClick, isApplePayClick: false, isGooglePayClick: false, isCODClick: false })
    }
    clickCOD(isCODClick) {
        this.setState({ isCODClick: !isCODClick, isApplePayClick: false, isGooglePayClick: false, isCardClick: false })
    }
    render() {
        const { appLanguage, textTranslation, isApplePayClick, isGooglePayClick, isCardClick, isCODClick, isPetCoinChecked, petCoinValue, isStoreLocatorClick, cardNumber, isDefaultCard } = this.state;
        return (
            <SafeAreaView style={{ backgroundColor: colors.lightWhite, flex: 1, }}>
                <AppHeader
                    barStyle={"dark-content"}
                    backgroundColor={colors.lightWhite}
                    androidStatusBarColor={colors.lightWhite}
                    LeftData={
                        <TouchableOpacity style={[{ marginLeft: 10 }, transistionClassArray[appLanguage].flexDirection]} onPress={() => goBack()}>
                            <MaterialIcons name={'arrow-back'} size={30} color={colors.black} />
                        </TouchableOpacity>}
                    RightData={
                        <TouchableOpacity onPress={() => goBack()}>
                            <View style={[transistionClassArray[appLanguage].flexDirection]}>
                                <Image source={images.shippingAddress.cancel}
                                    resizeMode={'contain'}
                                    style={styles.cancelIcon} />
                            </View>
                        </TouchableOpacity>}
                />
                <Text style={[styles.selectAddressText, { paddingLeft: (appLanguage === 'ar') ? 0 : 20, paddingRight: (appLanguage === 'ar') ? 20 : 0 }, transistionClassArray[appLanguage].textAlign]}>{textTranslation.shippingAddress.PAYMENTMETHODS}</Text>
                <ScrollView bounces={false}  >
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection, { borderColor: (isApplePayClick) ? colors.red : colors.lightBlue }]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.applepay} style={styles.iconView} resizeMode={'contain'} />
                        <Text style={[styles.textView, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.PAY}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.clickApplePay(isApplePayClick)}>
                            <MaterialIcons name={(isApplePayClick) ? 'radio-button-on' : 'radio-button-off'} size={30} color={(isApplePayClick) ? colors.red : colors.gray} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection, { borderColor: (isGooglePayClick) ? colors.red : colors.lightBlue }]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.gpay} style={styles.iconView} resizeMode={'contain'} />
                        <Text style={[styles.textView, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.PAY}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.clickGooglePay(isGooglePayClick)}>
                            <MaterialIcons name={(isGooglePayClick) ? 'radio-button-on' : 'radio-button-off'} size={30} color={(isGooglePayClick) ? colors.red : colors.gray} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection, { borderColor: (isCardClick) ? colors.red : colors.lightBlue }]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.card} style={styles.iconOtherView} resizeMode={'contain'} />
                        <Text style={[styles.textView, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.CREDITDEBITCARD}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.clickCard(isCardClick)}>
                            <MaterialIcons name={(isCardClick) ? 'radio-button-on' : 'radio-button-off'} size={30} color={(isCardClick) ? colors.red : colors.gray} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> navigate('MyCard')}>
                <View style={[styles.paymentMethodsOptionViewCReditCard, transistionClassArray[appLanguage].flexDirection]}>
                    <View>
                        <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                            <Image source={images.shippingAddress.visa} style={{width: 30, height:30,}} resizeMode={'contain'}/>
                            <Text style={styles.textViewName}>{"Zaffer Ahamad"}</Text>
                        </View>
                        <Text style={styles.textViewCardName}>{textTranslation.shippingAddress.CARDENDWITH} {cardNumber} </Text>
                        <View style={[transistionClassArray[appLanguage].flexDirection, {marginTop:20, alignItems:'center'}]}>
                        <CheckBox
                            style={{  marginRight: 2 }}
                            onClick={() => {
                                this.setState({
                                    isDefaultCard: !isDefaultCard
                                })
                            }}
                            isChecked={isDefaultCard}
                            checkedImage={<MaterialIcons size={25} color={colors.red} name={'check-box'} />}
                            unCheckedImage={<MaterialIcons size={25} color={colors.gray} name={'check-box-outline-blank'} />}
                        />
                            <Text style={styles.textViewDefaultCard}>{textTranslation.shippingAddress.DEFAULTCARD}</Text>
                        </View>
                     </View>
                    <View>
                     <Entypo name={'chevron-small-right'} size={30} color={colors.black} />
                    </View>
                </View>
                </TouchableOpacity>
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection, { borderColor: (isCODClick) ? colors.red : colors.lightBlue }]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.cod} style={{width: 40, height: 40}} resizeMode={'contain'} />
                        <Text style={[styles.textView, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.COD}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.clickCOD(isCODClick)}>
                            <MaterialIcons name={(isCODClick) ? 'radio-button-on' : 'radio-button-off'} size={30} color={(isCODClick) ? colors.red : colors.gray} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.rewards} style={styles.iconOtherView} resizeMode={'contain'} />
                        <View>
                            <Text numberOfLines={1} style={[styles.textView, { maxWidth: 200,  marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.APPLYMY} {petCoinValue} {textTranslation.shippingAddress.PETCOINS} </Text>
                            <Text style={[styles.textViewLight, transistionClassArray[appLanguage].textAlign, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{'(AED 130.00)'}</Text>
                        </View>
                    </View>
                    <View>
                        <CheckBox
                            style={{  marginRight: 2 }}
                            onClick={() => {
                                this.setState({
                                    isPetCoinChecked: !isPetCoinChecked
                                })
                            }}
                            isChecked={isPetCoinChecked}
                            checkedImage={<MaterialIcons size={30} color={colors.red} name={'check-box'} />}
                            unCheckedImage={<MaterialIcons size={30} color={colors.gray} name={'check-box-outline-blank'} />}
                        />
                    </View>
                </View>
                <View style={[styles.paymentMethodsOptionView, transistionClassArray[appLanguage].flexDirection]}>
                    <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center' }]}>
                        <Image source={images.shippingAddress.storecredit} style={styles.iconView} resizeMode={'contain'} />
                        <View  >
                            <Text style={[styles.textView, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{textTranslation.shippingAddress.STORECREDIT}</Text>
                            <Text style={[styles.textViewLight, transistionClassArray[appLanguage].textAlign, { marginLeft: (appLanguage === 'ar') ? 0 : 10, marginRight: (appLanguage === 'ar') ? 10 : 0 }]}>{'(AED 740.00)'}</Text>
                        </View>
                    </View>
                    <View>
                        <CheckBox
                            style={{ marginRight: 2   }}
                            onClick={() => {
                                this.setState({
                                    isStoreLocatorClick: !isStoreLocatorClick
                                })
                            }}
                            isChecked={isStoreLocatorClick}
                            checkedImage={<MaterialIcons size={30} color={colors.red} name={'check-box'} />}
                            unCheckedImage={<MaterialIcons size={30} color={colors.gray} name={'check-box-outline-blank'} />}
                        />
                    </View>
                </View>
                <View style={{height: 20}}/>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default PaymentMethods;
