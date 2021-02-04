import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import * as colors from '../../assets/styles/color';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {hp, Images} from '../../theme';
import VideoMediaPlayer from '../VideoPlayer';
import {transistionClassArray} from '../../utills/TranslationClasses';

const AccordionView = (props) => {
    const {_updateSections, activeSections, section, appLanguage} = props;
    const {flexDirection, textAlign} = transistionClassArray[appLanguage];
    const _renderHeader = (section, index, isActive, sections) => {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor">
                <View style={[styles.contentHeaderContainer, !isActive && {marginVertical: hp('1%')}, isActive && {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                },flexDirection]}>
                    <Text style={styles.headerText}>{section.title}</Text>
                    <FastImage
                        style={styles.plusImage}
                        resizeMode="contain"
                        source={isActive ? Images.minus : Images.plus}
                    />
                </View>
            </Animatable.View>
        );
    };

    const _renderContent = (section, i, isActive, sections) => {
        const {content, extraData} = section;
        const {subTitle,subContent} = extraData ? extraData : false
        return (
            <Animatable.View
                duration={300}
                // transition="backgroundColor"
                style={[styles.contentContainer]}
                easing="ease-out"
                animation={isActive ? 'zoomIn' : false}
            >
                <Text style={[styles.sectionContentText,textAlign]}>
                    {content}
                </Text>
                {extraData && <View style={styles.extraDataContainer}>
                    <Text style={styles.subTitleText}>{subTitle}</Text>
                    <FlatList
                        data={subContent}
                        inverted={appLanguage === 'ar'}
                        renderItem={({item}) => <View style={[styles.subContentContainer,flexDirection]}><View style={[styles.dot,appLanguage === 'ar' && {marginLeft: 5}]}></View><Text style={[styles.subContentItem, textAlign]}>{item}</Text></View>}/>
                </View>}
                <VideoMediaPlayer/>
            </Animatable.View>
        );
    };

    return (
        <Accordion
            sections={section}
            underlayColor={'transparent'}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
        />
    );
};
export default AccordionView;
