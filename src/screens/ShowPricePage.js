import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"
import { ListItem, Avatar } from 'react-native-elements';
import Moc_logo from '../../assets/moc_logo.png';
import {ActivityIndicator} from 'react-native';

const ShowPricePage = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.productprice)
  const PID = route.params.id;
  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);


  
  const checkPD = () => {
    var id = products.findIndex((PD) => PD.product_id === PID)
    console.log(id);
    if (id === -1) {
      dispatch(getPrice(PID));
    } else {
      setProduct(products[id])
    }
  }


  if (Loading) {
    checkPD();
    if (product !== null) {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Show Page Price</Text>
      {product === null || Loading ? <ActivityIndicator /> :
        <ListItem>
          <Avatar source={Moc_logo} rounded />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '700' }}>{`${product.product_name}`}</ListItem.Title>
            <ListItem.Subtitle style={{ color: '#CED0CE' }}>{product.price_max_avg}</ListItem.Subtitle>
            <ListItem.Subtitle style={{ color: '#CED0CE' }}>{product.price_min_avg}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      }
    </View>
  );
}

export default ShowPricePage;