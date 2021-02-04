import React, {useState} from 'react';
import * as colors from '../../assets/styles/color';
import FastImage from 'react-native-fast-image';
import globalStyles from '../../assets/styles/globalStyle';
import * as images from '../../assets/images/map';
import {TouchableOpacity} from 'react-native';
import FormInput from '../FormInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {transistionClassArray} from '../../utills/TranslationClasses';
import Badge from '../BadgeView/Badge';
import AppHeader from '../AppHeader';

const HeaderWithSearch = (props) => {
    const {appLanguage, navigation} = props;
    const [searchText, onChange] = useState('');
    return (
        <AppHeader
            barStyle={'light-content'}
            androidStatusBarColor={colors.THEME_COLOR}
            LeftFlex={0.3}
            LeftData={
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FastImage
                    style={globalStyles.mainLogoStyle}
                    source={images.home.logo}
                    resizeMode={'contain'}
                />
                </TouchableOpacity>
            }
            BodyFlex={0.7}
            BodyData={
                <TouchableOpacity
                    style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 13}}
                    onPress={() => navigation.navigate('Search')}>
                    <FormInput
                        value={searchText}
                        onChangeText={(text) => {
                            onChange(text);
                        }}
                        onFocus={() => navigation.navigate('Search')}
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
            RightFlex={0.0}
            RightData={
                <TouchableOpacity
                    style={[
                        transistionClassArray[appLanguage].flexDirection,
                        {marginRight: -15},
                    ]}
                    onPress={() => navigation.navigate('Wishlist')}>
                    <FastImage
                        source={images.home.shape_5}
                        style={{
                            width: 25,
                            height: 25,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}
                        resizeMode={'contain'}
                    />
                    <Badge itemsCount={1} appLanguage={appLanguage} view="mainHeader" />
                </TouchableOpacity>
            }
        />
    );
};

export default HeaderWithSearch;
