import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Moc_logo from '../../assets/moc_logo.png';
import {  deleteFavorite } from '../redux/actions/newFavoriteAction';
import { SearchBar } from 'react-native-elements';
import { FavoriteStyle } from '../css/FavoriteList';

const FavoriteList = ({ navigation }) => {
  const dispatch = useDispatch();
  
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user)
  const image = useSelector(state => state.data.urlimage)

  const { productList } = useSelector(state => state.favorite)

  const [shouldShow1, setShouldShow1] = useState(true);

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

  useEffect(() => {

    setFilteredDataSource(productList);

  }, [productList]);


  function Show1() {
    setShouldShow1(shouldShow1 ? false : true);
    setShow1color(shouldShow1 ? "#1E1E1E" : "#FFFFFF");
    setShow2color(shouldShow1 ? "#FFFFFF" : "#1E1E1E");

  };


  async function deleteTasklist(user_id, _id) {
    setDelete(true)
    dispatch(deleteFavorite(user_id, _id))
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = productList.filter(function (item) {
        const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${item.category_name
          }`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(productList);
      setSearch(text);
    }
  };

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={FavoriteStyle(theme).container1}>
      <View
        style={FavoriteStyle(theme).boxFavelist}>
        <View style={FavoriteStyle(theme).boxTopic}>
          <Text style={FavoriteStyle(theme).title}> MY</Text>
          <Text style={FavoriteStyle(theme).titlecolor}> FAVORITE</Text>
          <Text style={FavoriteStyle(theme).title}> LIST</Text>
        </View>
        <View style={FavoriteStyle(theme).pickerbox}>
          <View>
            <SearchBar
              placeholder="Type Here..."
              lightTheme
              round
              value={search}
              onChangeText={text => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction('')}
              autoCorrect={false}
              containerStyle={FavoriteStyle(theme).searchcontainer}
              inputContainerStyle={{ height: 35 }}
            />
          </View>
          <Entypo name="menu" size={50} color={Show1color} onPress={() => { Show1() }} />
          <MaterialIcons name="crop-square" size={50} color={Show2color} onPress={() => { Show1() }} />
        </View>

        {shouldShow1 ?
          (

            <FlatList
              data={filteredDataSource}
              style={FavoriteStyle(theme).superListFav}
              key={"_"}
              keyExtractor={item => "_" + item.product_id}
              renderItem={({ item }) =>
              (
                <View style={FavoriteStyle(theme).listFavorite}>
                  <TouchableOpacity
                    style={FavoriteStyle(theme).topicList}
                    onPress={() => {
                      console.log(item.product_id)
                      navigation.navigate('ShowPricePage', { id: item.product_id })
                    }}>
                    <LinearGradient
                      colors={[theme.topicbg, theme.topicbg2]}
                      start={{ x: 1, y: 0 }} end={{ x: 0.2, y: 0 }}
                      style={FavoriteStyle(theme).topicListback}>
                      <Text style={FavoriteStyle(theme).textTopicList}> {item.product_name}  </Text>
                      <MaterialCommunityIcons name="delete-empty" style={FavoriteStyle(theme).icon} size={20} color="#ffffff" onPress={() => { deleteTasklist(user._id, item.product_id) }} />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

              )}
            />

          )
          :
          (
            <FlatList
              data={filteredDataSource}

              numColumns={2}
              key={"#"}
              keyExtractor={item => "#" + item.product_id}

              style={FavoriteStyle(theme).superListFav2}
              renderItem={({ item }) =>
              (
                <View style={FavoriteStyle(theme).GridViewBlockStyle}>
                  <TouchableOpacity
                    style={FavoriteStyle(theme).topicList2}
                    onPress={() => {
                      console.log(item.product_id)
                      navigation.navigate('ShowPricePage', { id: item.product_id })
                    }}>
                    <LinearGradient
                      colors={[theme.topicbg, theme.topicbg2]}
                      start={{ x: 1, y: 0 }} end={{ x: 0.2, y: 0 }}
                      style={FavoriteStyle(theme).topicListback2}>
                        <Image style={FavoriteStyle(theme).logo} source={filterImageUrl(item.product_name)} rounded />
                        <Text style={FavoriteStyle(theme).textTopicList2}> {item.product_name}  </Text>
                        <MaterialCommunityIcons name="delete-empty" style={FavoriteStyle(theme).icon2} size={20} color="#ffffff" onPress={() => { deleteTasklist(user._id, item.product_id) }} />
                    </LinearGradient>
                  </TouchableOpacity >
                </View>
              )}
            />
          )}
      </View>
    </LinearGradient>
  )
}

export default FavoriteList;