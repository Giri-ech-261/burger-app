import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import SliderView from '../../components/SliderView';
import ListingProductView from '../../components/ListingProductView';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import * as colors from '../../assets/styles/color';
import * as images from '../../assets/images/map';
import globalStyles from '../../assets/styles/globalStyle';
import styles from './style';
import FastImage from 'react-native-fast-image';
import {LocalizationContext} from '../../localizations/LocalizationContext';
import {transistionClassArray} from '../../utills/TranslationClasses';
import {Button, Row, Spinner} from 'native-base';
import * as globals from '../../utills/globals';
import SubCategoryView from '../../components/SubCategoryView';
import Badge from '../../components/BadgeView/Badge';
import RadioForm, {RadioButtonInput} from 'react-native-simple-radio-button';
import FreeDiscountView from '../../components/FreeDiscountView';
import SubCategoriesListingView from '../../components/SubCategoriesListingView';
import {postContactFormData} from '../../redux/form/actions';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../../components/FormInput';
import RNPickerSelect from 'react-native-picker-select';

const contextTypeLocalization = LocalizationContext;

class ContactUsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      isExperienceMethodsById: '',
      firstName: '',
      lastName: '',
      Email: '',
      mobileNumber: '',
      CountryCode: '',
      Experience: '',
      Subject: '',
      message: '',
      loader: false,
      modalopen: false,
      modalmsg: '',
      requestNo: '',
      experienceOptions: [
        {
          id: '1',
          name: 'Online',
        },
        {
          id: '2',
          name: 'In-store',
        },
      ],
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {});
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
  selectedExperienceByClick = (value) => {
    this.setState({
      isExperienceMethodsById: value.id,
      Experience: value.name,
    });
  };
  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {
    if (this.props.formResponse !== prevProps.formResponse) {
      // if (this.props.formResponse !== null) {
      //   this.setState({
      //     modalopen: true,
      //     modalmsg: this.props.formResponse.result[0].Message,
      //     requestNo: this.props.formResponse.result[0].RequestNo,
      //   });
      // }
      this.props.navigation.navigate('ContactSuccess', {
        title: this.state.textTranslation.contactUs.HEADER,
      });
    }
  }

  DataSubmit = () => {
    const {
      firstName,
      lastName,
      Email,
      CountryCode,
      mobileNumber,
      Experience,
      Subject,
      message,
    } = this.state;
    if (
      firstName == '' ||
      lastName == '' ||
      Email == '' ||
      CountryCode == '' ||
      mobileNumber == '' ||
      Experience == '' ||
      Subject == '' ||
      message == ''
    ) {
      return;
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        Email: Email,
        countryCode: CountryCode,
        mobileNumber: mobileNumber,
        Experience: Experience,
        Subject: Subject,
        message: message,
      };
      this.props.ContactFormData(data);
      this.setState({loader: true})
      // this.props.navigation.navigate('AquariumSuccess');
    }
  };
  render() {
    const {
      appLanguage,
      textTranslation,
      experienceOptions,
      firstName,
      lastName,
      Email,
      mobileNumber,
      message,
      loader,
    } = this.state;
    const {navigation, productList} = this.props;
    const {flexDirection, textAlign} = transistionClassArray[appLanguage];
    return (
      <>
        <Fragment>
          <SafeAreaView style={globalStyles.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView}>
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
                    style={{
                      color: colors.white,
                      maxWidth: 200,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {textTranslation.contactUs.HEADER}
                  </Text>
                </View>
              }
              BodyFlex={0.8}
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
              RightData={
                <View style={transistionClassArray[appLanguage].flexDirection}>
                  <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <MaterialIcons
                      name={'search'}
                      size={32}
                      color={colors.white}
                      style={{paddingHorizontal: 15}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist')}
                    style={transistionClassArray[appLanguage].flexDirection}>
                    <FastImage
                      source={images.home.shape_5}
                      style={{
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                      resizeMode={'contain'}
                    />
                    <Badge
                      itemsCount={1}
                      appLanguage={appLanguage}
                      view="mainHeader"
                    />
                  </TouchableOpacity>
                </View>
              }
            />
            <KeyboardAwareScrollView enableOnAndroid={true}>
              <View style={{flex: 1}}>
                <ScrollView
                  style={[
                    styles.scrollView,
                    loader && {opacity: 0.5},
                  ]}
                  bounces={false}
                  showsVerticalScrollIndicator={false}>
                  <Text style={styles.topSellingTitleVIewDiscount}>
                    {'15% Off '}
                    <Text style={styles.topSellingTitleVIew}>
                      {' + Free Shipping'}
                    </Text>
                  </Text>
                  <FastImage
                    style={styles.prome1Size}
                    source={images.contactus.banner_2}
                    resizeMode={'cover'}
                  />
                  <Text style={styles.subText}>
                    {textTranslation.contactUs.FORMHEADING}
                  </Text>
                  <View style={styles.FormView}>
                    <Text>{textTranslation.contactUs.FORMSUBHEADING}</Text>

                    <View style={styles.RadioButtonView}>
                      {experienceOptions &&
                        experienceOptions.length > 0 &&
                        experienceOptions.map((item, index) => {
                          return (
                            <View
                              key={index}
                              style={[
                                styles.modalRows,
                                transistionClassArray[appLanguage]
                                  .flexDirection,
                              ]}>
                              <RadioButtonInput
                                obj={item}
                                index={index}
                                isSelected={
                                  this.state.isExperienceMethodsById === item.id
                                }
                                initial={-1}
                                borderWidth={2}
                                buttonColor={
                                  this.state.isExperienceMethodsById === item.id
                                    ? colors.red
                                    : colors.lightWarmGrey
                                }
                                buttonSize={15}
                                buttonOuterSize={25}
                                buttonWrapStyle={{paddingHorizontal: 5}}
                                onPress={() =>
                                  this.selectedExperienceByClick(item)
                                }
                              />
                              <TouchableOpacity
                                style={flexDirection}
                                onPress={() =>
                                  this.selectedExperienceByClick(item)
                                }>
                                <Text
                                  style={[
                                    styles.Radiotitle,
                                    {marginHorizontal: 5},
                                  ]}>
                                  {item.name + ' Experience'}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        })}
                    </View>
                    <View style={styles.elementBlock}>
                      <FormInput
                        style={[
                          transistionClassArray[appLanguage].flexDirection,
                          styles.nameTextBox,
                        ]}
                        returnKeyType="next"
                        onChangeText={(firstName) => this.setState({firstName})}
                        value={firstName}
                        placeholder={textTranslation.contactUs.FIRSTNAME}
                        placeholderTextColor={colors.black}
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
                        value={lastName}
                        placeholder={textTranslation.contactUs.LASTNAME}
                        placeholderTextColor={colors.black}
                      />
                    </View>
                    <View style={styles.elementBlock}>
                      <FormInput
                        style={[
                          transistionClassArray[appLanguage].flexDirection,
                          styles.nameTextBox,
                        ]}
                        returnKeyType="next"
                        keyboardType="email-address"
                        onChangeText={(Email) => this.setState({Email})}
                        value={Email}
                        placeholder={textTranslation.contactUs.EMAIL}
                        placeholderTextColor={colors.black}
                      />
                    </View>
                    <View style={styles.elementBlock}>
                      <View style={[styles.mobileCode, {flex: 0.4, width: 50}]}>
                        <RNPickerSelect
                          screenName="Aquarium"
                          onValueChange={(value) =>
                            this.setState({CountryCode: value})
                          }
                          returnKeyType="next"
                          isFrom={'small'}
                          items={[
                            {label: '+971', value: '+971'},
                            {label: '+91', value: '+91'},
                          ]}
                          useNativeAndroidPickerStyle={false}
                          style={{...pickerSelectStyles}}
                          placeholder={{label: 'Country Code'}}
                        />
                      </View>
                      <View style={{flex: 0.6, marginLeft: 10}}>
                        <FormInput
                          style={[
                            transistionClassArray[appLanguage].flexDirection,
                            styles.mobileTextBox,
                          ]}
                          onChangeText={(mobileNumber) =>
                            this.setState({mobileNumber})
                          }
                          keyboardType="phone-pad"
                          returnKeyType="next"
                          value={mobileNumber}
                          placeholder={textTranslation.contactUs.MOBILENUMBER}
                          placeholderTextColor={colors.black}
                        />
                      </View>
                    </View>
                    <View style={styles.elementBlock}>
                      <View style={[styles.SelectSubject]}>
                        <RNPickerSelect
                          screenName="Aquarium"
                          onValueChange={(value) =>
                            this.setState({Subject: value})
                          }
                          returnKeyType="next"
                          isFrom={'small'}
                          items={[
                            {
                              label: 'General Question',
                              value: 'General Question',
                            },
                            {
                              label: 'General Question',
                              value: 'General Question',
                            },
                          ]}
                          useNativeAndroidPickerStyle={false}
                          style={{...pickerSelectStyles}}
                          placeholder={{label: 'Select Subject'}}
                        />
                      </View>
                    </View>
                    <View style={styles.elementBlock}>
                      <FormInput
                        style={[
                          transistionClassArray[appLanguage].flexDirection,
                          styles.MessageBox,
                          {alignContent: 'flex-start'},
                        ]}
                        onChangeText={(message) => this.setState({message})}
                        returnKeyType="next"
                        value={message}
                        placeholder={textTranslation.contactUs.MESSAGE}
                        placeholderTextColor={colors.black}
                        multiline
                        numberOfLines={5}
                      />
                    </View>
                    <View style={styles.elementBlock}>
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
                          {textTranslation.contactUs.SUBMIT}
                        </Text>
                      </Button>
                    </View>
                  </View>
                  <View style={styles.infoView}>
                    <Text style={styles.HeadingInfo}>
                      {' '}
                      {textTranslation.contactUs.CONTACTINFO}
                    </Text>
                    <View style={styles.infoBox}>
                      <Text style={styles.TopHeadingInfo}>
                        {textTranslation.contactUs.CORPORATE}
                      </Text>
                      <View
                        style={[
                          flexDirection,
                          {marginTop: 20, marginVertical: 10},
                        ]}>
                        <MaterialIcons
                          name={'call'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.CONTACTNUM}
                        </Text>
                      </View>
                      <View style={[flexDirection, {marginVertical: 10}]}>
                        <MaterialIcons
                          name={'WhatsApp'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.WHATSAPPNUM}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.infoBox}>
                      <Text style={styles.TopHeadingInfo}>
                        {textTranslation.contactUs.DELIVERY}
                      </Text>
                      <View
                        style={[
                          flexDirection,
                          {marginTop: 20, marginVertical: 10},
                        ]}>
                        <MaterialIcons
                          name={'email'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.COMPANYEMAIL}
                        </Text>
                      </View>
                      <View style={[flexDirection, {marginVertical: 10}]}>
                        <MaterialIcons
                          name={'restore'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.TIMING}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.infoBox}>
                      <Text style={styles.TopHeadingInfo}>
                        {textTranslation.contactUs.COMPLAINS}
                      </Text>
                      <View
                        style={[
                          flexDirection,
                          {marginTop: 20, marginVertical: 10},
                        ]}>
                        <MaterialIcons
                          name={'feedback'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.COMPLAINEMAIL}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.infoBox}>
                      <Text style={styles.TopHeadingInfo}>
                        {textTranslation.contactUs.CARRER}
                      </Text>
                      <View
                        style={[
                          flexDirection,
                          {marginTop: 20, marginVertical: 10},
                        ]}>
                        <MaterialIcons
                          name={'call'}
                          size={20}
                          color={colors.red}
                        />
                        <Text style={styles.IconTextTitle}>
                          {textTranslation.contactUs.CAREEREMAIL}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {loader && (
                      <View style={styles.loader}>
                        <Spinner color="black" />
                      </View>
                  )}
                </ScrollView>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalopen}>
                  <TouchableOpacity
                    style={styles.centeredView}
                    onPress={() => {
                      this.setState({modalopen: false});
                    }}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        {this.state.modalmsg}
                      </Text>
                      <Text style={styles.modalText}>
                        {' Request No: ' + this.state.requestNo}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </Fragment>
      </>
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
    formResponse: state.Forms.cont_success,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    ContactFormData: (data) => dispatch(postContactFormData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsView);
