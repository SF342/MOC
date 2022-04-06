/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';

//redux stuff
import { Provider } from 'react-redux';
import Store from "./src/redux/store"


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Price from './src/screens/Price';
import Header from './src/components/Header';

import { FirstScreen_Home, SecondScreen_Home, ProfileStatePage } from './CustomNavigation'
import { NavigationContainer } from '@react-navigation/native'


LogBox.ignoreAllLogs();
const App = () => {
  const Tab = createBottomTabNavigator();



  return (
    <Provider store={Store}>
      {/* 
      <Providers />
      */}
      <Header />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Main"
          screenOptions={{
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#778899",
            tabBarLabelStyle: {
              fontSize: 0,
              paddingBottom: 0,
              fontWeight: "bold"
            },
            headerShown: false,
            tabBarStyle: {
              headerShown: false,
              backgroundColor: '#0A214A',
              position: 'absolute',
              left: 15,
              right: 15,
              bottom: 10,
              borderRadius: 15,
              height: 60,
              elevation: 0,
              shadowColor: 10,
              paddingBottom: 1,
              borderTopWidth: 0
            }
          }}>
          <Tab.Screen name="Home" component={FirstScreen_Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={30} />
              ),
            }} />
          <Tab.Screen name="Price" component={Price}
            options={{
              tabBarLabel: 'Price',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="attach-money" color={color} size={30} />
              ),
            }} />
          <Tab.Screen name="ProfilePage" component={ProfileStatePage}
            options={{
              tabBarLabel: 'ProfilePage',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={30} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
