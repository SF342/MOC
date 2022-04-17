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
import {  getFavoriteId } from '../redux/actions/newFavoriteAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



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
    dispatch(getFavoriteId(user._id))
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
      style={{ flex: 1, paddingLeft:15, marginTop: '5%' }}>
      <View style={{borderLeftWidth:6,borderLeftColor:'#ff7'}}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.title2}>{user.username}</Text>
        {/* <Image source={user_icon} style={styles.userlogo} /> */}
      </View>

      <View style={{width:'90%',height:'25%',}}>

          <View style={{flexDirection:'row',justifyContent:'space-between',padding:30}}>
              <MaterialIcons name="settings" size={50} color={("#FFF")} />
              <MaterialIcons name="favorite" size={50} color={("#FFF")} onPress={() => { logout; navigation.navigate('FavoriteList') }}/>
              <MaterialIcons name="power-settings-new" size={50} color={("#FFF")} onPress={logout}/>
              
              

          </View>
      </View>

      <View style={{borderLeftWidth:6,borderLeftColor:'#ff7'}}>
        <Text style={styles.title2}>Price TODAY</Text>
      </View>
                
                {/* contentBox */}
                <View style={{width:'90%',height:'20%'}}>
                </View>

      <View style={{borderLeftWidth:6,borderLeftColor:'#ff7'}}>
        <Text style={styles.title2}>Favorite List</Text>
      </View>

                {/* contentBox */}
                <View style={{width:'90%',height:'20%'}}>

                </View>

    </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;