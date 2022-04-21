import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import ColorPalette from '../components/ColorPalette';
import LinearGradient from 'react-native-linear-gradient';
import user_icon from '../../assets/kindpng_746008.png'
import { __doSingOut } from '../redux/actions/userActions';
import {LoggedInPageStyle} from '../css/LoggedInPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from "react-native-paper";
import {
  getProductId,
  getFavoriteId,
} from '../redux/actions/newFavoriteAction';



const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.user.user)
  const fav_api = useSelector(state => state.favorite.favoriteList)
  const productName = useSelector(state => state.favorite.productList)
  const favorite_state = useSelector(state => state.favorite.getFav)
  const product_state = useSelector(state => state.favorite.getProduct)
  const add_state = useSelector(state => state.favorite.add)
  const delete_state = useSelector(state => state.favorite.delete)

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
    dispatch(getProductId(fav_api));
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [favorite_state, product_state, add_state, delete_state]);

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

        <View style={{ width: '90%', height: '25%', }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>

            <View>
              <MaterialIcons name="settings" size={40} color={("#FFF")} />
              <Text style={LoggedInPageStyle(theme).icontext}>Settings</Text>
            </View>

            <View>
              <MaterialIcons name="favorite" size={40} color={("#FFF")} onPress={() => { navigation.navigate('FavoriteList') }} />
              <Text style={LoggedInPageStyle(theme).icontext}>Favorite</Text>
            </View>

            <View>
              <MaterialIcons name="power-settings-new" size={40} color={("#FFF")} onPress={logout} />
              <Text style={LoggedInPageStyle(theme).icontext}>Logout</Text>
            </View>


          </View>
        </View>

        <View style={{ borderLeftWidth: 6, borderLeftColor: '#ff7' }}>
          <Text style={LoggedInPageStyle(theme).title2}>Price TODAY</Text>
        </View>

        {/* contentBox */}
        <View style={{ width: '90%', height: '20%' }}>
        </View>

        <View style={{ borderLeftWidth: 6, borderLeftColor: '#ff7' }}>
          <Text style={LoggedInPageStyle(theme).title2}>Favorite List</Text>
        </View>

        {/* contentBox */}
        <View style={{ width: '90%', height: '20%' }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={LoggedInPageStyle(theme).flatList}
            horizontal={true}
            data={productName}
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
          />
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;