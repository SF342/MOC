import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from 'react-native';
import { getPrice } from "../redux/actions/dataActions"
import { ListItem, Avatar } from 'react-native-elements';
import Moc_logo from '../../assets/moc_logo.png';
import { ActivityIndicator, StyleSheet, SafeAreaView, Image } from 'react-native';

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
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3eeff' }}>
      {product === null || Loading ? <ActivityIndicator /> :
        <View >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.boxImg}>
              <Image style={styles.logo} source={Moc_logo} rounded />
            </View>
            <View style={styles.TextContainer1}>
              <Text style={styles.title}>ประเภท :</Text>
              <Text style={styles.title1}> {product.group_name}</Text>
            </View>
            <View style={styles.TextContainer1}>
              <Text style={styles.title}>ชื่อสินค้า : </Text>
              <Text style={styles.title1}>{product.product_name}</Text>
            </View>
            <View style={styles.TextContainer2}>
              <Text style={styles.title2}>ราคาสูงสุด : </Text>
              <Text style={styles.title3}>{product.price_max_avg} บาท</Text>
            </View>
            <View style={styles.TextContainer2}>
              <Text style={styles.title2}>ราคาต่ำสุด : </Text>
              <Text style={styles.title3}>{product.price_min_avg} บาท</Text>
            </View>
          </View>
        </View>
      }
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  boxImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '40%',
    marginBottom: '1%'
  },
  TextContainer1: {
    flexDirection: 'row',
  },
  TextContainer2: {
    marginTop: '5%'
  },
  logo: {
    width: '60%',
    height: '60%',
    resizeMode: 'stretch',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  title1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  title2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title3: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
  },
  main: {
    flex: 1,
    textAlign: 'center',
    justifyContent: "center",
  }
});




export default ShowPricePage;