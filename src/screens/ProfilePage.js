import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';
import ShopingCart from '../../assets/Add-To-Cart-256.png';
import { useSelector } from 'react-redux';

const ChooseLoginRegister = ({ navigation }) => {
    const theme = useSelector(state => state.theme.theme);

    const styles = StyleSheet.create({
        box2: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1%'
        },
        container1: {
            width: '100%',
            height: '100%',
        },
        logo: {
            width: 200,
            height: 170,
            resizeMode: 'stretch',
            marginBottom: 15
        },
        title: {
            color: 'white',
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
        registerButton: {
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
            color: theme.whitemain,
            fontWeight: 'bold',
            fontSize: 20,
            padding: 15
        },
        container: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 50,
        },
        text: {
            color: 'white',
            fontSize: 16
        },
    });
    
    return (
        <LinearGradient
            colors={[theme.background1, theme.background2]}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={styles.container1}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <Text style={styles.title} >Welcome</Text>
                    <Image style={styles.logo} source={ShopingCart} rounded />
                    <Text style={styles.text}>Please sign in for use add product </Text>
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
        </LinearGradient>
    );
}
export default ChooseLoginRegister;