import React, { useContext, useState,useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import {
    SafeAreaView,
    ScrollView,
    Platform,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    LogBox ,
    StyleSheet
  } from 'react-native';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
import * as globals from '../../utills/globals';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import * as colors from "../../assets/styles/color";
import Entypo from "react-native-vector-icons/Entypo";
import TopBrandsView from '../../components/TopBrandsView';
import categoryData from "./categoryDummy.json";
import globalStyles from "../../assets/styles/globalStyle";
import AppHeader from '../../components/AppHeader';
import FormInput from '../../components/FormInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import * as images from "../../assets/images/map";
import Badge from '../../components/BadgeView/Badge';
import HeaderWithSearch from '../../components/HeaderWithSearch';
import { getCategoryListRequest, getCategoryListFail } from '../../redux/Category/actions';
import ErrorView from '../../components/ErrorView';
import Loader from '../../components/Loader';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

Entypo.loadFont();
// var categories =  categoryData.categories;
var displayArray = []
  var topBrandsbrands = [
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
  ]


const CategoryMenu = ({
  navigation,
  categoryList,
  loading,
  categoryListError,
  getCategoryList : _getCategoryList
}) => {

  const { translations, appLanguage } = useContext(
    LocalizationContext
  );
    const contextTypeLocalization = LocalizationContext;
    const transistionClass = transistionClassArray[appLanguage];
    let coreTranslations = contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar;
    let getCoreTranslations = coreTranslations.getCategoryMenuTranslations;
    const [activeDimension, setActiveDimension] = useState("1");
    const [activeSections, setActiveSections] = useState([]);
    // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(" ");
    const [searchText, setSearchText] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
      setSelectedCategory(" ")
      callMyCategoryListAPI();
      if(categoryList && categoryList.items &&categoryList.items.length > 0){
        clickOnCategories(categoryList.items[0])
        setCategories(categoryList.items)
      }
    },[categoryList && categoryList.items &&categoryList.items.length > 0])

    const callMyCategoryListAPI = ()=>{
      if (globals.isInternetConnected) {
          _getCategoryList();    
      }else{
          alert('Network not available.')
      }
    }

    const clickTryNow = (apiFor) => {
      if (apiFor === 'categoryList') {
          this.callMyCategoryListAPI();
      }
    }

    const getCategories = () =>{
      // console.log(categoryList.items,"categoryList+++++++++++++++++++++++++++++++++++++++++++=")
      return(
        categories.map((item, index)=>
          <View key={index} >
            <TouchableOpacity onPress={() => clickOnCategories(item)}
              style={activeDimension == item.id ? styles.activeFilterColor : styles.inactiveFilterColor}>
                <Text style={[styles.CategoyViewText,transistionClass.textAlign,
                activeDimension == item.id ? styles.CategoyViewTextActive : styles.CategoyViewTextInActive]}>
                {item.displayName}</Text>
            </TouchableOpacity>
          </View>
        )
      )
    }

  const clickOnCategories = (item) =>{
    displayArray = []
    if(item.childCategories && item.childCategories.length > 0){
      displayArray = item.childCategories
    }
    setActiveDimension(item.id)
    setSelectedCategory(item.displayName)
    setCollapsed(!collapsed)
    setActiveSections([]);
  }

  const setSections = (sections, indexes) => {
    //setting up a active section state
    setCollapsed(!collapsed)
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, index, isActive) => {
    //Accordion Header view
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive,transistionClass.flexDirection,{justifyContent:'space-between'}]}
        duration={400}
        transition="backgroundColor">
          <TouchableOpacity onPress={() => navigation.navigate('ProductList', 
            {screenName : "CLP",title: section.displayName})}>
            <Text style={[styles.headerText, transistionClass.textAlign]}>{section.displayName}</Text>
          </TouchableOpacity>   
          <View style={[transistionClass.flexDirection,{justifyContent:'space-between'}]}>
            <Entypo name={isActive ? "minus" : "plus"} color={colors.red} size={22}  />
          </View>
      </View>
    );
  };

  const renderContent = (section, index, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={styles.content}
        transition="backgroundColor">
          <View style={{flex:1, marginTop:-10}}>
            {section.childCategories && section.childCategories.length > 0 &&
              section.childCategories.map((item,i) => {
              return (
                <TouchableOpacity key={i} onPress={() => navigation.navigate('ProductList', {screenName : "PLP",title: item.displayName})}>
                  <View style={styles.contentTextView} >
                    <Text style={[styles.contentText,transistionClass.textAlign]}>{item.displayName}</Text>
                  </View>
                </TouchableOpacity>
                )
              })
            }
          </View>
        {/* </Text> */}
      </Animatable.View>
    );
  };


  const getSubCategories = () => {
        return(
        <View>
            {/*Code for Accordion/Expandable List starts here*/}
            <Accordion
                activeSections={activeSections}
                //for any default active section
                sections={displayArray}
                //title and content of accordion
                touchableComponent={TouchableOpacity}
                //which type of touchable component you want
                //It can be the following Touchables
                //TouchableHighlight, TouchableNativeFeedback
                //TouchableOpacity , TouchableWithoutFeedback
                //expandMultiple={multipleSelect}
                //Do you want to expand mutiple at a time or single at a time
                renderHeader={renderHeader}
                //Header Component(View) to render
                renderContent={renderContent}
                //Content Component(View) to render
                duration={400}
                //Duration for Collapse and expand
                onChange={(indexes) => setSections(indexes)}
                //setting the state of active sections
            />
            {/*Code for Accordion/Expandable List ends here*/}
            </View>
        )
    }

  return (
    <>
    <Fragment>
    <SafeAreaView style={globalStyles.safeAreaViewHeader} />
    <SafeAreaView style={globalStyles.mainView} >
        <AppHeader
            barStyle={"light-content"}
            androidStatusBarColor={colors.THEME_COLOR}
            BodyData={
              <TouchableOpacity
                style={{width:Platform.OS =="android" ? globals.screenWidth-25:null, flexDirection: 'row',   paddingRight: 10}}
                onPress={() => navigation.navigate('Search')}>
                <FormInput
                  value={searchText}
                  onChangeText={(text) => {
                    setSearchText(text);
                  }}
                  isSearch
                  isLeftIcon
                  leftIcon={
                    <MaterialIcons name={'search'} size={20} color={colors.black} />
                  }
                  isRightIcon
                  placeholder={'Search'}
                  rightIcon={
                    <FastImage
                      source={images.home.group_3}
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                      resizeMode={'contain'}
                    />
                  }
                />
              </TouchableOpacity>
            }
            LeftFlex={0}
            BodyFlex={1 }
            // BodyFlex={ Platform.OS =="ios" ? 1 :10}
            RightFlex={.0}
            RightData={<View style={[transistionClassArray[appLanguage].flexDirection,]}>
              <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={transistionClassArray[appLanguage].flexDirection}>
                <FastImage
                  source={images.home.shape_5}
                  style={{
                      width: 28,
                      height: 28,
                      marginLeft:20,
                      justifyContent: 'center',
                      alignSelf: 'center',
                  }}
                  resizeMode={'contain'}
                />
                <Badge itemsCount={1} appLanguage={appLanguage} view="mainHeader"/>
              </TouchableOpacity>
            </View>}
          />
          {(loading) ? <>
            <View style={{justifyContent:'center', alignSelf:'center'}}>
                <Loader/>
            </View> 
            </> : (categoryListError) ? 
            <View style={{justifyContent:'center', alignSelf:'center'}}>
                <ErrorView apiFor={'categoryList'} message={articlesListError.message}
                clickTryNow={ () => clickTryNow()} /> 
            </View> 
            :  
            <View style={[styles.categoryView,transistionClass.flexDirection]}>
              <View style={styles.getCategoriesView}>
                {getCategories()}
              </View>
              <View style={styles.SubView}>
                {selectedCategory != " " &&
                  <TouchableOpacity  style={styles.L1ExploreView} onPress={() => navigation.navigate('ProductList', {screenName : "CLP",title: selectedCategory})}>
                    <Text style={[transistionClass.textAlign,styles.getSubLevelsViewHeader]}>{'Explore -'} {selectedCategory} {'Supplies'}</Text>
                  </TouchableOpacity>
                }
                <ScrollView style={styles.subLevelsView}  showsVerticalScrollIndicator={false}>
                  {getSubCategories()}
                  <View style={{width: globals.screenWidth *0.65, marginTop : 20}}>
                    <Text style={[styles.brandsTitle,transistionClass.textAlign]}>{getCoreTranslations.POPULARBRANDS}</Text>
                    <FlatList
                      inverted={appLanguage == 'ar' ? true : false}
                      data={topBrandsbrands}
                      renderItem={({ item, index }) => <TopBrandsView data = {item} isTopBrandSelected = {() => {}}/>}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item, index) => index.toString()}
                    />
                    {/* <TouchableOpacity onPress={() => {}}> */}
                    <TouchableOpacity onPress={() => navigation.navigate('ShopByBrands')}>
                      <Text style={[transistionClass.textAlign,styles.shopAllBrandsText]}>{getCoreTranslations.SHOPALL}</Text>
                    </TouchableOpacity>
                  </View>
                  { Platform.OS == "ios" ?
                    <View style={{backgroundColor:'white', height:100}}></View>
                    :null
                  }
                </ScrollView>
              </View>
            </View>
          }
    </SafeAreaView>
    </Fragment>
    </>
  );
};

const styles=StyleSheet.create({
  categoryView: {
      width: globals.screenWidth,
      height: globals.screenHeight,
      backgroundColor: "white",
    },
    getCategoriesView: {
      backgroundColor: "#f3f6f9",
      width:globals.screenWidth *0.35,
    },
    brandsTitle : {
      fontSize: 18,
      letterSpacing: 0,
      paddingHorizontal : 10,
      fontFamily: globals.ProximaNovaSemiBold,
      color : colors.black
    },
    subLevelsView : {
      width:globals.screenWidth *0.65,
      //paddingBottom : Platform.OS == "ios" ? 20 : null
      //height : globals.screenHeight * 0.45,
    },
    SubView : {
      width:globals.screenWidth * 0.65,
      height : globals.screenHeight - 125,
    },
    getSubLevelsViewHeader : {
      color:'#cd1f22',
      fontSize: 14,
      letterSpacing: 0,
      fontFamily: globals.ProximaNovaSemiBold,
    },
    L1ExploreView:{
      borderBottomWidth: 1,
      borderBottomColor:colors.lightWarmGrey,
      paddingVertical : 20,
      marginHorizontal : 12,
    },
    CategoyViewText:{
      fontSize: 16,
      letterSpacing: 0,
      paddingVertical : 20,
      marginHorizontal : 15,
      letterSpacing: 0,
      fontFamily: globals.ProximaNovaBold,
    },
    CategoyViewTextActive:{
      color:'#cd1f22',
    },
    CategoyViewTextInActive:{
      color:colors.black,
    },
    subLevelsViewText:{
      borderBottomWidth: 1,
      borderBottomColor:colors.lightWarmGrey,
      color:'#cd1f22',
      fontSize: 14,
      letterSpacing: 0,
      paddingVertical : 20,
      fontFamily: globals.ProximaNovaBold,
    },
    activeFilterColor : {
      backgroundColor: "white",
    },
    inactiveFilterColor : {
      backgroundColor: "#f3f6f9",
    },
    shopAllBrandsText :{
      fontSize: 14,
      letterSpacing: 0,
      color: colors.red,
      borderBottomWidth:0.5,
      marginHorizontal:15,
      paddingVertical : 15,
      borderBottomColor:colors.lightWarmGrey,
      borderTopWidth:0.5,
      borderTopColor:colors.lightWarmGrey,
      fontFamily: globals.ProximaNovaSemiBold,
    },
    fliterParameter: {
      justifyContent:'space-between',
      borderBottomWidth:1,
      borderBottomColor:colors.lightWarmGrey,
      width:globals.screenWidth *0.8
    },
    header: {
      backgroundColor: colors.white,
      padding: 12,
    },
    headerText: {
      fontSize: 14,
      color : colors.red,
      flexWrap : 'wrap',
      width : 150,
      fontFamily: globals.ProximaNovaSemiBold,
    },
    contentTextView: {
      paddingVertical: 12,

    },
    contentText: {
      fontSize: 14,
      // flexWrap : 'wrap',
      // width : 150,
      color : colors.black,
      fontFamily: globals.ProximaNovaSemiBold,
    },
    content: {
      paddingHorizontal: 12,
      backgroundColor: colors.white,
    },
    active: {
      backgroundColor: 'rgba(255,255,255,1)',
      paddingHorizontal : 5,
      marginHorizontal:10
    },
    inactive: {
      backgroundColor: 'rgba(255,255,255,1)',
      borderBottomWidth:0.5,
      borderBottomColor:colors.lightWarmGrey,
      paddingHorizontal : 5,
      marginHorizontal:10
    },
})

const mapStateToProps = state => {
  return {
      categoryList: state.Category.categoryList,
      loading: state.Category.loading,
      categoryListError: state.Category.categoryListError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
      getCategoryList: () => dispatch(getCategoryListRequest()),
      getCategoryListFail: () => dispatch(getCategoryListFail()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu)