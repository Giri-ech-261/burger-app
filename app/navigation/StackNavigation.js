import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screen/LaunchScreen';
import {navigationRef} from './RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import TabNavigation from '../navigation/NavigationStack';
import CategoryMenu from '../screen/CategoryMenu/index';
import ProductList from '../screen/ProductList/index';
import ProductDetail from '../screen/ProductDetail/index';
import Wishlist from '../screen/Wishlist/index';
import ShippingAddress from '../screen/ShippingAddress'
import AddShippingAddress from '../screen/ShippingAddress/addShippingAddress'
import SearchPlaces from '../screen/ShippingAddress/searchPlaces'
import PaymentMethods from '../screen/PaymentMethods';
import MyCard from '../screen/MyCard';
import SearchPlacesCopy from '../screen/ShippingAddress/searchPlaceCopy'
import ShopByBrands from '../screen/ShopByBrands';
import Barcode from '../screen/Scan/barcode'
import Camera from '../screen/Scan/camera'
import SearchScreen from '../screen/Search';
import StoreDetails from '../screen/StoreLocator/storeDetails';
import UpdatePassword from '../screen/UpdatePassword';
import MyProfile from '../screen/MyProfile';

const RootStack = createStackNavigator();

function NavigationStack(props) {
    const [isFirstTime, setFirstTime] = useState(true);
    const {isLogin} = props;
    useEffect(() =>{
        getData();
    },[])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isFirstTimeUser');
            if(value !== null) {
                setFirstTime(true);
            }else{
                setFirstTime(false);
            }
        } catch(e) {
            // error reading value
        }
    }
        return (
            <NavigationContainer ref={navigationRef}>
               <RootStack.Navigator>
                   {!isFirstTime ?  <RootStack.Screen options={{headerShown: false, gestureEnabled: false}} name="LandingScreen" component={LandingScreen} /> : <RootStack.Screen options={{headerShown: false, gestureEnabled: false}} name="firstTabNavigation" component={TabNavigation} />}
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}} name="TabNavigation" component={TabNavigation} />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}} name="Category" component={CategoryMenu} />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}} name="ProductList" component={ProductList}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="productDetail" component={ProductDetail}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="ShippingAddress" component={ShippingAddress}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="AddShippingAddress" component={AddShippingAddress}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="SearchPlaces" component={SearchPlaces}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="Wishlist" component={Wishlist}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="PaymentMethods" component={PaymentMethods}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="MyCard" component={MyCard}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="SearchPlacesCopy" component={SearchPlacesCopy}  />
                    <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="ShopByBrands" component={ShopByBrands}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="Barcode" component={Barcode}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="Camera" component={Camera}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="Search" component={SearchScreen}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="StoreDetails" component={StoreDetails}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="UpdatePassword" component={UpdatePassword}  />
                   <RootStack.Screen options={{headerShown: false, gestureEnabled: false}}  name="MyProfile" component={MyProfile}  />
                </RootStack.Navigator>
            </NavigationContainer>
        );
}

export default NavigationStack;
