import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { Colors, Picker, Button, } from 'react-native-ui-lib';
import { ActivityIndicator } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PriceStyle } from '../css/Price';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme } from "victory-native";

const settingsIcon = require('../../assets/settings.png');
const titanIcon = require('../../assets/titan.png');

//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'

const Price = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const { theme } = useSelector(state => state.theme)

  const [price, setPrice] = useState([]);
  const [price1, setPrice1] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setText] = useState(moment(new Date()).format("YYYY-MM-DD"));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = moment(tempDate).format("YYYY-MM-DD");
    setText(fDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedProduct1, setSelectedProduct1] = useState('');
  const [isPriceLoading, setPriceLoading] = useState(true);

  const onClickSearch = test => {

    const priceURL = `https://dataapi.moc.go.th/gis-product-prices?product_id=${selectedProduct.value}&from_date=${textDate}&to_date=${textDate}`;
    setPriceLoading(true);
    fetch(priceURL)
      .then(res => res.json())
      .then(resjson => {
        setPrice(resjson);
      })

    const priceURL1 = `https://dataapi.moc.go.th/gis-product-prices?product_id=${selectedProduct1.value}&from_date=${textDate}&to_date=${textDate}`;
    fetch(priceURL1)
      .then(res1 => res1.json())
      .then(resjson1 => {
        setPrice1(resjson1);
        setPriceLoading(false);
        console.log(resjson1);
      })
    console.log(selectedProduct.value)
    console.log(price)
    setModalVisible(true);
  };

  const onProductChange = dummyData => {
    setSelectedProduct(dummyData);
  };
  const onProductChange1 = dummyData1 => {
    setSelectedProduct1(dummyData1);
  };
  const data = {
    price1: [
      { x: 'price_max', y: price.price_max_avg },
      { x: 'price_min', y: price.price_min_avg },
    ],

    price2: [
      { x: 'price_max', y: price1.price_max_avg },
      { x: 'price_min', y: price1.price_min_avg },
    ],

  };

  return (
    <SafeAreaView style={PriceStyle(theme).container}>
      <View style={{ marginTop: 20, marginLeft: 50 }}>
        <Text style={PriceStyle(theme).t2}>COMPARE</Text>
      </View>

      <View style={PriceStyle(theme).pickerContainer} >
        <View style={PriceStyle(theme).pickerbox}>
          <Picker
            value={selectedProduct}
            placeholder="Search Product . . ."
            onChange={onProductChange}
            showSearch
            placeholderTextColor="#000000"
            containerStyle={PriceStyle(theme).pickerStyle}
            style={{ color: Colors.black }}>
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
            style={{ color: Colors.black }}>
            {products.map((option, index) => (
              <Picker.Item
                key={index}
                value={option.product_id}
                label={option.product_name}
              />
            ))}
          </Picker>
        </View>
        <View style={{ alignItems: 'center', paddingBottom: 10, margin: 20 }}>
          <Button onPress={onClickSearch} label="Compare" borderRadius={10} backgroundColor='#0A214A' />
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingBottom: 10, margin: 20 }}>
        <Button onPress={showDatepicker} label="Show date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          maximumDate={Date.parse(new Date())}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={PriceStyle(theme).centeredView}>
          <View style={PriceStyle(theme).modalView}>
            <Text style={PriceStyle(theme).modalTextheader}>COMPARE</Text>
            {isPriceLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={PriceStyle(theme).modalbox}>
                <View>
                  <Text style={PriceStyle(theme).modalHeader}> <FontAwesome name="circle" color='#0A214A' size={13} /> {price.product_name}</Text>
                  <Text style={PriceStyle(theme).modalText}>Price max : {price.price_max_avg}  {price.unit}</Text>
                  <Text style={PriceStyle(theme).modalText}>Price min : {price.price_min_avg}  {price.unit}</Text>
                </View>
                <View>
                  <Text style={PriceStyle(theme).modalHeader}> <FontAwesome name="circle" color='#FFBD12' size={13} /> {price1.product_name}</Text>
                  <Text style={PriceStyle(theme).modalText}>Price max : {price1.price_max_avg}  {price1.unit}</Text>
                  <Text style={PriceStyle(theme).modalText}>Price min : {price1.price_min_avg}  {price1.unit}</Text>

                  <VictoryChart width={250} height={230}>
                    <VictoryGroup offset={20}>
                      <VictoryBar data={data.price1} style={{ data: { fill: '#0A214A' } }} />
                      <VictoryBar data={data.price2} style={{ data: { fill: '#FFBD12' } }} />
                    </VictoryGroup>
                  </VictoryChart>

                  <Text style={PriceStyle(theme).modalText}>{moment(textDate).format('LL')}</Text>

                </View>
              </View>
            )}

            <Pressable
              style={[PriceStyle(theme).buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={PriceStyle(theme).textStyle}>BACK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Price;