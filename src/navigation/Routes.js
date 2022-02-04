import React from "react";
import { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProviders';
import AppStack from './AppStack';
import Header from '../components/Header'

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
            {/* {user ? <></> : <Header />}
            {user ? <AuthStack /> :  */}
            <Header />
            <AppStack />
        </NavigationContainer>
    );

};

export default Routes;