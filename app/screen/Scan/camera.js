import React, { PureComponent } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import * as colors from '../../assets/styles/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import { Card, CardItem, Button, Body } from 'native-base';
import * as images from "../../assets/images/map";
import FastImage from 'react-native-fast-image';
import {wp} from '../../theme';
import {LocalizationContext} from '../../localizations';
import { transistionClassArray } from '../../utills/TranslationClasses';
import { launchImageLibrary} from 'react-native-image-picker';
import { popToIndex } from '../../navigation/RootNavigation';

const contextTypeLocalization = LocalizationContext;

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        appLanguage: contextTypeLocalization._currentValue.appLanguage,
        textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
    };
  }



  render() {
    const {appLanguage, textTranslation} = this.state
    return (
      <View style={styles.container}>
        <View style={[styles.topOverlay, {position:'absolute', zIndex: 2}]}>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
              <TouchableOpacity onPress={() => popToIndex(this.props.navigation, 2)}>
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
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //   console.log(barcodes);
          // }}
        />
        <View style={{ position: 'absolute', bottom: 220, alignSelf:'center' }}>
            <Text style={[transistionClassArray[appLanguage].flexDirection,styles.placeholderText]}>{textTranslation.search.PLACEHOLDERTEXT}</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 130, alignSelf:'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} >
              <View style={styles.cameraoutlinebtn}><View style={styles.camerabtn}></View></View>
            {/*<MaterialCommunityIcons name={'circle-slice-8'} size={80} color={colors.white} />*/}
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', bottom: 30, alignSelf:'center' }} >
              <Card >
                <CardItem style={styles.actionBlock}>
                  <Body>
                    <View style={{flexDirection: 'row', alignSelf:'center', paddingHorizontal:10}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Barcode')}>
                          <FastImage
                                style={[styles.imageSize,{width: wp('30%')}]}
                                source={images.search.barcode}
                                resizeMode={'contain'}
                          />
                        </TouchableOpacity>
                      <FastImage
                            style={[styles.imageSize,{width: wp('30%')}]}
                            source={images.search.cameraRed}
                            resizeMode={'contain'}

                      />
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
                    <View style={{flexDirection: 'row', marginTop: -10, marginLeft:2,}}>
                      <Button transparent light style={{width: wp('30%')}} onPress={() => this.props.navigation.navigate('Barcode')}>

                        <Text style={[transistionClassArray[appLanguage].flexDirection, styles.actionText]}>
                          {textTranslation.search.SCANBARCODE}
                        </Text>
                      </Button>
                      <Button  transparent  light style={{width: wp('30%')}} >

                        <Text style={[transistionClassArray[appLanguage].flexDirection,styles.actionText, {paddingLeft:17,color:colors.red}]}>
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
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

}
