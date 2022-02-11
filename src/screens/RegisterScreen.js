import * as React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Input } from '../components/Input';
import auth from "@react-native-firebase/auth"
import { ScrollView } from 'react-native-gesture-handler';

const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();


  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(email, password)
      if (response) {
        console.log(response)
        Alert.alert("Success ✅", "Authenticated successfully")
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>CREATE ACCOUNT</Text>
        <View style={styles.bgInput}>
          <Text style={styles.inputText}>USERNAME</Text>
          <Input
            style={styles.input}
            labelValue={name}
            onChangeText={userName => setName(userName)}
            placeholder=""
            autoCorrect={false}
          />
          <Text style={styles.inputText}>EMAIL</Text>
          <Input
            style={styles.input}
            labelValue={email}
            onChangeText={userEmail => setEmail(userEmail)}
            placeholder=""
            keyboardType={'email-address'}
            autoCorrect={false}
          />
          <Text style={styles.inputText}>PASSWORD</Text>
          <Input
            style={styles.input}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText=""
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              __doCreateUser(email, password);
            }}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  inputText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 27,
  },
  bgInput: {
    backgroundColor: '#0A214A',
    height: 360,
    width: 310,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    width: 320,
    marginBottom: 30,
    fontWeight: 'bold',

  },
  input: {
    marginVertical: 7,
    width: 260,
    fontSize: 16,
    padding: 5,
    marginBottom: 7,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
  },
  loginButton: {
    marginVertical: 10,
    marginBottom: 30,
    backgroundColor: 'white',
    width: 125,
    height: 40,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: '7%'
  },

  loginButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 6,
  },

  container: {
    flex: 1,
    backgroundColor: '#e3eeff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  text: {
    color: '#00CABA',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default RegisterScreen;