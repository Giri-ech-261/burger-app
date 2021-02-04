import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Images} from '../theme';
import Home from '../screen/Home';
import CategoryMenu from '../screen/CategoryMenu';
import ProductDetail from '../screen/ProductDetail';
import TabBarIconsView from '../components/TabBarIconsView';
import ProductList from '../screen/ProductList';
import Cart from '../screen/Cart';
import MyAccount from '../screen/MyAccount';
import Services from '../screen/Services';
import ShippingAddress from '../screen/ShippingAddress';
import SearchScreen from '../screen/Search';
import Wishlist from '../screen/Wishlist';
import Aquarium from '../screen/Aquarium';
import AquariumSuccess from '../screen/Aquarium/aquariumSuccess';
import MyPetList from '../screen/MyPets'
import AddPet from '../screen/MyPets/addPet'
import ContactUsView from '../screen/ContactUs'
import PetRelocation from '../screen/PetRelocation'
import ContactSuccess from '../screen/ContactUs/contactSuccess'
import Articles from '../screen/Articles'
import ShopByBrands from '../screen/ShopByBrands';
import ArticlesDetails from '../screen/Articles/articlesDetails';
import StoreLocator from '../screen/StoreLocator';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const ProductStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'

    >
        <Stack.Screen
            name={"productList"}
            component={ProductList}
        />
        <Stack.Screen
            name={"productDetail"}
            component={ProductDetail}
        />
    </Stack.Navigator>)
}
const HomeStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'

    >
        <Stack.Screen
            name={'Home'}
            component={Home}
        />
        <Stack.Screen
            name={'Search'}
            component={SearchScreen}
        />
        <Stack.Screen
            name={'ProductList'}
            component={ProductList}
        />
        <Stack.Screen
            name={'Wishlist'}
            component={Wishlist}
        />
        <Stack.Screen
            name={'Articles'}
            component={Articles}
        />
        <Stack.Screen
            name={'ArticlesDetails'}
            component={ArticlesDetails}
        />
        <Stack.Screen
            name={'ShopByBrands'}
            component={ShopByBrands}
        />
        <Stack.Screen
            name={'AddPet'}
            component={AddPet}
        />
    </Stack.Navigator>)
}

const CategoryStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'
    >
        <Stack.Screen
            name={'Category'}
            component={CategoryMenu}
        />
        <Stack.Screen
            name={'ProductList'}
            component={ProductList}
        />
        <Stack.Screen
            name={'Wishlist'}
            component={Wishlist}
        />
        <Stack.Screen
            name={'ShopByBrands'}
            component={ShopByBrands}
        />
    </Stack.Navigator>)
}
const MyAccoutStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'
    >
        <Stack.Screen
            name={'Account'}
            component={MyAccount}
        />
        <Stack.Screen
            name={'MyPetList'}
            component={MyPetList}
        />
        <Stack.Screen
            name={'AddPet'}
            component={AddPet}
        />
        <Stack.Screen
            name={'ContactUs'}
            component={ContactUsView}
        />
        <Stack.Screen
            name={'ContactSuccess'}
            component={ContactSuccess}
        />
        <Stack.Screen
            name={'Wishlist'}
            component={Wishlist}
        />
        <Stack.Screen
            name={'StoreLocator'}
            component={StoreLocator}
        />
    </Stack.Navigator>)
}

const ServicesStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'
        initialRouteName="Services"
    >
      <Stack.Screen name={'Services'} component={Services} />
        <Stack.Screen
            name={'Aquarium'}
            component={Aquarium}
        />
        <Stack.Screen
            name={'AquariumSuccess'}
            component={AquariumSuccess}
        />
        <Stack.Screen
            name={'PetRelocation'}
            component={PetRelocation}
        />

    </Stack.Navigator>)
}

const CartStack = (params) => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
        headerMode='float'
        animation='fade'
        >
        <Stack.Screen
            name={'Cart'} 
            component={Cart} 
        />
        <Stack.Screen
            name={'Wishlist'}
            component={Wishlist}
        />
    </Stack.Navigator>)
}

function NavigationStack(props) {
    const {isLogin} = props;
    return (
        // <NavigationContainer ref={navigationRef}>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#ab1f1f',
                visible: false
              }}>
                <Tab.Screen name="Home" component={HomeStack} options={{
                    tabBarIcon: ({focused}) => <TabBarIconsView icon={Images.bottom_nav_Home} focused={focused}/>
                }}
                />
                <Tab.Screen name="Category" component={CategoryStack} options={{
                    tabBarIcon: ({focused}) => <TabBarIconsView icon={Images.bottom_nav_Category} focused={focused}/>

                }}/>
                <Tab.Screen name="Services" component={ServicesStack} options={{
                    tabBarIcon: ({focused}) => <TabBarIconsView icon={Images.bottom_nav_Services} focused={focused}/>

                }}/>
                <Tab.Screen name="Cart" component={CartStack} options={{
                    tabBarIcon: ({focused}) => <TabBarIconsView icon={Images.bottom_nav_Cart} focused={focused}/>

                }}/>
                <Tab.Screen name="Account" component={MyAccoutStack} options={{
                    tabBarIcon: ({focused}) => <TabBarIconsView icon={Images.bottom_nav_Account} focused={focused}/>

                }}/>
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default NavigationStack;
