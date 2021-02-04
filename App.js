/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import SliderView from './app/components/SliderView';
import AdvertizmentView from './app/components/AdvertizmentView';
import ProductView from './app/components/ProductView';
import CategoryView from './app/components/CategoryView';
import ServicesView from './app/components/ServicesView';

import * as globals from "./app/utills/globals";
import * as colors from "./app/assets/styles/color";
import * as images from "./app/assets/images/map";
import globalStyles from "./app/assets/styles/globalStyle";
import productData from "./productData.json";
import TopBrandsView from './app/components/TopBrandsView';
import FastImage from 'react-native-fast-image';
import ArticleView from './app/components/ArticleView';
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newArrivalData: productData.data.products,
      categoryData: category = [
        {
          id:1,
          name: 'Dog',
          image: require('./app/assets/images/home/combinedShape.png'),
          isSelected: false
        },
        {
          id:2,
          name: 'Cat',
          image: require('./app/assets/images/home/combinedShape_3.png'),
          isSelected: false
        },
        {
          id:3,
          name: 'Fish',
          image: require('./app/assets/images/home/combinedShape_5.png'),
          isSelected: false
        },
        {
          id:4,
          name: 'Bird',
          image: require('./app/assets/images/home/group62.png'),
          isSelected: false
        },
        {
          id:5,
          name: 'Horse',
          image: require('./app/assets/images/home/combinedShape_2.png'),
          isSelected: false
        },
        {
          id:6,
          name: 'Reptile',
          image: require('./app/assets/images/home/combinedShape_4.png'),
          isSelected: false
        },
        {
          id:7,
          name: 'Small Animal',
          image: require('./app/assets/images/home/fill36.png'),
          isSelected: false
        },

      ],
      topBrands:brands = [
        {
          id:1,
          name: 'Acana',
          image: require('./app/assets/images/home/bitmap_2.png'),
        },
        {
          id:2,
          name: 'Alpha',
          image: require('./app/assets/images/home/bitmap_6.png'),
        },
        {
          id:3,
          name: 'Holistic',
          image: require('./app/assets/images/home/bitmap_3.png'),
        },
        {
          id:4,
          name: 'Almo Nature',
          image: require('./app/assets/images/home/bitmap_4.png'),
        },
        {
          id:5,
          name: 'Whites',
          image: require('./app/assets/images/home/bitmap_5.png'),
        },
        {
          id:6,
          name: 'Royal Cannine',
          image: require('./app/assets/images/home/bitmap_7.png'),
        },
        

      ],
      serviceData:services = [
        {
          id:1,
          name: 'In-Store Grooming',
          image: require('./app/assets/images/home/group_2.png'),
        },
        {
          id:2,
          name: 'Mobile Grooming',
          image: require('./app/assets/images/home/groupCopy.png'),
        },
        {
          id:3,
          name: 'Relocate Pet',
          image: require('./app/assets/images/home/groupCopy2.png'),
        },
        {
          id:4,
          name: 'Aquarium Maintenance',
          image: require('./app/assets/images/home/groupCopy3.png'),
        }
      ],
      articleData:articles = [
        {
          id:1,
          name: 'Pet care start-ups in city offer home delivery, online vet consultation',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('./app/assets/images/home/article_1.jpg'),
        },
        {
          id:2,
          name: 'Virginia best pet care providers of 2020',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('./app/assets/images/home/article_2.jpg'),
        },
        {
          id:3,
          name: 'Pet care start-ups in city offer home delivery, online vet consultation',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('./app/assets/images/home/article_1.jpg'),
        },
        {
          id:4,
          name: 'Virginia best pet care providers of 2020',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('./app/assets/images/home/article_2.jpg'),
        }
      ],
    }
  }
  isCategorySelect(id, data){
    console.log("ID-->", id);
    const dataCopy = this.state.categoryData;
    const indexItem = dataCopy.findIndex((item) => item.id == id);
    for (let i = 0; i < dataCopy.length; i++) {
      if (indexItem == i) {
        dataCopy[indexItem].isSelected = true;
      }
      else {
        dataCopy[i].isSelected = false;
      }
    }
    this.setState({categoryData: dataCopy})
  }
  isTopBrandSelected (id, data) {
    console.log("TopBrnad-->"+data.name);
  }
  isServiceClick(id, data){
    console.log("Service name -->", data.name);
  }
  isArticleClick(id, data){
    console.log("Article name -->", data.name);
  }
  render(){
    return (
      <>
      <SafeAreaView  style={{flex:1}}>
        <ScrollView style = {{flex:1, backgroundColor: colors.lightWhite}} bounces={false}>
          <Text style={{ justifyContent:'center', alignSelf:'center'}}>{'15% Off  + Free Shipping'}</Text>
          <View style={{flex:1, marginTop:10, padding: 10, backgroundColor: colors.white}}>
          <SliderView />
          </View>
          <AdvertizmentView/>
          <View style={globalStyles.horizontalSeprator}/>
          <View style={{backgroundColor:colors.white, paddingTop:10, paddingBottom:15 }}>
            <View style={{paddingLeft:10, paddingRight:10, flexDirection: 'row', justifyContent:'space-between'}}>
              <Text style={globalStyles.leftSideTitle}>{'New Arrivals'}</Text>
              <Text style={globalStyles.rightSideTitle}>{'See All'}</Text>
            </View>
            <View style={{flex:1}}>
            <FlatList
              data={this.state.newArrivalData}
              renderItem={({ item, index }) => <ProductView data = {item}/>}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          </View>
          <View style={{paddingLeft:10, paddingRight:10, flexDirection: 'row', marginTop:10, justifyContent:'space-between'}}>
              <Text style={globalStyles.leftSideTitle}>{'Categories'}</Text>
              <Text style={globalStyles.rightSideTitle}>{'View All'}</Text>
          </View>
            <View style={{flex:1, padding:10}}>
              <FlatList
                data={this.state.categoryData}
                renderItem={({ item, index }) => <CategoryView data = {item} isSelected={this.isCategorySelect.bind(this)} /> }
                numColumns={4}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{backgroundColor:colors.white, paddingTop:10, paddingBottom:15 }}>
              <View style={{paddingLeft:10, paddingRight:10, flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style={globalStyles.leftSideTitle}>{'Top Brands'}</Text>
                <Text style={globalStyles.rightSideTitle}>{'View All'}</Text>
              </View>
              <View style={{flex:1, padding:10,}}>
                <FlatList
                  data={this.state.topBrands}
                  renderItem={({ item, index }) => <TopBrandsView data = {item} isTopBrandSelected = {this.isTopBrandSelected.bind(this)}/>}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <FastImage
                style={{ flex:1, width:globals.screenWidth - 30, height: 150, alignSelf: 'center'}} 
                source={images.home.group21}
                resizeMode={'contain'}/>
            </View>
            <View style={globalStyles.horizontalSepratorService}/>
            <View style={{backgroundColor:colors.white, paddingTop:10, paddingBottom:15 }}>
            <View style={{paddingLeft:10, paddingRight:10, flexDirection: 'row', justifyContent:'space-between'}}>
              <Text style={globalStyles.leftSideTitle}>{'Services'}</Text>
              <Text style={globalStyles.rightSideTitle}>{'View All Services'}</Text>
            </View>
            <View style={{flex:1, padding:10}}>
            <FlatList
              data={this.state.serviceData}
              renderItem={({ item, index }) => <ServicesView data = {item} isServiceClick={this.isServiceClick.bind(this)}/>}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          </View>
          <View style={{paddingLeft:10, paddingRight:10, flexDirection: 'row', marginTop:10, justifyContent:'space-between'}}>
              <Text style={globalStyles.leftSideTitle}>{'Pet Care Articles'}</Text>
              <Text style={globalStyles.rightSideTitle}>{'View All'}</Text>
          </View>
            <View style={{flex:1, padding:10}}>
              <FlatList
                data={this.state.articleData}
                renderItem={({ item, index }) => <ArticleView data = {item} isArticleClick={this.isArticleClick.bind(this)} /> }
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
        </ScrollView>
      </SafeAreaView>
      </>
  );
  }
};

