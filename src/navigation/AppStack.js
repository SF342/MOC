import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bar from '../components/Bar';
import Home from '../screens/Home';
import Suggestion from '../screens/Suggestion';
import ShowPricePage from '../screens/ShowPricePage';


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator  initialRouteName="Bar">
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
      <Stack.Screen
        name="Suggestion"
        component={Suggestion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowPricePage"
        component={ShowPricePage}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default AppStack;