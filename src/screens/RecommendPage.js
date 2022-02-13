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
import { useSelector } from 'react-redux';


const RecommendPage = ({ navigation }) => {


    const [uid, setUid] = useState();
    const [favoriteArray, setFavoriteArray] = useState();
    const [Loading, setLoading] = useState(true);
    const theme = useSelector(state => state.theme.theme);
    const image = useSelector(state => state.data.urlimage)


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

    const filterImageUrl = (val) => {
        let nameImg = image.filter(element => val.search(element.name) !== -1);
    
        if (nameImg.length !== 0) {
          return { uri: nameImg[0].url }
        } else {
          return Moc_logo
        }
      }


    return (
        <LinearGradient
        colors={[theme.pri700, theme.pri50]}
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        style={styles.container1}>
        <View>
            <View style={styles.box1}>
            <Text style={
                {
                    color: '#FFC511',
                    fontSize: 25,
                    fontFamily: "Mitr-Light",  
                }}>Recommend</Text>
                </View>

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
                            <Avatar source={filterImageUrl(item.product_name)} rounded />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: 20, color: '#FFC511', fontWeight: '700', fontFamily: "Mitr-Light" }}>{`${item.product_name}`}</ListItem.Title>
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
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#393E46',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    container1 :{
        width: '100%',
        height: '100%'
    },
    box1:{
        color: '#FFC511',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '60%',
        height: '18%',
        marginBottom: 1,
        marginBottom: '3%',
        marginTop: '3%',
        fontFamily: "Mitr-Light",
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        backgroundColor: '#0A214A',
        borderRadius: 20
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