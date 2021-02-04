import React from 'react';
import {View, Text} from 'react-native-animatable';
import ProductRating from '../../components/ProductRating';
import * as colors from '../../assets/styles/color';
import styles from './styles';
import {transistionClassArray} from '../../utills/TranslationClasses';

const ReviewBlock = (props) => {
    const {appLanguage} = props;
    const {flexDirection, textAlign} = transistionClassArray[appLanguage];
    return (
        <View style={[styles.reviewBlockContainer]}>
            <View style={[flexDirection]}>
                <ProductRating
                    disabled
                    maxStars={5}
                    rating={3}
                    fullStarColor={colors.rating}
                    starSize={18}
                    containerStyle={[{width: 60},appLanguage === 'ar' && {marginRight: 25}]}
                    buttonStyle={{marginHorizontal: 1}}
                    emptyStarColor={colors.rating}/>
            </View>
            <Text style={[styles.reviewHeader,textAlign]}>Very eligible product</Text>
            <Text style={[styles.durationText,textAlign]}>2 Months ago</Text>
            <Text style={[styles.description,textAlign]}>My sheltie always is a picky eater, but I thought I’d give it a try. Well,
                she absolutely loves it as well as my border collie. I had to sit there while she ate coaxing her to eat
                with hot water & cheese mixed in! The first time I gave it to her she gobbled it up & wanted more! I had
                to hide the bag so they wouldn’t get into it. Absolutely amazing food & so much healthier for them as
                well! You have a customer for life! Faster delivery than I was expecting!!!</Text>
        </View>
    );
};

export default ReviewBlock;
