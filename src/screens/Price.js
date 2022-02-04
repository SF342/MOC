import React from 'react';
import { SafeAreaView } from 'react-native';
import ShowPricePage from '../screens/ShowPricePage';
import Header from '../components/Header'

const Price = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ShowPricePage />
  </SafeAreaView>
);

export default Price;