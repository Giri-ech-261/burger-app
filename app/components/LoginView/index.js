import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Touchable } from "react-native";
import { screenWidth } from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from '../../assets/images/map';
import * as globals from "../../utills/globals";
import { navigate } from '../../navigation/RootNavigation';
import CheckBox from 'react-native-check-box'
import CountDown from 'react-native-countdown-component';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Dash from 'react-native-dash';
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;

var _ = require('lodash');
Icon.loadFont();
const placeholderCode = {
    label: 'Code',
    value: null,
};

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            selectedCodeItem: '',
            mobileOrEmail: '',
            isEmailEnter: true,
            isLoginOrSignUpView: true,
            isPasswordView: false,
            isSignUpView: false,
            isForgotPasswordView: false,
            passwordValue: '',
            isPasswordVisible: true,
            forgotEmailValue: '',
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '',
            mobileNumber: '',
            password: '',
            isMarketingCheck: false,
            isOTPView: false,
            otp: '',
            isResendOTPClick: false,

        };
        this.textInputOTP = null;
    }
    selectedCodeItem(value) {
        this.setState({ selectedCodeItem: value }, () => {
            console.log("selectedCodeItem-->", this.state.selectedCodeItem);

        })
    }
    validateInputType(value) {
        if (this.is_numeric(value)) {
            console.log("Its number");
            this.setState({ isEmailEnter: false })
        } else {
            console.log("Its not number");
            this.setState({ isEmailEnter: true })
        }
        this.setState({ mobileOrEmail: value })
    }


    is_numeric(str) {
        return /^\d+$/.test(str);
    }
    validateAllFields() {
        const { isEmailEnter, mobileOrEmail, selectedCodeItem } = this.state;
        if (isEmailEnter && !globals.validateEmail(mobileOrEmail)) {
            alert('Enter valid email id')
        } else if (!isEmailEnter && _.isEmpty(selectedCodeItem)) {
            alert('Select country code')
        }
        else if (!isEmailEnter && !globals.validatePhone(mobileOrEmail)) {
            alert('Enter valid phone number')
        }
        else {
            this.setState({ isLoginOrSignUpView: false, isPasswordView: true, })
        }
    }
    renderEmailView() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter } = this.state;
        return (
            <View style={[styles.textFiledViewFloating, { marginTop: 10 }]}>
                <FloatingLabelInput
                    label={textTranslation.auth.EMAILMOBILE}
                    value={mobileOrEmail}
                    onChangeText={(value) => {
                        this.validateInputType(value);
                    }}
                    labelStyles={{
                        fontFamily: globals.ProximaNovaRegular,
                        color: colors.darkWarmGrey,
                    }}
                    maxLength={(isEmailEnter) ? null : 10}
                />
            </View>
        );
    }
    renderMobileView() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter } = this.state;
        return (
            <View style={[{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 10 }, transistionClassArray[appLanguage].flexDirection]}>
                <View style={[styles.mainViewOne, { width: (Platform.OS === 'ios') ? '30%' : '35%' }, transistionClassArray[appLanguage].flexDirection]}>
                    <RNPickerSelect
                        hideIcon={(Platform.OS === 'ios') ? true : false}
                        onValueChange={(value) => this.selectedCodeItem(value)}
                        placeholder={placeholderCode}
                        style={{ ...pickerSelectStyles }}
                        isFrom={'full'}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: '+91', value: 'sr' },
                            { label: '+971', value: 'db' },
                        ]}
                        screenName={'login'}
                    // value={selectedPetType}
                    />
                    {(Platform.OS) === 'ios' ?
                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                            style={styles.downArrowView} /> : null}
                </View>
                <View style={[styles.mainViewThree, { width: (Platform.OS === 'ios') ? '70%' : '65%' }]}>
                    <FloatingLabelInput
                        label={textTranslation.auth.PHONENUMBER}
                        value={mobileOrEmail}
                        onChangeText={(value) => {
                            this.validateInputType(value);
                        }}
                        labelStyles={{
                            fontFamily: globals.ProximaNovaRegular,
                            color: colors.darkWarmGrey,
                        }}
                        containerStyles={{
                            borderRadius: 0,
                            paddingVertical: 5,
                            paddingLeft: 10,
                        }}
                    />
                </View>
            </View>
        )
    }
    navigateUpdatePassword() {
        this.setState({isOTPView: true, isLoginOrSignUpView: false, isPasswordView: false, isSignUpView: false})
        // this.props.isModalClose(false);
        // navigate('UpdatePassword')
    }
    componentDidMount() {
        //this.textInputOTP.blur();
        // setTimeout(() => {
        //     this.textInputOTP.focus();
        //   }, 100);
    }
    renderMainView() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter, isLoginOrSignUpView } = this.state;
        return (
            <>
                {(isEmailEnter) ? this.renderEmailView() : this.renderMobileView()}

                {(!isEmailEnter) ? <View style={{ alignItems: 'center' }}>
                    <Text style={styles.wecallTetielView}>{textTranslation.auth.WECALLYOU}</Text>
                </View> : null}
                <TouchableOpacity onPress={() => this.validateAllFields()} >
                    <View style={[styles.offUserButtonView, { marginTop: (isEmailEnter) ? 20 : 30 }]}>
                        <Text style={styles.offUserLoginText}>{textTranslation.auth.CONTINUE}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[{ marginLeft: 30, marginRight: 30, marginTop: 30, marginBottom: 30, alignItems: 'center' }, transistionClassArray[appLanguage].flexDirection]}>
                    <Dash style={{ width: '45%', height: 1, }} dashLength={8} dashGap={5} dashColor={colors.grayOpacity05} />
                    <Text style={styles.orTitleView}> {textTranslation.auth.OR}</Text>
                    <Dash style={{ width: '45%', height: 1 }} dashLength={8} dashGap={5} dashColor={colors.grayOpacity05} />
                </View>
                <TouchableOpacity onPress={() => this.navigateUpdatePassword()}>
                    <View style={[styles.appleLoginMianView, transistionClassArray[appLanguage].flexDirection]}>
                        <Image source={images.auth.apple} style={{ width: 30, height: 30 }} resizeMode={'contain'} />
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <Text style={styles.withTitleView}>{textTranslation.auth.WITHAPPLE}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateUpdatePassword()}>
                    <View style={[styles.appleLoginMianView, transistionClassArray[appLanguage].flexDirection]}>
                        <Image source={images.auth.google} style={{ width: 30, height: 30 }} resizeMode={'contain'} />
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <Text style={styles.withTitleView}>{textTranslation.auth.WITHGOOGLE}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateUpdatePassword()}>
                    <View style={[styles.appleLoginMianView, transistionClassArray[appLanguage].flexDirection]}>
                        <Image source={images.auth.facebook} style={{ width: 30, height: 30 }} resizeMode={'contain'} />
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <Text style={styles.withTitleView}>{textTranslation.auth.WITHFB}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    validatePasswordFields() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter, isLoginOrSignUpView, passwordValue, isPasswordVisible } = this.state;
        if (_.isEmpty(passwordValue)) {
            alert('Enter password')
        } else {
            this.setState({ isSignUpView: true, isPasswordView: false })
            // this.props.isModalClose(false)
            // navigate('Home')
        }
    }
    renderPasswordView() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter, isLoginOrSignUpView, passwordValue, isPasswordVisible } = this.state;
        return (
            <>
                <View style={transistionClassArray[appLanguage].flexDirection}>
                    <View style={[styles.textFiledViewFloatingPass, { marginTop: 10, }]}>
                        <FloatingLabelInput
                            label={textTranslation.auth.PASSWORD}
                            value={passwordValue}
                            onChangeText={(value) => {
                                this.setState({ passwordValue: value });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                            isPassword={isPasswordVisible}
                        />
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', position: 'absolute', right: 40, bottom: 22 }} onPress={() => { this.setState({ isPasswordVisible: !isPasswordVisible }) }} >
                        <Icon name={(isPasswordVisible) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.setState({ isForgotPasswordView: true, isPasswordView: false })}>
                    <Text style={styles.forgotText}>{textTranslation.auth.FORGOTPASSWORD}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.validatePasswordFields()} >
                    <View style={[styles.offUserButtonView, { marginTop: 40 }]}>
                        <Text style={styles.offUserLoginText}>{textTranslation.auth.CONTINUE}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    renderTitle() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter, isLoginOrSignUpView, isPasswordView, isSignUpView, isForgotPasswordView, isOTPView } = this.state;
        if (isSignUpView) {
            return <Text style={[styles.titleTextView, { marginTop: 3 }]}>{textTranslation.auth.FINISHSIGNUP}</Text>
        } else if (isForgotPasswordView) {
            return <Text style={styles.titleTextView}>{textTranslation.auth.FORGOTPASSWORD}</Text>
        } else if (isOTPView) {
            return <Text style={[styles.titleTextView, { marginTop: 3 }]}>{textTranslation.auth.CONFIRMNUMBER}</Text>
        } else {
            return <Text style={styles.titleTextView}>{textTranslation.auth.LOGINTITLE}</Text>
        }
    }
    validateForgotEmailFields() {
        const { forgotEmailValue } = this.state;
        if (_.isEmpty(forgotEmailValue)) {
            alert('Enter email address')
        } else if (!globals.validateEmail(forgotEmailValue)) {
            alert('Enter valid email address')
        } else {
            this.setState({ isForgotPasswordView: false, isSignUpView: true, isPasswordView: false })
            // alert('Email sent')
        }
    }
    renderForgotPasswordView() {
        const { appLanguage, textTranslation, forgotEmailValue, isEmailEnter, isLoginOrSignUpView, isPasswordView, isSignUpView, isForgotPasswordView } = this.state;

        return (
            <>
                <Text style={styles.forgotPasswordTitle}>{textTranslation.auth.SECUERLINKMESSAGE}</Text>
                <View style={[styles.textFiledViewFloatingPass, {}]}>
                    <FloatingLabelInput
                        label={textTranslation.auth.EMAILADDRESS}
                        value={forgotEmailValue}
                        onChangeText={(value) => {
                            this.setState({ forgotEmailValue: value });
                        }}
                        labelStyles={{
                            fontFamily: globals.ProximaNovaRegular,
                            color: colors.darkWarmGrey,
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => this.validateForgotEmailFields()} >
                    <View style={[styles.offUserButtonView, { marginTop: 20 }]}>
                        <Text style={styles.offUserLoginText}>{textTranslation.auth.SENDREQUEST}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    validateSignUpFields() {
        const { appLanguage, textTranslation, firstName, lastName, password, email, selectedCodeItem, isMarketingCheck, mobileOrEmail, isPasswordVisible } = this.state;
        if (_.isEmpty(firstName)) {
            alert('Enter first name')
        } else if (_.isEmpty(lastName)) {
            alert('Enter last name')
        } else if (_.isEmpty(email)) {
            alert('Enter email')
        } else if (!globals.validateEmail(email)) {
            alert('Enter valid email')
        } else if (_.isEmpty(selectedCodeItem)) {
            alert('Select coutnry code')
        } else if (_.isEmpty(mobileOrEmail)) {
            alert('Enter Mobile')
        } else if (!globals.validatePhone(mobileOrEmail)) {
            alert('Enter valid mobile number')
        } else if (_.isEmpty(password)) {
            alert('Enter password')
        } else {
            this.props.isModalClose(false)
            navigate('UpdatePassword')
        }
        // this.props.isModalClose(false)
        // navigate('UpdatePassword')
    }
    renderSignUpView() {
        const { appLanguage, textTranslation, firstName, lastName, password, email, mobileNumber, isMarketingCheck, countryCode, isPasswordVisible } = this.state;
        return (
            <>
                <View style={[styles.textFiledViewFloating, {}]}>
                    <FloatingLabelInput
                        label={textTranslation.auth.FIRSTNAME}
                        value={firstName}
                        onChangeText={(value) => {
                            this.setState({ firstName: value });
                        }}
                        labelStyles={{
                            fontFamily: globals.ProximaNovaRegular,
                            color: colors.darkWarmGrey,
                        }}
                        style={{ ...pickerSelectStylesSignUp }}
                    />
                </View>
                <View style={[styles.textFiledViewFloatingGeneral, {}]}>
                    <FloatingLabelInput
                        label={textTranslation.auth.LASTNAME}
                        value={lastName}
                        onChangeText={(value) => {
                            this.setState({ lastName: value });
                        }}
                        labelStyles={{
                            fontFamily: globals.ProximaNovaRegular,
                            color: colors.darkWarmGrey,
                        }}
                        style={{ ...pickerSelectStylesSignUp }}
                    />
                </View>
                <View style={[styles.textFiledViewFloatingGeneral, {}]}>
                    <FloatingLabelInput
                        label={textTranslation.auth.EMAIL}
                        value={email}
                        onChangeText={(value) => {
                            this.setState({ email: value });
                        }}
                        labelStyles={{
                            fontFamily: globals.ProximaNovaRegular,
                            color: colors.darkWarmGrey,
                        }}
                        style={{ ...pickerSelectStylesSignUp }}
                    />
                </View>
                <Text style={styles.emailyouText}>{textTranslation.auth.EMAILYOU}</Text>
                {this.renderMobileView()}
                <View style={transistionClassArray[appLanguage].flexDirection}>
                    <View style={[styles.textFiledViewFloatingPass, { marginTop: 10, }]}>
                        <FloatingLabelInput
                            label={textTranslation.auth.PASSWORD}
                            value={password}
                            onChangeText={(value) => {
                                this.setState({ password: value });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                            isPassword={isPasswordVisible}
                        />
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', position: 'absolute', right: 40, bottom: 22 }} onPress={() => { this.setState({ isPasswordVisible: !isPasswordVisible }) }} >
                        <Icon name={(isPasswordVisible) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.policyTextView}>{textTranslation.auth.TERMSMESSAGE}
                    <Text style={styles.tosTextView} onPress={() => console.log('')}>{textTranslation.auth.TOS}</Text>
                    <Text>{', '}</Text>
                    <Text style={styles.tosTextView} onPress={() => console.log('')}>{textTranslation.auth.PTOS}</Text>
                    <Text>{', '}</Text>
                    <Text style={styles.tosTextView} onPress={() => console.log('')}>{textTranslation.auth.PP}</Text>
                    <Text> {textTranslation.auth.AND}</Text>
                    <Text style={styles.tosTextView} onPress={() => console.log('')}>{textTranslation.auth.NP}</Text>
                </Text>
                <TouchableOpacity onPress={() => this.validateSignUpFields()} >
                    <View style={[styles.offUserButtonView, { marginTop: 30 }]}>
                        <Text style={styles.offUserLoginText}>{textTranslation.auth.AGREE}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.deafualtAddressView, transistionClassArray[appLanguage].flexDirection]}>
                    <CheckBox
                        style={{ marginLeft: 5, }}
                        onClick={() => {
                            this.setState({
                                isMarketingCheck: !isMarketingCheck
                            })
                        }}
                        isChecked={isMarketingCheck}
                        checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                        unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                    />
                    <Text style={styles.deafualtAddressTextView}>{textTranslation.auth.MARKETMESSAGE}</Text>
                </View>
            </>
        )
    }
    renderOTPView() {
        const { otp, appLanguage, textTranslation, isResendOTPClick } = this.state;
        return (
            <>
                <View style={{ padding: 20 }}>
                    <Text style={styles.enterDigitCodeText}>{'Enter 4-digit code, Your code was sent to +971 566709167'}</Text>
                    <OTPInputView
                        style={{ width: '70%', height: 60, marginTop: 20 }}
                        pinCount={4}
                        // ref={(ref) => { this.textInputOTP = ref; }}
                        // code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({otp: code})}}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.underlineStyleBase}
                        onCodeFilled={(otp => {
                            console.log(`Code is ${otp}, you are good to go!`)
                        })}
                    />
                    <View style={styles.resendView}>

                        {(isResendOTPClick) ? <>
                        <View style={{alignItems:'center', flexDirection:'row'}}>
                            <Text style={styles.resendCodeText}>{textTranslation.auth.RESNEDCODE}</Text>
                            <CountDown
                                until={60}
                                onFinish={() => console.log('Timeout')}
                                size={12}
                                digitStyle={{ backgroundColor: '#FFF' }}
                                digitTxtStyle={{ color: colors.red, fontFamily: globals.ProximaNovaRegular, fontSize: globals.font_14 }}
                                timeToShow={['S']}
                                timeLabels={{s: 's' }}
                                timeLabelStyle={{color: colors.red, fontFamily: globals.ProximaNovaRegular, fontSize: globals.font_14}}
                            />
                            </View>
                        </> : <TouchableOpacity onPress={() => this.setState({ isResendOTPClick: true })}>
                                <Text style={styles.resendText}>{textTranslation.auth.RESNEDOTP}</Text>
                            </TouchableOpacity>}
                    </View>
                </View>
            </>
        )
    }
    render() {
        const { appLanguage, textTranslation, mobileOrEmail, isEmailEnter, isLoginOrSignUpView, isPasswordView, isSignUpView, isForgotPasswordView, isOTPView } = this.state;
        return (
            <>
                <Modal
                    testID={'modal'}
                    isVisible={this.props.isVisible}
                    style={styles.view}
                >
                    <View style={styles.autoShipHeight}>
                        <View style={styles.graySeprator}></View>
                        <View style={[(isSignUpView || isOTPView) ? styles.signUpPopupTwo : styles.signUpPopup, transistionClassArray[appLanguage].flexDirection]}>
                            {(isSignUpView || isOTPView) ? <TouchableOpacity onPress={() => this.setState({ isSignUpView: false, isOTPView: false, isPasswordView: true })}>
                                <AntDesign name={'arrowleft'} size={25} color={colors.black} style={{ marginRight: 10 }} />
                            </TouchableOpacity> : null}
                            {this.renderTitle()}
                            {(isSignUpView || isOTPView) ? null : <TouchableOpacity onPress={() => this.props.isModalClose(false)}>
                                <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                            </TouchableOpacity>}

                        </View>
                        <View style={styles.modalSeprator} />
                        <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}  >
                                {(isLoginOrSignUpView) ? this.renderMainView() : null}
                                {(isPasswordView) ? this.renderPasswordView() : null}
                                {(isForgotPasswordView) ? this.renderForgotPasswordView() : null}
                                {(isSignUpView) ? this.renderSignUpView() : null}
                                {(isOTPView) ? this.renderOTPView() : null}
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </Modal>
            </>
        );
    }

}

export default LoginView;


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        // paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 20,
    },
});

const pickerSelectStylesSignUp = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.darkWarmGrey,
        fontFamily: globals.ProximaNovaRegular,
        // paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 20,
    },
});