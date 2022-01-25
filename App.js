/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Providers from './navigation'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Providers/>
  );
}

export default App;
