import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import {Colors, Picker,Button,} from 'react-native-ui-lib';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const settingsIcon = require('../../assets/settings.png');

const titanIcon = require('../../assets/titan.png');

//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'

const mapURL =
  'https://dataapi.moc.go.th/gis-products';

const Price = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [price, setPrice] = useState([]);

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

  useEffect(() => {
    // fetchData()
    dispatch(getData());
  }, []);

  const [selectedProduct, setSelectedProduct] = useState('');
  const [isPriceLoading, setPriceLoading] = useState(true);

  const onClickSearch = test => {

    const priceURL = `https://dataapi.moc.go.th/gis-product-prices?product_id=${selectedProduct.value}&from_date=${textDate}&to_date=${textDate}`;
    setPriceLoading(true);
    fetch(priceURL)
      .then(res => res.json())
      .then(resjson => {
        setPrice(resjson);
        setPriceLoading(false);
      })
  };

  const onProductChange = dummyData => {
    setSelectedProduct(dummyData);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.pickerContainer} flexDirection="row">
        <Picker
          value={selectedProduct}
          placeholder="Search Product . . ."
          onChange={onProductChange}
          showSearch
          placeholderTextColor="#fff"
          containerStyle={styles.pickerStyle}
          style={{color: Colors.white}}>
          {products.map((option, index) => (
            <Picker.Item
              key={index}
              value={option.product_id}
              label={option.product_name}
            />
          ))}
        </Picker>
        <View style={styles.ButtonContainer}>
          {/* <Button
            title="Search"
            onPress={onClickSearch}
            color="#068ECD"
          /> */}
          <Button
              style={{marginBottom: 20}}
              size={Button.sizes.small}
              backgroundColor='#3297F4'
              iconSource={titanIcon}
              iconStyle={{tintColor: 'white'}}
              onPress={onClickSearch}
              label="Search"
            />
           {/* <Button
              size={'small'}
              style={{marginBottom: 20 / 4, marginLeft: 20}}
              backgroundColor='#52CF92'
              iconSource={settingsIcon}
              onPress={onClickSearch}
              iconOnRight
              animateLayout
              animateTo={'left'}
            /> */}
        </View>
      </View>
      {isPriceLoading ? (
        <ActivityIndicator />
      ) : (     
      <View style={styles.headerContainer}>
        <Text style={styles.t1}>Name : {price.product_name}</Text>
        <Text style={styles.t1}>Id : {price.product_id}</Text>
        <Text style={styles.t1}>Price max : {price.price_max_avg}  {price.unit}</Text>
        <Text style={styles.t1}>Price min : {price.price_min_avg}  {price.unit}</Text>
      </View>
      )}
      <View>
        <Text style={styles.t1}>Date Select : {textDate}</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02001b',
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
  headerContainer: {
    height: 200,
    width: 370,
    borderRadius: 30,
    padding: 10,
    marginLeft: 20,
    backgroundColor: 'rgba(180, 180, 180,0.09)',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
   
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
    borderColor: 'white',
    padding: 15,
    width: 300,
    alignSelf: 'center',
    marginLeft: 10,
  },
  pickerContainer: {
    paddingTop: 10,
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
});
export default Price;