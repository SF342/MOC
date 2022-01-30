import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ShowPricePage from '../screens/ShowPricePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Price from '../screens/Price'
const Tab = createBottomTabNavigator();

function Bar() {
  return (
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
      headerShown: false}}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Price" component={Price} 
        options={{
            tabBarLabel: 'Price',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={30} />
            ),
          }}/>
    </Tab.Navigator>
  );
}

export default Bar;
