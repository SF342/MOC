import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Modal, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Picker, } from 'react-native-ui-lib';
import { useSelector, useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import add_logo from '../../assets/Abstract_Add_1.png'
import favorite_logo from '../../assets/favorite.png'
import uuid from 'react-native-uuid';
import styles from '../css/FavoriteList'
import { addFavoriteList, getFavoriteList, deleteTask } from '../redux/actions/favoriteActions';
import {getFavoriteId, getProductId} from '../redux/actions/newFavoriteAction'

const FavoriteList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const user = useSelector(state => state.user)

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const [value, setValue] = useState();
  const [p_id, setProductId] = useState();
  const [Loading, setLoading] = useState(false);
  const theme = useSelector(state => state.theme.theme);
  const [length, setLength] = useState(0)

  const user_api = useSelector(state => state.user.user)
  const fav_api = useSelector(state => state.user.favList)
  const productName = useSelector(state => state.user.productName)


    // Use for update realtime data
    useEffect(() => {
      if (length != fav_api.length) {
        setLength(fav_api.length);
        dispatch(getFavoriteId(user_api._id));
        dispatch(getProductId(fav_api));

      } else if (length == 0) {
        dispatch(getFavoriteId(user_api._id));
        dispatch(getProductId(fav_api));
      } else {
        console.log('else');
      }
      });

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
  }

  async function deleteTasklist(_id) {
    dispatch(deleteTask(_id))

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
                data={productName}
                style={styles.superListFav}
                renderItem={({ item }) =>
                (
                  <View style={styles.listFavorite}>
                    <View style={styles.topicList}>
                      <Text style={styles.textTopicList}> {item.product_name}  </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => { deleteTasklist(item._id) }}
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
                        {products.map((option, index) => (
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

export default FavoriteList;