import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainContainer from './navigation/MainContainer';
import Footer from './screens/Footer';
import Header from './screens/Header';

// Redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header name="MOC" />
        <Footer />
        {/* <MainContainer /> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
