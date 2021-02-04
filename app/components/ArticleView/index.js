import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from './style';
class ArticleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
        <TouchableOpacity  onPress={()=>this.props.isArticleClick(data.id, data)}>
            <View style={styles.mainView}>
                <FastImage
                style={styles.articleImageView}
                source={data.image}
                resizeMode={'cover'}/>
                <Text numberOfLines={2} style={styles.articleTitleView}>{data.name}</Text>
                <Text numberOfLines={3} style={styles.articleDetailTextView}>{data.detail}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
export default ArticleView;
