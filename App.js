/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';

//redux stuff
import { Provider } from 'react-redux';
import Store from "./src/redux/store"

import Header from './src/components/Header';
import Footer from './src/components/Footer';


LogBox.ignoreAllLogs();
const App = () => {
  
  return (
    <Provider store={Store}>
      {/* 
      <Providers />
      */}
      <Header />
      <Footer />
    </Provider>
  );
}

export default App;
