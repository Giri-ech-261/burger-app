import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search'
import SearchList from './SearchList'


const Stack = createStackNavigator();

const SearchScreen = () => {
    
    return (
        <Stack.Navigator initialRouteName="Search" screenOptions = {() => ({
            headerShown: false,
        })} >
            <Stack.Screen
                name="Search"
                component={Search}
            />
            <Stack.Screen
                name="SearchList"
                component={SearchList}
            />
        </Stack.Navigator>  
    )
}

export default SearchScreen;
