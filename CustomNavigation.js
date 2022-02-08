import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import ShowPricePage from './src/screens/ShowPricePage';

import ProfilePage from './src/screens/ProfilePage';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';



const Stack = createStackNavigator()

const FirstScreen_Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeStack"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ShowPricePage"
                component={ShowPricePage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const SecondScreen_Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}

export { FirstScreen_Home, SecondScreen_Home }
