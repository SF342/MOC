import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Bar from '../components/Bar';
import Home from '../screens/Home'; 

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Bar">
      <Stack.Screen
        name="Bar"
        component={Bar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;