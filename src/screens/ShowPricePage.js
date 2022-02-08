import React from 'react';
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"
import { ListItem, Avatar } from 'react-native-elements';
import Moc_logo from '../../assets/moc_logo.png';

const ShowPricePage = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.productprice)
  const [data, setData] = useState()

  console.log(route.params.id)
  console.log("Test",data)
  
  useEffect(() => {
    dispatch(getPrice(route.params.id));
    setData();
    setData(products);
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text>Show Page Price</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListItem
          >
            <Avatar source={Moc_logo} rounded />
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '700' }}>{`${item.product_name}`}</ListItem.Title>
              <ListItem.Subtitle style={{ color: '#CED0CE' }}>{item.price_max_avg}</ListItem.Subtitle>
              <ListItem.Subtitle style={{ color: '#CED0CE' }}>{item.price_min_avg}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
}

export default ShowPricePage;