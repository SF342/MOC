import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import ColorPalette from '../components/ColorPalette';
import LinearGradient from 'react-native-linear-gradient';
import user_icon from '../../assets/kindpng_746008.png'
import { __doSingOut } from '../redux/actions/userActions';
import { LoggedInPageStyle } from '../css/LoggedInPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from "react-native-paper";
import {
  getProductId,
  getFavoriteId,
} from '../redux/actions/newFavoriteAction';



const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user)
  const { productList, favoriteList } = useSelector(state => state.favorite)


  const favorite_state = useSelector(state => state.favorite.getFav)
  const product_state = useSelector(state => state.favorite.getProduct)
  const add_state = useSelector(state => state.favorite.add)
  const delete_state = useSelector(state => state.favorite.delete)

  const image = useSelector(state => state.data.urlimage)

  // Set an initializing state whilst Firebase connects

  function logout() {
    dispatch(__doSingOut())
  }

  // Handle user state changes

  const filterImageUrl = (val) => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url }
    } else {
      return Moc_logo
    }
  };


  useEffect(() => {
    console.log('get fav user');
    dispatch(getFavoriteId(user._id))
    console.log(user);

  }, [user]);

  useEffect(() => {
    console.log('get favoriteList');
    if (favoriteList !== [] && productList.length === 0) {
      dispatch(getProductId(favoriteList));
    }
    console.log(favoriteList, 64);
    console.log(productList, 65);

  }, [favoriteList]);


  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <>
      <LinearGradient
        colors={[theme.background1, theme.background2]}
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        style={LoggedInPageStyle(theme).container1}>
        <SafeAreaView
          style={{ flex: 1, paddingLeft: 15, marginTop: '5%' }}>
          <View style={{ borderLeftWidth: 6, borderLeftColor: '#ff7' }}>
            <Text style={LoggedInPageStyle(theme).title}>WELCOME</Text>
            <Text style={LoggedInPageStyle(theme).title2}>{user.username}</Text>
            {/* <Image source={user_icon} style={LoggedInPageStyle(theme).userlogo} /> */}
          </View>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, width: '96%', height: '25%' }}>

            <View>
              <MaterialIcons name="settings" size={40} color={("#FFF")} />
              <Text style={LoggedInPageStyle(theme).icontext}>Settings</Text>
            </View>

            <View>
              <MaterialIcons name="favorite" size={40} color={("#FFF")} onPress={() => { navigation.navigate('FavoriteList') }} />
              <Text style={LoggedInPageStyle(theme).icontext}>Favorite</Text>
            </View>

            <View>
              <MaterialIcons name="power-settings-new" size={40} color={("#FFF")} onPress={() => logout()} />
              <Text style={LoggedInPageStyle(theme).icontext}>Logout</Text>
            </View>

          </View>



          <View style={{ borderLeftWidth: 6, borderLeftColor: '#ff7' }}>
            <Text style={LoggedInPageStyle(theme).title2}>Price TODAY</Text>
          </View>

          {/* contentBox */}
          <View style={{ width: '96%', height: '20%' }}>
          </View>

          <View style={{ borderLeftWidth: 6, borderLeftColor: '#ff7' }}>
            <Text style={LoggedInPageStyle(theme).title2}>Favorite List</Text>
          </View>

          {/* contentBox */}
          <View style={{ width: '96%', height: '20%' }}>
            {productList !== [] ? (
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={LoggedInPageStyle(theme).flatList}
                horizontal={true}
                data={productList}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={LoggedInPageStyle(theme).cardContainer}
                      onPress={() => {
                        console.log(item.product_id)
                        navigation.navigate('ShowPricePage', { id: item.product_id })
                      }}
                    >
                      <Card style={[LoggedInPageStyle(theme).card]}>
                        <Text style={LoggedInPageStyle(theme).text2}>{item.product_name}</Text>
                        <Image style={LoggedInPageStyle(theme).logo} source={filterImageUrl(item.product_name)} rounded />
                      </Card>
                    </TouchableOpacity>
                  );
                }}
              />)
              :
              (
                <Text >loadding...</Text>
              )}
          </View>

        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default RegisterScreen;