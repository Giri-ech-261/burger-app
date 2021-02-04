import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  Item,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, Spinner} from 'native-base';
import FastImage from 'react-native-fast-image';

import AppHeader from '../../components/AppHeader';
import Badge from '../../components/BadgeView/Badge';
import styles from './styles';
import {LocalizationContext} from '../../localizations';
import * as colors from '../../assets/styles/color';
import * as images from '../../assets/images/map';
import {transistionClassArray} from '../../utills/TranslationClasses';
import ListingProductView from '../../components/ListingProductView';
import {getProductListRequest} from '../../redux/Product/actions';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/RootNavigation';
import productData from '../../../productData.json';

const contextTypeLocalization = LocalizationContext;

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      query: props.route.params.query,
      newArrivalData: productData.data.products,
    };
  }

  isProductClick(id, data) {
    console.log('Product Click-->' + id);
    navigate('productDetail');
  }

  isMakeWishList(id, data) {
    console.log('Wishlist name -->', data.name);
    const dataCopy = this.state.newArrivalData;
    const indexItem = dataCopy.findIndex((item) => item.id == id);
    for (let i = 0; i < dataCopy.length; i++) {
      if (indexItem == i) {
        dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
      }
    }
    this.setState({newArrivalData: dataCopy});
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.getProductList();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  footer = () => {
    return (
      <View style={styles.loader}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Spinner color="black" />
        </View>
        <Text
          style={[
            styles.loadingText,
            transistionClassArray[this.state.appLanguage].flexDirection,
          ]}>
          {this.state.textTranslation.search.LOADINGTEXT}
        </Text>
      </View>
    );
  };

  render() {
    const {appLanguage, textTranslation} = this.state;
    const {ProductList} = this.props;
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.red}}>
          <AppHeader
            barStyle={'light-content'}
            androidStatusBarColor={colors.THEME_COLOR}
            RightFlex={0.2}
            BodyData={
              <View style={styles.searchListHeader}>
                <Text style={styles.listHeaderText}>"{this.state.query}"</Text>
              </View>
            }
            BodyFlex={0.6}
            LeftFlex={0.2}
            LeftData={
              <MaterialIcons
                name={'arrow-back'}
                size={25}
                color={colors.white}
                onPress={() => this.props.navigation.goBack()}
              />
            }
            RightData={
              <MaterialIcons
                name={'search'}
                size={25}
                color={colors.white}
                onPress={() => this.props.navigation.navigate('Search')}
              />
            }
          />

          {this.state.query !== '' ? (
            <>
              <View style={styles.subHeaderList}>
                <View style={styles.actionContainer}>
                  <Button iconLeft transparent>
                    <FastImage
                      style={styles.voiceImage}
                      source={images.search.filter}
                      resizeMode={'contain'}
                    />
                    <Text
                      style={[
                        styles.actionText,
                        transistionClassArray[appLanguage].flexDirection,
                      ]}>
                      {textTranslation.search.FILTERBY}
                    </Text>
                    <Badge
                      itemsCount={13}
                      style={{marginTop: 0, height: 20, width: 20}}
                      contentStyle={{fontSize: 12}}
                      view="mainHeader"
                    />
                  </Button>
                </View>
                <View style={styles.actionContainer}>
                  <Button iconLeft transparent>
                    <FastImage
                      style={styles.barcodeImage}
                      source={images.search.sort}
                      resizeMode={'contain'}
                    />
                    <Text
                      style={[
                        styles.sortByText,
                        transistionClassArray[appLanguage].flexDirection,
                      ]}>
                      {textTranslation.search.SORTBY}
                    </Text>
                    <Text
                      style={[
                        styles.valueLabel,
                        transistionClassArray[appLanguage].flexDirection,
                      ]}>
                      {textTranslation.search.HIGHESTPRICE}
                    </Text>
                  </Button>
                </View>
              </View>
              <ScrollView
                style={{backgroundColor: colors.lightWhite, height: '100%'}}>
                <View style={[styles.resultFoundBlock]}>
                  <Text
                    style={[
                      styles.resultFoundText,
                      ,
                      transistionClassArray[appLanguage].flexDirection,
                    ]}>
                    4913 {textTranslation.search.RESULTFOUND}
                  </Text>
                </View>
                <View style={styles.productBlock}>
                  <View
                    style={[transistionClassArray[appLanguage].flexDirection]}>
                    <FlatList
                      data={ProductList}
                      renderItem={({item, index}) => (
                        <ListingProductView
                          data={item}
                          isProductClick={this.isProductClick.bind(this)}
                          isMakeWishList={this.isMakeWishList.bind(this)}
                        />
                      )}
                      inverted={appLanguage === 'ar' ? true : false}
                      keyExtractor={(item, index) => index.toString()}
                      ListFooterComponent={this.footer}
                    />
                  </View>
                </View>
              </ScrollView>
            </>
          ) : (
            <ScrollView style={{backgroundColor: colors.white, height: '100%'}}>
              <View style={styles.emptyResultBlock}>
                <Text
                  style={[
                    styles.emptyResultText,
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  0 {textTranslation.search.PRODUCTFOUND}
                </Text>
              </View>
              <View style={styles.messageBlock}>
                <Text
                  style={[
                    styles.messageBlockHeader,
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  {textTranslation.search.NORESULTHEADER} "{this.state.query}"
                </Text>
                <Text
                  style={[
                    styles.messageBlockContent,
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  {textTranslation.search.NORESULTBODY}
                </Text>

                <View style={styles.dogPlaceholder}>
                  <FastImage
                    style={styles.dogImage}
                    source={images.search.dog}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={styles.catPlaceholder}>
                  <FastImage
                    style={styles.catImage}
                    source={images.search.cat}
                    resizeMode={'contain'}
                  />
                </View>
              </View>
              <View style={styles.suggestedBlock}>
                <Text
                  style={[
                    styles.suggestedText,
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  {textTranslation.search.SUGGESTEDTERMS}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 19,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 15},
                  ]}>
                  <Text style={styles.quickText}>Dog</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 15},
                  ]}>
                  <Text style={styles.quickText}>Cat</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 15},
                  ]}>
                  <Text style={styles.quickText}>Aquatics</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 10},
                  ]}>
                  <Text style={styles.quickText}>Bird</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 15},
                  ]}>
                  <Text style={styles.quickText}>Small Pet</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 15},
                  ]}>
                  <Text style={styles.quickText}>Equestrain</Text>
                </Button>
                <Button
                  bordered
                  rounded
                  style={[
                    styles.quickTextBorder,
                    {marginRight: 5, marginBottom: 10},
                  ]}>
                  <Text style={styles.quickText}>Amphibians</Text>
                </Button>
              </View>
              <View style={styles.helpSection}>
                <Text
                  style={[
                    styles.helpText,
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  {textTranslation.search.NEEDHELP}
                </Text>
                <Button bordered rounded style={styles.contactUsBtn}>
                  <Text
                    style={[
                      styles.contactUsText,
                      transistionClassArray[appLanguage].flexDirection,
                    ]}>
                    {textTranslation.search.CONTACTUS}
                  </Text>
                </Button>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductList: state.Product.productList,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getProductList: () => dispatch(getProductListRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
