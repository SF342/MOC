import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Price from '../screens/Price'
import Suggestion from '../screens/Suggestion';
import ShowPricePage from '../screens/ShowPricePage';



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
        headerShown: false
      }}>
      <Tab.Screen name="Home" component={Home}
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
      <Tab.Screen name="Suggestion" component={Suggestion}
        options={{
          tabBarLabel: 'Suggestion',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={30} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Bar;
