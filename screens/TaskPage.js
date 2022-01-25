import React from 'react';

import {useContext} from 'react'

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

import {AuthContext} from '../navigation/AuthProviders';

export default Task = () => {
  const {user, logout} = useContext(AuthContext);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Homepage</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
        <Text style={styles.loginButtonText}>
        Logout
        </Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#393E46',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 100,
    },
    loginButtonText: {
      textAlign: 'center',
      color: '#F0FFFF',
      fontWeight: 'bold',
      fontSize:20,
      padding: 15
    },
    logoutButton: {
      marginVertical: 10,
      backgroundColor: '#b53531',
      width: 320,
      height: 60,
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 5
    },

  

  });