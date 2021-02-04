import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import style from '../../components/CategoryView/style';
import { connect } from "react-redux";
import { getArticlesListRequest, getArticlesListFail } from '../../redux/Articles/actions';
import { goBack, navigate } from "../../navigation/RootNavigation";
import FastImage from 'react-native-fast-image';
import Badge from '../../components/BadgeView/Badge';
import ArticlesListing from '../../components/ArticlesListing';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
                contextTypeLocalization._currentValue.translations._props.en :
                contextTypeLocalization._currentValue.translations._props.ar,
            viewHeight: 0,
        }
    }
    componentDidMount() {
            this.callMyPetListAPI();
    }
    callMyPetListAPI(){
        if (globals.isInternetConnected) {
            this.props.getArticlesList();    
        }else{
            alert('Network not available.')
        }
    }
    isPetClicked(id, item) {
        console.log("ID", id);
    }
    clickTryNow(apiFor){
        if (apiFor === 'articlesList') {
            this.callMyPetListAPI();
        }
    }
    find_dimesions(layout) {
        const {  height } = layout;
        this.setState({ viewHeight: height });
    }
    isArticleClick(id, data) {
        console.log("Article name -->", data.name);
        //navigate('ArticlesDetails',{details:data})
    }
      
    render() {
        const { appLanguage, textTranslation } = this.state;
        const { navigation, articlesList, loading, articlesListError } = this.props;
        return (
            <>
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                <SafeAreaView style={styles.safeAreaView} >
                <AppHeader
                    barStyle={"light-content"}
                    androidStatusBarColor={colors.THEME_COLOR}
                    BodyData={
                    <View style={[transistionClassArray[appLanguage].flexDirection, 
                        {alignItems:'center', justifyContent:'center', alignSelf:'center', }]}>
                        <Text numberOfLines = {1} style={{fontFamily:globals.ProximaNovaMedium, color : colors.white,
                            fontSize: 20, textAlign:'center'}}>
                        {'Articles'}
                        </Text>
                    </View>}
                    BodyFlex={.70}
                    LeftFlex={.15}
                    LeftData={
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                        </TouchableOpacity>  }
                    RightFlex={.14}
                    RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                        <MaterialIcons name={'search'} size={32} color={colors.white} style={{paddingHorizontal:15}}/>
                        <TouchableOpacity onPress={() => navigation.navigate('Wishlist',{isEmptyView : true})} style={transistionClassArray[appLanguage].flexDirection}>
                        <FastImage
                            source={images.home.shape_5}
                            style={{
                                width: 28,
                                height: 28,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                            resizeMode={'contain'}
                        />
                        {/* <Badge itemsCount={1} appLanguage={appLanguage} view="mainHeader"/> */}
                        </TouchableOpacity>
                    </View>}
                    />
                    {(loading) ? <>
                        <View style={{justifyContent:'center', alignSelf:'center'}}>
                            <Loader/>
                        </View> 
                        </> : (articlesListError) ? 
                        <View style={{justifyContent:'center', alignSelf:'center'}}>
                            {/* <ErrorView apiFor={'articlesList'} message={articlesListError.message}
                            clickTryNow={this.clickTryNow.bind(this)} />  */}
                        </View> 
                        : 
                        <ScrollView style={{paddingBottom:100}} showsVerticalScrollIndicator={false}>
                            <View style={styles.mainView}>
                                <View style={[transistionClassArray[appLanguage].flexDirection,styles.subHeaderCotent]} >
                                    <FastImage  
                                        style={{ width: 20,height: 20, marginHorizontal:10}}
                                        source={images.productListing.filter}
                                        resizeMode={'contain'}/>
                                    <Text style={styles.subHeaderText}>{textTranslation.getProductListTranslations.FILTERBY}</Text>
                                    <View style={{marginLeft:5, marginRight : appLanguage == "ar" ? 5: 0, marginTop:3}}>
                                        <Badge itemsCount={'02'} appLanguage={appLanguage} />
                                    </View>
                                </View>
                                <View style={[transistionClassArray[appLanguage].flexDirection,styles.productCountView]} >
                                    <Text style={styles.productCountText}>{ articlesList && articlesList.items && articlesList.items.length}</Text>
                                    <Text style={styles.productCountText}> {textTranslation.getArticles.Articles} </Text>
                                </View>
                                <View style={{flex:1, marginBottom:100}}>
                                    <FlatList
                                        data={articlesList.items}
                                        renderItem={({ item, index }) => <ArticlesListing data={item} isArticleClick={this.isArticleClick.bind(this)} />}
                                        inverted={appLanguage === 'ar' ? true : false}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    }
                </SafeAreaView>
            </Fragment>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        articlesList: state.Articles.articlesList,
        loading: state.Articles.loading,
        articlesListError: state.Articles.articlesListError,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getArticlesList: () => dispatch(getArticlesListRequest()),
        getArticlesListFail: () => dispatch(getArticlesListFail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
// export default MyArticlesList
