import React, { Component, Fragment } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import sampleData from './src/sampleData';
import * as globals from '../../utills/globals';
import FastImage from 'react-native-fast-image';
import * as images from "../../assets/images/map";
import Badge from '../../components/BadgeView/Badge';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import TopBrandsView from '../../components/TopBrandsView';
import styles from './style';
import FreeDiscountView from '../../components/FreeDiscountView';
import SectionListModule from 'react-native-sectionlist-contacts'

class ShopByBrands extends Component {
  constructor(props){
    super(props);

    this.state ={
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      topBrands:brands = [
        {
          id:1,
          name: 'Acana',
          image: require('../../assets/images/home/bitmap_2.png'),
        },
        {
          id:2,
          name: 'Alpha',
          image: require('../../assets/images/home/bitmap_6.png'),
        },
        {
          id:3,
          name: 'Holistic',
          image: require('../../assets/images/home/bitmap_3.png'),
        },
        {
          id:4,
          name: 'Almo Nature',
          image: require('../../assets/images/home/bitmap_4.png'),
        },
        {
          id:5,
          name: 'Whites',
          image: require('../../assets/images/home/bitmap_5.png'),
        },
        {
          id:6,
          name: 'Royal Cannine',
          image: require('../../assets/images/home/bitmap_7.png'),
        },
      ],
      dataArray: sampleData
    }
  }

  isTopBrandSelected (id, data) {
    console.log("TopBrnad-->"+data.name);
  }

  render() {
    const {appLanguage,textTranslation,topBrands} = this.state;
    const {navigation} = this.props;

    return (
      <>
      <Fragment>
        <SafeAreaView style={globalStyles.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView} >
          <HeaderWithSearch appLanguage={appLanguage} navigation={navigation}/>
          <View style={{flex:1}}>
            <FreeDiscountView/>
            <View style={styles.TopBrandsMainView}>
              <View style={[styles.headerBlock, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={globalStyles.leftSideTitle}>{textTranslation.home.TOPBRANDS}</Text>
              </View>
              <FlatList
                data={topBrands}
                renderItem={({ item, index }) => <TopBrandsView data = {item} isTopBrandSelected = {this.isTopBrandSelected.bind(this)}/>}
                horizontal
                inverted={appLanguage === 'ar' ? true : false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <SectionListModule
                ref={s=>this.sectionList=s}
                sectionListData={this.state.dataArray}
                //sectionHeight={30}
                letterViewStyle ={styles.sectionHeaderContainer}
                sectionItemTextStyle = {styles.listItemLabel}
                sectionHeaderTextStyle = {styles.sectionHeaderLabel}
                initialNumToRender={this.state.dataArray.length}
                showsVerticalScrollIndicator={false}
                SectionListClickCallback={(item,index,section)=>{
                    console.log('---SectionListClickCallback--:',item,index)
                }}
                otherAlphabet="#"
            />
          </View>
        </SafeAreaView>
      </Fragment>
    </>
    );
  }
}


export default ShopByBrands;