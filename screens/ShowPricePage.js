import React, {useState, useContext} from 'react';
import {Text, View, Button, Switch, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native';

export default function ShowPricePage({navigation}) {

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>
      ShowPricePage
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      text: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20,
      },
});
