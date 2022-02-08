import * as React from 'react';
import { useState, useEffect  } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';


const RegisterScreen = ({ navigation }) => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  
  
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
    <SafeAreaView
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
      <Text style={styles.title}>Welcome login</Text>
      <Text style={styles.title2}>{user.email}</Text>
      <TouchableOpacity
        onPress={()=>{logout;navigation.navigate('FavoriteList')}}
        style={styles.favoriteList}
      >
        <Text style={styles.loginButtonText}>
          Favorite List
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={logout}
        style={styles.logoutButton}
      >
        <Text style={styles.loginButtonText}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    width: 320,
    marginBottom: 1,
    fontWeight: 'bold',
  },
  title2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    width: 320,
    marginBottom: 10,
    marginTop: 10,
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
  favoriteList: {
    marginVertical: 10,
    backgroundColor: '#0A214A',
    width: 320,
    height: 60,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5
  }
});
export default RegisterScreen;