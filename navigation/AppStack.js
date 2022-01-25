import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TaskPage from '../screens/TaskPage'; 

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Task"
        component={TaskPage}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;