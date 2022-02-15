import React, {useState, useEffect } from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator, FlatList } from 'react-native';

const Footer = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
         const response = await fetch('https://dataapi.moc.go.th/gis-products');
         console.log(response)
         const json = await response.json();
         console.log(json)
         setData(json);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
   
     useEffect(() => {
       getMovies();
     }, []);


    return (
        <NativeBaseProvider>
            <Box>Hello world Bitch
                {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.product_id}, {item.product_name}, {item.category_name}</Text>
          )}
        />
      )}
            </Box>
            
        </NativeBaseProvider>
    )
}

export default Footer;