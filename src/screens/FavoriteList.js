import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList,Image, TouchableOpacity, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker, } from 'react-native-ui-lib';
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Moc_logo from '../../assets/moc_logo.png';
import { getProductId, deleteFavorite, getFavoriteId } from '../redux/actions/newFavoriteAction';
import { ListItem, SearchBar, Avatar } from 'react-native-elements';
import styles from '../css/FavoriteList';

const FavoriteList = ({ navigation }) => {
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
  
  const fav_api = useSelector(state => state.favorite.favoriteList)
  const productName = useSelector(state => state.favorite.productList)
  const favorite_state = useSelector(state => state.favorite.getFav)
  const product_state = useSelector(state => state.favorite.getProduct)
  const add_state = useSelector(state => state.favorite.add)
  const delete_state = useSelector(state => state.favorite.delete)



  const [deleteState, setDelete] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(false);

  const [Show1color, setShow1color] = useState("#1E1E1E");
  const [Show2color, setShow2color] = useState("#FFFFFF");

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);


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
      
      dispatch(getFavoriteId(user_api._id));
      dispatch(getProductId(fav_api));

      setFilteredDataSource(productName);
      
    }, [favorite_state, product_state, add_state, delete_state]);

  function Show1() {
    setShouldShow1(true);
    setShouldShow2(false);
    setShow1color("#1E1E1E");
    setShow2color("#FFFFFF")
  };

  function Show2() {
    setShouldShow1(false);
    setShouldShow2(true);
    setShow1color("#FFFFFF")
    setShow2color("#1E1E1E")
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

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = productName.filter(function (item) {
        const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${
          item.category_name
        }`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(productName);
      setSearch(text);
    }
  };

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
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
          <View>
            <SearchBar
              placeholder="Type Here..."
              lightTheme
              round
              value={search}
              onChangeText={text => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction('')}
              autoCorrect={false}
              containerStyle={styles.searchcontainer}
              inputContainerStyle={{ height: 35 }}
            />
          </View>
          <Entypo name="menu" size={50} color={Show1color} onPress={() => {Show1()}}/>
          <MaterialIcons name="crop-square" size={50} color={Show2color} onPress={() => {Show2()}}/>
        </View>
        {shouldShow1 ?
          (
            <ScrollView>
              <FlatList
                data={filteredDataSource}
                style={styles.superListFav}
                renderItem={({ item }) =>
                (
                  <View style={styles.listFavorite}>
                    <TouchableOpacity 
                      style={styles.topicList}
                      onPress={() =>
                        {console.log(item.product_id)
                        navigation.navigate('ShowPricePage', {id: item.product_id})
                    }}>  
                        <Text style={styles.textTopicList}> {item.product_name}  </Text>
                        <MaterialCommunityIcons name="delete-empty" style={styles.icon} size={20} color="#F21729" onPress={() => { deleteTasklist(user_api._id, item.product_id) }}/>
                    </TouchableOpacity>
                  </View>

                )} />

            </ScrollView>
          )
        : null}

        {shouldShow2 ? (
          <ScrollView>
            <FlatList
              data={filteredDataSource}
              numColumns={2}
              
              style={styles.superListFav2}
              renderItem={({ item }) =>
              (
                <View style={styles.GridViewBlockStyle}>
                  <TouchableOpacity 
                      style={styles.topicList2}
                      onPress={() =>
                        {console.log(item.product_id)
                        navigation.navigate('ShowPricePage', {id: item.product_id})
                    }}>  
                    <Image style={styles.logo} source={filterImageUrl(item.product_name)} rounded />
                    <Text style={styles.textTopicList2}> {item.product_name}  </Text>
                    <MaterialCommunityIcons name="delete-empty" style={styles.icon2} size={20} color="#F21729" onPress={() => { deleteTasklist(user_api._id, item.product_id) }}/>
                  </TouchableOpacity >
                </View>

              )} />

          </ScrollView>
        ) : null}

      </View>
    </LinearGradient>

  )
}

export default FavoriteList;