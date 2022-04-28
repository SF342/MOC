import { Center } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Moc_logo from '../../assets/moc_logo.png'
import {FooterStyle} from '../css/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Price from '../screens/Price';
import Header from '../components/Header';

import { FirstScreen_Home, SecondScreen_Home, ProfileStatePage } from '../../CustomNavigation'

const Footer = (props) => {
    const {theme} = useSelector(state => state.theme);
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Main"
          screenOptions={{
            tabBarActiveTintColor: theme.footericonclick,
            tabBarInactiveTintColor: theme.footericon,
            tabBarLabelStyle: {
              fontSize: 0,
              paddingBottom: 0,
              fontWeight: "bold"
            },
            headerShown: false,
            tabBarStyle: FooterStyle(theme).tabBarStyle
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
      )
}
export default Footer;