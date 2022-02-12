import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react'
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import { ActivityIndicator , StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';




const RecommendPage = ({ navigation }) => {
    const theme = useSelector(state => state.theme.theme)


    const [uid, setUid] = useState(null);
    const [favoriteArray, setFavoriteArray] = useState();
    const [Loading, setLoading] = useState(true);
    let usersCollectionRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList');
    useEffect(() => {
        if (uid === null) {
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
        }

    }, [favoriteArray])

    const styles = StyleSheet.create({

        text: {
            color: theme.pri800,
            textAlign: 'center',
            fontSize: 35,
            width: '100%',
            marginBottom: 1,
            marginBottom: '3%',
            marginTop: '3%',
            fontFamily: "Mitr-Light"

        },
    });

    return (
        <View>

            <Text style={styles.text
            }>Recommend</Text>

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
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                            onPress={() =>
                                navigation.navigate('ShowPricePage', { id: item.product_id })
                            }
                        >
                            <Avatar source={Moc_logo} rounded />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '600', fontFamily: "Mitr-Light" }}>{`${item.product_name}`}</ListItem.Title>
                                <ListItem.Subtitle style={{ color: '#CED0CE', fontFamily: "Mitr-Light" }}>{item.product_id}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )}
                    keyExtractor={item => item.product_id}
                />
            )}
        </View>
    )
}


export default (RecommendPage);