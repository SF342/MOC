import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker, } from 'react-native-ui-lib';
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Moc_logo from '../../assets/moc_logo.png';
import {  Avatar } from 'react-native-elements';
import { getProductId, deleteFavorite, getFavoriteId } from '../redux/actions/newFavoriteAction';

const FavoriteList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const user = useSelector(state => state.user)

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [p_id, setProductId] = useState();
  const theme = useSelector(state => state.theme.theme);

  const user_api = useSelector(state => state.user.user)
  const image = useSelector(state => state.data.urlimage)
  const fav_api = useSelector(state => state.user.favList)
  const productName = useSelector(state => state.user.productName)
  const delete_state = useSelector(state => state.user.delete)

  const [deleteState, setDelete] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(false);

  const filterImageUrl = (val) => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url }
    } else {
      return Moc_logo
    }
  }

    // Use for update realtime data
    useEffect(() => {
      
      if(deleteState === true){
        setDelete(false)
        dispatch(getFavoriteId(user_api._id));
      }
      console.log("Fav ", fav_api)
      dispatch(getProductId(fav_api));
    }, [deleteState]);

  function Show1() {
    setShouldShow1(true);
    setShouldShow2(false);
  };

  function Show2() {
    setShouldShow1(false);
    setShouldShow2(true);
  }


  async function deleteTasklist(user_id, _id) {
    setDelete(true)
    dispatch(deleteFavorite(user_id, _id))
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
          <Text style={styles.title}> MY</Text>
          <Text style={styles.titlecolor}> FAVORITE</Text>
          <Text style={styles.title}> LIST</Text>
        </View>
        <View style={styles.pickerbox}>
          <Picker
            value={selectedProduct}
            placeholder="Search Product . . ."
            onChange={onProductChange}
            showSearch
            placeholderTextColor="black"
            containerStyle={styles.pickerStyle}
            style={{ height: 50, width: 150 , }}>
            {products.map((option, index) => (
              <Picker.Item
                key={index}
                value={option.product_id}
                 label={option.product_name}
              />
            ))}
          </Picker>
          <Entypo name="menu" size={50} color="#FFFFFF" onPress={() => {Show1()}}/>
          <MaterialIcons name="crop-square" size={50} color="#FFFFFF" onPress={() => {Show2()}}/>
        </View>
        {shouldShow1 ?
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
                      <MaterialCommunityIcons name="delete-empty" style={styles.icon} size={20} color="#F21729" onPress={() => { deleteTasklist(user_api._id, item.product_id) }}/>
                    </View>
                  </View>

                )} />

            </ScrollView>
          )
        : null}

        {shouldShow2 ? (
          <ScrollView>
            <FlatList
              data={productName}
              numColumns={2}
              
              style={styles.superListFav2}
              renderItem={({ item }) =>
              (
                <View style={styles.GridViewBlockStyle}>
                  <View style={styles.topicList2}>
                    <Avatar style={styles.logo} source={filterImageUrl(item.product_name)} rounded />
                    <Text style={styles.textTopicList2}> {item.product_name}  </Text>
                    <MaterialCommunityIcons name="delete-empty" style={styles.icon} size={20} color="#F21729" onPress={() => { deleteTasklist(user_api._id, item.product_id) }}/>
                  </View>
                </View>

              )} />

          </ScrollView>
        ) : null}

      </View>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  listFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
  },
  logo : {
    width: 100,
  },
  boxTopic: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
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
    width: '90%',
    marginBottom: '20%',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
  },
  superListFav: {
    marginTop: '5%',
    marginBottom: '20%',
  },
  superListFav2: {
    marginTop: '5%',
    marginRight: '0%'
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
    width: '97%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#5DB2BD',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20
  },
  topicList2: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#5DB2BD',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
    marginLeft: '3%'
  },
  textTopicList: {
    color: '#F0FF00',
    fontSize: 18,
    fontFamily: "Mitr-Light",
    marginLeft:10,
  },
  textTopicList2: {
    color: '#F0FF00',
    fontSize: 12,
    fontFamily: "Mitr-Light",
    marginLeft:10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: '5%'
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  titlecolor:{
    color: '#FFFAD3',
    fontSize: 30,
    fontWeight: '600',
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
  },
  pickerbox:{
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
  },
  pickerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    padding: 15,
    width: 240,
    height: 35,
    alignSelf: 'center',
    marginLeft: 10,
    backgroundColor: '#ffffff',
    marginTop:10,
  },
  icon:{
    width: 25,
    height: 25,
    position: 'absolute',
    right: 15, // Keep some space between your left border and Image
  },
  GridViewBlockStyle: {
    margin:5,
    marginRight: 'auto',
    marginBottom: '5%',
    flexDirection: 'row',
  },
});
export default FavoriteList;