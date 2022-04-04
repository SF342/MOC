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
import { getFavorite, setSignIn } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux'
import styles from '../css/RecommendPage'

const RecommendPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);
    const userdata = useSelector(state => state.user)
    const image = useSelector(state => state.data.urlimage)

    const [uid, setUid] = useState();
    const [favoriteArray, setFavoriteArray] = useState();
    const [Loading, setLoading] = useState(false);


    let usersCollectionRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList');

    useEffect(() => {

        auth().onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid);
                dispatch(setSignIn(user))
                if (userdata.favoritelist.length === 0 && userdata.authenticated) {
                    dispatch(getFavorite(userdata.uid))
                }
            }
        });
        
        
    }, [])

    

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
                        data={userdata.favoritelist}
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
                                <Avatar style={styles.logo} source={filterImageUrl(item.product_name)} rounded />
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

export default (RecommendPage);