import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContainer from './navigation/MainContainer';
import Footer from './screens/Footer';
import Header from './screens/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header name="MOC"/>
      <Footer />
      {/* <MainContainer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;

