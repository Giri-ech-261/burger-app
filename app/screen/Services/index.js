import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
  Platform,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as colors from '../../assets/styles/color';
import ServicesView from '../../components/ServicesView';
import {LocalizationContext} from '../../localizations';
import FastImage from 'react-native-fast-image';
import {transistionClassArray} from '../../utills/TranslationClasses';
import globalStyles from '../../assets/styles/globalStyle';
import Feather from 'react-native-vector-icons/Feather';
import {services} from './serviceData';
Feather.loadFont();
const contextTypeLocalization = LocalizationContext;
import * as images from '../../assets/images/map';
import {goBack, navigate} from '../../navigation/RootNavigation';
import Badge from '../../components/BadgeView/Badge';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      ServiceData: services,
    };
    this.animatedValue = new Animated.Value(0);
    this.translateY = {};
    this.diffClamp = Animated.diffClamp(this.animatedValue, 0, 80);
  }

  componentWillMount() {
    this.translateY = this.diffClamp.interpolate({
      inputRange: [0, 80],
      outputRange: [0, -80],
      extrapolate: 'clamp',
    });
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      // this.props.getProductList();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  isServiceClick(id, data) {
    console.log('Service name -->', data.name);
    // navigate('StoreList', {name: data.name});
    if (data.name === 'Aquarium Maintenance') {
      navigate('Aquarium', {title: data.name});
    } else if (data.name === 'Relocate Pet') {
      navigate('PetRelocation', {title: data.name});
    }
  }

  render() {
    const {appLanguage, textTranslation, ServiceData} = this.state;
    const {navigation} = this.props;
    const {flexDirection, textAlign} = transistionClassArray[appLanguage];
    return (
      <Fragment>
        <SafeAreaView style={globalStyles.safeAreaViewHeader} />
        <SafeAreaView>
          <Animated.View
            style={{
              transform: [{translateY: this.translateY}],
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 80,
            }}>
            <AppHeader
              barStyle={'light-content'}
              androidStatusBarColor={colors.THEME_COLOR}
              LeftData={
                <TouchableOpacity onPress={() => goBack()}>
                  <MaterialIcons
                    name={'arrow-back'}
                    size={30}
                    color={colors.white}
                  />
                </TouchableOpacity>
              }
              BodyData={
                <View style={styles.ServiceHeader}>
                  <Text style={styles.HeaderText}>Services</Text>
                </View>
              }
              RightData={
                <View style={flexDirection}>
                  <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <MaterialIcons
                      name={'search'}
                      size={30}
                      color={colors.white}
                      style={{paddingHorizontal: 15}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist')}
                    style={flexDirection}>
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
          </Animated.View>

          <ScrollView
            style={{
              position: 'relative',
              paddingTop: 60,
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.animatedValue}}},
            ])}
            scrollEventThrottle={16}>
            <View style={[styles.serviceHeaderBlock, flexDirection]}>
              <Text style={styles.serviceHeading}>Book Your Services Now</Text>
            </View>
            <View style={styles.categoryFlatViewMain}>
              <FlatList
                data={ServiceData}
                renderItem={({item, index}) => (
                  <ServicesView
                    data={item}
                    isServiceClick={this.isServiceClick.bind(this)}
                  />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={[styles.serviceHeaderBlock, flexDirection]}>
              <TouchableOpacity
                style={[
                  styles.UpcomingBtn,
                  {height: Platform.OS === 'ios' ? 40 : 40},
                ]}>
                <View>
                  <Text style={styles.UpcomingTextView}>
                    Upcoming Appoinments
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pastcomingBtn,
                  {height: Platform.OS === 'ios' ? 40 : 40},
                ]}>
                <View>
                  <Text style={styles.pastcomingTextView}>
                    Past Appoinments
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.icon_shape}>
              <FastImage
                style={{width: 40, height: 48}}
                source={images.service.shape_service}
                resizeMode={'contain'}
              />
            </View>
            <View>
              <Text style={styles.iconBottomText}>
                You don't have any upcoming appoinment at the momment
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Services;
