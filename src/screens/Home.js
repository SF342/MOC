import React from 'react';
import { useEffect, useState } from 'react';
import { ListItem, SearchBar, Avatar } from 'react-native-elements';
import { Modal, View, FlatList, Text, TouchableOpacity } from 'react-native';

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/actions/dataActions';
import { addFavoriteList, getFavoriteId } from '../redux/actions/newFavoriteAction';
import { HomeStyle } from '../css/Home';

import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';

export default Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.data.data);
  const image = useSelector(state => state.data.urlimage);
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user);
  const { favoriteList } = useSelector(state => state.favorite)

  const [isModalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(null);


  const [data, setData] = useState();
  const [valueInput, setValue] = useState('');

  useEffect(() => {

    // Check user login or not
    if (user) {
      dispatch(getFavoriteId(user._id));
    }

  }, [user]);


  useEffect(() => {

    setData(products);

  }, [products]);

  const updateInput = text => {
    setValue(text);
    searchFilterFunction(text);
  };

  // Function call to open modal add
  function toggleModalVisibility() {
    setModalVisible(!isModalVisible);
  }

  const filterImageUrl = val => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url };
    } else {
      return Moc_logo;
    }
  };


  // Function call to open modal add
  const confirmAdd = () => {
    if (user != null) {
      let checkDuplicate = favoriteList.filter(vendor => vendor['product_id'] === item.product_id)
      if (checkDuplicate.length === 0) {
        dispatch(addFavoriteList(user._id, item.product_id));
      } else {
        alert("Duplicate product!")
      }
      setModalVisible(false);
    } else {
      alert('Please Login to add favorite');
    }
  };

  const searchFilterFunction = text => {
    const newData = products.filter(item => {
      const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${item.category_name}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  if (products.length === 0) {
    dispatch(getData());
  }

  const MODAL = (prop) => {
    return (<Modal
      animationType="slide"
      transparent
      visible={isModalVisible}
      presentationStyle="overFullScreen"
      onDismiss={toggleModalVisibility}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={HomeStyle(theme).bg_modal}>
        <View style={HomeStyle(theme).paper_madal}>
          <Text style={HomeStyle(theme).fav}>Add Favorite</Text>
          <Avatar
            style={HomeStyle(theme).logo}
            source={filterImageUrl(prop)}
            rounded></Avatar>
          <View style={HomeStyle(theme).line} />
          <TouchableOpacity
            style={HomeStyle(theme).logInButton}
            onPress={() => {
              confirmAdd();
            }}>
            <Text style={HomeStyle(theme).confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={HomeStyle(theme).confirmButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>)
  }

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={HomeStyle(theme).container1}>
      <View style={{ flex: 1 }}>

        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          value={valueInput}
          onChangeText={text => updateInput(text)}
          autoCorrect={false}
          containerStyle={{ backgroundColor: theme.background1, }}
          inputContainerStyle={{ backgroundColor: theme.searchBarcolor, }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListItem
                  delayLongPress={250}
                  onLongPress={() => {
                    toggleModalVisibility();
                    setItem(item);
                    console.log(item)
                  }}
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: [theme.listItembg2, theme.listItembg],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  containerStyle={{
                    marginHorizontal: 4,
                    marginVertical: 4,
                    borderRadius: 8,
                  }}
                  onPress={() =>
                    navigation.navigate('ShowPricePage', {
                      id: item.product_id,
                    })
                  }>
                  <Avatar
                    style={HomeStyle(theme).logo}
                    source={filterImageUrl(item.product_name)}
                    rounded
                  />
                  <View>
                    <ListItem.Content>
                      <ListItem.Title
                        style={{
                          fontSize: 18,
                          color: theme.topictext,
                          fontFamily: 'Mitr-Regular',
                          marginRight: 70
                        }}>{`${item.product_name}`}</ListItem.Title>
                      <View style={HomeStyle(theme).TextContainer1}>
                        <ListItem.Subtitle
                          style={{
                            color: '#CED0CE',
                            fontFamily: 'Mitr-Light',
                          }}>
                          รหัสสินค้า : {item.product_id}
                        </ListItem.Subtitle>
                      </View>
                    </ListItem.Content>
                  </View>

                </ListItem>
              )}
              keyExtractor={item => item.product_id}
            />
          </View>
        </View>
      </View>

      {isModalVisible === true && item !== null ? MODAL(item.product_name) : <></>}
    </LinearGradient>
  );
};
