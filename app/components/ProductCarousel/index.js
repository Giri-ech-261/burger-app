import React, {Component} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const ProductCarousel = (props) => {
  // onSwipe = (index) => {
  //     this.setState({currentIndex: index});
  // };

  const {productData, appLanguage, Tag} = props;
  return (
    <View style={styles.mainContainer}>
      <Swiper
        // key={slider.length}
        showsPagination={true}
        pagingEnabled
        autoplay={true}
        dot={<View style={styles.inActiveDotStyle} />}
        activeDot={<View style={styles.activeDotStyle} />}
        loop={true}
        paginationStyle={[
          {flexDirection: appLanguage === 'en' ? 'row' : 'row-reverse'},
          styles.paginationCustomStyle,
        ]}
        scrollEnabled={true}
        autoplayTimeout={10}
        style={{flexDirection: appLanguage === 'en' ? 'row' : 'row-reverse'}}
        // onIndexChanged={this.onSwipe}
        // style={{ flexDirection: preferredLanguage === 'en' ? 'row' : 'row-reverse' }}
      >
        {productData.map((item) => {
          return (
            <>
              {Tag && Tag}
              <FastImage
                style={styles.imageStyle}
                resizeMode="contain"
                key={item.id}
                source={item.image} // any image path
              />
            </>
          );
        })}
      </Swiper>
    </View>
  );
};

export default ProductCarousel;
