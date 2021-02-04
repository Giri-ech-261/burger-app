
import React, { Component } from "react";

import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import { Card, CardItem, Button, Body } from 'native-base';

import QRCodeScanner from "react-native-qrcode-scanner";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import {wp} from '../../theme';
import * as images from "../../assets/images/map";
import FastImage from 'react-native-fast-image';
import {LocalizationContext} from '../../localizations';
import { transistionClassArray } from '../../utills/TranslationClasses';
import styles from './styles'
import * as colors from '../../assets/styles/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary} from 'react-native-image-picker';
import { popToIndex } from "../../navigation/RootNavigation";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const iconScanColor = "blue";

const contextTypeLocalization = LocalizationContext;

export default class Barcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage,
        textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }

  onSuccess(e) {
    console.log(e);
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  render() {
    const {appLanguage, textTranslation} = this.state
    return (
      <View>
        <View style={[styles.topOverlay, {position:'absolute', zIndex: 2}]}>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
              <TouchableOpacity onPress={() => popToIndex(this.props.navigation)}>
              <FastImage
                  style={[styles.imageSize]}
                  source={images.barcode.Back_btn}
                  resizeMode={'contain'}
              />
              </TouchableOpacity>
            {/*<MaterialCommunityIcons name={'arrow-left'} size={30} color={colors.white} onPress={() => this.props.navigation.navigate('Search')}/>*/}
          </View>
          <View style={{flexDirection: 'column', position:"absolute", right: 0, marginRight:60}}>
              <FastImage
                  style={[styles.imageSize]}
                  source={images.barcode.Light}
                  resizeMode={'contain'}
              />
            {/*<MaterialCommunityIcons name={'flash-outline'} size={30} color={colors.white} />*/}
          </View>
          <View style={{flexDirection: 'column', position:"absolute", right: 0, marginRight:20}}>
              <FastImage
                  style={[styles.imageSize]}
                  source={images.barcode.Help_btn}
                  resizeMode={'contain'}
              />
            {/*<MaterialCommunityIcons name={'help-circle-outline'} size={30} color={colors.white}/>*/}
          </View>
        </View>
      <QRCodeScanner
        showMarker
        onRead={this.onSuccess.bind(this)}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.bodyBlock}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                <Icon
                  size={SCREEN_WIDTH * 0.61}
                  color={iconScanColor}
                />
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={this.makeSlideOutTranslation(
                    "translateY",
                    SCREEN_WIDTH * -0.60
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} >
              <Card >
                <CardItem style={styles.actionBlock}>
                  <Body>
                    <View style={{flexDirection: 'row', alignSelf:'center', paddingHorizontal: 10}}>
                      <FastImage
                            style={[styles.imageSize,{width: wp('30%')}]}
                            source={images.search.barcodeRed}
                            resizeMode={'contain'}
                      />
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
                      <FastImage
                            style={[styles.imageSize,{width: wp('30%')}]}
                            source={images.search.camera}
                            resizeMode={'contain'}
                            onPress={() => this.props.navigation.navigate('Camera')}
                      />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => launchImageLibrary(
                          {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                          },
                          (response) => {
                            console.log(response)
                          },
                          )}>
                      <FastImage
                            style={[styles.imageSize,{width: wp('30%')}]}
                            source={images.search.uploadImage}
                            resizeMode={'contain'}
                      />
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', textAlign:'center', marginTop: -10, marginLeft:2,}}>
                      <Button transparent light style={{width: wp('30%')}}>

                        <Text style={[transistionClassArray[appLanguage].flexDirection, styles.actionText, {color:colors.red}]}>
                          {textTranslation.search.SCANBARCODE}
                        </Text>
                      </Button>
                      <Button  transparent  light style={{width: wp('30%')}} onPress={() => this.props.navigation.navigate('Camera')}>

                        <Text style={[transistionClassArray[appLanguage].flexDirection,styles.actionText, {paddingLeft:17}]}>
                          {textTranslation.search.CAMERA}
                        </Text>
                      </Button>
                      <Button transparent  light style={{width: wp('30%')}} onPress={() => launchImageLibrary(
                          {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                          },
                          (response) => {
                            console.log(response)
                          },
                        )}>

                        <Text style={[transistionClassArray[appLanguage].flexDirection,styles.actionText]}>
                          {textTranslation.search.UPLOADIMAGE}
                        </Text>
                      </Button>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </View>
        }
      />
      </View>
    );
  }
}


