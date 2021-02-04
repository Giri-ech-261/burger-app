import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import Highlighter from 'react-native-highlight-words';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import {LocalizationContext} from '../../localizations';
import * as colors from '../../assets/styles/color';
import * as images from '../../assets/images/map';
import * as globals from '../../utills/globals';
import FormInput from '../../components/FormInput';
import {transistionClassArray} from '../../utills/TranslationClasses';
import {resultList, recentSearch, popularSearch} from './searchData';
import {wp} from '../../theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FlatGrid} from 'react-native-super-grid';
import globalStyles from '../../assets/styles/globalStyle';

const contextTypeLocalization = LocalizationContext;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appLanguage: contextTypeLocalization._currentValue.appLanguage,
      textTranslation:
        contextTypeLocalization._currentValue.appLanguage === 'en'
          ? contextTypeLocalization._currentValue.translations._props.en
          : contextTypeLocalization._currentValue.translations._props.ar,
      searchText: '',
      data: resultList,
      arrayHolder: resultList,
    };
  }

  updateList(searchText) {
    const newData = this.state.arrayHolder.filter((record) => {
      return record.title.includes(searchText);
    });
    this.setState({searchText, data: newData});
  }

  RecentSearches = ({item, index}) => {
    const {appLanguage} = this.state;
    return (
      <TouchableOpacity style={styles.searchBoxes}>
        <Text
          style={[
            transistionClassArray[appLanguage].textAlign,
            styles.SearchBoxesText,
          ]}
          onPress={() => {
            this.setState({searchText: item});
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {appLanguage, textTranslation, searchText} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={globalStyles.safeAreaViewHeader}/>
        <SafeAreaView>
          <AppHeader
            barStyle={'light-content'}
            androidStatusBarColor={colors.THEME_COLOR}
            RightFlex={0.2}
            BodyData={
              <View style={{flexDirection: 'row'}}>
                <FormInput
                  value={searchText}
                  style={styles.searchBox}
                  onChangeText={(searchText) => this.updateList(searchText)}
                  onSubmitEditing={() =>
                    this.props.navigation.navigate('SearchList', {
                      query: this.state.searchText,
                    })
                  }
                  isLeftIcon
                  leftIcon={
                    <MaterialIcons
                      name={'search'}
                      size={25}
                      color={colors.commonHeaderText}
                    />
                  }
                  leftIconStyle={{left: wp(4.5)}}
                  isRightIcon
                  rightIcon={
                    <MaterialIcons
                      name={'cancel'}
                      size={25}
                      color={colors.blackOpacity4}
                      onPress={() => this.setState({searchText: ''})}
                      style={{right: 6}}
                    />
                  }
                />
              </View>
            }
            BodyFlex={0.8}
            LeftFlex={-2}
            RightData={
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Text
                  style={[
                    {color: colors.white},
                    transistionClassArray[appLanguage].flexDirection,
                  ]}>
                  {textTranslation.search.CANCEL}
                </Text>
              </Button>
            }
          />
          <ScrollView>
            <View style={styles.subHeader}>
              <View style={styles.actionContainer}>
                <Button
                  iconLeft
                  transparent
                  onPress={() => this.props.navigation.navigate('Barcode')}>
                  <FastImage
                    style={styles.barcodeImage}
                    source={images.search.barcode}
                    resizeMode={'contain'}
                  />
                  <Text
                    style={[
                      styles.actionText,
                      transistionClassArray[appLanguage].flexDirection,
                    ]}>
                    {textTranslation.search.SCANBARCODE}
                  </Text>
                </Button>
              </View>
              <View style={styles.actionContainer}>
                <Button iconLeft transparent>
                  <FastImage
                    style={styles.voiceImage}
                    source={images.search.voice}
                    resizeMode={'contain'}
                  />
                  <Text
                    style={[
                      styles.actionText,
                      transistionClassArray[appLanguage].flexDirection,
                    ]}>
                    {textTranslation.search.VOICESEARCH}
                  </Text>
                </Button>
              </View>
            </View>
            {searchText ? (
                <KeyboardAwareScrollView enableOnAndroid={true}>
              <View style={{flex: 1}}>
                <FlatList
                  data={this.state.data}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('SearchList', {
                          query: this.state.searchText,
                        })
                      }
                      style={[
                        {
                          paddingHorizontal: 19,
                          paddingVertical: 20,
                          borderBottomWidth: 1,
                          borderColor: colors.lightWarmGrey,
                        },
                        transistionClassArray[appLanguage].flexDirection,
                      ]}>
                      <Highlighter
                        style={styles.listItem}
                        highlightStyle={{fontFamily: globals.ProximaNovaBold}}
                        searchWords={[searchText]}
                        textToHighlight={item.title}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
                </KeyboardAwareScrollView>
            ) : (
              <View>
                <View style={transistionClassArray[appLanguage].flexDirection}>
                  <Text style={[styles.recentSearchText]}>
                    {textTranslation.search.RECENTSEARCH}
                  </Text>
                </View>
                <View style={[styles.RecentSearchFlatViewMain]}>
                  <FlatList
                    inverted={appLanguage === 'ar'}
                    numColumns={(globals.iPhoneX) ? 2 : 3}
                    // columnWrapperStyle={styles.row}
                    data={recentSearch}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.RecentSearches}
                  />
                </View>
                <View style={styles.divider} />
                <View style={transistionClassArray[appLanguage].flexDirection}>
                  <Text style={[styles.recentSearchText]}>
                    {textTranslation.search.POPULATSEARCH}
                  </Text>
                </View>
                <View style={[styles.RecentSearchFlatViewMain]}>
                  <FlatList
                    inverted={appLanguage === 'ar'}
                    numColumns={(globals.iPhoneX) ? 2 : 3}
                    data={popularSearch}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.RecentSearches}
                  />
                </View>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
