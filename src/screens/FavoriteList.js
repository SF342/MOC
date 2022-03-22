import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Picker, } from 'react-native-ui-lib';
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import add_logo from '../../assets/Abstract_Add_1.png'
import favorite_logo from '../../assets/favorite.png'
import uuid from 'react-native-uuid';
import { addTask, removeTask } from '../redux/actions/userActions';
import { addFavoriteList, getFavoriteList } from '../redux/actions/favoriteActions';


const FavoriteList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const user = useSelector(state => state.user)

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [p_id, setProductId] = useState();
  const [uid, setUid] = useState();
  const [favoriteArray, setFavoriteArray] = useState();
  const [Loading, setLoading] = useState(false);
  const theme = useSelector(state => state.theme.theme);
  const [length, setLength] = useState(0)

  const user_api = useSelector(state => state.user.user)
  const fav_api = useSelector(state => state.user.favList)


  // if (products.length === 0) {
  //   dispatch(getFavoriteList(user_api._id));
  //   setLoading(false)
  // }

  useEffect(() => {

    if(length != fav_api.length){
      console.log("dif")
      console.log(length, fav_api.length)
      setLength(fav_api.length)
      dispatch(getFavoriteList(user_api._id));
    } else if (length == 0){
      dispatch(getFavoriteList(user_api._id));
      console.log(length, fav_api.length)
      console.log("not dif")
    } else{
      console.log("else")
      console.log(length, fav_api.length)
    }

    setData(fav_api);
    console.log("Fav page", fav_api)

  })

  // Function call to open modal add 
  function toggleModalVisibility() {
    setModalVisible(!isModalVisible);
  };

  function confirmAdd() {
    toggleModalVisibility();
    setSelectedProduct('');

    let check = user.favoritelist.indexOf((val) => val.product_id !== p_id)
    if (check === -1){
      const data = {
        id: uuid.v4(),
        product_id: p_id,
        product_name: value
      }
      console.log(user_api._id, p_id)
      dispatch(addFavoriteList(user_api._id, p_id, value))
    }
    

    // usersCollectionRef.add({
    //   product_id: p_id,
    //   product_name: value
    // });

  }

  async function deleteTasklist(userDocId) {
    dispatch(removeTask(user.uid, userDocId))

  };


  const onProductChange = (dummyData) => {
    setSelectedProduct(dummyData);
    setValue(dummyData.label)
    setProductId(dummyData.value)
  };

  return (
    <LinearGradient
      colors={[theme.pri700, theme.pri50]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={styles.container1}>
      <View
        style={styles.boxFavelist}>
        <View style={styles.boxTopic}>
          <LinearGradient
            colors={[theme.pri500, theme.pri50]}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={styles.boxTopicGra}>
            <Image source={favorite_logo} style={styles.favLogo} />
            <Text style={styles.title}> Favorite List</Text>
          </LinearGradient>
        </View>
        {Loading ? <ActivityIndicator /> :
          (
            <ScrollView>
              <FlatList
                data={fav_api}
                style={styles.superListFav}
                renderItem={({ item }) =>
                (
                  <View style={styles.listFavorite}>
                    <View style={styles.topicList}>
                      <Text style={styles.textTopicList}> {item.product_name}  </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => { deleteTasklist(item.id) }}
                      style={styles.delButton}
                    >
                      <Text style={styles.textDelButton}>x</Text>
                    </TouchableOpacity>
                  </View>

                )} />

              <Modal
                animationType="slide"
                transparent
                visible={isModalVisible}
                presentationStyle="overFullScreen"
                onDismiss={toggleModalVisibility}
                onRequestClose={() => { setModalVisible(false) }}
              >
                <View style={styles.bg_modal}>
                  <View style={styles.paper_madal}>
                    <ScrollView>
                      <TouchableOpacity
                        onPress={() => { setModalVisible(false) }}>
                        <Text>x</Text>
                      </TouchableOpacity>
                      <Text style={styles.title2}>Add Favorite</Text>
                      <Picker
                        value={selectedProduct}
                        placeholder="Search Product . . ."
                        onChange={onProductChange}
                        showSearch
                        placeholderTextColor="black"
                        containerStyle={styles.pickerStyle}
                        style={{ color: Colors.black }}>
                        {data.map((option, index) => (
                          <Picker.Item
                            key={index}
                            value={option.product_id}
                            label={option.product_name}
                          />
                        ))}
                      </Picker>
                      <TouchableOpacity
                        style={styles.logInButton}
                        onPress={() => { confirmAdd() }}
                      >
                        <Text style={styles.loginButtonText}>
                          Confirm
                        </Text>
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </ScrollView>
          )
        }
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => { toggleModalVisibility() }}
          >
            <Image source={add_logo} style={styles.circleText} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  listFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%'
  },
  boxTopic: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    width: '100%'
  },
  boxTopicGra: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    width: '100%',
    height: 55
  },
  boxFavelist: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginTop: "5%",
    height: '100%',
    width: '80%',
    marginBottom: '20%',
    backgroundColor: '#6188c2',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
  },
  superListFav: {
    marginTop: '5%',
    marginBottom: '20%',
  },
  container1: {
    width: '100%',
    height: '100%',
  },
  favLogo: {
    width: 40,
    height: 50,
  },
  delButton: {
    backgroundColor: '#b53531',
    width: 50,
    height: 50,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDelButton: {
    color: 'white',
    fontSize: 20
  },
  topicList: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#0A214A',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  textTopicList: {
    color: 'white',
    fontSize: 18,
    fontFamily: "Mitr-Light",

  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: '5%'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: "Mitr-Light",
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
  circleText: {
    width: '115%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circleButton: {
    borderRadius: 100,
    marginVertical: 10,
    backgroundColor: '#FFC511',
    width: 70,
    height: 70,
    shadowColor: "#000000",
    shadowOpacity: 15,
    shadowRadius: 15,
    elevation: 15,
  },
  logInButton: {
    marginVertical: 10,
    backgroundColor: '#0A214A',
    width: 320,
    height: 60,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
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
  },
  bg_modal: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  paper_madal: {
    backgroundColor: '#ffffff',
    margin: 30,
    marginTop: 200,
    marginBottom: 200,
    padding: 20,
    borderRadius: 10,
    flex: 1
  }
});
export default FavoriteList;