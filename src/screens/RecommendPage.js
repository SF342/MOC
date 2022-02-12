import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react'
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import { ActivityIndicator, StyleSheet } from 'react-native';


const RecommendPage = ({ navigation }) => {


    const [uid, setUid] = useState();
    const [favoriteArray, setFavoriteArray] = useState();
    const [Loading, setLoading] = useState(true);

    let usersCollectionRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList');

    useEffect(() => {

        auth().onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid)
                usersCollectionRef.onSnapshot(querySnapshot => {
                    const dataTask = [];
                    querySnapshot.forEach(documentSnapshot => {
                        dataTask.push({
                            ...documentSnapshot.data(),
                            id: documentSnapshot.id,
                        });
                    })
                    setFavoriteArray(dataTask);
                    setLoading(false)
                });
            }
        });
    }, [favoriteArray])


    return (
        <View>
            <Text style={
                {
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 35,
                    width: '100%',
                    marginBottom: 1,
                    marginBottom: '3%',
                    marginTop: '3%',
                    fontFamily:"Mitr-Light" 
                }}>Recommend</Text>

            {Loading ? <ActivityIndicator /> : (

                <FlatList
                    data={favoriteArray}
                    renderItem={({ item }) => (
                        <ListItem
                        Component={TouchableScale}
                        friction={0} //
                        tension={200} // These props are passed to the parent component (here TouchableScale)
                        activeScale={0.95} //
                        linearGradientProps={{
                          colors: ['#1544E2', '#0A214A'],
                          start: { x: 1, y: 0 },
                          end: { x: 0.2, y: 0 },
                        }}
                        ViewComponent={LinearGradient}
                        containerStyle={{
                          marginHorizontal: 4,
                          marginVertical: 4,
                          borderRadius: 8,
                        }}
                        onPress={() =>
                          navigation.navigate('ShowPricePage', { id: item.product_id })
                        }
                      >
                        <Avatar source={Moc_logo} rounded />
                        <ListItem.Content>
                          <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '700', fontFamily: "Mitr-Light" }}>{`${item.product_name}`}</ListItem.Title>
                          <View style={styles.TextContainer1}>
                            <ListItem.Subtitle style={{ color: '#CED0CE', fontFamily: "Mitr-Light" }}>{item.group_name} </ListItem.Subtitle>
                            <ListItem.Subtitle style={{ color: '#CED0CE', fontFamily: "Mitr-Light" }}>{item.categoty_name} </ListItem.Subtitle>
                            <ListItem.Subtitle style={{ color: '#CED0CE', fontFamily: "Mitr-Light" }}>รหัสสินค้า : {item.product_id}</ListItem.Subtitle>
                          </View>
                        </ListItem.Content>
                      </ListItem>
                    )}
                    keyExtractor={item => item.product_id}
                />
                        )}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#393E46',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    TextContainer1: {
      flexDirection: 'row',
      marginBottom: '1%',
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


export default (RecommendPage);