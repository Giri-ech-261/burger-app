import React, { Component } from "react";
 
import * as colors from "../../assets/styles/color";
import FastImage from "react-native-fast-image";
import styles from './style';
class TabBarIconsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FastImage
        style={styles.iconStyle}
        source={this.props.icon}
        resizeMode={'contain'}
        tintColor={(this.props.focused) ? colors.red : colors.bottomTabInActive}/>
    );
  }
}
export default TabBarIconsView;
