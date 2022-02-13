import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import { ActivityIndicator, StyleSheet, SafeAreaView, Image } from 'react-native';
import { HStack, NativeBaseProvider, Center, Box, ZStack, VStack, ScrollView } from "native-base";



const ShowPricePage = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.productprice)
  const image = useSelector(state => state.data.urlimage)

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
    <NativeBaseProvider
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3eeff' }}>
      {product === null || Loading ? <ActivityIndicator /> :
        <ScrollView>
          <Center h="100%" justifyContent='center' alignItems='center'
            backgroundColor='#e3eeff' >
            <VStack space={4} alignItems="center" padding={2} >
              <Center w="400" h="220" bg="#0e2857" rounded="md" shadow={3} >
                <LinearGradient
                  colors={['#012c7a', '#0A214A']}
                  start={{ x: 1, y: 0.5 }} end={{ x: 1, y: 0.01 }}
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
              <Center h="300" w="200" bg="#0e2857" rounded="md" shadow={3} padding='50' >
                <LinearGradient
                  colors={['#012c7a', '#0A214A']}
                  start={{ x: 1, y: 0.5 }} end={{ x: 1, y: 0.01 }}
                  style={styles.container2}>
                  <Image style={styles.logo} source={filterImageUrl(product.product_name)}  rounded />
                </LinearGradient>

              </Center>
              <Center h="300" w="200" bg="#0e2857" rounded="md" shadow={3} >
                <LinearGradient
                  colors={['#012c7a', '#0A214A']}
                  start={{ x: 1, y: 0.5 }} end={{ x: 1, y: 0.01 }}
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

  );
}


const styles = StyleSheet.create({
  boxImg: {
    width: '80%',
    height: '40%',
    marginBottom: '1%'
  },
  container1: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  container2: {
    width: 200,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
  },
  box1: {
    padding: '4%',
    textAlign: 'center'
  },
  box2Img: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TextContainer1: {
    flexDirection: 'row',
    marginBottom: '1%',
  },
  TextContainer2: {
    marginTop: '5%'
  },
  logo: {
    width: 200,
    height: 200,
  },
  topic: {
    color: '#FFC511',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: "Mitr-Light",
    marginBottom: '3%'
  },
  title: {
    color: '#FFC511',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Mitr-Light",
  },
  title1: {
    color: '#CED0CE',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "Mitr-Light",
    fontWeight: 'bold',
  },
  title2: {
    color: '#CED0CE',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Mitr-Light"
  },
  title3: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: "Mitr-Light",
    color: '#FFC511',
    fontWeight: '700'
  },
  main: {
    flex: 1,
    textAlign: 'center',
    justifyContent: "center",
  }
});




export default ShowPricePage;