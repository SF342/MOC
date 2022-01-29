import { Center } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Moc_logo from '../assets/moc_logo.png'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.img}
                source={Moc_logo}
            />
            <View>
            <Text style={styles.text}>
                กระทรวงพาณิชย์
            </Text>
            <Text style={styles.title}>
                Ministry of Commerce
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#0A214A',        
        alignItems: 'center',

    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,     
        fontFamily:"Mitr-Regular",
          
    },
    title: {
        color: '#059FE1',
        fontSize: 15, 
    },
    img : {              
        width: 60,
        height: 60,
        resizeMode: 'contain',
        paddingRight: 100,   
    }
})

export default Header;