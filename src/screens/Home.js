import React from 'react';

import { useContext, useEffect } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import { AuthContext } from '../navigation/AuthProviders';

//redux stuff
import { getData, getPrice } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'

export default Home = () => {
  const { user, logout } = useContext(AuthContext);

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.productprice)

  useEffect(() => {
    dispatch(getData());
    dispatch(getPrice('P11001'));
  }, [])

  console.log(products)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView >
          
          <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
            <Text style={styles.loginButtonText}>
              Logout
            </Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#F0FFFF',
    fontWeight: 'bold',
    fontSize: 20,
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