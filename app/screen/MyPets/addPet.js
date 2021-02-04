
import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View,   Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, FlatList, Keyboard, Touchable } from 'react-native';
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
import AllergyViewData from '../../components/AllergyViewData';
import AllergyTagView from '../../components/AllergyTagView';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import style from '../../components/CategoryView/style';
import { connect } from "react-redux";
import { getPetListRequest, getPetListFail, getPetDropDown, getPetDropDownSuccess, addPetRequest, editPetRequest } from '../../redux/MyPets/actions';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-check-box'
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
 import moment from "moment";
import Toast from 'react-native-simple-toast';
import MyPets from '.';
import { adminLoginRequest, adminLoginFail } from '../../redux/AdminLogin/actions';
var _ = require('lodash');
const placeholderPetType = {
    label: 'Pet Type*',
    value: null,
};
const placeholderPetBreed = {
    label: 'Pet Breed*',
    value: null,
};
const placeholderSpices = {
    label: 'Species*',
    value: null,
};
const placeholderBreedSize = {
    label: 'Breed Size*',
    value: null,
};
const placeholderAllergie = {
    label: 'Allergies*',
    value: null,
};
const placeholderGender = {
    label: 'Gender*',
    value: null,
};
const placeholderPreCondition = {
    label: 'Pre-Existing Conditions*',
    value: null,
};
let selectedPetType = '';
let tempBreedData = [];
let tempBreedSizeData = [];
let tempGenderData = [];
let tempAllergyData = [];
let tempPreCondtionData = [];
let setDateValue = '';
let allergyName = "";
let preConditionName = "";
let uploadImagePath = '';
import { RNS3 } from 'react-native-aws3';
var regexp = /^\d+\.\d{0,2}$/;
const DissmissKeyborad  = ({children}) => {
    return(
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
    )
    
}
class AddPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
                contextTypeLocalization._currentValue.translations._props.en :
                contextTypeLocalization._currentValue.translations._props.ar,
            petName: '',
            petWeight: '',
            selectedPetType: '',
            selectedPetBreed: '',
            selectedBreedSize: '',
            selectedAllergie: '',
            selectedGender: '',
            selectedConditions: '',
            isAdoptCheck: false,
            adoptYear: '',
            adoptMonth: '',
            birthDate: '',
            adoptDate: '',
            viewHeight: 0,
            isCameraModal: false,
            isAllergyModal: false,
            isPreConditionModal: false,
            searchAllery: '',
            searchPreConditions: '',
            petTypeData: [],
            breedData: [],
            breedSizeData: [],
            genderData: [],
            allDropDownData: null,
            allergyData: [],
            allergyDataFilter: [],
            selectedAllergyData: [],
            preConditionData: [],
            preConditionDataFilter: [],
            selectedPreConditionData: [],
        }
        this.yearRef = null;
    }
    componentDidMount() {
        
         if (globals.isInternetConnected) {
           // this.props.adminLogin();
             this.props.getPetDropDown();
            if (this.props.route.params.isFrom === 'edit') {
                let response = this.props.route.params.data;
                setTimeout(() => {
                    this.setDetailPetData(response)
                }, 100);
                
            }
            // this.props.adminLogin();
        } else {
            alert('Netwrok not available')
        }

    }
    setDetailPetData(item) {
        selectedPetType = item.petType;
        // console.log("Detail Data-->", item);
        uploadImagePath = item.petimage_1;
        this.setState({
            petName: item.petName, selectedPetType: item.petType,
            selectedPetBreed: item.petBreed, selectedBreedSize: item.breedSize,
            selectedGender: this.titleCase(item.gender), petWeight: item.weight.toString(),
        })
        if (item.adoptionDate) {
            setDateValue = item.adoptionDate;
            this.setState({
                isAdoptCheck: true, birthDate: globals.formatDate(item.adoptionDate),
                adoptMonth: item.ageInMonths.toString(), adoptYear: item.ageInYears.toString()
            })
        } else {
            setDateValue = item.birthday;
            this.setState({ isAdoptCheck: false, birthDate: globals.formatDate(item.birthday), adoptMonth: '', adoptYear: '' })
        }
        if (item.allergies) {
            let alData = item.allergies.split('||')
            let temp = [];
            for (let index = 0; index < alData.length; index++) {
                temp.push({ id: index + 1, name: alData[index], isSelected: true })
            }
            this.setState({ selectedAllergyData: temp })
        }

        if (item.preConditions) {
            let prData = item.preConditions.split('||')
            let tempPr = [];
            for (let index = 0; index < prData.length; index++) {
                tempPr.push({ id: index + 1, name: prData[index], isSelected: true })
            }
            this.setState({ selectedPreConditionData: tempPr })
        }
    }
    titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
    fillPetTypeDropDownData(data) {
        let tempType = JSON.parse(data);
        console.log("tempType--->after-->", (tempType));
        let arrData = [];
        for (let index = 0; index < tempType.length; index++) {
            arrData.push({ label: tempType[index], value: tempType[index] })
        }
        this.setState({ petTypeData: arrData })

    }

    fillBreedDropDownData(data) {
        // this.setState({breedData: [], selectedPetBreed: ''})
        let item = JSON.parse(data);
        if (selectedPetType) {
            let dogKey = item[selectedPetType] || [];
            let arrData = [];
            for (let index = 0; index < dogKey.length; index++) {
                arrData.push({ label: dogKey[index], value: dogKey[index] })
            }
            this.setState({ breedData: arrData })
        }

    }

    fillBreedSizeDropDownData(data) {
        let item = JSON.parse(data);
        if (selectedPetType) {
            let dogKey = item[selectedPetType] || [];
            let arrData = [];
            for (let index = 0; index < dogKey.length; index++) {
                arrData.push({ label: dogKey[index], value: dogKey[index] })
            }
            this.setState({ breedSizeData: arrData })
        }
    }

    fillGenderDropDownData(data) {
        let item = JSON.parse(data);
        let dogKey = item || [];
        let arrData = [];
        for (let index = 0; index < dogKey.length; index++) {
            arrData.push({ label: dogKey[index], value: dogKey[index] })
        }
        this.setState({ genderData: arrData })
    }

    fillAllergyData(data) {
        let item = JSON.parse(data);
        if (selectedPetType) {
            let dogKey = item[selectedPetType] || [];
            let arrData = [];
            for (let index = 0; index < dogKey.length; index++) {
                arrData.push({ id: index + 1, name: dogKey[index], isSelected: false })
            }
            this.setState({ allergyData: arrData }, () => {
                if (this.props.route.params.isFrom === 'edit') {
                    for (var i = 0; i < this.state.selectedAllergyData.length; i++) {
                        for (var k = 0; k < this.state.allergyData.length; k++) {
                            if (this.state.selectedAllergyData[i].name == this.state.allergyData[k].name) {
                                this.state.allergyData[k].isSelected = true;
                                break;
                            }
                        }
                    }
                }
            })
        }
    }
    fillPreConditionData(data) {
        let item = JSON.parse(data);
        if (selectedPetType) {
            let dogKey = item[selectedPetType] || [];
            let arrData = [];
            for (let index = 0; index < dogKey.length; index++) {
                arrData.push({ id: index + 1, name: dogKey[index], isSelected: false })
            }
            this.setState({ preConditionData: arrData }, () => {
                if (this.props.route.params.isFrom === 'edit') {
                    if (this.state.selectedPreConditionData) {
                        for (var i = 0; i < this.state.selectedPreConditionData.length; i++) {
                            for (var k = 0; k < this.state.preConditionData.length; k++) {
                                if (this.state.selectedPreConditionData[i].name == this.state.preConditionData[k].name) {
                                    this.state.preConditionData[k].isSelected = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProp) {
        // console.log("nextProp-->", JSON.stringify(nextProp));
        if (nextProp.dropDownData.petType) {
            this.fillPetTypeDropDownData(nextProp.dropDownData.petType)
        } if (nextProp.dropDownData.petBreed) {
            tempBreedData = nextProp.dropDownData.petBreed;
            this.fillBreedDropDownData(nextProp.dropDownData.petBreed);
        }
        if (nextProp.dropDownData.petBreedSize) {
            tempBreedSizeData = nextProp.dropDownData.petBreedSize;
            this.fillBreedSizeDropDownData(nextProp.dropDownData.petBreedSize);
        }
        if (nextProp.dropDownData.petGender) {
            tempGenderData = nextProp.dropDownData.petGender;
            this.fillGenderDropDownData(nextProp.dropDownData.petGender);
        } if (nextProp.dropDownData.petAllergies) {
            tempAllergyData = nextProp.dropDownData.petAllergies;
            this.fillAllergyData(nextProp.dropDownData.petAllergies);
        } if (nextProp.dropDownData.petPreConditions) {
            tempPreCondtionData = nextProp.dropDownData.petPreConditions;
            this.fillPreConditionData(nextProp.dropDownData.petPreConditions);
        }
        if (nextProp.dropDownData.message === 'access token expired') {
            // Toast.show(nextProp.dropDownData.message)
            if (globals.isInternetConnected) {
                this.props.getPetDropDown();
            } else {
                alert('Netwrok not available')
            }
            nextProp.dropDownData.message = '';
            // nextProp.access_token = ''
        }
        if (globals.accessToken != nextProp.access_token) {
            Toast.show('Call DropDown API')
        }
        if (nextProp.petAdded.added && !nextProp.loading) {
            nextProp.petAdded.added = false;
            nextProp.navigation.goBack();
            MyPets.callpetList()
            Toast.show('Pet added successfully');
            //alert('Pet added')
        }
        if (nextProp.petEdited.edited && !nextProp.loading) {
            nextProp.petEdited.edited = false;
            nextProp.navigation.goBack();
            MyPets.callpetList()
            Toast.show('Pet edited successfully');

            //alert('Pet added')
        }


    }
    componentWillUnmount() {
        this.clearAllValues()
    }
    clearAllValues() {
        selectedPetType = '';
        uploadImagePath = '';
        setDateValue = '';
        this.setState({ selectedPetType: '', selectedBreedSize: '', selectedPetBreed: '', selectedGender: '' })
    }
    isPetClicked(id, item) {
        console.log("ID", id);
    }
    clickTryNow(apiFor) {
        if (apiFor === 'petList') {
            this.props.getPetList()
        }
    }
    find_dimesions(layout) {
        const { height } = layout;
        console.log("height-->", height);
        this.setState({ viewHeight: height });
    }
    setYearValue(value) {
        this.setState({ adoptYear: value });
    }

    fileUpload(value) {
        console.log('call aws');
        const filename = new Date().getTime() + '.jpg';
        const file = {
            uri: value,
            name: filename,
            type: 'image/jpg',
        };
        const options = {
            keyPrefix: globals.userProfileId + '/',
            bucket: 'dpfdev',
            accessKey: 'AKIASMYKHEI7RSNJPNXV',
            secretKey: '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',
            region: "us-east-1"
            //   successActionStatus: 201,
        };
        RNS3.put(file, options).then((response) => {
            console.log('final response', response);
            if (response.status !== 201) Toast.show('Failed to upload image to S3')
            console.log(response.body);
            console.log('uploadFinish-->', response.body.postResponse.location);
            uploadImagePath = response.body.postResponse.location;
            //   const actionlogParameter = {​​​​​​​​
            //     file: 'AwsUploadComponent.js',
            //     action: 'File upload to aws',
            //     response: true,
            //   }​​​​​​​​;
            //   this.firebaseLogEvent('aws_upload', actionlogParameter);
            // alert('Aws File uploaded');

        });
    }

    renderAdoptYearMonthView() {
        const { appLanguage, textTranslation, adoptDate, adoptYear, adoptMonth, isAdoptCheck } = this.state;
        return (
            <View style={[transistionClassArray[appLanguage].flexDirection, { marginLeft: 20, borderRadius: 10, paddingBottom:10, backgroundColor: colors.lightGrey246, marginRight: 20, marginTop: -10 }]}>
                <View style={{ width: '50%' }}>
                    <View style={styles.textFiledViewFloatingAdopt}>
                        <FloatingLabelInput
                            label={textTranslation.myPets.ADOPTYEAR}
                            onChangeText={(value) => {
                                this.setState({ adoptYear: (isAdoptCheck) ? value : '' });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                            ref={input => { this.textInput = input }}
                            // ref={(ref) => { this.yearRef = ref; }}
                            keyboardType={'numeric'}
                            value={adoptYear}
                        />
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={styles.textFiledViewFloatingAdopt}>
                        <FloatingLabelInput
                            label={textTranslation.myPets.ADOPTMONTH}
                            value={adoptMonth}
                            onChangeText={(value) => {
                                this.setState({ adoptMonth: (isAdoptCheck) ? value : '' });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                            
                            keyboardType={'numeric'}
                        />
                    </View>
                </View>
            </View>
        )
    }

    openCamera() {
        launchCamera(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                console.log("Response camera --> ", response);
                this.fileUpload(response.uri)
                this.setState({ isCameraModal: false })
                //   setResponse(response);
            },
        )
    }
    openGallery() {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                console.log("response gallery --> ", response)
                this.fileUpload(response.uri)
                this.setState({ isCameraModal: false })
            },
        )
    }
    isAllergyRemove(id, data, isfor) {
        console.log('remove id-->', id);
        const dataCopy = (isfor === 'pre') ? this.state.preConditionData : this.state.allergyData;
        const indexItem = dataCopy.findIndex((item) => item.id == id);
        for (let i = 0; i < dataCopy.length; i++) {
            if (indexItem == i) {
                dataCopy[indexItem].isSelected = false;
            }
        }
        if (isfor === 'pre') {
            this.setState({ preConditionData: dataCopy }, () => {
                let result = dataCopy.filter(word => word.isSelected);
                this.setState({ selectedPreConditionData: result }, () => {
                    let title = ''
                    for (let index = 0; index < result.length; index++) {
                        title = title + result[index].name + "||"
                    }
                    preConditionName = title.substring(0, title.length - 2);
                })
            })
        } else {
            this.setState({ allergyData: dataCopy }, () => {
                let result = dataCopy.filter(word => word.isSelected);
                this.setState({ selectedAllergyData: result }, () => {
                    let title = ''
                    for (let index = 0; index < result.length; index++) {
                        title = title + result[index].name + "||"
                    }
                    allergyName = title.substring(0, title.length - 2);
                })
            })
        }

    }
    isAllergySelected(id, data, isfor) {
        console.log("id-->", isfor);
        const dataCopy = (isfor === 'pre') ? this.state.preConditionData : this.state.allergyData;
        const indexItem = dataCopy.findIndex((item) => item.id == id);
        for (let i = 0; i < dataCopy.length; i++) {
            if (indexItem == i) {
                dataCopy[indexItem].isSelected = !dataCopy[indexItem].isSelected;
            }
        }
        if (isfor === 'pre') {
            this.setState({ preConditionData: dataCopy }, () => {
                let result = dataCopy.filter(word => word.isSelected);
                console.log("selectedAllergyData-->", result);
                this.setState({ selectedPreConditionData: result }, () => {
                    let title = ''
                    for (let index = 0; index < result.length; index++) {
                        title = title + result[index].name + "||"
                    }
                    preConditionName = title.substring(0, title.length - 2);
                })
            })
        } else {
            this.setState({ allergyData: dataCopy }, () => {
                let result = dataCopy.filter(word => word.isSelected);
                this.setState({ selectedAllergyData: result }, () => {
                    let title = ''
                    for (let index = 0; index < result.length; index++) {
                        title = title + result[index].name + "||"
                    }
                    allergyName = title.substring(0, title.length - 2);
                })
            })
        }

    }

    searchFilterFunctionPre(text) {
        this.setState({
            searchPreConditions: text
        });
        let dummyData = this.state.preConditionData;
        const newData = dummyData.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.includes(textData);
        });

        this.setState({
            preConditionDataFilter: newData
        });

    }

    searchFilterFunction(text) {
        this.setState({
            searchAllery: text
        });
        let dummyData = this.state.allergyData;
        const newData = dummyData.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.includes(textData);
        });

        this.setState({
            allergyDataFilter: newData
        });

    }
    closeAllergeyModal(){
        this.setState({ isAllergyModal: false, searchAllery: '' })
    }
    renderAllergyModal() {
        const { appLanguage, textTranslation, isAllergyModal, searchAllery, allergyData, allergyDataFilter, selectedAllergyData } = this.state;
        return (
            <Modal testID={'modal'}
                isVisible={isAllergyModal}
                style={styles.view}>
                <View style={styles.allergyModalView}>
                    <View style={styles.graySeprator}></View>

                    <View style={{ padding: 0 }}>
                        <View style={[styles.enterAddressPopup, { paddingLeft: 20, paddingRight: 20, paddingBottom:10, }, transistionClassArray[appLanguage].flexDirection]}>
                            <View style={[{ width: '90%' }, transistionClassArray[appLanguage].flexDirection]}>
                                <Text style={styles.enterAddressTextView}>{textTranslation.myPets.ALLERGYLABLE}</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <TouchableOpacity onPress={() => this.closeAllergeyModal()}>
                                    <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView bounces={false}>
                            <View style={{ flex: 1, marginTop: 10, }} >
                                <View style={{ flex: 1, marginLeft: 10, }}  >
                                    <FlatList
                                        data={selectedAllergyData}
                                        renderItem={({ item, index }) => <AllergyTagView mainView={styles.allergyMainView} isFor={'allergy'} data={item} isAllergyRemove={this.isAllergyRemove.bind(this)} />}
                                        keyExtractor={(item, index) => index.toString()}
                                        numColumns={3}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={styles.modalSeprator} />
                                <View style={styles.searchInputView}>
                                    <FloatingLabelInput
                                        label={textTranslation.myPets.STARTTYPE}
                                        value={searchAllery}
                                        onChangeText={(value) => {
                                            this.searchFilterFunction(value)
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                        }}
                                        rightComponent={
                                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.setState({ searchAllery: '' }) }} >
                                                <Image source={images.shippingAddress.cancel} style={styles.cancelIconModal} resizeMode={'contain'} />
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                                <View style={{ flex: 1, marginTop: 10, paddingBottom: 100 }} onStartShouldSetResponder={(): boolean => true} >
                                    <FlatList
                                        data={(searchAllery) ? allergyDataFilter : allergyData}
                                        renderItem={({ item, index }) => <AllergyViewData isFor='allergy' data={item} isAllergySelected={this.isAllergySelected.bind(this)} />}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }
    closePreModal(){
        this.setState({ isPreConditionModal: false, searchPreConditions: '' })
    }
    renderPreConditionsModal() {
        const { appLanguage, textTranslation, isPreConditionModal, searchPreConditions, preConditionData, preConditionDataFilter, selectedPreConditionData } = this.state;
        return (
            <Modal testID={'modal'}
                isVisible={isPreConditionModal}
                style={styles.view}>
                <View style={styles.allergyModalView}>
                    <View style={styles.graySeprator}></View>

                    <View style={{ padding: 0 }}>
                        <View style={[styles.enterAddressPopup, { paddingLeft: 20, paddingRight: 20,paddingBottom:10 }, transistionClassArray[appLanguage].flexDirection]}>
                            <View style={[{ width: '90%' }, transistionClassArray[appLanguage].flexDirection]}>
                                <Text style={styles.enterAddressTextView}>{textTranslation.myPets.PRCONDLABLE}</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <TouchableOpacity onPress={() => this.closePreModal()}>
                                    <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView bounces={false}>
                            <View style={{ flex: 1, marginTop: 10, }} >
                                <View style={{ flex: 1, marginLeft: 10, }}  >
                                    <FlatList
                                        data={selectedPreConditionData}
                                        renderItem={({ item, index }) => <AllergyTagView mainView={styles.allergyMainView} isFor={'pre'} data={item} isAllergyRemove={this.isAllergyRemove.bind(this)} />}
                                        keyExtractor={(item, index) => index.toString()}
                                        numColumns={3}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={styles.modalSeprator} />
                                <View style={styles.searchInputView}>
                                    <FloatingLabelInput
                                        label={textTranslation.myPets.STARTTYPE}
                                        value={searchPreConditions}
                                        onChangeText={(value) => {
                                            this.searchFilterFunctionPre(value)
                                        }}
                                        labelStyles={{
                                            fontFamily: globals.ProximaNovaRegular,
                                            color: colors.darkWarmGrey,
                                        }}
                                        rightComponent={
                                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.setState({ searchPreConditions: '' }) }} >
                                                <Image source={images.shippingAddress.cancel} style={styles.cancelIconModal} resizeMode={'contain'} />
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                                <View style={{ flex: 1, marginTop: 10, paddingBottom: 100 }} onStartShouldSetResponder={(): boolean => true} >
                                    <FlatList
                                        data={(searchPreConditions) ? preConditionDataFilter : preConditionData}
                                        renderItem={({ item, index }) => <AllergyViewData isFor={'pre'} data={item} isAllergySelected={this.isAllergySelected.bind(this)} />}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }
    renderUploadPhotoModal() {
        const { appLanguage, textTranslation, isCameraModal } = this.state;
        return (
            <Modal testID={'modal'}
                isVisible={isCameraModal}
                style={styles.view}>
                <View style={styles.cameraHeight}>
                    <View style={styles.graySeprator}></View>
                    <View style={{ padding: 20 }}>
                        <View style={[styles.enterAddressPopup, transistionClassArray[appLanguage].flexDirection]}>
                            <View style={[{ width: '90%' }, transistionClassArray[appLanguage].flexDirection]}>
                                <Text style={styles.enterAddressTextView}>{textTranslation.myPets.SELECTPHOTO}</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <TouchableOpacity onPress={() => this.setState({ isCameraModal: false })}>
                                    <Image source={images.shippingAddress.cancel} style={styles.cancelIcon} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.openGallery()}>
                            <Text style={styles.photoUploadOptionText}>{textTranslation.myPets.GALLERY}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.openCamera()}>
                            <Text style={styles.photoUploadOptionText}>{textTranslation.myPets.TAKEPHOTO}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    selectedPetItem(value) {
        this.setState({ selectedPetType: value }, () => {
            selectedPetType = value;
            console.log("selectedPetType-->", selectedPetType);
            this.setState({ breedData: [], selectedPetBreed: '' })
            this.fillBreedDropDownData(tempBreedData)
            this.fillBreedSizeDropDownData(tempBreedSizeData)
            this.fillAllergyData(tempAllergyData)
            this.fillPreConditionData(tempPreCondtionData);
        })
    }
    renderSelectedAllergyData(data) {
        const { appLanguage } = this.state;
        return data.map((data) => {
            return (
                <View style={[styles.allergyMainView, transistionClassArray[appLanguage].flexDirection]} >
                    <Text style={styles.allergyTextView}>{data.name}</Text>
                </View>
            )
        })
    }
    appendLeadingZeroes(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }
    setDateValue(date) {
        let myDate = new Date(date);
        setDateValue = myDate.getFullYear() + '-' + this.appendLeadingZeroes(myDate.getMonth() + 1) + "-" + this.appendLeadingZeroes(myDate.getDate());
        this.setState({ birthDate: globals.formatDate(setDateValue) })
    }
    validnum(a) {
        if (a < 0 || a > 12)
            return false;
        else
            return true;
    }
    validateAllField() {
        const { petName, selectedPetType, selectedPetBreed, selectedBreedSize,
            breedData, breedSizeData, selectedGender, genderData, petWeight,
            isAdoptCheck, adoptYear, adoptMonth } = this.state;
        if (_.isEmpty(petName)) {
            alert('Enter Pet Name')
        } else if ( _.isEmpty(selectedPetType)) {
            alert('Select Pet Type')
        } else if (breedData.length > 0 && _.isEmpty(selectedPetBreed)) {
            alert((selectedPetType === 'Dog' || selectedPetType === 'Cat') ? 'Select Pet Breed' : 'Select Spices')
        } else if (breedSizeData.length > 0 && _.isEmpty(selectedBreedSize)) {
            alert('Select Pet Breed Size')
        } else if (selectedPetType != 'Fish' && genderData.length > 0 && _.isEmpty(selectedGender)) {
            alert('Select Gender')
        } else if ((selectedPetType === 'Dog' && selectedPetType === 'Cat') && _.isEmpty(petWeight)) {
            alert('Enter weight')
        } else if ((selectedPetType === 'Dog' || selectedPetType === 'Cat') && _.isEmpty(setDateValue)) {
            alert((isAdoptCheck) ? 'Enter adoption date' : "Enter birth date")
        } else if (isAdoptCheck) {
            if (_.isEmpty(adoptYear)) {
                alert('Enter year')
            } else if (parseInt(adoptYear) > 100) {
                alert('Age must be less than 100')
            } else if(regexp.test(adoptYear)){
                alert('Year can not allow decimal number')
            } else if (_.isEmpty(adoptMonth)) {
                alert('Enter month')
            }else if(regexp.test(adoptMonth)){
                alert('Month can not allow decimal number')
            } 
            else if (!this.validnum(parseInt(adoptMonth))) {
                alert('Months can only be 0 - 11')
            } else {
                let data = {
                    "profileId": globals.userProfileId,
                    "petName": petName,
                    "gender": selectedGender,
                    "birthday": (isAdoptCheck) ? null : setDateValue,
                    "adoptionDate": (isAdoptCheck) ? setDateValue : null,
                    "weight": petWeight,
                    "active": 1,
                    "createdBy": "DPF Admin1",
                    "updatedBy": "DPF Admin1",
                    "petimage_1": uploadImagePath,
                    "petType": selectedPetType,
                    "petBreed": selectedPetBreed,
                    "breedSize": selectedBreedSize,
                    "allergies": allergyName,
                    "preConditions": preConditionName,
                    "locale": "en",
                    "ageInMonths": adoptMonth,
                    "ageInYears": adoptYear,
                }
                if (this.props.route.params.isFrom === 'edit') {
                    this.props.editPetData(data, this.props.route.params.data.petId)
                }
                else {
                    this.props.addPetData(data)
                }
            }
        } else {
            let data = {
                "profileId": globals.userProfileId,
                "petName": petName,
                "gender": selectedGender,
                "birthday": (isAdoptCheck) ? null : setDateValue,
                "adoptionDate": (isAdoptCheck) ? setDateValue : null,
                "weight": petWeight,
                "active": 1,
                "createdBy": "DPF Admin1",
                "updatedBy": "DPF Admin1",
                "petimage_1": uploadImagePath,
                "petType": selectedPetType,
                "petBreed": selectedPetBreed,
                "breedSize": selectedBreedSize,
                "allergies": allergyName,
                "preConditions": preConditionName,
                "locale": "en",
                "ageInMonths": adoptMonth,
                "ageInYears": adoptYear,
            }
            if (this.props.route.params.isFrom === 'edit') {
                this.props.editPetData(data, this.props.route.params.data.petId)
            }
            else {  
                this.props.addPetData(data)
            }
        }

    }
    renderPlace(type){
        if (type === 'Dog' || type === 'Cat') {
            return placeholderPetBreed
        } else {
            return placeholderSpices
        }
    }
   
    callCheckedItem(isAdoptCheck){
       // Keyboard.dismiss();
        setTimeout(() => {
            if (!isAdoptCheck) {
                this.setState({adoptMonth: '', adoptYear: '', isAdoptCheck: isAdoptCheck,})
            }else{
                this.setState({isAdoptCheck: isAdoptCheck});
            }
        }, 300);
    }
    renderMainView() {
        const { appLanguage, textTranslation, myPetData, petName, petWeight, allergyData, birthDate, isAdoptCheck, preConditionData,
            isAllergyModal, petTypeData, breedData, breedSizeData, genderData, selectedPetType, selectedPetBreed, selectedBreedSize, selectedGender, selectedAllergyData, selectedPreConditionData } = this.state;
        const { navigation, petList, loading, petListError, petListDropdown } = this.props;
        let date = moment().format('DD MMM YYYY').split('.').join("");
        return (
             <KeyboardAvoidingView enabled behavior={(Platform.OS == "ios") ? "padding" : null} keyboardVerticalOffset={(Platform.OS == "ios") ? 100 : 100} style={{ flex: 1, }}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, paddingBottom: 100, backgroundColor: colors.white }} bounces={false} showsVerticalScrollIndicator={false}>
                <Text style={[styles.addEditTitleText, {paddingBottom:0}, transistionClassArray[appLanguage].textAlign]}>{textTranslation.myPets.PETDETAILTEXT}</Text>
                    <View style={[styles.textFiledViewFloating, {marginTop:10}]}>
                        <FloatingLabelInput
                            label={textTranslation.myPets.PETNAME}
                            value={petName}
                            onChangeText={(value) => {
                                this.setState({ petName: value });
                            }}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                        />
                    </View>
                    {(this.props.route.params.isFrom === 'edit') ? <View style={[styles.textFiledViewFloating, {marginTop:10}]}>
                        <FloatingLabelInput
                            label={"Pet Type*"}
                            value={selectedPetType}
                            editable={false}
                            labelStyles={{
                                fontFamily: globals.ProximaNovaRegular,
                                color: colors.darkWarmGrey,
                            }}
                        />
                    </View> : <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                        <RNPickerSelect
                            hideIcon={(Platform.OS === 'ios') ? true : false}
                            onValueChange={(value) => this.selectedPetItem(value)}
                            placeholder={placeholderPetType}
                            style={{ ...pickerSelectStyles }}
                            isFrom={'full'}
                            useNativeAndroidPickerStyle={false}
                            items={petTypeData}
                            value={selectedPetType}
                        />
                        {(Platform.OS) === 'ios' ?
                            <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                style={styles.downArrowView} /> : null}
                    </View>}
                    
                    {(breedData.length > 0) ? <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                        <RNPickerSelect
                            hideIcon={(Platform.OS === 'ios') ? true : false}
                            onValueChange={(value) => this.setState({ selectedPetBreed: value })}
                            // placeholder={(selectedPetType === 'Bird') ? placeholderSpices  : placeholderPetBreed}
                            placeholder={this.renderPlace(selectedPetType)}
                            style={{ ...pickerSelectStyles }}
                            isFrom={'full'}
                            useNativeAndroidPickerStyle={false}
                            items={breedData}
                            value={selectedPetBreed}
                        />
                        {(Platform.OS) === 'ios' ?
                            <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                style={styles.downArrowView} /> : null}
                    </View> : null}
                    {(breedSizeData.length > 0) ? <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                        <RNPickerSelect
                            hideIcon={(Platform.OS === 'ios') ? true : false}
                            onValueChange={(value) => this.setState({ selectedBreedSize: value })}
                            placeholder={placeholderBreedSize}
                            style={{ ...pickerSelectStyles }}
                            isFrom={'full'}
                            useNativeAndroidPickerStyle={false}
                            items={breedSizeData}
                            value={selectedBreedSize}
                        />
                        {(Platform.OS) === 'ios' ?
                            <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                style={styles.downArrowView} /> : null}
                    </View> : null}

                    {(allergyData.length > 0) ? <View>
                        <View style={[(Platform.OS === 'android') ? styles.dropdownMainViewAllergy : styles.dropdownMainViewIOS,
                        { borderRadius: (selectedAllergyData.length > 0) ? 14 : 50 }]}>
                            <TouchableWithoutFeedback onPress={() => this.setState({ isAllergyModal: true })}>
                                <View style={[{ justifyContent: 'space-between' }, transistionClassArray[appLanguage].flexDirection]}>
                                    <View>
                                        <Text style={styles.allergyTitle}>{textTranslation.myPets.ALLERGYLABLE}</Text>
                                    </View>
                                    <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                        style={styles.allergyDownArrowView} />
                                </View>
                            </TouchableWithoutFeedback>
                            <FlatList
                                style={{ marginTop: (selectedAllergyData.length > 0) ? 5 : 0, maxWidth: globals.screenWidth - 100 }}
                                data={selectedAllergyData}
                                renderItem={({ item, index }) => <AllergyTagView mainView={styles.allergyMainView} isFor={'allergy'} data={item} isAllergyRemove={this.isAllergyRemove.bind(this)} />}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                    </View> : null}
                    {(breedData.length > 0 && selectedPetType != 'Fish') ? <View style={[transistionClassArray[appLanguage].flexDirection,]}>
                        <View style={{ width: '50%' }}>
                            <View style={[(Platform.OS === 'android') ? styles.dropdownMainView : styles.dropdownMainViewIOS, transistionClassArray[appLanguage].flexDirection]}>
                                <RNPickerSelect
                                    hideIcon={(Platform.OS === 'ios') ? true : false}
                                    onValueChange={(value) => this.setState({ selectedGender: value })}
                                    placeholder={placeholderGender}
                                    style={{ ...pickerSelectStyles }}
                                    isFrom={'full'}
                                    useNativeAndroidPickerStyle={false}
                                    items={genderData}
                                    value={selectedGender}
                                />
                                {(Platform.OS) === 'ios' ?
                                    <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                        style={styles.downArrowView} /> : null}
                            </View>
                        </View>
                        {(selectedPetType == 'Dog' || selectedPetType === 'Cat') ? <View style={{ width: '50%' }}>
                            <View style={styles.textFiledViewFloatingWeight}>
                                <FloatingLabelInput
                                    label={textTranslation.myPets.WEIGHT}
                                    value={petWeight}
                                    maxLength={4}
                                    keyboardType={'numeric'}
                                    onChangeText={(value) => {
                                        this.setState({ petWeight: value });
                                    }}
                                    labelStyles={{
                                        fontFamily: globals.ProximaNovaRegular,
                                        color: colors.darkWarmGrey,
                                    }}
                                />
                            </View>
                        </View> : null}
                        
                    </View> : null}    
                    {(breedData.length > 0 && (selectedPetType === 'Dog' || selectedPetType === 'Cat')) ? <>
                        <View style={{backgroundColor: colors.lightGrey246, marginLeft: 20, marginRight: 20,
                            borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius:20, borderTopRightRadius:20,
                             height:80, marginTop:20}}>
                        </View>
                        <View style={[{ marginLeft: 20, marginRight: 20, marginTop: -80, flexDirection: 'row',  justifyContent: 'space-between' }]}>
                            <DatePicker
                                allowFontScaling={false}
                                // maxFontSizeMultiplier={(Platform.OS === 'ios') ? 1.5 : 0}
                                placeholder={(!isAdoptCheck) ? textTranslation.myPets.BIRTHDATE : textTranslation.myPets.ADOPTDATE}
                                androidMode="spinner"
                                showIcon={false}
                                date={(birthDate) ? birthDate : ''}
                                // date={(this.state.dob !== '') ? this.state.dob : ''}
                                mode="date"
                                format="DD MMM YYYY"
                                maxDate={JSON.stringify(date)}
                                confirmBtnText={textTranslation.myPets.CONFIRM}
                                cancelBtnText={textTranslation.myPets.CANCEL}
                                customStyles={{
                                    placeholderText: [(birthDate) ? styles.datePickerRightTextStyleSmall : styles.datePickerRightTextStyle],
                                    dateText: [styles.dobEditRightDateTextView],
                                    dateInput: [styles.dateInput],
                                    dateTouchBody: styles.dateTouchBody,
                                }}
                                style={{ flex: 1,  }}
                                onDateChange={(date) => this.setDateValue(date)}
                            />
                            <Image
                                style={{ position: 'absolute', right: 20, bottom: 8, height: 25, marginTop: 3, width: 25 }}
                                source={images.mypets.date}
                            />
                        </View>
                        <View style={{  borderRadius: 10, backgroundColor: colors.lightGrey246, height: 60,  marginLeft: 20, marginRight: 20, }}>
                            <View style={[transistionClassArray[appLanguage].flexDirection, { alignItems: 'center', marginTop: 10 }]}>
                                <CheckBox
                                    style={{ padding: 10, marginLeft: 5, }}
                                    onClick={() => {
                                        this.callCheckedItem(!isAdoptCheck)
                                    }}
                                    isChecked={isAdoptCheck}
                                    checkedImage={<Image source={images.shippingAddress.check} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                    unCheckedImage={<Image source={images.shippingAddress.uncheck} style={{ width: 20, height: 20 }} resizeMode={'contain'} />}
                                />
                                <Text style={styles.deafualtAddressTextView}>{textTranslation.myPets.ADOPTDATE2}</Text>
                            </View>
                        </View>
                    </> : null}

                    {(isAdoptCheck) ? this.renderAdoptYearMonthView() : null}
                    {(preConditionData.length > 0) ? <View style={[(Platform.OS === 'android') ? styles.dropdownMainViewAllergy : styles.dropdownMainViewIOS,
                    { borderRadius: (selectedPreConditionData.length > 0) ? 14 : 50 }]}>
                        <View>
                            <TouchableWithoutFeedback onPress={() => this.setState({ isPreConditionModal: true })}>
                                <View style={[{ justifyContent: 'space-between' }, transistionClassArray[appLanguage].flexDirection]}>
                                    <View>
                                        <Text style={styles.allergyTitle}>{textTranslation.myPets.PRCONDLABLE}</Text>
                                    </View>
                                    <Image source={images.productDetail.downArrow} resizeMode={'contain'}
                                        style={styles.allergyDownArrowView} />
                                </View>
                            </TouchableWithoutFeedback>
                            <FlatList
                                style={{ marginTop: (selectedPreConditionData.length > 0) ? 5 : 0, maxWidth: globals.screenWidth - 100 }}
                                data={selectedPreConditionData}
                                renderItem={({ item, index }) => <AllergyTagView mainView={styles.allergyMainView} isFor={'pre'} data={item} isAllergyRemove={this.isAllergyRemove.bind(this)} />}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View> : null}
                    <TouchableOpacity onPress={() => this.setState({ isCameraModal: true })}>
                        <View style={[styles.uploadPhotoView, transistionClassArray[appLanguage].flexDirection]}>
                            <Image source={images.mypets.upload} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                            <Text style={styles.uploadPhotoTextView}>{textTranslation.myPets.UPLOADPHOTO}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
         )
    }
    renderTitle(isFrom){
        const {textTranslation} = this.state;
        if (isFrom === 'edit') {
            return(
                <Text style={styles.headerTitle}>{textTranslation.myaccount.EDITPET}</Text>
            )
        }
        return(
            <Text style={styles.headerTitle}>{textTranslation.home.ADDPET}</Text>
        )
    }
    render() {
        const { appLanguage, textTranslation, myPetData, petName, petWeight, birthDate, isAdoptCheck,
            isAllergyModal, petTypeData, breedData, breedSizeData, genderData, selectedAllergyData, selectedPreConditionData } = this.state;
        const { navigation, petList, loading, petListError, petListDropdown } = this.props;

        return (
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                <SafeAreaView style={styles.safeAreaViewWhite} >
                    <AppHeader
                        barStyle={"light-content"}
                        androidStatusBarColor={colors.THEME_COLOR}
                        BodyData={
                            <View style={[transistionClassArray[appLanguage].flexDirection, styles.headerMainView]}>
                                {this.renderTitle(this.props.route.params.isFrom)}
                                {/* {this.props.route.params.isFrom === 'edit'} ? <Text style={styles.headerTitle}>{'EDIT PET'}</Text> :0 <Text style={styles.headerTitle}>{textTranslation.home.ADDPET}</Text> */}
                            </View>}
                        BodyFlex={.90}
                        LeftFlex={.20}
                        LeftData={
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <MaterialIcons name={'arrow-back'} size={30} color={colors.white} style={{ marginLeft: 10, }} />
                            </TouchableOpacity>}
                    />
                     
                    {(loading) ? <Loader /> : this.renderMainView()}
                    {this.renderUploadPhotoModal()}
                    {this.renderAllergyModal()}
                    {this.renderPreConditionsModal()}
                    {(loading) ? null : <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.addNewAddressView} onPress={() => this.validateAllField()}  >
                            <Text style={styles.addNewAddressText}>{(this.props.route.params.isFrom === 'edit') ? textTranslation.myaccount.UPDATE : textTranslation.myPets.ADDAPET}</Text>
                        </TouchableOpacity>
                    </View>}
                     
                </SafeAreaView>
            </Fragment>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        // paddingRight: 30, 
    },
    inputAndroid: {
        fontSize: globals.font_15,
        color: colors.black,
        fontFamily: globals.ProximaNovaRegular,
        width: globals.screenWidth,
        height: 40,
    },
});
const mapStateToProps = state => {
    return {
        petListDropdown: state.MyPets.petListDropdown,
        dropDownData: state.MyPets.dropDownData,
        loading: state.MyPets.loading,
        petAdded: state.MyPets.petAdded,
        petEdited: state.MyPets.petEdited,
        access_token: state.AdminLogin.access_token
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getPetDropDown: () => dispatch(getPetDropDown()),
        addPetData: (value) => dispatch(addPetRequest(value)),
        editPetData: (value, id) => dispatch(editPetRequest(value, id)),
        adminLogin: () => dispatch(adminLoginRequest()),
        getPetDropDownSuccess: () => dispatch(getPetDropDownSuccess())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPet)
