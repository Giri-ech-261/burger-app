import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import Gestures from 'react-native-touch-gestures';
import styles from './Styles';
import FastImage from "react-native-fast-image";
import * as images from "../../assets/images/map"
import PlaceHolderFastImage from './PlaceHolderFastImage'; 
type IProps = {
  navigation: any,
  routeName: String,
  id: Number,
  featureName: String,
  height: Number,
};

class BannerItem extends Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {isImageLoadDone : false};
  }
             
  render() {
    const {viewStyle, imageStyle} = this.props;
    // console.log('----------------------', this.props.scrollVal);
    return (
      <View
        onTouchStart={(e) => {
          this.props.isAutoScroll(false);
        }}
        style={[styles.containerStyle, viewStyle]}>
          <PlaceHolderFastImage
            style={[styles.imageStyle, imageStyle]}
            source={this.props.image}
            key={this.props.key}
          />
          {/* <View>
             
              <Image style={[StyleSheet.absoluteFill,  { opacity: (this.state.isImageLoadDone) ? 0 : 1,}]}
              source={images.userAccProfile.userNoFeed}
              resizeMode='center'
            />  
            <FastImage style={[styles.imageStyle, imageStyle, ]} source={{
              uri: this.props.image, priority: FastImage.priority.high }}
              onLoadStart={() => {
              this.setState({isImageLoadDone: false})
              console.log("onLoadStart");
               }}
              onLoadEnd={() => {
              this.setState({isImageLoadDone: true})
              console.log("onLoadEnd");
              }}
              />
          </View> */}
        {/* <ImageBackground
          source={{uri: this.props.image}}
          style={[styles.imageStyle, imageStyle]}>
        </ImageBackground> */}
      </View>
    );
  }
}

export default BannerItem;
