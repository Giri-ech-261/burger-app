import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
  View,
  Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import FastImage from "react-native-fast-image";
import styles from './style';
import * as globals from '../../utills/globals';

// import ss from '../../assets/images/home';
class CategoryView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center' }} onPress={()=>this.props.isSelected(data.id, data)}>
        <View style={styles.mainView}>
            <FastImage
            style={styles.categoryImageView}
            resizeMode={'contain'}
            source={data.image}
            tintColor={(data.isSelected) ? colors.red : colors.categoryUnSelected}
            />
        </View>
        <Text style={[styles.categoryTitle, {color: (data.isSelected) ? colors.red : colors.black}]}>{data.name}</Text>
        <View style={{height: 20}}></View>
        </TouchableOpacity>
    );
  }
}
export default CategoryView;
