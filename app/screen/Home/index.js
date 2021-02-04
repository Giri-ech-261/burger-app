import React, { Component, Fragment } from 'react'
import { SafeAreaView, ScrollView, View, Text, FlatList, Platform, Animated } from 'react-native';
import SliderView from '../../components/SliderView';
import AdvertizmentView from '../../components/AdvertizmentView';
import ProductView from '../../components/ProductView';
import CategoryView from '../../components/CategoryView';
import ServicesView from '../../components/ServicesView';
import TopBrandsView from '../../components/TopBrandsView';
import ArticleView from '../../components/ArticleView';
import FormInput from '../../components/FormInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import SplashScreen from 'react-native-splash-screen'

import * as globals from "../../utills/globals";
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import globalStyles from "../../assets/styles/globalStyle";
import styles from './style';
import productData from "../../../productData.json";
import FastImage from 'react-native-fast-image';
import MyPetView from '../../components/MyPetView';
import recentOrderData from '../../../recentOrderData.json';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import RecentOrderView from '../../components/RecentOrderView';
import AutoshipView from '../../components/AutoshipView';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../navigation/RootNavigation';
import { firebase } from '../../firebase/config';
import Badge from '../../components/BadgeView/Badge';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import { FlatGrid } from 'react-native-super-grid';
import {connect} from "react-redux";
import {adminLoginRequest, adminLoginFail} from '../../redux/AdminLogin/actions';

const contextTypeLocalization = LocalizationContext;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      newArrivalData: productData.data.products,
      searchText: '',
      categoryData: [
        {
          id: 1,
          name: 'Dog',
          image: require('../../assets/images/home/combinedShape.png'),
          isSelected: false
        },
        {
          id: 2,
          name: 'Cat',
          image: require('../../assets/images/home/combinedShape_3.png'),
          isSelected: false
        },
        {
          id: 3,
          name: 'Fish',
          image: require('../../assets/images/home/combinedShape_5.png'),
          isSelected: false
        },
        {
          id: 4,
          name: 'Bird',
          image: require('../../assets/images/home/group62.png'),
          isSelected: false
        },
        {
          id: 5,
          name: 'Horse',
          image: require('../../assets/images/home/combinedShape_2.png'),
          isSelected: false
        },
        {
          id: 6,
          name: 'Reptile',
          image: require('../../assets/images/home/combinedShape_4.png'),
          isSelected: false
        },
        {
          id: 7,
          name: 'Small Animal',
          image: require('../../assets/images/home/fill36.png'),
          isSelected: false
        },

      ],
      topBrands: [
        {
          id: 1,
          name: 'Acana',
          image: require('../../assets/images/home/bitmap_2.png'),
        },
        {
          id: 2,
          name: 'Alpha',
          image: require('../../assets/images/home/bitmap_6.png'),
        },
        {
          id: 3,
          name: 'Holistic',
          image: require('../../assets/images/home/bitmap_3.png'),
        },
        {
          id: 4,
          name: 'Almo Nature',
          image: require('../../assets/images/home/bitmap_4.png'),
        },
        {
          id: 5,
          name: 'Whites',
          image: require('../../assets/images/home/bitmap_5.png'),
        },
        {
          id: 6,
          name: 'Royal Cannine',
          image: require('../../assets/images/home/bitmap_7.png'),
        },


      ],
      serviceData: [
        {
          id: 1,
          name: 'In-Store Grooming',
          image: require('../../assets/images/home/group_2.png'),
        },
        {
          id: 2,
          name: 'Mobile Grooming',
          image: require('../../assets/images/home/groupCopy.png'),
        },
        {
          id: 3,
          name: 'Relocate Pet',
          image: require('../../assets/images/home/groupCopy2.png'),
        },
        {
          id: 4,
          name: 'Aquarium Maintenance',
          image: require('../../assets/images/home/groupCopy3.png'),
        }
      ],
      articleData: articles = [
        {
          id: 1,
          name: 'Pet care start-ups in city offer home delivery, online vet consultation',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('../../assets/images/home/article_1.jpg'),
        },
        {
          id: 2,
          name: 'Virginia best pet care providers of 2020',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('../../assets/images/home/article_2.jpg'),
        },
        {
          id: 3,
          name: 'Pet care start-ups in city offer home delivery, online vet consultation',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('../../assets/images/home/article_1.jpg'),
        },
        {
          id: 4,
          name: 'Virginia best pet care providers of 2020',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, lacus sit amet vestibulum finibus, urna massa scelerisque nibh, ',
          image: require('../../assets/images/home/article_2.jpg'),
        }
      ],
      petData: [
        {
          id: 1,
          name: 'Rokey',
          image: require('../../assets/images/home/dog.png'),
          isSelected: true
        },
        {
          id: 2,
          name: 'Bella',
          image: require('../../assets/images/home/cat.png'),
          isSelected: false
        },
        {
          id: 3,
          name: 'Ponny',
          image: require('../../assets/images/home/horse.png'),
          isSelected: false
        }

      ],
      selectedPetName: 'Rokey',
      recentData: [
        {
          "id": "5ed51f10c68c3400101eaa38",
          "product_name": "Vets Kitchen",
          "pet_name": 'Rokey',
          "order_schedule": '2',
          "product_descriptions": "Salmon for Small & Mini Sensitive Skin Puppy Kitchen",
          "image": [
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            },
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            },
            {
              "url": require('../../assets/images/home/p1.jpeg')
            }
          ],
          "price": "115.49",
          "actual_price": "269.99",
          "discount_price": "90.03",
          "rating": 5,
          "special_offer": "yes",
          "total_rating_count": "2300",
          "order_day": "3"
        },
        {
          "id": "5ec669e238d8cc0011ecb84b",
          "product_name": "Kit Cat",
          "pet_name": 'Bella',
          "order_schedule": '4',
          "product_descriptions": "Air Dried Dog Diet - Beef & Venison",
          "image": [
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            },
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            }
          ],
          "price": "138.38",
          "actual_price": "",
          "discount_price": "160.28",
          "rating": 4,
          "special_offer": "no",
          "total_rating_count": "224453408",
          "isSelected": false,
          "order_day": "5"
        },
        {
          "id": "5ed51f10c68c3400101eaa35",
          "product_name": "Vets Kitchen",
          "pet_name": 'Ponney',
          "order_schedule": '3',
          "product_descriptions": "Salmon for Small & Mini Sensitive Skin Puppy Kitchen",
          "image": [
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            },
            {
              "url": require('../../assets/images/home/p1.jpeg')
            }
          ],
          "price": "115.49",
          "actual_price": "269.99",
          "discount_price": "90.03",
          "rating": 3,
          "special_offer": "yes",
          "total_rating_count": "2300000",
          "isSelected": false,
          "order_day": "4"
        },
        {
          "id": "5ec669e238d8cc0011ecb844",
          "product_name": "Kit Cat",
          "pet_name": 'Stella',
          "order_schedule": '4',
          "product_descriptions": "Air Dried Dog Diet - Beef & Venison",
          "image": [
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            },
            {
              "url": require('../../assets/images/home/p1.jpeg')
            },
            {
              "url": require('../../assets/images/home/p2.jpeg')
            }
          ],
          "price": "138.38",
          "actual_price": "",
          "discount_price": "160.28",
          "rating": 2,
          "special_offer": "no",
          "total_rating_count": "2300000",
          "isSelected": false,
          "order_day": "6"
        }
      ],
      autoshipData: [],
    }
    this.animatedValue = new Animated.Value(0);
    this.translateY = {}
    this.diffClamp = Animated.diffClamp(this.animatedValue, 0, 80)

  }
  componentWillMount() {
    this.translateY = this.diffClamp.interpolate({
      inputRange: [0, 80],
      outputRange: [0, -80],
      extrapolate: 'clamp'
    });
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      // this.props.getProductList();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
  isCategorySelect(id, data) {
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
    this.setState({ categoryData: dataCopy })
    console.log(data, 'data')
    this.props.navigation.navigate('ProductList', { screenName: "CLP", title: data.name })
  }
  isAutoShipSelected(id, data) {
    console.log("Autoship-->", id);
  }
  isOrderSelected(id, data) {
    console.log("Order name-->", id);
  }
  isProductClick(id, data) {
    console.log("Product Click-->" + id);
    navigate('productDetail');
  }
  isTopBrandSelected(id, data) {
    console.log("TopBrnad-->" + data.name);
  }
  isServiceClick(id, data) {
    console.log("Service name -->", data.name);
  }
  isArticleClick(id, data) {
    console.log("Article name -->", data.name);
  }
  isPetClick(id, data) {
    console.log("Pet name -->", data.name);
    if (data.name === 'Add A Pet') {
      navigate('AddPet', { isFrom: 'add', data: {} })
    } else {
      const dataCopy = this.state.petData;
      const indexItem = dataCopy.findIndex((item) => item.id == id);
      for (let i = 0; i < dataCopy.length; i++) {
        if (indexItem == i) {
          dataCopy[indexItem].isSelected = true;
        }
        else {
          dataCopy[i].isSelected = false;
        }
      }
      this.setState({ petData: dataCopy, selectedPetName: (id === 0) ? '' : data.name })
    }
   
  }
  isMakeWishList(id, data) {
    console.log("Wishlist name -->", data.name);
    const dataCopy = this.state.newArrivalData;
    const indexItem = dataCopy.findIndex((item) => item.id == id);
    for (let i = 0; i < dataCopy.length; i++) {
      if (indexItem == i) {
        dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
      }
    }
    this.setState({ newArrivalData: dataCopy })
  }
    callAdminAPI(){
       this.props.adminLogin();
    }
    componentDidMount() {
    SplashScreen.hide();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      this.callAdminAPI();
     
    });
    let data = {};
    data.id = 0;
    data.name = 'Add A Pet'
    this.state.petData.push(data);
    let tempRecentData = this.state.recentData;
    for (let index = 0; index < tempRecentData.length; index++) {
      if (tempRecentData[index].image.length > 4) {
        tempRecentData[index].viewmore = true;
        for (let j = 0; j < tempRecentData[index].image.length; j++) {
          if (tempRecentData[index].image.length > 4) {
            // console.log("More Images-->", tempRecentData[index].image[3].url);
            tempRecentData[index].fourImage = true
          }
          else {
            tempRecentData[index].fourImage = false
          }
        }
      } else {
        tempRecentData[index].viewmore = false;
      }
    }
    this.setState({ recentData: tempRecentData, autoshipData: tempRecentData })
    console.log("recentData-->", this.state.recentData);

    firebase.database().ref('/home/A_Spot_Banners').once('value')
      .then(snapshot => {
        const banners = snapshot.val();
        this.setState({ bannersList: banners })
      });
  }

  render() {
    const { navigation } = this.props;
    const { appLanguage, textTranslation, selectedPetName, searchText, recentData, autoshipData, petData, newArrivalData, categoryData, topBrands, serviceData, articleData, bannersList } = this.state;
    return (
      <>
        <Fragment>
          <SafeAreaView style={globalStyles.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView}>
            <Animated.View style={{
              transform: [
                { translateY: this.translateY },
              ],
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 80
            }}>
              <HeaderWithSearch appLanguage={appLanguage} navigation={navigation} />
            </Animated.View>
            <ScrollView style={styles.scrollView} bounces={false} showsVerticalScrollIndicator={false} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.animatedValue } } }])} scrollEventThrottle={16}>
              <Text style={styles.topSellingTitleVIewDiscount}>{'15% Off '}
                <Text style={styles.topSellingTitleVIew}>{' + Free Shipping'}</Text>
              </Text>
              <View style={styles.silderMainView}>
                <SliderView banners={bannersList} />
              </View>
              <View style={[styles.categoryBlockHeader, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={globalStyles.leftSideTitle}>{textTranslation.home.RECENTORDER}</Text>
                <Text style={globalStyles.rightSideTitle}>{textTranslation.home.SEEALL}</Text>
              </View>
              <View style={styles.orderAutoshipFlatViewMain}>
                <FlatList
                  data={recentData}
                  renderItem={({ item, index }) => <RecentOrderView data={item} isOrderSelected={this.isOrderSelected.bind(this)} />}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  inverted={appLanguage === 'ar' ? true : false}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <View style={[globalStyles.horizontalSeprator, { marginTop: 15, marginLeft: 15, marginRight: 15 }]} />
              <View style={[styles.categoryBlockHeader, transistionClassArray[appLanguage].flexDirection]}>
                <View style={[transistionClassArray[appLanguage].flexDirection]}>
                  <Text style={globalStyles.leftSideTitle}>{textTranslation.home.YOUR} </Text>
                  <FastImage
                    source={images.home.autoship_3}
                    style={styles.autoshipImage}
                    resizeMode={'contain'} />
                  <Text style={globalStyles.leftSideTitle}> {textTranslation.home.ORDERS}</Text>
                </View>
                <Text style={globalStyles.rightSideTitle}>{textTranslation.home.SEEALL}</Text>
              </View>
              <View style={styles.orderAutoshipFlatViewMain}>
                <FlatList
                  data={autoshipData}
                  renderItem={({ item, index }) => <AutoshipView data={item} isAutoShipSelected={this.isOrderSelected.bind(this)} />}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  inverted={appLanguage === 'ar' ? true : false}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <View style={styles.myPetMainView}>
                <View style={[transistionClassArray[appLanguage].flexDirection]}>
                  <FlatList
                    data={petData}
                    renderItem={({ item, index }) => <MyPetView data={item} isPetClick={this.isPetClick.bind(this)} />}
                    horizontal
                    inverted={appLanguage === 'ar' ? true : false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()} />
                </View>
                <View style={[styles.headerBlock, transistionClassArray[appLanguage].flexDirection]}>
                  <Text style={globalStyles.leftSideTitle}>{textTranslation.home.RECOMMEND}
                    <Text style={{ color: colors.red }}> {selectedPetName}</Text>
                  </Text>
                  <Text style={globalStyles.rightSideTitle}>{textTranslation.home.SEEALL}</Text>
                </View>
                <View style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
                  <FlatList
                    data={newArrivalData}
                    renderItem={({ item, index }) => <ProductView data={item} isProductClick={this.isProductClick.bind(this)} isMakeWishList={this.isMakeWishList.bind(this)} />}
                    horizontal
                    inverted={appLanguage === 'ar' ? true : false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
              <View style={globalStyles.horizontalSeprator} />
              <View style={{ backgroundColor: colors.white, paddingTop:30, paddingBottom:20 }}>
                <AdvertizmentView />
              </View>
              <View style={globalStyles.horizontalSeprator} />
              <View style={styles.productMainView}>
                <View style={[styles.headerBlock, transistionClassArray[appLanguage].flexDirection]}>
                  <Text style={globalStyles.leftSideTitle}>{textTranslation.home.NEWARRIVAL}</Text>
                  <Text style={globalStyles.rightSideTitle}>{textTranslation.home.SEEALL}</Text>
                </View>
                <View style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
                  <FlatList
                    data={newArrivalData}
                    renderItem={({ item, index }) => <ProductView data={item} isProductClick={this.isProductClick.bind(this)} isMakeWishList={this.isMakeWishList.bind(this)} />}
                    horizontal
                    inverted={appLanguage === 'ar' ? true : false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
              <View style={[styles.categoryBlockHeader, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={globalStyles.leftSideTitle}>{textTranslation.getBottomTrayTranslations.CATEGORIES}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProductList', { screenName: "CLP" })}>
                  <Text style={globalStyles.rightSideTitle}>{textTranslation.home.VIEWALL}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryFlatViewMain}>
                <FlatGrid
                // itemsPerRow={4}
                  itemDimension={70}
                  spacing={5}
                  // data={[1, 2, 3, 4, 5, 6]}
                  data={categoryData}
                  renderItem={({ item }) => (<CategoryView data = {item} isSelected={this.isCategorySelect.bind(this)} />)}
                />
                {/* <FlatList
                    data={categoryData}
                    renderItem={({ item, index }) => <CategoryView data = {item} isSelected={this.isCategorySelect.bind(this)} /> }
                    numColumns={4}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                  /> */}
              </View>
              <View style={styles.TopBrandsMainView}>
                <View style={[styles.headerBlock, transistionClassArray[appLanguage].flexDirection]}>
                  <Text style={globalStyles.leftSideTitle}>{textTranslation.home.TOPBRANDS}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('ShopByBrands')}>
                    <Text style={globalStyles.rightSideTitle}>{textTranslation.home.VIEWALL}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.categoryFlatViewMain}>
                  <FlatList
                    data={topBrands}
                    renderItem={({ item, index }) => <TopBrandsView data={item} isTopBrandSelected={this.isTopBrandSelected.bind(this)} />}
                    horizontal
                    inverted={appLanguage === 'ar' ? true : false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
                <FastImage
                  style={styles.advertizmentMainVIew}
                  source={images.home.group21}
                  resizeMode={'contain'} />
              </View>
              <View style={globalStyles.horizontalSepratorService} />
              <View style={styles.serviceMainView}>
                <View style={[styles.serviceHeaderBlock, transistionClassArray[appLanguage].flexDirection]}>
                  <Text style={globalStyles.leftSideTitle}>{textTranslation.getBottomTrayTranslations.SERVICES}</Text>
                  <Text style={globalStyles.rightSideTitle}>{textTranslation.home.ALLSERVICES}</Text>
                </View>
                <View style={styles.categoryFlatViewMain}>
                  <FlatList
                    data={serviceData}
                    renderItem={({ item, index }) => <ServicesView data={item} isServiceClick={this.isServiceClick.bind(this)} />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
              <View style={[styles.categoryBlockHeader, transistionClassArray[appLanguage].flexDirection]}>
                <Text style={globalStyles.leftSideTitle}>{textTranslation.home.PETARTICLES}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                 <Text style={globalStyles.rightSideTitle}>{textTranslation.home.VIEWALL}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.categoryFlatViewMain, { paddingBottom: 80 }]}>
                <FlatList
                  data={articleData}
                  renderItem={({ item, index }) => <ArticleView data={item} isArticleClick={this.isArticleClick.bind(this)} />}
                  horizontal
                  inverted={appLanguage === 'ar' ? true : false}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    access_token: state.AdminLogin.access_token,
    adminLoginError: state.AdminLogin.adminLoginError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
      adminLogin: () => dispatch(adminLoginRequest()),
      adminLoginFail: () => dispatch(adminLoginFail()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
