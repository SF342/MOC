import React from 'react';
import { useEffect, useState } from 'react';
import { ListItem, SearchBar, Avatar } from 'react-native-elements';
import {
  Modal,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  substring,
} from 'react-native';
//redux stuff
import { getData } from '../redux/actions/dataActions';
import {
  addFavoriteList,
  getFavoriteId,
} from '../redux/actions/newFavoriteAction';
import { useSelector, useDispatch } from 'react-redux';
import { HomeStyle } from '../css/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import RecommendPage from './RecommendPage';

export default Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.data.data);
  const image = useSelector(state => state.data.urlimage);
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user);
  const { favoriteList } = useSelector(state => state.favorite)


  const [isModalVisible, setModalVisible] = useState(false);

  const [pid, serPid] = useState();
  const [pname, setPname] = useState(null);
  const [item, setItem] = useState(null);


  const [data, setData] = useState();
  const [valueInput, setValue] = useState('');
  const [checkUserType, setCheckUserType] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(false);

  // const str = str.substring;
  // const res = str.substring(1, 4);
  console.log(item)


  // const favorite_state = useSelector(state => state.favorite.getFav)
  // const product_state = useSelector(state => state.favorite.getProduct)
  // const add_state = useSelector(state => state.favorite.add)
  // const delete_state = useSelector(state => state.favorite.delete)

  useEffect(() => {

    // Check user login or not
    setCheckUserType(user ? true : false)
    if (user) {
      dispatch(getFavoriteId(user._id));
    }

    console.log(favoriteList);

  }, [user]);


  useEffect(() => {

    console.log('product');
    setData(products);

  }, [products]);


  function Show1() {
    setShouldShow1(true);
    setShouldShow2(false);
  }

  function Show2() {
    setShouldShow1(false);
    setShouldShow2(true);
  }

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
    setLoading(false);
  }

  // console.log(data.length);

  const RECOMMENDMENU = () => {
    return (<View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Entypo
        name="menu"
        size={50}
        color="#FFFFFF"
        onPress={() => {
          Show1();
        }}
      />
      <MaterialIcons
        name="crop-square"
        size={50}
        color="#FFFFFF"
        onPress={() => {
          Show2();
        }}
      />
    </View>)
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
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={HomeStyle(theme).container1}>
      <View style={{ flex: 1 }}>
        {checkUserType && !shouldShow2 ? (
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            value={valueInput}
            onChangeText={text => updateInput(text)}
            autoCorrect={false}
            containerStyle={{ backgroundColor: '#0A214A' }}
          />
        ) : (<></>)}
        {checkUserType ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            {RECOMMENDMENU}
            {shouldShow1 ? (
              <View>
                {/* <Text
                  style={{
                    fontSize: 18,
                    color: 'red',
                    textAlign: 'center',
                    fontFamily: 'Mitr-Light',
                  }}>
                  {data.title}
                </Text> */}
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <ListItem
                      // Component={TouchableScale}
                      // Component={Pressable}

                      // friction={0} //
                      delayLongPress={250}
                      onLongPress={() => {
                        toggleModalVisibility();
                        setItem(item);
                        console.log(item)
                      }}
                      // tension={200} // These props are passed to the parent component (here TouchableScale)
                      // activeScale={0.95} //
                      ViewComponent={LinearGradient}
                      linearGradientProps={{
                        colors: ['#1544E2', '#0A214A'],
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
                              fontSize: 19,
                              color: '#FFC511',
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
            ) : <></>}
            {shouldShow2 ? <RecommendPage navigation={navigation} /> : <></>}
          </View>
        ) : (
          <View>
            <SearchBar
              placeholder="Type Here..."
              lightTheme
              round
              value={valueInput}
              onChangeText={text => updateInput(text)}
              autoCorrect={false}
              containerStyle={{ backgroundColor: '#0A214A' }}
            />
            {/* <Text
              style={{
                fontSize: 18,
                color: 'red',
                textAlign: 'center',
                fontFamily: 'Mitr-Light',
              }}>
              {data.title}
            </Text> */}
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListItem
                  // Component={TouchableScale}
                  delayLongPress={250}
                  friction={0}
                  onLongPress={() => {
                    toggleModalVisibility();
                    setItem(item);
                  }}
                  // tension={200} // These props are passed to the parent component (here TouchableScale)
                  // activeScale={0.95} //
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: ['#1544E2', '#0A214A'],
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
                          color: '#FFC511',
                          fontWeight: '700',
                          fontFamily: 'Mitr-Light',
                          marginRight: 70
                        }}>{`${item.product_name}`}</ListItem.Title>
                      <View style={HomeStyle(theme).TextContainer1}>
                        <ListItem.Subtitle
                          style={{
                            fontSize: 13,
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
        )}
      </View>

      {isModalVisible === true && item !== null ? MODAL(item.product_name) : <></>}
    </LinearGradient>
  );
};
