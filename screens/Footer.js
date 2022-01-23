import React, {useEffect} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

// redux stuff
import {loadProduct} from '../src/redux/actions/dataActions';
import {useDispatch, useSelector} from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadProduct());
  }, []);


  return (
    <NativeBaseProvider>
      <Box>{product.data}</Box>
    </NativeBaseProvider>
  );
};

export default Footer;
