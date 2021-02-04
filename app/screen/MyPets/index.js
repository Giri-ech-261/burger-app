import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import Loader from '../../components/Loader';
import MyPetListView from '../../components/MyPetListView';
import ErrorView from '../../components/ErrorView';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import style from '../../components/CategoryView/style';
import { connect } from "react-redux";
import { getPetListRequest, getPetListFail, deletePet } from '../../redux/MyPets/actions';
import { goBack, navigate } from "../../navigation/RootNavigation";
import Toast from 'react-native-simple-toast';
let _this = null;
class MyPetList extends Component {
    constructor(props) {
        super(props);
        _this = this;
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
                contextTypeLocalization._currentValue.translations._props.en :
                contextTypeLocalization._currentValue.translations._props.ar,
            viewHeight: 0,
        }
    }
    componentDidMount() {
        // this._unsubscribe = this.props.navigation.addListener('focus', () => {
        if (globals.isInternetConnected) {
            this.callMyPetListAPI();
        } else {
            alert('Netwrok not available')
        }
        // });
    }
    static callpetList() {
        _this.callMyPetListAPI();
    }
    UNSAFE_componentWillReceiveProps(nextProp) {
        if (nextProp.petDeleted) {
            if (nextProp.petDeleted.deleted && !nextProp.loading) {
                if (globals.isInternetConnected) {
                    this.callMyPetListAPI();
                } else {
                    alert('Netwrok not available')
                }
                nextProp.petDeleted.deleted = false;
                Toast.show('Pet deleted successfully');
            }
        }
        // if (nextProp.petDeleted.deleted && !nextProp.loading) {
        //     this.callMyPetListAPI();
        // }

    }
    callMyPetListAPI() {
        if (globals.isInternetConnected) {
            this.props.getPetList();
        } else {
            alert('Network not available.')
        }
    }
    isPetClicked(id, item) {
        console.log("ID", id);
        navigate('AddPet', { isFrom: 'edit', data: item })
    }
    clickTryNow(apiFor) {
        if (apiFor === 'petList') {
            this.callMyPetListAPI();
        }
    }
    find_dimesions(layout) {
        const { height } = layout;
        this.setState({ viewHeight: height });
    }
    callDeletePet(id) {
        this.props.deletePet(id)
    }
    render() {
        const { appLanguage, textTranslation } = this.state;
        const { navigation, petList, loading, petListError } = this.props;
        return (
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                <SafeAreaView style={styles.safeAreaView} >
                    <AppHeader
                        barStyle={"light-content"}
                        androidStatusBarColor={colors.THEME_COLOR}
                        BodyData={
                            <View style={[transistionClassArray[appLanguage].flexDirection, styles.headerMainView]}>
                                <Text style={styles.headerTitle}>{textTranslation.myaccount.MYPET}</Text>
                            </View>}
                        BodyFlex={.90}
                        LeftFlex={.20}
                        LeftData={
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <MaterialIcons name={'arrow-back'} size={30} color={colors.white} style={{ marginLeft: 10, }} />
                            </TouchableOpacity>}
                    />
                    {(loading) ? <>
                        <Loader />
                    </> : (petListError) ? <ErrorView apiFor={'petList'} message={petListError.message} clickTryNow={this.clickTryNow.bind(this)} /> :
                            (petList.length > 0) ? <ScrollView style={{ flex: 1, }} bounces={false} showsVerticalScrollIndicator={false}>
                                <Text style={[styles.addEditTitleText, transistionClassArray[appLanguage].textAlign]}>{textTranslation.myPets.PETDETAILTEXT}</Text>
                                <View style={{ flex: 1, marginBottom: this.state.viewHeight }}>
                                    <SwipeListView
                                        showsVerticalScrollIndicator={false}
                                        data={petList}
                                        renderItem={({ item, index }) => <MyPetListView data={item} isPetClicked={this.isPetClicked.bind(this)} />}
                                        renderHiddenItem={(rowData, rowMap) => (
                                            <View style={styles.removeContainer}>
                                                <View style={styles.swipeWishlistView}>
                                                    <TouchableOpacity style={[{ marginTop: -10, flex: 1, justifyContent: 'center', alignSelf: 'center' }, transistionClassArray[appLanguage].alignSelfReverse,
                                                    ]} onPress={() => this.callDeletePet(rowData.item.petId)}>
                                                        {/* <AntDesignIcon size={25} name="delete" color="white" style={{
                                                        marginLeft: appLanguage == "ar" ? 20 : 10, marginTop: 10
                                                    }} /> */}
                                                        <Image source={images.mypets.petDelete} style={{ marginLeft: appLanguage == "ar" ? 20 : 10, marginTop: 10 }} />
                                                        <Text style={[{
                                                            marginRight: appLanguage == "en" ? 10 : null,
                                                            marginLeft: appLanguage == "ar" ? 15 : null
                                                        }, globalStyles.deleteText]}>{textTranslation.getWishlistTranslatoins.DELETE}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )}

                                        stopLeftSwipe={(!appLanguage || appLanguage == 'en') ? -1 : 0}
                                        rightOpenValue={(!appLanguage || appLanguage == 'en') ? -70 : 0}
                                        disableRightSwipe={(!appLanguage || appLanguage == 'en')}

                                        stopRightSwipe={appLanguage == 'ar' ? -70 : 0}
                                        leftOpenValue={appLanguage == 'ar' ? 70 : 0}
                                        disableLeftSwipe={appLanguage == 'ar'}
                                        ItemSeparatorComponent={() => (
                                            <View style={{ height: 5, backgroundColor: colors.lightWhite }} />
                                        )}
                                    >
                                    </SwipeListView>

                                </View>
                            </ScrollView> :
                                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor: colors.white }}>
                                    <Text style={styles.welcomeText}>{textTranslation.myPets.WELCOMEPET}</Text>
                                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                                        <Text style={styles.welcomeText2}>{textTranslation.myPets.ADDYPURPET}</Text>
                                        <Text style={styles.welcomeText2}>{textTranslation.myPets.RECOMEDTIME}</Text>
                                    </View>
                                    <Image source={images.mypets.emptyPet} style={{ width: 230, height: 230 }} resizeMode={'contain'} />
                                    <Text style={styles.welcomeText3}>{textTranslation.myPets.GETPETRECO}</Text>
                                    <View style={styles.bottomViewAdd} >
                                        <TouchableOpacity style={styles.addNewAddressView} onPress={() => navigate('AddPet', { isFrom: 'add', data: {} })} >
                                            <Text style={styles.addNewAddressText}>{textTranslation.myPets.ADDAPET}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>}
                    {(petList.length > 0) ? <View style={styles.bottomViewMyList} onLayout={event => {
                        this.find_dimesions(event.nativeEvent.layout);
                    }}>
                        <TouchableOpacity style={styles.addNewAddressView} onPress={() => navigate('AddPet', { isFrom: 'add', data: {} })} >
                            <Text style={styles.addNewAddressText}>{textTranslation.myPets.ADDAPET}</Text>
                        </TouchableOpacity>
                    </View> : null}

                </SafeAreaView>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        petList: state.MyPets.petList,
        loading: state.MyPets.loading,
        petListError: state.MyPets.petListError,
        petDeleted: state.MyPets.petDeleted,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getPetList: () => dispatch(getPetListRequest()),
        getPetListFail: (value) => dispatch(getPetListFail(value)),
        deletePet: (value) => dispatch(deletePet(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPetList)
// export default MyPetList
