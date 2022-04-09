import React from 'react';
import {useEffect, useState} from 'react';
import {ListItem, SearchBar, Avatar} from 'react-native-elements';
import {Modal, View, FlatList, Text, TouchableOpacity} from 'react-native';
//redux stuff
import {getData} from '../redux/actions/dataActions';
import {addFavoriteList} from '../redux/actions/newFavoriteAction';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../css/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import RecommendPage from './RecommendPage';

export default Home = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data);
  const image = useSelector(state => state.data.urlimage);
  const theme = useSelector(state => state.theme.theme);
  const user_api = useSelector(state => state.user.user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [pid, serPid] = useState();

  const [data, setData] = useState();
  const [valueInput, setValue] = useState('');
  const [checkUserType, setCheckUserType] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(false);

  useEffect(() => {
    setData(products);
    console.log(user_api);
    // Check user login or not
    if (user_api) {
      setCheckUserType(true);
    } else {
      setCheckUserType(false);
    }
  }, [user_api]);

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

    // let user search if finish turn back  recommend page
    if (text != '' || user_api._id == null) {
      setCheckUserType(false);
      console.log('check ', user_api._id);
    } else {
      if (user_api._id) {
        setCheckUserType(true);
        console.log('check ', user_api._id);
      }
    }
  };

  // Function call to open modal add
  function toggleModalVisibility() {
    setModalVisible(!isModalVisible);
  }

  const filterImageUrl = val => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return {uri: nameImg[0].url};
    } else {
      return Moc_logo;
    }
  };
  0;
  // Function call to open modal add
  const confirmAdd = () => {
    if (user_api != null) {
      console.log(user_api._id, pid);
      dispatch(addFavoriteList(user_api._id, pid));
      setModalVisible(false);
    } else {
      alert('Please Login to add favorite');
    }
  };

  const searchFilterFunction = text => {
    const newData = products.filter(item => {
      const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${
        item.category_name
      }`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  if (products.length === 0) {
    dispatch(getData());
    setLoading(false);
  }

  return (
    <LinearGradient
      colors={[theme.pri700, theme.pri50]}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container1}>
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          value={valueInput}
          onChangeText={text => updateInput(text)}
          autoCorrect={false}
          containerStyle={{backgroundColor: '#0A214A'}}
        />

        {checkUserType === true ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{
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
            </View>
            {shouldShow1 ? (
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'red',
                    textAlign: 'center',
                    fontFamily: 'Mitr-Light',
                  }}>
                  {/* {data.title} */}
                </Text>
                <FlatList
                  data={data}
                  renderItem={({item}) => (
                    <ListItem
                      Component={TouchableScale}
                      friction={0} //
                      onLongPress={() => {
                        toggleModalVisibility();
                        serPid(item.product_id);
                        console.log('user api ', user_api);
                      }}
                      tension={200} // These props are passed to the parent component (here TouchableScale)
                      activeScale={0.95} //
                      linearGradientProps={{
                        colors: ['#1544E2', '#0A214A'],
                        start: {x: 1, y: 0},
                        end: {x: 0.2, y: 0},
                      }}
                      ViewComponent={LinearGradient}
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
                        style={styles.logo}
                        source={filterImageUrl(item.product_name)}
                        rounded
                      />
                      <ListItem.Content>
                        <ListItem.Title
                          style={{
                            fontSize: 22,
                            color: '#FFC511',
                            fontWeight: '700',
                            fontFamily: 'Mitr-Light',
                          }}>{`${item.product_name}`}</ListItem.Title>
                        <View style={styles.TextContainer1}>
                          <ListItem.Subtitle
                            style={{
                              color: '#CED0CE',
                              fontFamily: 'Mitr-Light',
                            }}>
                            {item.group_name}{' '}
                          </ListItem.Subtitle>
                          <ListItem.Subtitle
                            style={{
                              color: '#CED0CE',
                              fontFamily: 'Mitr-Light',
                            }}>
                            {item.categoty_name}{' '}
                          </ListItem.Subtitle>
                          <ListItem.Subtitle
                            style={{
                              color: '#CED0CE',
                              fontFamily: 'Mitr-Light',
                            }}>
                            รหัสสินค้า : {item.product_id}
                          </ListItem.Subtitle>
                        </View>
                      </ListItem.Content>
                    </ListItem>
                  )}
                  keyExtractor={item => item.product_id}
                />
              </View>
            ) : null}
            {shouldShow2 ? <RecommendPage navigation={navigation} /> : null}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'red',
                textAlign: 'center',
                fontFamily: 'Mitr-Light',
              }}>
              {/* {data.title} */}
            </Text>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <ListItem
                  Component={TouchableScale}
                  friction={0} //
                  onLongPress={() => {
                    toggleModalVisibility();
                    serPid(item.product_id);
                    console.log('user api ', user_api);
                  }}
                  tension={200} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  linearGradientProps={{
                    colors: ['#1544E2', '#0A214A'],
                    start: {x: 1, y: 0},
                    end: {x: 0.2, y: 0},
                  }}
                  ViewComponent={LinearGradient}
                  containerStyle={{
                    marginHorizontal: 4,
                    marginVertical: 4,
                    borderRadius: 8,
                  }}
                  onPress={() =>
                    navigation.navigate('ShowPricePage', {id: item.product_id})
                  }>
                  <Avatar
                    style={styles.logo}
                    source={filterImageUrl(item.product_name)}
                    rounded
                  />
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 22,
                        color: '#FFC511',
                        fontWeight: '700',
                        fontFamily: 'Mitr-Light',
                      }}>{`${item.product_name}`}</ListItem.Title>
                    <View style={styles.TextContainer1}>
                      <ListItem.Subtitle
                        style={{color: '#CED0CE', fontFamily: 'Mitr-Light'}}>
                        {item.group_name}{' '}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle
                        style={{color: '#CED0CE', fontFamily: 'Mitr-Light'}}>
                        {item.categoty_name}{' '}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle
                        style={{color: '#CED0CE', fontFamily: 'Mitr-Light'}}>
                        รหัสสินค้า : {item.product_id}
                      </ListItem.Subtitle>
                    </View>
                  </ListItem.Content>
                </ListItem>
              )}
              keyExtractor={item => item.product_id}
            />
          </View>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.bg_modal}>
          <View style={styles.paper_madal}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text>x</Text>
            </TouchableOpacity>
            <Text style={styles.title2}>Add Favorite</Text>

            <TouchableOpacity
              style={styles.logInButton}
              onPress={() => {
                confirmAdd();
              }}>
              <Text style={styles.loginButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};
