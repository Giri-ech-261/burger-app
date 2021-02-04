import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, Image, TouchableOpacity, Switch } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyle from '../../assets/styles/globalStyle';
import * as Progress from 'react-native-progress';
import AdvertizmentView from '../../components/AdvertizmentView';
import MyAccountMenu from '../../components/MyAccountMenu';
import MyAccountMenuHeader from '../../components/MyAccountMenuHeader';
// import DeviceInfo from "react-native-device-info";
// import VersionInfo from 'react-native-version-info';
import VersionCheck from 'react-native-version-check';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { navigate } from '../../navigation/RootNavigation';
import LoginView from '../../components/LoginView';

let buildVersion = null;
class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
        contextTypeLocalization._currentValue.translations._props.en :
          contextTypeLocalization._currentValue.translations._props.ar,
      isFaceChecked: false,
      isTouchChecked: false,
      isUserLogin: false,
      openLoginModal: false,
    }
  }
  isContactUsClicked(){
    this.props.navigation.navigate('ContactUs');
  }
  isItemClicked(id) {
    // if (id === 'myaddress') {
    //   navigate('ShippingAddress')
    // } else if('wishlist'){
    //   navigate('Wishlist')
    // }
  }

  isItemClickedGoTo(route){
    this.props.navigation.navigate(route);
  }
  
  toggleSwitch(isTicked) {
    this.setState({ isTouchChecked: !isTicked })
  }
  isValueChanged(id, isTicked) {
    if (id === 'touch') {
      this.setState({ isTouchChecked: !isTicked })
    } else if (id === 'face') {
      this.setState({ isFaceChecked: !isTicked })
    }
  }

  renderLoginUserView() {
    const { appLanguage, textTranslation, isFaceChecked, isTouchChecked, isUserLogin } = this.state;
    let getTranslations = textTranslation.myaccount;
    return (
      <>
        <View style={[styles.userProfileView, transistionClassArray[appLanguage].flexDirection]}>
          <View style={transistionClassArray[appLanguage].flexDirection}>
            <Image source={images.myaccount.profile} style={styles.userImageView} resizeMode={'contain'} />
            <View style={styles.userNameView}>
              <Text style={[transistionClassArray[appLanguage].textAlign, styles.userLableView]}>{getTranslations.HI} {'Zaffar Ahamad'}</Text>
              <Text style={[transistionClassArray[appLanguage].textAlign, styles.userLableDescView]}>{getTranslations.MANAGEPROFIEL}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={()=> navigate('MyProfile')}>
          <View style={{marginTop:10}}>
            <Text style={styles.userEditText}>{textTranslation.home.EDIT}</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.userOptioneView, transistionClassArray[appLanguage].flexDirection]}>
          <View>
            <View style={styles.userOptioneSubView}>
              <Image style={styles.optionViewImage} source={images.myaccount.orderhistory} resizeMode={'contain'} />
            </View>
            <Text style={[styles.optionViewTitle]}>{getTranslations.ORDERHISTORY}</Text>
          </View>
          <View>
            <View style={styles.userOptioneSubView}>
              <Image style={styles.optionViewImage} source={images.myaccount.autoship} resizeMode={'contain'} />
            </View>
            <Text style={styles.optionViewTitle}>{getTranslations.AUTOSHIP}</Text>
          </View>
          <View>
            <View style={styles.userOptioneSubView}>
              <Image style={styles.optionViewImage} source={images.myaccount.myreturns} resizeMode={'contain'} />
            </View>
            <Text style={styles.optionViewTitle}>{getTranslations.MYRETURN}</Text>
          </View>
          <TouchableWithoutFeedback onPress={()=>navigate('MyPetList')}>
          <View>
            <View style={styles.userOptioneSubView}>
              <Image style={styles.optionViewImage} source={images.myaccount.mypets} resizeMode={'contain'} />
            </View>
            <Text style={styles.optionViewTitle}>{getTranslations.MYPET}</Text>
          </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.graySeprator} />
        <View style={styles.tierView}>
          <View style={[transistionClassArray[appLanguage].flexDirection, styles.tierViewUpper]}>
            <Image style={styles.tierImageView} source={images.myaccount.petshoprewards} resizeMode={'contain'} />
            <View style={{ justifyContent: 'center', marginHorizontal: 5 }}>
              <Text style={styles.tierPertViewTitle}>{'Petshop Rewards'}</Text>
              <Text style={styles.tierPetTotleView}>{'Total: 1000 Points '}</Text>
            </View>
            <View style={{ justifyContent: 'center',   marginLeft: (appLanguage === 'ar') ? 0 : 5, marginRight: (appLanguage === 'ar') ? 5 : 0 }}>
              <Text style={styles.tierrewardAvailalbeText}>{'(1'} {getTranslations.REWARDAVAIL}{')'}</Text>
              <Text style={styles.tierrewardAvailalbePriceText}>{'(AED 888.00)'}</Text>
            </View>
          </View>
          <View style={styles.grayDarkSeprator} />
          <View style={[{ justifyContent: 'space-between', margin: 12, }, transistionClassArray[appLanguage].flexDirection]}>
            <View style={{ width: '80%' }}>
              <Text numberOfLines={2} style={styles.tierNextrewardText}>{'You are 100 points away from your next reward'}</Text>
              <View style={transistionClassArray[appLanguage].flexDirection}>
              <Progress.Bar progress={0.9} width={220} height={10} borderWidth={1} borderRadius={20} color={colors.orange} unfilledColor={colors.unfilledColor} borderColor={colors.white} style={{ marginTop: 10, }} />
              <Text style={styles.progressText}>{1000}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end',   marginBottom: -12 }}>
              <Image
                style={{ width: 50, height: 50 }}
                resizeMode={'contain'}
                source={images.myaccount.gift}
              />
            </View>
          </View>
        </View>
        <AdvertizmentView screenName={'myaccount'} />
        <View style={styles.grayDarkSepratorFull} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.myaddress} title={getTranslations.MYADDRESS} id={'myaddress'} isItemClicked={() => this.isItemClickedGoTo('ShippingAddress')} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.petshoprewards} title={getTranslations.PEYSHOP} id={'petshop'} isItemClicked={this.isItemClicked.bind(this)} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.wishlist} title={getTranslations.MYWISHLIST} id={'wishlist'} isItemClicked={() => this.isItemClickedGoTo('Wishlist')} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.myappointments} title={getTranslations.MYAPPOINTMENT} id={'appointment'} isItemClicked={this.isItemClicked.bind(this)} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.mypayments} title={getTranslations.MYPAYMENT} id={'payments'} isItemClicked={this.isItemClicked.bind(this)} />
        <MyAccountMenu withIcon={true} imagePath={images.myaccount.mycredits} title={getTranslations.MYCREDITS} id={'credit'} isItemClicked={this.isItemClicked.bind(this)} />
      </>
    )
  }
  renderLogOffUserView() {
    const { appLanguage, textTranslation, isFaceChecked, isTouchChecked, isUserLogin } = this.state;
    let getTranslations = textTranslation.myaccount;
    return (
      <>
        <View style={styles.offuserMainView}>
          <Text style={styles.offuserUpperText}>{getTranslations.LOGOFFUSERTEXTONE}</Text>
          <Text style={styles.offuserUpperText}>{getTranslations.LOGOFFUSERTEXTTWO}</Text>
          <Image style={styles.offUserImageView} resizeMode={'contain'} source={images.myaccount.iconuserprofile} />
          <TouchableOpacity onPress={()=> this.setState({isUserLogin: true})} >
          <View style={styles.offUserButtonView}>
            <Text style={styles.offUserLoginText}>{getTranslations.LOGIN}</Text>
          </View>
          </TouchableOpacity>
          <View style={transistionClassArray[appLanguage].flexDirection}>
            <Text style={styles.offuserDontAccountText}>{getTranslations.DONTACCOUNT}</Text>
            <TouchableOpacity onPress={()=>this.setState({openLoginModal: true})}>
              <Text style={styles.offuserDontSignUpText}>{getTranslations.SIGNUP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  isModalClose(close){
    this.setState({openLoginModal: close})
  }
  renderLoginModal(isVisible){
    if (isVisible) {
      return(
        <LoginView
        isVisible ={isVisible}
        isModalClose={this.isModalClose.bind(this)}/>
      )
    }
    return null
    
  }
  render() {
    const { appLanguage, textTranslation, isFaceChecked, isTouchChecked, isUserLogin, openLoginModal } = this.state;
    let getTranslations = textTranslation.myaccount;

    return (
      <SafeAreaView style={styles.safeAreaview}>
        <View style={styles.mainView}>
          <AppHeader
            barStyle={"light-content"}
            androidStatusBarColor={colors.THEME_COLOR}
            LeftFlex={.20}

            BodyData={<View style={[transistionClassArray[appLanguage].flexDirection, { justifyContent: 'center', alignSelf: 'center', }]}>
              <Text style={globalStyle.wishlistHeaderTitle}>
                {getTranslations.ACCOUNT}
              </Text>
            </View>}
            BodyFlex={.80}
            RightFlex={.0}
          />
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {(isUserLogin) ? this.renderLoginUserView() : this.renderLogOffUserView()}
            <MyAccountMenuHeader title={getTranslations.GENERAL} />
            <MyAccountMenu withIcon={false} title={getTranslations.ARTICLES} id={'articles'} isItemClicked={() => this.isItemClickedGoTo('Articles')} />
            <MyAccountMenu withIcon={false} title={getTranslations.STORE} id={'store'} isItemClicked={() => this.isItemClickedGoTo('StoreLocator')} />
            <MyAccountMenu withIcon={false} title={getTranslations.OFFERZONE} id={'offer'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenuHeader title={getTranslations.PREF} />
            <MyAccountMenu withIcon={false} title={getTranslations.STORE} id={'store_pref'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.CONTRY} id={'cnl'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.NOTIPREF} id={'notification_pref'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenuHeader title={getTranslations.SUPPORT} />
            <MyAccountMenu withIcon={false} title={getTranslations.TRACKORDER} id={'track_order'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.CONTACTUS} id={'contact_us'} isItemClicked={this.isContactUsClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.HELP} id={'help'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenuHeader title={getTranslations.MORE} />
            <MyAccountMenu withIcon={false} title={getTranslations.FAQ} id={'faq'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.SHIPPINGINFO} id={'shipping_info'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.CAREER} id={'career'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.TNC} id={'terms'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.RATE} id={'rate'} isItemClicked={this.isItemClicked.bind(this)} />
            <MyAccountMenu withIcon={false} title={getTranslations.SENDFEEDBACK} id={'feedback'} isItemClicked={this.isItemClicked.bind(this)} />
           {(isUserLogin) ?
           <>
           <MyAccountMenuHeader title={getTranslations.SETTINGS} />
            <MyAccountMenu withIcon={false} toggleView={true} isTicked={isTouchChecked} title={getTranslations.TOUCHID} id={'touch'} isValueChanged={this.isValueChanged.bind(this)} />
            <MyAccountMenu withIcon={false} toggleView={true} isTicked={isFaceChecked} title={getTranslations.FACEID} id={'face'} isValueChanged={this.isValueChanged.bind(this)} />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.logoutMainVIew}>
                <Text style={styles.logoutTextView}>{getTranslations.LOGOUT}</Text>
              </View>
            </TouchableOpacity>
           </> : null}

            <Text style={styles.appVersionTextView}>{getTranslations.APPVERSION} {(Platform.OS === 'android') ? VersionCheck.getCurrentVersion() : VersionCheck.getCurrentBuildNumber()}</Text>
          </ScrollView>
          {this.renderLoginModal(openLoginModal)}
        </View>
      </SafeAreaView>
    );
  }
}

export default MyAccount;
