import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from './style';
class TopBrandsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity  onPress={()=>this.props.isTopBrandSelected(data.id, data)}>
        <View  style={styles.mainView}>
          <FastImage
            style={styles.brandImageView}
            resizeMode={'center'}
            source={data.image}
          />
          {/* <Text>{data.item}</Text> */}
        </View>
      </TouchableOpacity>
    );
  }
}
export default TopBrandsView;
