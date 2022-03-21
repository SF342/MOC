import * as React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { Input } from '../components/Input';
import auth from "@react-native-firebase/auth"
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { __doSingIn, register } from '../redux/actions/userActions';

const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();


  const __doCreateUser = async () => {
    try {

      dispatch(register(name, email, password))
      
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <LinearGradient
                colors={[theme.pri700, theme.pri50
                ]}
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                style={styles.container1}
                >
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bgInput}>
          
          <Text style={styles.title}>Register</Text>
          <View style={styles.box1}>
          <Text style={styles.inputText}>USERNAME</Text>
          <Input
            style={styles.input}
            labelValue={name}
            onChangeText={userName => setName(userName)}
            placeholder="Enter username"
            autoCorrect={false}
            />
          <Text style={styles.inputText}>EMAIL</Text>
          <Input
            style={styles.input}
            labelValue={email}
            onChangeText={userEmail => setEmail(userEmail)}
            placeholder="Enter email"
            keyboardType={'email-address'}
            autoCorrect={false}
            />
          <Text style={styles.inputText}>PASSWORD</Text>
          <Input
            style={styles.input}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Enter password"
            secureTextEntry={true}
            />
            </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              __doCreateUser();
            }}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  inputText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  box1 :{
  },  
  bgInput: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: '10%'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    width: 320,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: '5%'

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
    backgroundColor: 'white',
    width: 320,
    height: 60,
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
    fontSize: 20,
    padding: 15
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    color: '#00CABA',
    fontSize: 18,
    textAlign: 'center',
  },
  container1: {
    width: '100%',
    height: '100%',
  }
});
export default RegisterScreen;