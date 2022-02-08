import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';


const Suggestion = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container} > 

        <Text style={styles.title} >PROFILE</Text>

        <TouchableOpacity style={styles.loginButton} 
        onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginButtonText}>
                LOGIN
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} 
        onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.loginButtonText}>
                Register
            </Text>
        </TouchableOpacity>
            </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
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
        marginVertical: 10,
        marginBottom: 30,
        backgroundColor: '#0A214A',
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
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
        backgroundColor: '#E2FCFA',
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