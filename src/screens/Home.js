import React from 'react';
import { useContext, useEffect, useState } from 'react'
import { ListItem, SearchBar, Avatar } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';


export default Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.data.data)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [valueInput, setValue] = useState("")
  const [arrayholder, setArrayholder] = useState()


  useEffect(() => {
    dispatch(getData());
    setArrayholder(products);
    setData(products);

  }, [])



  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  const updateInput = text => {
    setValue(text)
    searchFilterFunction(text)
  }


  const searchFilterFunction = text => {

    const newData = arrayholder.filter(item => {
      const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${item.category_name}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData)

  };



  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value={valueInput}
        onChangeText={text => updateInput(text)}
        autoCorrect={false}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            Component={TouchableScale}
            friction={0} //
            tension={200} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ['#1544E2', '#1544E2'],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient}
            containerStyle={{
              marginHorizontal: 16,
              marginVertical: 8,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('ShowPricePage', {id: item.product_id})
            }
          >
            <Avatar source={Moc_logo} rounded />
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '700' }}>{`${item.product_name}`}</ListItem.Title>
              <ListItem.Subtitle style={{ color: '#CED0CE' }}>{item.product_id}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={item => item.product_id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#F0FFFF',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15
  },
  logoutButton: {
    marginVertical: 10,
    backgroundColor: '#b53531',
    width: 320,
    height: 60,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5
  },




});