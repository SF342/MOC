import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Picker, } from 'react-native-ui-lib';
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';

const FavoriteList = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [p_id, setProductId] = useState();

  const [uid, setUid] = useState();

  const [favoriteArray, setFavoriteArray] = useState();

  let usersCollectionRef = firestore()
    .collection('users')
    .doc(uid)
    .collection('FavoriteList');

  useEffect(() => {
    dispatch(getData());
    setData(products);
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid)
      }
    });
    const subscriber = usersCollectionRef.onSnapshot(querySnapshot => {
      const dataTask = [];
      querySnapshot.forEach(documentSnapshot => {
        dataTask.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      })
      setFavoriteArray(dataTask);
    });

  }, [])

  // Function call to open modal add 
  function toggleModalVisibility() {
    setModalVisible(!isModalVisible);
  };

  function confirmAdd() {
    toggleModalVisibility();
    usersCollectionRef.add({
      product_id: p_id,
      product_name: value
    });
    setSelectedProduct('');
  }

  async function deleteTasklist(userDocId) {
    const res = await firestore()
      .collection('users')
      .doc(uid)
      .collection('FavoriteList').doc(userDocId).delete();
  };


  const onProductChange = dummyData => {
    setSelectedProduct(dummyData);
    setValue(dummyData.label)
    setProductId(dummyData.value)
  };


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Text style={styles.title}>Favorite List Page</Text>
      <ScrollView>

        <FlatList
          data={favoriteArray}
          style={styles.superListFav}
          renderItem={({ item }) =>
          (
            <View style={styles.listFavorite}>
              <View style={styles.topicList}>
                <Text style={styles.textTopicList}> {item.product_name}  </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => { deleteTasklist(item.id) }}
                  style={styles.delButton}
                >
                  <Text style={styles.textDelButton}>x</Text>
                </TouchableOpacity>
              </View>
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
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => { toggleModalVisibility() }}
        >
          <Text style={styles.loginButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  superListFav: {
    marginTop: '5%',
    marginBottom: '20%',
  },
  delButton: {
    marginVertical: 10,
    backgroundColor: '#b53531',
    width: 50,
    height: 60,
    borderRadius: 10,
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
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#0A214A',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  textTopicList: {
    color: 'white',
    fontSize: 20
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: "17%",
  },
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