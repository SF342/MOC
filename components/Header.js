import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#0a214a'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Header;