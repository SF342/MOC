import * as React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import { Input } from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { __doSingIn, register } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'
import styles from '../css/RegisterScreen'

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
      colors={[theme.pri700, theme.pri50]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={styles.container1}
    >
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View style={styles.bgInput}>
        
          <View style={styles.Box}>
            <Text style={styles.loginText}>
              Register Account
            </Text>
            <Input
              style={styles.input}
              labelValue={name}
              onChangeText={userName => setName(userName)}
              placeholder="Username"
              placeholderTextColor="#3911BD" 
              autoCorrect={false}
            />
            <Input
              style={styles.input}
              labelValue={email}
              onChangeText={userEmail => setEmail(userEmail)}
              placeholder="E-mail"
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
            <Input
              style={styles.input}
              placeholderText="Re-type Password"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btn} onPress={() => {__doCreateUser();}}>
              <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity>
            <View style={styles.textbox}>
              <Text style={styles.text1}>or</Text>
            </View>
            <View style={styles.textbox2}>
              <SocialIcon
                type='facebook'
                onPress={() => alert("facebook")}
              />
              <SocialIcon
                type='google'
                onPress={() => alert("google")}
                
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>

  );
}

export default RegisterScreen;