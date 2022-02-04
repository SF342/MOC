/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Providers from './src/navigation'
import { LogBox } from 'react-native';

//redux stuff
import { Provider } from 'react-redux';
import  Store  from "./src/redux/store"


LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={Store}>
      <Providers />
    </Provider>
  );
}

export default App;
