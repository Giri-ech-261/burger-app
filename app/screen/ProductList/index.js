import React, {Component, Fragment} from 'react'
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import SliderView from '../../components/SliderView';
import ListingProductView from '../../components/ListingProductView';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import globalStyles from "../../assets/styles/globalStyle";
import styles from './style';
import productData from "../../../productData.json";
import FastImage from 'react-native-fast-image';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import { Row } from 'native-base';
import * as globals from '../../utills/globals';
import SubCategoryView from '../../components/SubCategoryView';
import Badge from '../../components/BadgeView/Badge';
import Modal from 'react-native-modal';
import RadioForm, { RadioButtonInput } from 'react-native-simple-radio-button';
import FreeDiscountView from '../../components/FreeDiscountView';
import SubCategoriesListingView from '../../components/SubCategoriesListingView';
import {getProductListRequest} from '../../redux/Product/actions';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/RootNavigation';

const contextTypeLocalization = LocalizationContext;

class ProductList extends Component{
constructor(props){
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation : contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
      newArrivalData: productData.data.products,
      searchText: '',
      title :  this.props.route && this.props.route.params && this.props.route.params.title,
      categoryData: category = [
        {
          id:1,
          name: 'Dog',
          image: require('../../assets/images/home/combinedShape.png'),
          isSelected: false
        },
        {
          id:2,
          name: 'Cat',
          image: require('../../assets/images/home/combinedShape_3.png'),
          isSelected: false
        },
        {
          id:3,
          name: 'Fish',
          image: require('../../assets/images/home/combinedShape_5.png'),
          isSelected: false
        },
        {
          id:4,
          name: 'Bird',
          image: require('../../assets/images/home/group62.png'),
          isSelected: false
        },
        {
          id:5,
          name: 'Horse',
          image: require('../../assets/images/home/combinedShape_2.png'),
          isSelected: false
        },
        {
          id:6,
          name: 'Reptile',
          image: require('../../assets/images/home/combinedShape_4.png'),
          isSelected: false
        },
        {
          id:7,
          name: 'Small Animal',
          image: require('../../assets/images/home/fill36.png'),
          isSelected: false
        },

      ],
      categoryDataCategories: category = [
        {
          id:1,
          name: 'In-Store Grooming',
          image: require('../../assets/images/categoryList/categories/bitmapCopy.png'),
          isSelected: false
        },
        {
          id:2,
          name: 'Treats and Chews',
          image: require('../../assets/images/categoryList/categories/bitmap.png'),
          isSelected: false
        },
        {
          id:3,
          name: 'Toys',
          image: require('../../assets/images/categoryList/categories/bitmap_2.png'),
          isSelected: false
        },
        {
          id:4,
          name: 'Beds',
          image: require('../../assets/images/categoryList/categories/bitmap_3.png'),
          isSelected: false
        },
        {
          id:5,
          name: 'Healthcare',
          image: require('../../assets/images/categoryList/categories/bitmap_4.png'),
          isSelected: false
        },
        {
          id:6,
          name: 'Vitamins & Supplements',
          image: require('../../assets/images/categoryList/categories/bitmap_5.png'),
          isSelected: false
        },
        {
          id:7,
          name: 'Cleaning & Potty',
          image: require('../../assets/images/categoryList/categories/bitmap_6.png'),
          isSelected: false
        },
        {
          id:8,
          name: 'Crates, Pens & Gates ',
          image: require('../../assets/images/categoryList/categories/bitmapCopy.png'),
          isSelected: false
        }
      ],
      sortView : false,
      screenType : this.props.route && this.props.route.params && this.props.route.params.screenName,
      isSelectedSortById : "",
      isSelectedSortByValue : "",
      sortByOptions :[
        {
          "id" : "1",
          "name" : "Relevance"
        },
        {
          "id" : "2",
          "name" : "Best Selling"
        },
        {
          "id" : "3",
          "name" : "Newest First "
        },
        {
          "id" : "4",
          "name" : "Top Rated"
        },
        {
          "id" : "5",
          "name" : "Highest Price"
        },
        {
          "id" : "6",
          "name" : "Lowest Price "
        },
        {
          "id" : "7",
          "name" : "Most reviews"
        },
      ]
    }
  }

  componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.props.getProductList();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

  isCategorySelect = (id, data) => {
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

  isProductClick(id, data){
    console.log("Product Click-->"+id);
    navigate('productDetail');
  }

  isMakeWishList(id, data){
    console.log("Wishlist name -->", data.name);
    const dataCopy = this.state.newArrivalData;
    const indexItem = dataCopy.findIndex((item) => item.id == id);
    for (let i = 0; i < dataCopy.length; i++) {
      if (indexItem == i) {
        dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
      }
    }
    this.setState({newArrivalData: dataCopy})
  }

  openModal = ()=>{
    this.setState({sortView: !this.state.sortView})
  };

  selectedSoryByClick =(value) => {
    this.setState({isSelectedSortById :value.id,isSelectedSortByValue:value.name })
    this.setState({sortView: false})
  }

  render(){
    const {appLanguage,newArrivalData, textTranslation,title, screenType,isSelectedSortByValue} = this.state;
    const {navigation,productList} = this.props;

    return (
      <>
      <Fragment>
        <SafeAreaView style={globalStyles.safeAreaViewHeader} />
          <SafeAreaView style={styles.mainView}>
            <AppHeader
              barStyle={"light-content"}
              androidStatusBarColor={colors.THEME_COLOR}
              BodyData={<View style={[transistionClassArray[appLanguage].flexDirection, {justifyContent:'center', alignSelf:'center', }]}>
                <Text numberOfLines = {1} style={{ color : colors.white, maxWidth:200,  fontSize: 20, textAlign:'center'}}>
                  {title}
                </Text>
              </View>}
              BodyFlex={.80}
              LeftFlex={.10}
              LeftData={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                </TouchableOpacity>  }
              RightFlex={.0}
              RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                  <MaterialIcons name={'search'} size={32} color={colors.white} style={{paddingHorizontal:15}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={transistionClassArray[appLanguage].flexDirection}>
                  <FastImage
                    source={images.home.shape_5}
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                    resizeMode={'contain'}
                  />
                  <Badge itemsCount={1} appLanguage={appLanguage} view="mainHeader"/>
                </TouchableOpacity>
              </View>}
            />
            <ScrollView style = {styles.scrollView} bounces={false} showsVerticalScrollIndicator={false}>
              { screenType == "CLP" &&
                <FreeDiscountView/>
              }
              <View style={[styles.subHeaderView,transistionClassArray[appLanguage].flexDirection]}>
                  <View style={[transistionClassArray[appLanguage].flexDirection,styles.subHeaderCotent]} >
                    <FastImage
                        style={styles.filterIconSize}
                        source={images.productListing.filter}
                        resizeMode={'contain'}/>
                    <Text style={styles.subHeaderText}>{textTranslation.getProductListTranslations.FILTERBY}</Text>
                    <View style={{marginLeft:5, marginRight : appLanguage == "ar" ? 5: 0, marginTop:3}}>
                      <Badge itemsCount={2} appLanguage={appLanguage} />
                    </View>
                  </View>
                  <View style={styles.divider}></View>
                  <TouchableOpacity onPress={() => this.openModal()} style={styles.subHeaderCotent}>
                    <View style={{flexDirection : "row"}} >
                        <FastImage
                          style={styles.filterIconSize}
                          source={images.productListing.sort}
                          resizeMode={'contain'}/>
                          <View>
                            <Text style={styles.subHeaderText}>{textTranslation.getProductListTranslations.SORTRBY}</Text>
                            {isSelectedSortByValue !== "" &&
                            <Text style={styles.selectedSortByText}>{isSelectedSortByValue}</Text>
                            }
                          </View>
                    </View>
                  </TouchableOpacity>
              </View>
              {screenType == "CLP" &&
                <TouchableOpacity onPress={() => {}}>
                  <FastImage
                    style={styles.prome1Size}
                    source={images.categoryListing.promo1}
                    resizeMode={'cover'}/>
                </TouchableOpacity>
              }
              {screenType == "PLP" &&
                <View style={styles.silderMainView}>
                   <Text style={styles.categoryTittleHead}>{productList.length} {textTranslation.getProductListTranslations.PRODUCTS}</Text>
                    <View style={[{flex:1},transistionClassArray[appLanguage].flexDirection]}>
                    <FlatList
                        data={this.state.categoryData}
                        renderItem={({ item, index }) => <SubCategoryView data = {item} isSelected={this.isCategorySelect.bind(this)} /> }
                        inverted={appLanguage == 'ar' ? true : false}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                      />
                  </View>
                </View>
              }
              {screenType == "CLP" &&
                <View style={{paddingVertical:15,justifyContent:'center', alignSelf:'center', alignItems:'center'}}>
                  <View style={transistionClassArray[appLanguage].flexDirection}>
                    <FlatList
                      data={this.state.categoryDataCategories}
                      renderItem={({ item, index }) => <SubCategoriesListingView data = {item} isSelected={this.isCategorySelect.bind(this)} /> }
                      numColumns={2}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </View>
              }
              {screenType == "CLP" &&
                <TouchableOpacity onPress={() => {}} style={{justifyContent:'center',alignItems:'center',backgroundColor:'white', padding:15}}>
                  <FastImage
                    style={styles.promo2Size}
                    source={images.categoryListing.promo2}
                    resizeMode={'contain'}/>
                </TouchableOpacity>
              }
              { screenType == "CLP" &&
                <Text style={styles.categoryTittleHead}>{productList.length} {textTranslation.getProductListTranslations.PRODUCTS}</Text>
              }
              <View style={[styles.mainViewListing, transistionClassArray[appLanguage].flexDirection]}>
                <FlatList
                    data={productList}
                    renderItem={({ item, index }) => <ListingProductView data = {item} isProductClick={this.isProductClick.bind(this)} isMakeWishList={this.isMakeWishList.bind(this)}/>}
                    inverted={appLanguage === 'ar' ? true : false}
                    keyExtractor={(item, index) => index.toString()}
                  />
              </View>
            </ScrollView>
            <Modal
              testID={'modal'}
              isVisible={this.state.sortView}
              swipeDirection={['down']}
              style={styles.view}
             >
              <View style={styles.modalView}>
                 <View style={styles.rectangleCopy5}></View>
                 <View style={[styles.modalContent,transistionClassArray[appLanguage].flexDirection]}>
                    <Text style={styles.modalTitle}>{textTranslation.getProductListTranslations.SORTRBY}</Text>
                    <TouchableOpacity onPress={() => this.openModal()}>
                      <FastImage
                        style={styles.filterIconSize}
                        source={images.productListing.closeIcon}
                        resizeMode={'contain'}/>
                    </TouchableOpacity>
                  </View>

                   {this.state.sortByOptions && this.state.sortByOptions.length > 0 &&
                    this.state.sortByOptions.map((item,index) => {
                      return (
                        <View key={index} style={[styles.modalRows,transistionClassArray[appLanguage].flexDirection]}>
                           <RadioButtonInput
                            obj={item}
                            index={index}
                            isSelected={this.state.isSelectedSortById === item.id}
                            initial={-1}
                            borderWidth={1}
                            buttonColor={"#bababa"}
                            buttonSize={17}
                            buttonOuterSize={25}
                            buttonWrapStyle={{paddingHorizontal:15}}
                            onPress={() => this.selectedSoryByClick(item)}
                          />
                          <Text style={styles.modalSortText}>{item.name}</Text>
                        </View>
                        )
                      })
                   }

              </View>
            </Modal>
          </SafeAreaView>
        </Fragment>
      </>
    );
  }
};

const mapStateToProps = state => {
    return {
        productList: state.Product.productList,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getProductList: () => dispatch(getProductListRequest()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
