import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import {Colors, Picker,Button,} from 'react-native-ui-lib';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme } from "victory-native";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

const settingsIcon = require('../../assets/settings.png');
const titanIcon = require('../../assets/titan.png');

//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'

const Price = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)

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

  // const fetchData = () => {
  //   const detail = [];
  //   fetch(mapURL)
  //     .then(response => response.json())
  //     .then(json => {
  //       for (let i = 1; i < json.length; i++) {
  //         detail.push(json[i]);
  //       };
  //     setData(detail);
  //     })
  //     .catch(error => alert(error))
  //     .finally(() => setLoading(false));
  // }

  // useEffect(() => {
  //   fetchData()
  //   dispatch(getData());
  // }, []);

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
        {x: 'price_max' , y:price.price_max_avg},
        {x: 'price_min' , y:price.price_min_avg},
      ],
    
      price2: [
        {x: 'price_max' , y:price1.price_max_avg},
        {x: 'price_min' , y:price1.price_min_avg},
      ],
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20 , marginLeft:50}}>
        <Text style={styles.t2}>COMPARE</Text>
      </View>

      <View style={styles.pickerContainer} >
        <View style={styles.pickerbox}>
          <Picker
            value={selectedProduct}
            placeholder="Search Product . . ."
            onChange={onProductChange}
            showSearch
            placeholderTextColor="#000000"
            containerStyle={styles.pickerStyle}
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
        <View style={styles.pickerbox}>
          <Picker
            value={selectedProduct1}
            placeholder="Search Product . . ."
            onChange={onProductChange1}
            showSearch
            placeholderTextColor="#000000"
            containerStyle={styles.pickerStyle}
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
        <View style={{ alignItems: 'center', paddingBottom: 10 , margin:20}}>
          <Button onPress={onClickSearch} label="Compare" borderRadius={10} backgroundColor='#0A214A'/>
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingBottom: 10 , margin:20}}>
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextheader}>COMPARE</Text>
            {isPriceLoading ? (
              <ActivityIndicator />
            ) : (     
            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalHeader}> <FontAwesome name="circle" color='#0A214A' size={13} /> {price.product_name}</Text>
                <Text style={styles.modalText}>Price max : {price.price_max_avg}  {price.unit}</Text>
                <Text style={styles.modalText}>Price min : {price.price_min_avg}  {price.unit}</Text>
              </View>
              <View>
                <Text style={styles.modalHeader}> <FontAwesome name="circle" color='#FFBD12' size={13} /> {price1.product_name}</Text>
                <Text style={styles.modalText}>Price max : {price1.price_max_avg}  {price1.unit}</Text>
                <Text style={styles.modalText}>Price min : {price1.price_min_avg}  {price1.unit}</Text>

                <VictoryChart width={250} height={230}>
                  <VictoryGroup offset={20}>
                    <VictoryBar data={data.price1} style={{data: {fill: '#0A214A'}}}/>
                    <VictoryBar data={data.price2} style={{data: {fill: '#FFBD12'}}}/>
                  </VictoryGroup>
                </VictoryChart>

                <Text style={styles.modalText}>{moment(textDate).format('LL')}</Text>
            
              </View>
            </View>
            )}
            
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>BACK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EEFF',
  },
  Header: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    padding: 5,
    borderColor: 'white',
    borderRadius: 20,
    borderBottomWidth: 1,
    fontWeight: '300',
    paddingBottom:10,
  },
  t1: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: '300',
    padding: 5,
    
  },
  t2: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    padding: 5,
    
  },
  modalbox: {
    borderRadius: 30,
    padding: 10,
    margin: 20,
    backgroundColor: 'rgba(180, 180, 180,0.09)',
    marginBottom: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
   
  },
  modalTextheader: {
    color: "black",
    fontWeight: "bold",
  },
  text: {
    color: 'white',
    marginTop: 15,
    alignSelf: 'center',
    fontWeight: '300',
    fontSize: 20,
  },
  pickerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    width: 300,
    alignSelf: 'center',
    marginLeft: 10,
  },
  pickerbox: {
    alignItems: 'center', 
    paddingBottom: 10 , 
    margin:20
  },

  pickerContainer: {
    paddingTop: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
  ScrollView: {
    marginTop: 1,
  },

  ButtonContainer: {
    width: 90,
    height: 60,
    borderRadius: 30,
    marginTop: 15,
    paddingLeft: 13,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#000000aa",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: 22
  },
  modalView: {
    flex:1,
    margin: 50,
    // marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#0A214A",
    borderRadius: 12,
    width:80,
    padding: 10,
    marginTop:10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontWeight:'600',
    marginBottom: 5,
    fontSize: 14,
    textAlign: "center"
  },
  modalHeader: {
    fontWeight:'600',
    fontSize: 15,
    paddingHorizontal: 10,
    marginBottom: 5,

    
  },
  icontext: {
    alignItems: 'center',
    
  },
  barChart:{
    marginBottom:25,
  }
});
export default Price;