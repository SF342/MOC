import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'

const ShowPricePage = () => {
  return (
    <SafeAreaView>
        <Header/>
        <View style={styles.test}>
        <Text>
            Hello MOC
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ShowPricePage;

const styles = StyleSheet.create({
  test: {
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  }
});
