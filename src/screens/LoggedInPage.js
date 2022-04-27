import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, FlatList, Modal, Pressable, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { signOut } from '../redux/actions/userActions';
import { LoggedInPageStyle } from '../css/LoggedInPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Card } from "react-native-paper";
import {
  getProductId,
  getFavoriteId,
} from '../redux/actions/newFavoriteAction';
import { changeTheme } from '../redux/actions/themeActions';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // Selector data from redux
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user)
  const { productList, favoriteList } = useSelector(state => state.favorite)
  const image = useSelector(state => state.data.urlimage)

  const [modalVisible, setModalVisible] = useState(false);
  const [themeicon, setThemeicon] = useState(false);
  const [themeicon2, setThemeicon2] = useState('moon');

  const changetheme = () => {
    dispatch(changeTheme(!themeicon ? 'dark' : "light"))
    setThemeicon(!themeicon)
    setThemeicon2(themeicon ? 'sun' : 'moon')
  }

  // call logout from redux
  function logout() {
    dispatch(signOut())
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
    // call fav id from redux from user login
    dispatch(getFavoriteId(user._id))

  }, [user]);

  useEffect(() => {
    // call fav id from redux from add delete fav list
    if (favoriteList !== [] && productList.length === 0) {
      dispatch(getProductId(favoriteList));
    }

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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, width: '96%', height: '17%' }}>

            <View>
              <Feather name={themeicon2} size={40} color={("#FFF")} onPress={() => { changetheme() }} />
              <Text style={LoggedInPageStyle(theme).icontext}>Theme</Text>
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
                        <Text style={LoggedInPageStyle(theme).text2}>{item.product_name.length > 25 ? item.product_name.slice(0, 25) + '...' : item.product_name}</Text>
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <Pressable
              style={[LoggedInPageStyle(theme).buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={LoggedInPageStyle(theme).textStyle}>BACK</Text>
            </Pressable>
          </Modal>

        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default RegisterScreen;