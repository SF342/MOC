import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import {Colors, Picker, Button} from 'react-native-ui-lib';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PriceStyle} from '../css/Price';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTheme,
} from 'victory-native';
import {Card} from 'react-native-paper';
import Moc_logo from '../../assets/moc_logo.png';

const settingsIcon = require('../../assets/settings.png');
const titanIcon = require('../../assets/titan.png');

//redux stuff
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Price = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data);
  const {theme} = useSelector(state => state.theme);
  const image = useSelector(state => state.data.urlimage);

  const [price, setPrice] = useState([]);
  const [price1, setPrice1] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [showPrice, setShowPrice] = useState(false);
  const [showPrice1, setShowPrice1] = useState(false);
  const [data, setData] = useState()

  useEffect(() => {
    console.log('Update ');
    console.log('price2 u ', price);
    console.log('price1 u ', price1);
    setData({
      price1: [
        {x: 'price_max', y: price.price_max_avg},
        {x: 'price_min', y: price.price_min_avg},
      ],
  
      price2: [
        {x: 'price_max', y: price1.price_max_avg},
        {x: 'price_min', y: price1.price_min_avg},
      ],
    })

  }, [isPriceLoading, price, price1]);




  const filterImageUrl = val => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return {uri: nameImg[0].url};
    } else {
      return Moc_logo;
    }
  };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedProduct1, setSelectedProduct1] = useState('');
  const [isPriceLoading, setPriceLoading] = useState(true);

  const onClickSearch = async test => {
    try {
      const priceURL = `https://mocapi.herokuapp.com/product/${selectedProduct.value}`;
      setPriceLoading(true);
      fetch(priceURL)
        .then(res => res.json())
        .then(resjson => {
          setPrice(resjson);
        });

      const priceURL1 = `https://mocapi.herokuapp.com/product/${selectedProduct1.value}`;
      fetch(priceURL1)
        .then(res1 => res1.json())
        .then(resjson1 => {
          setPrice1(resjson1);
          setPriceLoading(false);
        });
      console.log('1 ', selectedProduct.value);
      console.log('2', selectedProduct.value);

      console.log('price2 ', price);
      console.log('price1 ', price1);
      setModalVisible(true);
      // setShowPrice(!showPrice);
    } catch (err) {
      console.log(err);
    }
  };

  const onProductChange = dummyData => {
    if (selectedProduct1.value != dummyData.value) {
      setSelectedProduct(dummyData);
      setShowPrice(true);
    } else {
      alert('Do not choose the same Product');
    }
  };
  const onProductChange1 = dummyData1 => {
    if (selectedProduct.value != dummyData1.value) {
      setSelectedProduct1(dummyData1);
      setShowPrice1(true);
    } else {
      alert('Do not choose the same Product');
    }
  };

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={PriceStyle(theme).container1}>
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={PriceStyle(theme).t2}>COMPARE</Text>
      </View>

      <View style={PriceStyle(theme).pickerContainer}>
        <View style={PriceStyle(theme).pickerbox}>
          <Picker
            value={selectedProduct}
            placeholder="Search Product . . ."
            onChange={onProductChange}
            showSearch
            placeholderTextColor="#000000"
            containerStyle={PriceStyle(theme).pickerStyle}
            style={{color: Colors.black}}>
            {products.map((option, index) => (
              <Picker.Item
                key={index}
                value={option.product_id}
                label={option.product_name}
              />
            ))}
          </Picker>
        </View>
        <View style={PriceStyle(theme).pickerbox}>
          <Picker
            value={selectedProduct1}
            placeholder="Search Product . . ."
            onChange={onProductChange1}
            showSearch
            placeholderTextColor="#000000"
            containerStyle={PriceStyle(theme).pickerStyle}
            style={{color: Colors.black}}>
            {products.map((option, index) => (
              <Picker.Item
                key={index}
                value={option.product_id}
                label={option.product_name}
              />
            ))}
          </Picker>
        </View>

        <View style={PriceStyle(theme).GridViewBlockStyle}>
          {showPrice ? (
            <>
              <View style={PriceStyle(theme).topicList2}>
                <Image
                  style={PriceStyle(theme).logo}
                  source={filterImageUrl(selectedProduct.label)}
                  rounded
                />
                <Text style={PriceStyle(theme).textTopicList2}>
                  {' '}
                  {selectedProduct.label}{' '}
                </Text>
              </View>
            </>
          ) : null}
          {showPrice1 ? (
            <>
              <View style={PriceStyle(theme).topicList2}>
                <Text style={PriceStyle(theme).textTopicList2}>
                  {' '}
                  {selectedProduct1.label}{' '}
                </Text>
                <Image
                  style={PriceStyle(theme).logo}
                  source={filterImageUrl(selectedProduct1.label)}
                  rounded
                />
              </View>
            </>
          ) : null}
        </View>

        <View style={{alignItems: 'center', paddingBottom: 10, margin: 20}}>
          <Button
            onPress={() => onClickSearch()}
            label="Compare"
            borderRadius={10}
            backgroundColor="#0A214A"
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={PriceStyle(theme).centeredView}>
          <View style={PriceStyle(theme).modalView}>
            <Text style={PriceStyle(theme).modalTextheader}>COMPARE</Text>
            {isPriceLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={PriceStyle(theme).modalbox}>
                <View>
                  <Text style={PriceStyle(theme).modalHeader}>
                    {' '}
                    <FontAwesome name="circle" color="#0A214A" size={13} />{' '}
                    {price.product_name}
                  </Text>
                  <Text style={PriceStyle(theme).modalText}>
                    Price max : {price.price_max_avg} {price.unit}
                  </Text>
                  <Text style={PriceStyle(theme).modalText}>
                    Price min : {price.price_min_avg} {price.unit}
                  </Text>
                </View>
                <View>
                  <Text style={PriceStyle(theme).modalHeader}>
                    {' '}
                    <FontAwesome name="circle" color="#FFBD12" size={13} />{' '}
                    {price1.product_name}
                  </Text>
                  <Text style={PriceStyle(theme).modalText}>
                    Price max : {price1.price_max_avg} {price1.unit}
                  </Text>
                  <Text style={PriceStyle(theme).modalText}>
                    Price min : {price1.price_min_avg} {price1.unit}
                  </Text>

                  
                      <VictoryChart width={250} height={230}>
                        <VictoryGroup offset={20}>
                          <VictoryBar
                            data={data.price1}
                            style={{data: {fill: '#0A214A'}}}
                          />
                          <VictoryBar
                            data={data.price2}
                            style={{data: {fill: '#FFBD12'}}}
                          />
                        </VictoryGroup>
                      </VictoryChart>
                    
                </View>
              </View>
            )}

            <Pressable
              style={[PriceStyle(theme).buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={PriceStyle(theme).textStyle}>BACK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default Price;
