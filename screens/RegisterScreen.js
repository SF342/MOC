import * as React from 'react';
import {useState, useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import {AuthContext} from '../navigation/AuthProviders';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();


  const {register} = useContext(AuthContext);

  const usersCollectionRef = firestore().collection('users');

  const addusers = () => {
    usersCollectionRef.add({
      Name: name,
      Email: email,
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <Input
          style={styles.input}
          labelValue={name}
          onChangeText={userName => setName(userName)}
          placeholder="Name"
          autoCorrect={false}
        />

        <Input
          style={styles.input}
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="Email"
          keyboardType={'email-address'}
          autoCorrect={false}
        />
        <Input
          style={styles.input}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          secureTextEntry={true}
        />


        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            register(email, password, name);
            addusers();
          }}>
          <Text style={styles.loginButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    title: {
      color: '#00CABA',
      textAlign: 'center',
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
      backgroundColor: '#00CABA',
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
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E2FCFA',
    },
  
    text: {
      color: '#00CABA',
      fontSize: 18,
      textAlign: 'center',
    },
  });
export default RegisterScreen;