import * as React from 'react';
import { useState, useContext, useEffect  } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

import { getUserState } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'

const RegisterScreen = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.userState)

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function logout(){
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    dispatch(getUserState());
    console.log(products)
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <TouchableOpacity
        onPress={logout}
      >
        <Text>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#00CABA',
    textAlign: 'center',
    fontSize: 35,
    width: 320,
    marginBottom: 1,
    fontWeight: 'bold',

  },
  input: {
    marginVertical: 10,
    width: 320,
    height: 60,
    fontSize: 18,
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#FFFFFF'
  },
  loginButton: {
    marginVertical: 10,
    backgroundColor: '#00CABA',
    width: 320,
    height: 60,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5
  },

  loginButtonText: {
    textAlign: 'center',
    color: '#F0FFFF',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15
  },

  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2FCFA',
  },

  text: {
    color: '#00CABA',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default RegisterScreen;