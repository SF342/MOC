import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/screens/Home'
import ShowPricePage from './src/screens/ShowPricePage';


const Stack = createStackNavigator()

const FirstScreen_Home = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
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
export {FirstScreen_Home}
