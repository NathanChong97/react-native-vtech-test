/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {

  StyleSheet,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from './theme/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen'; 
import DrawerItems from './constants/DrawerItems'
import TodoInputScreen from './screens/TodoInputScreen'
import BottomNavigationBar from './components/BottomNavigationBar'
import Navigation from './components/Navigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const MaterialBtmTab = createMaterialBottomTabNavigator();


function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Navigation/>
        {/* <NavigationContainer>
          <Drawer.Navigator
              initialRouteName='Home'
              screenOptions={{
                  headerShown: true,
                  swipeEnabled: true,
                  headerTitleAlign: 'center',
                  headerStyle: {
                      backgroundColor: "#0080ff"
                  },
                  headerTintColor: "#ffffff",
                  headerTitleStyle: {
                      fontSize: 25,
                      fontWeight: 'bold'
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
                      title: "Finished Item",
                  }}
                  initialParams={{ItemName: "Item from Drawer", ItemId: 2}}
              />
          </Drawer.Navigator>
        <BottomNavigationBar/>
      </NavigationContainer> */}
    </ThemeProvider>
  

  //   <NavigationContainer>
  //     <Drawer.Navigator
  //       screenOptions={{
  //         drawerType: "front",
  //         drawerActiveTintColor: '#e91e63',
  //         drawerItemStyle: { marginVertical: 10 },
  //       }}
  //       initialRouteName="Profile"
  //     >
  //     {
  //       DrawerItems.map(drawer => 
  //         <Drawer.Screen
  //           name = {drawer.name}
  //           component= {HomeScreen} 
  //         />
  //       )
  //     }
  //   </Drawer.Navigator>
  //      {/* <Stack.Navigator
  //         initialRouteName='Home'
  //         screenOptions={{
  //             headerTitleAlign: 'center',
  //             headerStyle: {
  //                 backgroundColor: "#333333"
  //             },
  //             headerTintColor: "#ffffff",
  //             headerTitleStyle: {
  //                 fontSize: 20,
  //                 fontWeight: 'bold'
  //             }
  //         }}
  //     >
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{ title: 'Web View' }}
  //       />
  //     </Stack.Navigator> */}
  // </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

