
import React, { Component, Fragment } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
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
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/Ionicons";

var _ = require('lodash');
const placeholderCode = {
    label: 'Code',
    value: null,
};
const contextTypeLocalization = LocalizationContext;
class MyProfile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage,
        textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
        firstName: "",
        lastName: '',
        email: 'abcd.efg@xyz.com',
        primaryNO: '552166999',
        secondaryNO: '',
        selectedPrNoItem: '',
        selectedPrNoItem: '',
        isValidate: false,
        isChangePasswordClick: false,
        currentPass:'',
        newPass:'',
        confirmPass:'',
        isCurrentPassShow:true,
        isNewPassShow:true,
        isConfirmPassShow:true,
    };

    selectedCodeItem(type, value) {
        if (type === 'pr_no') {
            this.setState({ selectedPrNoItem: value }, () => {
                console.log("selectedPrNoItem-->", this.state.selectedPrNoItem);
            })
        } else {
            this.setState({ selectedSecNoItem: value }, () => {
                console.log("selectedSecNoItem-->", this.state.selectedSecNoItem);
            })
        }
    }
    validatePrNo(value) {
        this.setState({ primaryNO: value })
    }
    validateSecNo(value) {
        this.setState({ secondaryNO: value })
    }
    validateAllField() {
        const { appLanguage, textTranslation, firstName, lastName, email, primaryNO, secondaryNO, selectedPrNoItem, selectedSecNoItem, isValidate } = this.state;
        if (_.isEmpty(firstName)) {
            alert('Enter first name')
        } else if (_.isEmpty(lastName)) {
            alert('Enter last name')
        } else if (_.isEmpty(secondaryNO)) {
            alert('Enter secondary mobile number')
        } else if (!globals.validatePhone(secondaryNO)) {
            alert('Enter valid secondary mobile number')
        } else {
            alert('done')
        }
    }
    validateChangePassAllField(){
        const { appLanguage, textTranslation, currentPass, newPass, confirmPass, isConfirmPassShow, isNewPassShow, isCurrentPassShow } = this.state;
        if (_.isEmpty(currentPass)) {
            alert('Enter Current password')
        }else if (_.isEmpty(newPass)) {
            alert('Enter New password')
        }else if (_.isEmpty(confirmPass)) {
            alert('Enter Confirm password')
        }else if (confirmPass !== newPass) {
            alert('Enter Confirm password is not match')
        }else {
            alert('done')
        }
    }
    clearData(){
        this.setState({ isChangePasswordClick: false, currentPass:'', newPass:'', confirmPass: '', isConfirmPassShow: true, isNewPassShow: true, isCurrentPassShow:true })
    }
    renderChangePasswordModal(isVisible) {
        const { appLanguage, textTranslation, currentPass, newPass, confirmPass, isConfirmPassShow, isNewPassShow, isCurrentPassShow } = this.state;
        return (
            <Modal
                testID={'modal'}
                isVisible={isVisible}
                style={styles.view}
            >
                <View style={styles.autoShipHeight}>
                    <View style={styles.graySeprator}></View>
                    <View style={[styles.signUpPopup, transistionClassArray[appLanguage].flexDirection]}>
                        <Text style={styles.titleTextView}>{textTranslation.myProfile.CHANGEPASS}</Text>
                        <TouchableOpacity onPress={() => this.clearData()}>
                            <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalSeprator} />
                    <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                        <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} style={{ margin:20, }}  >
                            <View style={transistionClassArray[appLanguage].flexDirection}>
                                <View style={[styles.textFiledViewFloatingPass, { marginTop: 0 }]}>
                                    <FloatingLabelInput
                                        label={textTranslation.myProfile.CURRENTPASS}
                                        value={currentPass}
                                        onChangeText={(value) => {
                                            this.setState({ currentPass: value });
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                        }}
                                        isPassword={isCurrentPassShow}
                                    />
                                </View>
                                <TouchableOpacity style={styles.eyeView} onPress={() => { this.setState({ isCurrentPassShow: !isCurrentPassShow }) }} >
                                    <Icon name={(isCurrentPassShow) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                                </TouchableOpacity>
                            </View>
                            <View style={transistionClassArray[appLanguage].flexDirection}>
                                <View style={[styles.textFiledViewFloatingPass, { marginTop: 0 }]}>
                                    <FloatingLabelInput
                                        label={textTranslation.auth.NEWPASS}
                                        value={newPass}
                                        onChangeText={(value) => {
                                            this.setState({ newPass: value });
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                        }}
                                        isPassword={isNewPassShow}
                                    />
                                </View>
                                <TouchableOpacity style={styles.eyeView} onPress={() => { this.setState({ isNewPassShow: !isNewPassShow }) }} >
                                    <Icon name={(isNewPassShow) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                                </TouchableOpacity>
                            </View>
                            <View style={transistionClassArray[appLanguage].flexDirection}>
                                <View style={[styles.textFiledViewFloatingPass, { marginTop: 0 }]}>
                                    <FloatingLabelInput
                                        label={textTranslation.auth.CONFIRMPASS}
                                        value={confirmPass}
                                        onChangeText={(value) => {
                                            this.setState({ confirmPass: value });
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                        }}
                                        isPassword={isConfirmPassShow}
                                    />
                                </View>
                                <TouchableOpacity style={styles.eyeView} onPress={() => { this.setState({ isConfirmPassShow: !isConfirmPassShow }) }} >
                                    <Icon name={(isConfirmPassShow) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={[styles.saveProfileRedView]} onPress={() => this.validateChangePassAllField()}  >
                                        <Text style={styles.saveText}>{textTranslation.myProfile.SAVE}</Text>
                                    </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        )
    }
    render() {

        // onPress={()=>navigate('ShippingAddress')}
        const { appLanguage, textTranslation, firstName, lastName, email, primaryNO, secondaryNO, selectedPrNoItem, selectedSecNoItem, isChangePasswordClick } = this.state;
        const { navigation } = this.props;
        return (
            <>
                <Fragment>
                    <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                    <SafeAreaView style={styles.mainView}>
                        <AppHeader
                            barStyle={"light-content"}
                            androidStatusBarColor={colors.THEME_COLOR}
                            BodyData={
                                <View style={[transistionClassArray[appLanguage].flexDirection, styles.headerMainView]}>
                                    <Text style={styles.headerTitle}>{textTranslation.myProfile.EDITPROFILE}</Text>
                                </View>}
                            BodyFlex={.90}
                            LeftFlex={.20}
                            LeftData={
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <MaterialIcons name={'arrow-back'} size={30} color={colors.white} style={{ marginLeft: 10, }} />
                                </TouchableOpacity>}
                        />
                        <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ padding: 20 }}>
                                    <Text style={styles.personalInfoText}>{textTranslation.myProfile.PERSONALINFO}</Text>
                                    <View style={[styles.textFiledViewFloating, { marginTop: 10 }]}>
                                        <FloatingLabelInput
                                            label={textTranslation.aquarium.FIRTSNAME}
                                            value={firstName}
                                            onChangeText={(value) => {
                                                this.setState({ firstName: value });
                                            }}
                                            labelStyles={{
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                        />
                                    </View>
                                    <View style={[styles.textFiledViewFloating, { marginTop: 10 }]}>
                                        <FloatingLabelInput
                                            label={textTranslation.aquarium.LASTNAME}
                                            value={lastName}
                                            onChangeText={(value) => {
                                                this.setState({ lastName: value });
                                            }}
                                            labelStyles={{
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                        />
                                    </View>
                                    <View style={[styles.textFiledViewFloating, { marginTop: 15 }]}>
                                        <FloatingLabelInput
                                            label={textTranslation.aquarium.EMAILADDRESS}
                                            value={email}
                                            onChangeText={(value) => {
                                                this.setState({ email: value });
                                            }}
                                            labelStyles={{
                                                fontFamily: globals.ProximaNovaRegular,
                                                color: colors.darkWarmGrey,
                                            }}
                                            containerStyles={{
                                                backgroundColor: colors.whiteOpacity08,
                                                padding: 8,
                                                borderWidth: 1,
                                                borderRadius: 30,
                                                height: 44,
                                                borderColor: colors.grayOpacity01
                                            }}
                                            editable={false}
                                        />
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ isChangePasswordClick: true })}>
                                        <Text style={styles.changePassText}>{textTranslation.myProfile.CHANGEPASS}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.seprator} />
                                    <Text style={styles.primaryNoText}>{textTranslation.myProfile.PRIMARYNO}</Text>
                                    <View style={[{ marginTop: 20, marginBottom: 10 }, transistionClassArray[appLanguage].flexDirection]}>
                                        <View style={[styles.mainViewOne, { width: (Platform.OS === 'ios') ? '30%' : '35%' }, transistionClassArray[appLanguage].flexDirection]}>
                                            <RNPickerSelect
                                                hideIcon={(Platform.OS === 'ios') ? true : false}
                                                onValueChange={(value) => this.selectedCodeItem('pr_no', value)}
                                                placeholder={placeholderCode}
                                                style={{ ...pickerSelectStyles }}
                                                isFrom={'full'}
                                                useNativeAndroidPickerStyle={false}
                                                items={[
                                                    { label: '+91', value: 'sr' },
                                                    { label: '+971', value: 'db' },
                                                ]}
                                                screenName={'myprofile'}
                                                value={selectedPrNoItem}
                                            />
                                            {(Platform.OS) === 'ios' ?
                                                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                                    style={styles.downArrowView} /> : null}
                                        </View>
                                        <View style={[styles.mainViewThree, { width: (Platform.OS === 'ios') ? '70%' : '65%' }]}>
                                            <FloatingLabelInput
                                                label={textTranslation.auth.PHONENUMBER}
                                                value={primaryNO}
                                                onChangeText={(value) => {
                                                    this.validatePrNo(value);
                                                }}
                                                labelStyles={{
                                                    fontFamily: globals.ProximaNovaRegular,
                                                    color: colors.darkWarmGrey,
                                                }}
                                                containerStyles={{
                                                    borderRadius: 0,
                                                    paddingVertical: 5,
                                                    paddingLeft: 10,
                                                    height: 40,
                                                    borderTopRightRadius: 30,
                                                    borderBottomRightRadius: 30,
                                                    backgroundColor: colors.lightGrey246,
                                                }}
                                                editable={false}
                                                maxLength={10}
                                            />
                                        </View>
                                    </View>
                                    <Text style={styles.primaryNoText}>{textTranslation.myProfile.SECNO}</Text>
                                    <View style={[{ marginTop: 20, marginBottom: 10 }, transistionClassArray[appLanguage].flexDirection]}>
                                        <View style={[styles.mainViewOne, { width: (Platform.OS === 'ios') ? '30%' : '35%' }, transistionClassArray[appLanguage].flexDirection]}>
                                            <RNPickerSelect
                                                hideIcon={(Platform.OS === 'ios') ? true : false}
                                                onValueChange={(value) => this.selectedCodeItem('sec_no', value)}
                                                placeholder={placeholderCode}
                                                style={{ ...pickerSelectStyles }}
                                                isFrom={'full'}
                                                useNativeAndroidPickerStyle={false}
                                                items={[
                                                    { label: '+91', value: 'sr' },
                                                    { label: '+971', value: 'db' },
                                                ]}
                                                screenName={'myprofile'}
                                                value={selectedSecNoItem}
                                            />
                                            {(Platform.OS) === 'ios' ?
                                                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                                    style={styles.downArrowView} /> : null}
                                        </View>
                                        <View style={[styles.mainViewThree, { width: (Platform.OS === 'ios') ? '70%' : '65%' }]}>
                                            <FloatingLabelInput
                                                label={textTranslation.auth.PHONENUMBER}
                                                value={secondaryNO}
                                                onChangeText={(value) => {
                                                    this.validateSecNo(value);
                                                }}
                                                labelStyles={{
                                                    fontFamily: globals.ProximaNovaRegular,
                                                    color: colors.darkWarmGrey,
                                                }}
                                                containerStyles={{
                                                    borderRadius: 0,
                                                    paddingVertical: 5,
                                                    paddingLeft: 10,
                                                    height: 40,

                                                }}
                                                keyboardType={'numeric'}
                                                maxLength={10}
                                            />
                                        </View>
                                    </View>
                                    {/* <View pointerEvents={isValidate ? 'auto' : 'none'} > */}
                                    <TouchableOpacity style={[styles.saveProfileGrayView]} onPress={() => this.validateAllField()}  >
                                        <Text style={styles.saveText}>{textTranslation.myProfile.SAVE}</Text>
                                    </TouchableOpacity>
                                    {/* </View> */}
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                        {this.renderChangePasswordModal(isChangePasswordClick)}
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

export default MyProfile;
