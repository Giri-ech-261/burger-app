import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FastImage from "react-native-fast-image";
import styles from './style';
import * as colors from "../../assets/styles/color";
import * as globals from '../../utills/globals';

AntDesign.loadFont();
class SubCategoryView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
        <TouchableOpacity onPress={()=>this.props.isSelected(data.id, data)}>
          <View style={styles.mainView}>
            <View style={styles.catCard}>
            <FastImage 
                style={{height:50,widht : 50}}
                source={data.image}
                // tintColor={(data.isSelected) ? colors.red : colors.categoryUnSelected}
                resizeMode={'contain'}/>
                <Text style={{fontSize:globals.font_12, fontFamily:globals.ProximaNovaMedium, color: colors.black, textAlign : 'center',marginTop:5 }}>{data.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}
export default SubCategoryView;
