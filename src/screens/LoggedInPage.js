import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import ColorPalette from '../components/ColorPalette';
import LinearGradient from 'react-native-linear-gradient';
import user_icon from '../../assets/kindpng_746008.png'
import { __doSingOut } from '../redux/actions/userActions';
import styles from '../css/LoggedInPage'
import {  getFavoriteId } from '../redux/actions/newFavoriteAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from "react-native-paper";




const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.user.user)
  const productName = useSelector(state => state.user.productName);
  const image = useSelector(state => state.data.urlimage)

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  
  function logout() {
    dispatch(__doSingOut())
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
  }
  const filterImageUrl = (val) => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url }
    } else {
      return Moc_logo
    }
  };
  0;


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

            <View>
              <MaterialIcons name="settings" size={40} color={("#FFF")} />
              <Text style={styles.icontext}>Settings</Text>
            </View>

            <View>
              <MaterialIcons name="favorite" size={40} color={("#FFF")} onPress={() => { logout; navigation.navigate('FavoriteList') }}/>
              <Text style={styles.icontext}>Favorite</Text>
            </View>

            <View>
              <MaterialIcons name="power-settings-new" size={40} color={("#FFF")} onPress={logout}/>
              <Text style={styles.icontext}>Logout</Text>
            </View>
              

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
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatList}
                    horizontal={true}
                    data={productName}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={styles.cardContainer}
                        >
                          <Card style={[styles.card]}>
                            <Text style={styles.text2}>{item.product_name}</Text>
                            <Image style={styles.logo} source={filterImageUrl(item.product_name)} rounded />
                          </Card>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>

    </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;