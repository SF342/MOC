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
import Price from './src/screens/Price'
import Header from './src/components/Header'


import { FirstScreen_Home, SecondScreen_Home } from './CustomNavigation'


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
          tabBarOptions={{
            activeTintColor: '#ffffff',
            activeBackgroundColor: '#0A214A',
            inactiveBackgroundColor: '#0A214A',
            inactiveTintColor: '#778899',
            labelStyle: {
              fontSize: 0,
              paddingBottom: 0,

              fontWeight: 'bold',
            }
          }}
          initialRouteName="Main"
          screenOptions={{
            headerShown: false
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
          <Tab.Screen name="ProfilePage" component={SecondScreen_Home}
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
