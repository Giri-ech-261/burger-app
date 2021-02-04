import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button} from 'native-base';
import styles from './style';
import {LocalizationContext} from '../../localizations/LocalizationContext';
import {transistionClassArray} from '../../utills/TranslationClasses';
import AppHeader from '../../components/AppHeader';
import Badge from '../../components/BadgeView/Badge';
import * as colors from '../../assets/styles/color';
import ThankYou from '../../components/ThankYou';
import * as images from '../../assets/images/map';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const contextTypeLocalization = LocalizationContext;

export default class AquariumSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      title: props.route.params.title,
    };
  }
  continueShoppingBtnClick = () => {
    console.log('navigate');
    this.props.navigation.navigate('Services');
  };

  render() {
    const {appLanguage, textTranslation, title} = this.state;
    const {navigation} = this.props;
    return (
      <Fragment>
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
            BodyFlex={0.8}
            RightFlex={0.2}
            RightData={
              <View style={transistionClassArray[appLanguage].flexDirection}>
                  <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MaterialIcons name={'search'} size={32} color={colors.white} />
                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Wishlist')}
                  style={transistionClassArray[appLanguage].flexDirection}>
                  <FastImage
                    source={images.home.shape_5}
                    style={{
                      width: 28,
                      height: 28,
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
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
          <ThankYou BtnClick={this.continueShoppingBtnClick} />
        </SafeAreaView>
      </Fragment>
    );
  }
}
