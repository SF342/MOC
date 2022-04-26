import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RecommendPageStyle } from '../css/RecommendPage';
import {
  getProductId,
  getFavoriteId,
} from '../redux/actions/newFavoriteAction';
import { ScrollView } from 'react-native-gesture-handler';

const RecommendPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const image = useSelector(state => state.data.urlimage);
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.user);
  const { productList, favoriteList } = useSelector(state => state.favorite)

  const favorite_state = useSelector(state => state.favorite.getFav)
  const product_state = useSelector(state => state.favorite.getProduct)
  const add_state = useSelector(state => state.favorite.add)
  const delete_state = useSelector(state => state.favorite.delete)

  const [Loading, setLoading] = useState(false);
  // Use for update realtime data
  useEffect(() => {

    dispatch(getFavoriteId(user._id));
    dispatch(getProductId(favoriteList));
    console.log(delete_state)

  }, [favorite_state, product_state, add_state, delete_state]);

  const filterImageUrl = val => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url };
    } else {
      return Moc_logo;
    }
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={[theme.background1, theme.background2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={RecommendPageStyle(theme).container1}>
        <View>
          <View style={RecommendPageStyle(theme).box1}>
            <Text
              style={{
                color: '#FFC511',
                fontSize: 25,
                fontFamily: 'Mitr-Light',
              }}>
              Recommend
            </Text>
          </View>

          {Loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={productList}
              renderItem={({ item }) => (
                <ListItem
                  Component={TouchableScale}
                  friction={0} //
                  tension={200} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  linearGradientProps={{
                    colors: ['#1544E2', '#0A214A'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient}
                  containerStyle={{
                    marginHorizontal: 4,
                    marginVertical: 4,
                    borderRadius: 8,
                  }}
                  onPress={() =>
                    navigation.navigate('ShowPricePage', { id: item.product_id })
                  }>
                  <Avatar
                    style={RecommendPageStyle(theme).logo}
                    source={filterImageUrl(item.product_name)}
                    rounded
                  />
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 20,
                        color: '#FFC511',
                        fontWeight: '700',
                        fontFamily: 'Mitr-Light',
                      }}>{`${item.product_name}`}</ListItem.Title>
                    <View style={RecommendPageStyle(theme).TextContainer1}>
                      <ListItem.Subtitle
                        style={{ color: '#CED0CE', fontFamily: 'Mitr-Light' }}>
                        {item.group_name}{' '}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle
                        style={{ color: '#CED0CE', fontFamily: 'Mitr-Light' }}>
                        {item.categoty_name}{' '}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle
                        style={{ color: '#CED0CE', fontFamily: 'Mitr-Light' }}>
                        รหัสสินค้า : {item.product_id}
                      </ListItem.Subtitle>
                    </View>
                  </ListItem.Content>
                </ListItem>
              )}
              keyExtractor={item => item.product_id}
            />
          )}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default RecommendPage;
