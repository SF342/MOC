import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import ShowPricePage from './src/screens/ShowPricePage';

import ChooseLoginRegister from './src/screens/ProfilePage';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import UserLoginPage from './src/screens/LoggedInPage';
import FavoriteList from './src/screens/FavoriteList';


import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';


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
                name="ChooseLoginRegister"
                component={ChooseLoginRegister}
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

const LoggedInPage = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="UserLoginPage"
                component={UserLoginPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FavoriteList"
                component={FavoriteList}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const ProfileStatePage = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    return (
        user ? <LoggedInPage /> : <SecondScreen_Home />

    )
}

export { FirstScreen_Home, SecondScreen_Home, LoggedInPage, ProfileStatePage }
