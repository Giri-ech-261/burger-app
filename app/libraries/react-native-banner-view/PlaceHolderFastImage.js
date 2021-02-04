import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native'
// import { Images, Metrics } from '../Themes'
import FastImage from 'react-native-fast-image'
import * as images from "../../assets/images/map"
import * as globals from "../../utills/globals";
import myclubevents from '../../containers/screens/MyClub/myclubevents';

export default class PlaceHolderFastImage extends Component {
  constructor(props){
    super(props)
    console.log("IMAGE URL BANNERVIEW-->", JSON.stringify(this.props));
    this.state = {
      loaded: false,
      style: StyleSheet.flatten(props.style)
    }
  }

  onLoadEnd = () =>{
    this.setState({loaded: true})
  }

  callGallery(){
    myclubevents.goToImageGalleryScreen()
  }
  render() {
    // const top = (this.state.style.height / 2) - 15
    // const left = this.state.style.width == 'auto' ? (globals.screenWidth / 2 - 30) : (this.state.style.width / 2 - 15)

    return <TouchableOpacity style={this.props.style} onPress={()=> this.callGallery()}>
           <View style={this.props.style}   >
      {/* {
        !this.state.loaded &&
        <View>
          <FastImage 
            source={images.userAccProfile.userNoFeed}
            style={this.props.style}
            resizeMode={'center'}
          />
           
        </View>
      }
      <FastImage 
        source={{
          uri: this.props.source, priority: FastImage.priority.high }}
        style={[this.props.style, this.state.loaded ? {} : {width: 0, height: 0}]}
        onLoadEnd={this.onLoadEnd.bind(this)}
      /> */}

          { !this.state.loaded && (
                <FastImage
                  style={[this.props.style]}  
                  source={images.userAccProfile.userNoFeed}
                  resizeMode={FastImage.resizeMode.contain}
                />  
              ) } 
              
                <FastImage
                  style={this.props.style}  
                  source={{uri: this.props.source, priority: FastImage.priority.high}}
                  onLoadEnd={this.onLoadEnd}
                  // resizeMode={FastImage.resizeMode.contain}
                  /> 
              </View>
            </TouchableOpacity>
  }
}