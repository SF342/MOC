import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {useState, useEffect} from 'react';
import {Colors, Picker} from 'react-native-ui-lib';

const mapURL =
  'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

const Price = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(mapURL)
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => alert(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData()
  }, []);


  const [selectedCountry, setSelectedCountry] = useState('');
  const [newCase, setNewCase] = useState([]);
  const [totalDeath, setTotalDeath] = useState([]);
  const [totalCase, setTotalCase] = useState([]);
  const [newDeath, setNewDeath] = useState([]);

  const onClickSearch = test => {
    for (let i = 0; i < data.length - 1; i++) {
      if (selectedCountry.value == data[i].province) {
        setNewCase(data[i].new_case);
        setTotalCase(data[i].total_case);
        setNewDeath(data[i].new_death);
        setTotalDeath(data[i].total_death);
      }
    }
  };

  const onCountryChange = dummyData => {
    setSelectedCountry(dummyData);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>

      <View style={styles.pickerContainer} flexDirection="row">
        <Picker
          value={selectedCountry}
          placeholder="Search by country"
          onChange={onCountryChange}
          showSearch
          placeholderTextColor="#fff"
          containerStyle={styles.pickerStyle}
          style={{color: Colors.white}}>
          {data.map((option, index) => (
            <Picker.Item
              key={index}
              value={option.province}
              label={option.province}
            />
          ))}
        </Picker>
        <View style={styles.ButtonContainer}>
          <Button
            title="Search"
            onPress={onClickSearch}
            color="#fff"
          />
        </View>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.Header}>Country : {selectedCountry.value}</Text>
      </View>

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
  headerContainer: {
    height: 60,
    width: 370,
    borderRadius: 30,
    padding: 10,
    marginLeft: 20,
    backgroundColor: 'rgba(180, 180, 180,0.09)',
    marginBottom: 15,
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
    paddingTop: 0,
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