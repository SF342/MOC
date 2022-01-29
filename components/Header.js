import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.img}
                source={require('../assets/moc_logo.png')}
            />
            <Text style={styles.text}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 10,
        backgroundColor: '#0a214a'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    },
    img : {
       
        weight:70,
        height:70,
        resizeMode: "contain",
    }
})

export default Header;