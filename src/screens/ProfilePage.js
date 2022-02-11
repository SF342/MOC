import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';
import ShopingCart from '../../assets/shopping-cart.png';

const Suggestion = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container} > 

        <Text style={styles.title} >Welcome</Text>

        <Image style={styles.logo} source={ShopingCart} rounded />
        <Text>Please sign in for use add product </Text>
        <View style={styles.box2}>

        <TouchableOpacity style={styles.loginButton} 
        onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginButtonText}>
            Sign In
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} 
        onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.loginButtonText}>
            Register
            </Text>
        </TouchableOpacity>
            </View>
            </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    box2 : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1%'
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        marginBottom: 15
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        width: 320,
        marginBottom: 40,
        fontWeight: 'bold',
    },
    input: {
        marginVertical: 10,
        width: 320,
        height: 60,
        fontSize: 18,
        marginBottom: 5,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },
    loginButton: {
        marginVertical: '2%',
        marginBottom: '1%',
        backgroundColor: '#0A214A',
        width: 120,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
    },
    registerButton : {
        marginVertical: '2%',
        marginLeft: '5%',
        backgroundColor: '#0A214A',
        width: 120,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
    },
    loginButtonText: {
        textAlign: 'center',
        color: '#F0FFFF',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
    },

    container: {
        flex: 1,
        backgroundColor: '#e3eeff',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    text: {
        color: 'black',
        fontSize: 18
    },
});

export default Suggestion;