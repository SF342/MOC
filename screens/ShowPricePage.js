import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'

const ShowPricePage = () => {
  return (
    <SafeAreaView>
        <Header name='MOC' />
        <Text>
            Hello MOC
        </Text>
    </SafeAreaView>
  );
};

export default ShowPricePage;

const styles = StyleSheet.create({});
