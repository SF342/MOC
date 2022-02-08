import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


const Suggestion = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text>Check ProfilePage</Text>
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('LoginScreen')
            }>
            <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                navigation.navigate('RegisterScreen')
            }
        >
            <Text>Register</Text>
        </TouchableOpacity>

    </SafeAreaView>
);

export default Suggestion;