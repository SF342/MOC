import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import ColorPalette from '../components/ColorPalette';
import LinearGradient from 'react-native-linear-gradient';
import user_icon from '../../assets/kindpng_746008.png'
import { __doSingOut } from '../redux/actions/userActions';
import styles from '../css/LoggedInPage'


const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.user.user)

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  
  function logout() {
    dispatch(__doSingOut())
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
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
    <LinearGradient
    colors={[theme.pri700, theme.pri50]}
    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
    style={styles.container1}>
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', marginTop: '5%' }}>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Image source={user_icon} style={styles.userlogo} />

        <Text style={styles.title2}>Email : {user.email}</Text>
        <ColorPalette />
        <TouchableOpacity
          onPress={() => { logout; navigation.navigate('FavoriteList') }}
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
    </LinearGradient>
  );
};

export default RegisterScreen;