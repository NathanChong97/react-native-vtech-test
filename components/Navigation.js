import React, { useEffect, useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {ThemeContext } from '../theme/ThemeContext';
import Colors from '../theme/Colors'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen'; 
import DrawerItems from '../constants/DrawerItems'
import TodoInputScreen from '../screens/TodoInputScreen'
import BottomNavigationBar from './BottomNavigationBar'
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const MaterialBtmTab = createMaterialBottomTabNavigator();


export default function Navigation() {
    const { colors } = useContext(ThemeContext);

    useEffect(() => {

    }, [colors])

    return (
        <NavigationContainer>
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                headerTitleAlign: 'center',
                drawerActiveBackgroundColor: Colors[colors].baseColor,
                headerStyle: {
                    backgroundColor: Colors[colors].mainColor
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                    fontSize: 25,
                    fontWeight: 'bold',
                },
                drawerType: "front",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Todo",
                }}
            />
            <Drawer.Screen
                name="TodoInputScreen"
                component={TodoInputScreen}
                options={{
                    title: "Input Todo",
                }}
                initialParams={{ItemName: "Item from Drawer", ItemId: 2}}
            />
            <Drawer.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: "Search Todo",
                }}
                initialParams={{ItemName: "Item from Drawer", ItemId: 2}}
            />
        </Drawer.Navigator>
      <BottomNavigationBar/>
    </NavigationContainer>
    )
}