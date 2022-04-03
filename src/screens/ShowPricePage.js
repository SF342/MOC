import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import { ActivityIndicator, StyleSheet, SafeAreaView, Image } from 'react-native';
import { HStack, NativeBaseProvider, Center, Box, ZStack, VStack, ScrollView } from "native-base";
import styles from '../css/ShowPricePage'


const ShowPricePage = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.productprice)
  const image = useSelector(state => state.data.urlimage)
  const theme = useSelector(state => state.theme.theme);

  const PID = route.params.id;
  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [date, setDate] = useState();

  const checkPD = () => {
    var id = products.findIndex((PD) => PD.product_id === PID)
    if (id === -1) {
      dispatch(getPrice(PID));
    } else {
      setProduct(products[id])
    }
  }

  if (Loading) {
    checkPD();
    for (var key in product) {
      if (product.hasOwnProperty(key)) {
        if (key == "price_max_avg" || key == "price_min_avg") {
          product[key] = Math.ceil(product[key])
        }
        setDate(product['price_list'][0]['date'].substring(0, 10))
      }
    }
    if (product !== null) {
      setLoading(false);
    }
  }

  const filterImageUrl = (val) => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url }
    } else {
      return Moc_logo
    }
  }

  return (
    <LinearGradient
    colors={[theme.pri700, theme.pri50]}
    start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
    style={styles.linearG}>
    <NativeBaseProvider
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {product === null || Loading ? <ActivityIndicator /> :
        <ScrollView>
          <Center h="100%" justifyContent='center' alignItems='center'
            >
            <VStack space={4} alignItems="center" padding={2} >
              <Center w="400" h="220" rounded="md" shadow={3} >
                <LinearGradient
                  colors={['#154599', '#154599']}
                  start={{ x: 1, y: 1 }} end={{ x: 1, y: 1 }}
                  style={styles.container1}
                >
                  <View style={styles.box1} >
                    <Text style={styles.topic}>รายละเอียดสินค้า</Text>
                    <View style={styles.TextContainer1}>
                      <Text style={styles.title}>ชื่อสินค้า : </Text>
                      <Text style={styles.title1}>{product.product_name}</Text>
                    </View>
                    <View style={styles.TextContainer1}>
                      <Text style={styles.title}>ประเภท : </Text>
                      <Text style={styles.title1}> {product.group_name}</Text>
                    </View>
                    <View style={styles.TextContainer1}>
                      <Text style={styles.title}>การจำหน่าย :</Text>
                      <Text style={styles.title1}> {product.category_name}</Text>
                    </View>
                    <View style={styles.TextContainer1}>
                      <Text style={styles.title}>อัพเดทราคาเมื่อ : </Text>
                      <Text style={styles.title1}> {date}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </Center>
            </VStack>
            <HStack space={1}>
              <Center h="300" w="200"  rounded="md" shadow={3} padding='50' >
                <LinearGradient
                  colors={['#154599', '#154599']}
                  start={{ x: 1, y: 1 }} end={{ x: 1, y: 1 }}
                  style={styles.container2}>
                  <Image style={styles.logo} source={filterImageUrl(product.product_name)}  rounded />
                </LinearGradient>

              </Center>
              <Center h="300" w="200"  rounded="md" shadow={3} >
                <LinearGradient
                  colors={['#154599', '#154599']}
                  start={{ x: 1, y: 1 }} end={{ x: 1, y: 1 }}
                  style={styles.container2}>
                  <View>
                    <Text style={styles.title2}>ราคาต่ำสุด : </Text>
                    <Text style={styles.title3}>{product.price_min_avg} บาท</Text>
                  </View>
                  <View>
                    <Text style={styles.title2}>ราคาสูงสุด : </Text>
                    <Text style={styles.title3}>{product.price_max_avg} บาท</Text>
                  </View>
                </LinearGradient>
              </Center>
            </HStack>
          </Center>
        </ScrollView>

      }
    </NativeBaseProvider>
    </LinearGradient>

  );
}

export default ShowPricePage;