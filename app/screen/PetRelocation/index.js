import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RNPickerSelect from 'react-native-picker-select';
import {Button, Spinner} from 'native-base';
import styles from './style';
import {LocalizationContext} from '../../localizations/LocalizationContext';
import {transistionClassArray} from '../../utills/TranslationClasses';
import AppHeader from '../../components/AppHeader';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import * as images from '../../assets/images/map';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import FormInput from '../../components/FormInput';
import {postPetRelocation} from '../../redux/form/actions';
import {connect} from 'react-redux';
import Forms from '../../redux/form';
import globalStyles from '../../assets/styles/globalStyle';

const contextTypeLocalization = LocalizationContext;
class PetRelocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      title: props.route.params.title,
      firstName: '',
      lastName: '',
      CountryCode: '',
      mobileNumber: '',
      emailAddress: '',
      notes: '',
      preferredDate: '',
      preferredTime: '',
      show: false,
      mode: 'date',
      modalVisible: false,
      modalmsg: '',
      requestNo: '',
      DateTIME: new Date(),
      loader: false,
    };
    this.handleDateConfirm = this.handleDateConfirm.bind(this);
  }
  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {
    if (this.props.formResponse !== prevProps.formResponse) {
      // this.setState({
      //   modalVisible: true,
      //   modalmsg: this.props.formResponse.result[0].Message,
      //   requestNo: this.props.formResponse.result[0].RequestNo,
      // });
      this.props.navigation.navigate('AquariumSuccess', {
        title: this.state.title,
      });
    }
  }
  showMode = (currentMode) => {
    this.setState({show: true, mode: currentMode});
  };
  hideDatePicker = () => {
    this.setState({show: false});
  };
  handleTimeConfirm = (date) => {
    const preferredTime = moment(date).format('HH:mm');
    this.setState({
      preferredTime: preferredTime,
      DateTIME: date,
      show: false,
    });
  };
  handleDateConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    const preferredDate = moment(date).format('MM/DD/YYYY');
    this.setState({preferredDate: preferredDate, DateTIME: date, show: false});
    this.hideDatePicker();
  };
  DataSubmit = () => {
    const {
      firstName,
      lastname,
      countryCode,
      mobileNumber,
      emailAddress,
      preferredDate,
      preferredTime,
      notes,
    } = this.state;
    if (
      firstName == '' ||
      lastname == '' ||
      countryCode == '' ||
      mobileNumber == '' ||
      emailAddress == '' ||
      preferredDate == '' ||
      preferredTime == '' ||
      notes == ''
    ) {
      return;
    } else {
      const data = {
        firstName: firstName,
        lastName: lastname,
        countryCode: countryCode,
        mobileNumber: mobileNumber,
        emailAddress: emailAddress,
        preferredDate: preferredDate,
        preferredTime: preferredTime,
        notes: notes,
      };
      console.log(data);
      this.props.FormData(data);
      this.setState({loader: true});
      // this.props.navigation.navigate('AquariumSuccess');
    }
  };
  render() {
    const {appLanguage, textTranslation, title, loader} = this.state;
    const {navigation} = this.props;

    return (
      <Fragment>
        <SafeAreaView style={globalStyles.safeAreaViewHeader}/>
        <SafeAreaView style={styles.screenLayout}>
          <AppHeader
            barStyle={'light-content'}
            androidStatusBarColor={colors.THEME_COLOR}
            BodyData={
              <View
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  {justifyContent: 'center', alignSelf: 'center'},
                ]}>
                <Text
                  numberOfLines={1}
                  style={[
                    transistionClassArray[appLanguage].flexDirection,
                    {
                      color: colors.white,
                      maxWidth: 250,
                      fontSize: 20,
                      textAlign: 'center',
                    },
                  ]}>
                  {title}
                </Text>
              </View>
            }
            BodyFlex={0.9}
            LeftFlex={0.1}
            LeftData={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name={'arrow-back'}
                  size={30}
                  color={colors.white}
                />
              </TouchableOpacity>
            }
            RightFlex={0.0}
          />
          <ScrollView style={loader && {opacity: 0.5}}>
            <View style={styles.elementBlock}>
              <Text
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.aquariumDetailHeaderText,
                ]}>
                {textTranslation.aquarium.AQUARIUMSUBHEADER}
              </Text>
            </View>
            <View style={styles.elementBlock}>
              <FormInput
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.nameTextBox,
                ]}
                returnKeyType="next"
                onChangeText={(firstName) => this.setState({firstName})}
                value={this.state.firstName}
                placeholder={textTranslation.aquarium.FIRTSNAME}
                placeholderTextColor={colors.darkWarmGrey}
              />
            </View>
            <View style={styles.elementBlock}>
              <FormInput
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.nameTextBox,
                ]}
                returnKeyType="next"
                onChangeText={(lastName) => this.setState({lastName})}
                value={this.state.lastName}
                placeholder={textTranslation.aquarium.LASTNAME}
                placeholderTextColor={colors.darkWarmGrey}
              />
            </View>
            <View style={styles.elementBlock}>
              <View style={[styles.mobileCode, {flex: 0.3, width: 50}]}>
                <RNPickerSelect
                  screenName="Aquarium"
                  onValueChange={(value) => this.setState({CountryCode: value})}
                  returnKeyType="next"
                  isFrom={'small'}
                  items={[
                    {label: '+971', value: '+971'},
                    {label: '+91', value: '+91'},
                  ]}
                  useNativeAndroidPickerStyle={false}
                  style={{...pickerSelectStyles}}
                  placeholder={{label: 'Code'}}
                />
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <FormInput
                  style={[
                    transistionClassArray[appLanguage].flexDirection,
                    styles.mobileTextBox,
                  ]}
                  onChangeText={(mobileNumber) => this.setState({mobileNumber})}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  value={this.state.mobileNumber}
                  placeholder={textTranslation.aquarium.MOBILENUMBER}
                  placeholderTextColor={colors.darkWarmGrey}
                />
              </View>
            </View>
            <View style={styles.elementBlock}>
              <FormInput
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.nameTextBox,
                ]}
                onChangeText={(emailAddress) => this.setState({emailAddress})}
                value={this.state.emailAddress}
                returnKeyType="next"
                keyboardType="email-address"
                placeholder={textTranslation.aquarium.EMAILADDRESS}
                placeholderTextColor={colors.darkWarmGrey}
              />
            </View>
            <View style={styles.elementBlock}>
              <Text
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.confirmText,
                ]}>
                {textTranslation.aquarium.AQUARIUMCONFIRM}
              </Text>
            </View>
            <View style={styles.elementBlock}>
              <TouchableOpacity onPress={() => this.showMode('date')}>
                <FormInput
                  style={[
                    transistionClassArray[appLanguage].flexDirection,
                    styles.nameTextBox,
                  ]}
                  onFocus={() => {
                    this.showMode('date');
                    Keyboard.dismiss();
                  }}
                  value={this.state.preferredDate}
                  returnKeyType="next"
                  placeholder={textTranslation.aquarium.PREFEREDDATE}
                  placeholderTextColor={colors.darkWarmGrey}
                  isRightIcon
                  rightIcon={
                    <FastImage
                      source={images.aquarium.calendar}
                      style={styles.pickerImage}
                      resizeMode={'contain'}
                    />
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.elementBlock}>
              <TouchableOpacity onPress={() => this.showMode('time')}>
                <FormInput
                  style={[
                    transistionClassArray[appLanguage].flexDirection,
                    styles.nameTextBox,
                  ]}
                  value={this.state.preferredTime}
                  onFocus={() => {
                    this.showMode('time');
                    Keyboard.dismiss();
                  }}
                  returnKeyType="next"
                  placeholder={textTranslation.aquarium.PREFEREDTIME}
                  placeholderTextColor={colors.darkWarmGrey}
                  isRightIcon
                  rightIcon={
                    <FastImage
                      source={images.aquarium.time}
                      style={styles.pickerImage}
                      resizeMode={'contain'}
                    />
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.elementBlock}>
              <FormInput
                style={[
                  transistionClassArray[appLanguage].flexDirection,
                  styles.notesBox,
                ]}
                onChangeText={(notes) => this.setState({notes})}
                returnKeyType="next"
                value={this.state.notes}
                placeholder={textTranslation.aquarium.NOTES}
                placeholderTextColor={colors.darkWarmGrey}
                multiline
                numberOfLines={5}
              />
            </View>
            <View
              style={(styles.elementBlock, {flex: 1, marginHorizontal: 20})}>
              <Button
                rounded
                block
                style={[styles.submitBtn]}
                onPress={
                  () => this.DataSubmit()
                  // this.props.navigation.navigate('AquariumSuccess')
                }>
                <Text
                  style={[
                    transistionClassArray[appLanguage].flexDirection,
                    styles.submitText,
                  ]}>
                  {textTranslation.aquarium.AQUARIUMSUBMIT}
                </Text>
              </Button>
            </View>
            <DateTimePickerModal
              isVisible={this.state.show}
              date={this.state.DateTIME}
              mode={this.state.mode}
              is24Hour={true}
              onConfirm={
                this.state.mode === 'date'
                  ? this.handleDateConfirm
                  : this.handleTimeConfirm
              }
              onCancel={this.hideDatePicker}
            />
            {loader && (
                <View style={styles.loader}>
                  <Spinner color="black" />
                </View>
            )}
            {/*<Modal*/}
            {/*  animationType="slide"*/}
            {/*  transparent={true}*/}
            {/*  visible={this.state.modalVisible}>*/}
            {/*  <TouchableOpacity*/}
            {/*    style={styles.centeredView}*/}
            {/*    onPress={() => {*/}
            {/*      this.setState({modalVisible: false});*/}
            {/*    }}>*/}
            {/*    <View style={styles.modalView}>*/}
            {/*      <Text style={styles.modalText}>{this.state.modalmsg}</Text>*/}
            {/*      <Text style={styles.modalText}>*/}
            {/*        {' Request No: ' + this.state.requestNo}*/}
            {/*      </Text>*/}
            {/*    </View>*/}
            {/*  </TouchableOpacity>*/}
            {/*</Modal>*/}
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    formResponse: state.Forms.pet_rel_success,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    FormData: (data) => dispatch(postPetRelocation(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PetRelocation);
