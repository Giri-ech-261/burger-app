import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from "react-native-vector-icons/Ionicons";
var _ = require('lodash');

import globalStyles from "../../assets/styles/globalStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppHeader from '../../components/AppHeader';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { goBack, navigate } from "../../navigation/RootNavigation";
import Toast from 'react-native-simple-toast';
AntDesign.loadFont();
Icon.loadFont();
class UpdatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
                contextTypeLocalization._currentValue.translations._props.en :
                contextTypeLocalization._currentValue.translations._props.ar,
            email: '',
            newPassword: '',
            confirmPassword: '',
            isNewPasswordVisible: true,
            isConfirmPasswordVisible: true,
        }
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }; 
    validateFields(){
        const { appLanguage, textTranslation, email, newPassword, confirmPassword  } = this.state;
        if (_.isEmpty(email)) {
            alert('Enter email')
        } else if(!globals.validateEmail(email)){
            alert('Enter valid email')
        }else if (_.isEmpty(newPassword)) {
            alert('Enter new password')
        }else if (_.isEmpty(confirmPassword)) {
            alert('Enter confirm password')
        }else if (confirmPassword !== newPassword) {
            alert('Enter confirm not match password')
        }
         else{
            navigate('Home')
        }
    }
    render() {
        const { appLanguage, textTranslation, email, newPassword, confirmPassword, isNewPasswordVisible, isConfirmPasswordVisible } = this.state;
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.safeAreaViewTwo} >
                <View style={{ margin: 20, flex:1, }}>
                    <View style={[{}, transistionClassArray[appLanguage].flexDirection]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name={'arrowleft'} size={25} color={colors.black} style={{ marginLeft: 5 }} />
                        </TouchableOpacity>
                        <Text style={styles.titleTextView}>{textTranslation.auth.UPDATEPASS}</Text>
                    </View>
                    <View style={styles.seprator} />
                    <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                        <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}  >
                    <View style={[styles.textFiledViewFloating, { marginTop: 10 }]}>
                        <FloatingLabelInput
                            label={textTranslation.auth.EMAILADDRESS}
                            value={email}
                            onChangeText={(value) => {
                                this.setState({ email: value });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                        />
                    </View>
                    <View style={transistionClassArray[appLanguage].flexDirection}>
                        <View style={[styles.textFiledViewFloatingPass, { marginTop: 0 }]}>
                            <FloatingLabelInput
                                label={textTranslation.auth.NEWPASS}
                                value={newPassword}
                                onChangeText={(value) => {
                                    this.setState({ newPassword: value });
                                }}
                                labelStyles={{
                                    fontFamily: globals.ProximaNovaRegular,
                                    color: colors.darkWarmGrey,
                                }}
                                isPassword={isNewPasswordVisible}
                            />
                        </View>
                        <TouchableOpacity style={styles.eyeView} onPress={() => { this.setState({ isNewPasswordVisible: !isNewPasswordVisible }) }} >
                            <Icon name={(isNewPasswordVisible) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                        </TouchableOpacity>
                    </View>
                    <View style={transistionClassArray[appLanguage].flexDirection}>
                        <View style={[styles.textFiledViewFloatingPass, { marginTop: 0 }]}>
                            <FloatingLabelInput
                                label={textTranslation.auth.CONFIRMPASS}
                                value={confirmPassword}
                                onChangeText={(value) => {
                                    this.setState({ confirmPassword: value });
                                }}
                                labelStyles={{
                                    fontFamily: globals.ProximaNovaRegular,
                                    color: colors.darkWarmGrey,
                                }}
                                isPassword={isConfirmPasswordVisible}
                            />
                        </View>
                        <TouchableOpacity style={styles.eyeView} onPress={() => { this.setState({ isConfirmPasswordVisible: !isConfirmPasswordVisible }) }} >
                            <Icon name={(isConfirmPasswordVisible) ? 'md-eye' : "md-eye-off"} size={20} color={colors.grayOpacity06} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.validateFields()} >
                        <View style={[styles.offUserButtonView,  ]}>
                            <Text style={styles.offUserLoginText}>{textTranslation.auth.RESET}</Text>
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        );
    }
}
export default UpdatePassword
