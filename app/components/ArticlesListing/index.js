import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from './style';
import {BASE_MEDIA_URL,BASE_URL,BASE_TEST_URL} from "../../services/Config";
import * as globals from '../../utills/globals';
import * as colors from '../../assets/styles/color';
import * as images from "../../assets/images/map";
import moment from 'moment';

class ArticlesListing extends Component {
  constructor(props) {
    super(props);
  }

  renderImage =(imageUrl) => {
      return  <Image 
        style={styles.articleImageView} 
        source={{uri : BASE_TEST_URL + imageUrl[0]}}
        resizeMode={'cover'}
      />
  }

  isEmpty = (str) => {
    return (!str || 0 === str.length);
  }

  render() {
    const {data} = this.props;
    return (
        <TouchableOpacity  onPress={()=>this.props.isArticleClick(data.id, data)}>
            <View style={styles.mainView}>
                {this.renderImage(data.largeImageURLs)}
                <View style={{padding:10, marginHorizontal:15}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.articleDateText}>{moment(data.creationDate).format('DD MMMM, YYYY')}</Text>
                    {!this.isEmpty(data.x_articleAuthor) && 
                      <Text style={styles.articleDateText}>{' by '}{data.x_articleAuthor}</Text>
                    }
                  </View>
                  <Text style={styles.articleTitleView}>{data.displayName}</Text>
                  {data.description && 
                    <Text numberOfLines={3} style={styles.articleDetailTextView}>{data.description}</Text>
                  }
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
export default ArticlesListing;
