import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import { Input } from '../components/Input';
import {AuthContext} from '../navigation/AuthProviders';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Input
        style={styles.input}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        keyboardType={'email-address'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        style={styles.input}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />
       <TouchableOpacity style={styles.loginButton} onPress={() => login(email, password)}>
        <Text style={styles.loginButtonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate('RegisterScreen')}>
          don't have an account? Create one
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'stretch',
      marginBottom: 15
    },
  
    title: {
      color: '#00CABA',
      textAlign: 'left',
      fontSize: 35,
      width: 320,
      marginBottom: 1,
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
      backgroundColor: 'black',
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
      fontSize:20,
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

export default LoginScreen;