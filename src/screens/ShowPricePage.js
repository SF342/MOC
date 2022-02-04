import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, FlatList } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"

const ShowPricePage = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)

  useEffect(() => {
    dispatch(getPrice("P11001"));
  }, [])

  console.log(products)

  return (
    <View style={{ flex: 1 }}>

    </View>
  );
}

export default ShowPricePage;