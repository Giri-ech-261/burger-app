import React, {Component, Fragment} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    FlatList,
    Animated,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import {Images} from '../../theme';
import FormInput from '../../components/FormInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as colors from '../../assets/styles/color';
import ProductCarousel from '../../components/ProductCarousel';
import {ProductData, SingleProduct, SECTIONS, confidenceData} from './productData';
import {LocalizationContext} from '../../localizations';
import DropDownSelect from '../../components/DropDownPicker';
import ProductRating from '../../components/ProductRating';
import FastImage from 'react-native-fast-image';
import AccordionView from '../../components/Accordion';
import ReviewBlock from '../../components/ReviewBlock';
import ProductView from '../../components/ProductView';
import productData from '../../../productData.json';
import {transistionClassArray} from '../../utills/TranslationClasses';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {getProductListRequest} from '../../redux/Product/actions';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();
const contextTypeLocalization = LocalizationContext;
import * as images from '../../assets/images/map';
import globalStyle from '../../assets/styles/globalStyle';
import {goBack, navigate} from '../../navigation/RootNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import Badge from '../../components/BadgeView/Badge';
import RNPickerSelect from 'react-native-picker-select';
import * as globals from '../../utills/globals';

const placeholderSize = {
    label: 'Select Size*',
    value: null,
};
const placeholderFlavor = {
    label: 'Select Flavor*',
    value: null,
};

const placeholderAllStar = {
    label: 'Select Stars',
    value: null,
};

const placeholderReleavant = {
    label: 'Most Relevant',
    value: 'most',
};

const placeholderQty = {
    label: 'Qty',
    value: null,
};

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ? contextTypeLocalization._currentValue.translations._props.en : contextTypeLocalization._currentValue.translations._props.ar,
            searchText: '',
            activeSections: [0],
            newArrivalData: productData.data.products,
            selectedSizeItem: '',
            selectedFlavourItem: '',
            selectedStarItem: '',
            selectedRelavantItem: '',
            selectedQtyItem: '1',

        };
        this.animatedValue = new Animated.Value(0);
        this.translateY = {};
        this.diffClamp = Animated.diffClamp(this.animatedValue, 0, 80);
    }

    componentWillMount() {
        this.translateY = this.diffClamp.interpolate({
            inputRange: [0, 80],
            outputRange: [0, -80],
            extrapolate: 'clamp',
        });
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            // do something
            // this.props.getProductList();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    isCategorySelect(id, data) {
        const dataCopy = this.state.categoryData;
        const indexItem = dataCopy.findIndex((item) => item.id == id);
        for (let i = 0; i < dataCopy.length; i++) {
            if (indexItem == i) {
                dataCopy[indexItem].isSelected = true;
            } else {
                dataCopy[i].isSelected = false;
            }
        }
        this.setState({categoryData: dataCopy});
    }

    isProductClick(id, data) {
        console.log('Product Click-->' + id);
    }

    isMakeWishList(id, data) {
        const dataCopy = this.state.newArrivalData;
        const indexItem = dataCopy.findIndex((item) => item.id == id);
        for (let i = 0; i < dataCopy.length; i++) {
            if (indexItem == i) {
                dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
            }
        }
        this.setState({newArrivalData: dataCopy});
    }

    renderItem = (item) => {
        const {appLanguage} = this.state;
        const {flexDirection, textAlign} = transistionClassArray[appLanguage];
        return (
            <View style={[flexDirection]}>
                <FastImage
                    style={[styles.confImage, appLanguage === 'ar' ? {marginLeft: 8} : {marginRight: 8}]}
                    resizeMode="contain"
                    source={item.image} // any image path
                />
                <View style={{alignSelf: 'center'}}>
                <Text style={[styles.subContainerText, textAlign]}>{item.label} <Text style={styles.subContainerExtraText}>{item.extra}</Text></Text>
                </View>
            </View>
        );
    };

    render() {
        const {searchText, appLanguage, activeSections, textTranslation} = this.state;
        const {navigation} = this.props;
        const {title, desc, byName, discountAmt, originalAmt, ourAmt} = SingleProduct;
        const {flexDirection, textAlign} = transistionClassArray[appLanguage];
        return (
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader}/>
                <SafeAreaView>
                    <Animated.View style={{
                        transform: [
                            {translateY: this.translateY},
                        ],
                        elevation: 2,
                        zIndex: 2,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 80,
                    }}>

                        <AppHeader
                            barStyle={'light-content'}
                            androidStatusBarColor={colors.THEME_COLOR}
                            LeftData={
                                <TouchableOpacity onPress={() => goBack()}>
                                    <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                                </TouchableOpacity>}
                            RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                    <MaterialIcons name={'search'} size={30} color={colors.white}
                                               style={{paddingHorizontal: 15}}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}
                                    style={transistionClassArray[appLanguage].flexDirection}>
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
                    </Animated.View>

                    <ScrollView style={{
                        position: 'relative',
                        paddingTop: 60,
                        marginBottom: 50
                    }} onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.animatedValue}}}])}
                                scrollEventThrottle={16}>
                        <ProductCarousel productData={ProductData} appLanguage={appLanguage} Tag={
                            <View style={styles.newFirstBlock}>
                                <FastImage
                                    style={styles.newTagImage}
                                    resizeMode="contain"
                                    source={Images.new_tag} // any image path
                                />
                            </View>
                        }/>

                        <View style={[styles.productInfoContainer]}>
                            <View style={[styles.newBlock, flexDirection]}>
                                <Text style={[styles.descText, textAlign]}>{title}{desc}</Text>
                                <FastImage
                                    style={styles.heartImage}
                                    resizeMode="contain"
                                    source={Images.heart} // any image path
                                />
                            </View>
                            <View style={[styles.ratingContainer, flexDirection]}>
                                <Text style={styles.byText}>By <Text style={styles.typeText}>{byName}</Text></Text>
                                <View style={styles.ratingCountContainer}>
                                    <ProductRating
                                        disabled
                                        maxStars={5}
                                        rating={3}
                                        fullStarColor={colors.rating}
                                        starSize={14}
                                        containerStyle={{alignSelf: 'center'}}
                                        buttonStyle={{marginHorizontal: 2}}
                                        emptyStarColor={colors.rating}/>
                                    <Text style={styles.ratingCountText}>390</Text>
                                </View>

                            </View>
                            <View>
                                <Text style={[styles.buyText, textAlign]}>{textTranslation.home.BUYONEGETONE}</Text>
                            </View>
                            <View style={flexDirection}>
                                <Text style={styles.amtText}>AED 107.50</Text>
                                <Text style={styles.discountText}> was AED 120.20</Text>
                            </View>
                            <View style={[globalStyle.productViewAutoshipMainView, flexDirection]}>
                                <Text style={[globalStyle.productViewDiscountPrice, textAlign]}>{'AED'} 100.00
                                    <Text
                                        style={globalStyle.productViewDiscountPriceWith}> {textTranslation.home.WITH}</Text>
                                </Text>
                                <FastImage
                                    style={globalStyle.productViewAutoShip}
                                    source={images.home.autoship}
                                    resizeMode={'contain'}/>
                                <Text style={styles.saveText}>& Save</Text>
                                <FastImage
                                    style={styles.infoImage}
                                    source={Images.info}
                                    resizeMode={'contain'}/>
                            </View>
                            <View style={[flexDirection, styles.yellowContainer]}>
                                <View style={[styles.yellowBlock, flexDirection]}>
                                    <FastImage
                                        style={styles.yellowBlockImage}
                                        source={images.productDetail.star}
                                        resizeMode={'contain'}/>
                                    <Text style={styles.yellowImageText}>Earn Loyalty Points: 7</Text>
                                </View>
                                <View style={[styles.yellowBlock, flexDirection]}>
                                    <FastImage
                                        style={styles.yellowBlockImage}
                                        source={images.productDetail.shield}
                                        resizeMode={'contain'}/>
                                    <Text style={styles.yellowImageText}>Price Match Guarantee</Text>
                                </View>
                            </View>
                            <View style={[flexDirection, styles.yellowContainer]}>
                                <View style={[styles.yellowBlock, flexDirection]}>
                                    <FastImage
                                        style={styles.yellowBlockImage}
                                        source={images.productDetail.diamond}
                                        resizeMode={'contain'}/>
                                    <Text style={styles.yellowImageText}>Exclusive</Text>
                                </View>
                            </View>
                            <View
                                style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, flexDirection]}>

                                <RNPickerSelect
                                    hideIcon={(Platform.OS === 'ios') ? true : false}
                                    onValueChange={(value) => this.setState({selectedSizeItem: value})}
                                    placeholder={placeholderSize}
                                    style={{...pickerSelectStyles_regular}}
                                    isFrom={'full'}
                                    labelVisible={true}
                                    useNativeAndroidPickerStyle={false}
                                    items={[
                                        {label: '10Kg', value: '10'},
                                        {label: '20Kg', value: '20'},
                                        {label: '30Kg', value: '30'}, 
                                    ]}
                                />
                                {(Platform.OS) === 'ios' ?
                                    <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                           style={styles.downArrowView}/> : null}
                            </View>
                            <View
                                style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, flexDirection]}>
                                <RNPickerSelect
                                    hideIcon={(Platform.OS === 'ios') ? true : false}
                                    onValueChange={(value) => this.setState({selectedFlavourItem: value})}
                                    placeholder={placeholderFlavor}
                                    style={{...pickerSelectStyles_regular}}
                                    useNativeAndroidPickerStyle={false}
                                    isFrom={'full'}
                                    labelVisible={true}
                                    items={[
                                        {label: 'Chicken', value: 'chicken'},
                                        {label: 'Meat', value: 'meat'},
                                    ]}
                                >
                                </RNPickerSelect>
                                {(Platform.OS) === 'ios' ?
                                    <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                           style={styles.downArrowView}/> : null}
                            </View>
                            <View style={styles.offerBlock}>
                                <View style={flexDirection}>
                                    <FastImage
                                        style={styles.giftBoxImage}
                                        resizeMode="contain"
                                        source={images.productDetail.giftBox} // any image path
                                    />
                                    <Text style={[styles.offerText, textAlign]}>Gift Offers</Text>
                                </View>
                                <View style={styles.offerDescContainer}>
                                    <Text style={[styles.offerDesc, textAlign]}>Free gift with this product{'\n'}
                                        Trixie - 2 Lids for Large Tins (Dia. 10.6cm)</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[{marginHorizontal: 15, marginVertical: 15}, flexDirection]}>
                            <AccordionView activeSections={activeSections} _updateSections={this._updateSections}
                                           section={SECTIONS} appLanguage={appLanguage}/>
                        </View>

                        <View style={[styles.documentContainer]}>
                            <View style={[flexDirection]}>
                                <FastImage
                                    style={styles.pdfImage}
                                    resizeMode="contain"
                                    source={Images.pdf} // any image path
                                />
                                <Text style={styles.docText}>Documents</Text>
                            </View>
                            <View style={styles.pdfNames}>
                                <Text style={[styles.pdfName, textAlign]}>NutritionalGuide 01.pdf</Text>
                                <Text style={[styles.pdfName, textAlign]}>NutritionalGuide 02.pdf</Text>
                            </View>
                            <View style={styles.pdfDivider}></View>
                            <View style={[flexDirection]}>
                                <FastImage
                                    style={styles.confImage}
                                    resizeMode="contain"
                                    source={Images.confidence} // any image path
                                />
                                <Text style={styles.docText}>Shop With Confidence</Text>
                            </View>
                            <View style={styles.confContainer}>
                                <FlatList
                                    data={confidenceData}
                                    renderItem={({item}) => this.renderItem(item)}
                                    inverted={appLanguage === 'ar' ? true : false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        <View style={styles.productMainView}>
                            <View style={[styles.headerBlock, transistionClassArray[appLanguage].flexDirection]}>
                                <Text style={[globalStyles.leftSideTitle,styles.newArrivalText]}>{textTranslation.home.NEWARRIVAL}</Text>
                                <Text style={globalStyles.rightSideTitle}>{textTranslation.home.SEEALL}</Text>
                            </View>
                            <View style={[styles.mainView, transistionClassArray[appLanguage].flexDirection]}>
                                <FlatList
                                    data={this.state.newArrivalData}
                                    renderItem={({item, index}) => <ProductView data={item}
                                                                                isProductClick={this.isProductClick.bind(this)}
                                                                                isMakeWishList={this.isMakeWishList.bind(this)}/>}
                                    horizontal
                                    inverted={appLanguage === 'ar' ? true : false}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        <View style={styles.reviewContainer}>
                            <Text style={[styles.customerReviewText, textAlign]}>Customer Reviews</Text>
                            <Button title={'Write A Review'} outlineButton appLanguage={appLanguage}/>
                            <View style={[styles.reviewCountContainer, flexDirection]}>
                                <Text style={styles.totalReview}>758 Reviews</Text>
                                <Text style={styles.reviewPagination}>Showing 1-10 of 785 Reviews</Text>
                            </View>
                            <View style={[flexDirection, {justifyContent: 'space-between'}]}>
                                <View
                                    style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, flexDirection, styles.filterDrop]}>
                                    <RNPickerSelect
                                        hideIcon={(Platform.OS === 'ios') ? true : false}
                                        onValueChange={(value) => this.setState({selectedStarItem: value})}
                                        placeholder={placeholderAllStar}
                                        style={{...pickerSelectStyles_medium}}
                                        useNativeAndroidPickerStyle={false}
                                        isFrom={'small'}
                                        items={[
                                            {label: 'All Stars', value: 'all'},
                                            {label: '3 stars', value: '3'},
                                        ]}
                                    />
                                    {(Platform.OS) === 'ios' ?
                                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                               style={styles.downArrowView}/> : null}
                                </View>
                                <View
                                    style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, flexDirection, styles.filterDrop]}>
                                    <RNPickerSelect
                                        hideIcon={(Platform.OS === 'ios') ? true : false}
                                        onValueChange={(value) => this.setState({selectedRelavantItem: value})}
                                        placeholder={placeholderReleavant}
                                        isFrom={'small'}
                                        style={{...pickerSelectStyles_medium, color: colors.red}}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            // { label: 'Most Relevant', value: 'most' },
                                            {label: 'Less Relevant', value: 'Less'},
                                        ]}
                                    >
                                    </RNPickerSelect>
                                    {(Platform.OS) === 'ios' ?
                                        <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                               style={styles.downArrowView}/> : null}
                                </View>
                            </View>
                            <ReviewBlock appLanguage={appLanguage}/>
                            <ReviewBlock appLanguage={appLanguage}/>
                            <Button title={'Read All 785 Reviews'} outlineButton outlineColor={colors.lightBlack}
                                    textColor={colors.lightBlack}/>
                            <View style={globalStyles.horizontalSeprator} />
                        </View>

                    </ScrollView>
                    <View
                        style={[styles.cartContainer, {bottom: (globals.iPhoneX) ? 50 : (Platform.OS === 'android') ? 0 : 10}, flexDirection]}>
                        <View
                            style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS,
                                flexDirection, styles.countDrop, {borderWidth: 1, margin: 16}]}>
                            <RNPickerSelect
                                hideIcon={(Platform.OS === 'ios') ? true : false}
                                onValueChange={(value) => this.setState({selectedQtyItem: value})}
                                placeholder={placeholderQty}
                                style={{...pickerSelectStyles}}
                                useNativeAndroidPickerStyle={false}
                                isFrom={'small'}
                                value={this.state.selectedQtyItem}
                                items={[
                                    {label: '1', value: '1'},
                                    {label: '2', value: '2'},
                                ]}
                            >
                            </RNPickerSelect>
                            {(Platform.OS) === 'ios' ?
                                <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                       style={styles.downArrowView}/> : null}
                        </View>
                        <TouchableOpacity style={[styles.addToCart, {height: (Platform.OS === 'ios') ? 40 : 40}]}>
                            <View>
                                <Text style={styles.addtoCartTextView}>{textTranslation.home.ADDTOCART}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const pickerSelectStyles_regular = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.darkWarmGrey,
        fontFamily: globals.ProximaNovaRegular,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: globals.font_16,
        color: colors.black26,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 40,
    },
});

const pickerSelectStyles_medium = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.darkWarmGrey,
        fontFamily: globals.ProximaNovaMedium,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: globals.font_16,
        color: colors.black26,
        fontFamily: globals.ProximaNovaMedium,
        width: globals.screenWidth,
        height: 40,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.darkWarmGrey,
        fontFamily: globals.ProximaNovaRegular,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: globals.font_16,
        color: colors.black26,
        fontFamily: globals.ProximaNovaBold,
        width: globals.screenWidth,
        height: 40,
    },
});

const mapStateToProps = (state) => {
    return {
        productList: state.Product.productList,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getProductList: () => dispatch(getProductListRequest()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
