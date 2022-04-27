import * as React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input } from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { __doSingIn, register } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'
import { RegisterScreenStyle } from '../css/RegisterScreen'

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();


  // function call redux to create user
  const __doCreateUser = async () => {
    try {

      dispatch(register(name, email, password))

    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={RegisterScreenStyle(theme).container1}
    >
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View style={RegisterScreenStyle(theme).bgInput}>

          <View style={RegisterScreenStyle(theme).Box}>
            <Text style={RegisterScreenStyle(theme).loginText}>
              Register Account
            </Text>
            <Input
              style={RegisterScreenStyle(theme).input}
              labelValue={name}
              onChangeText={userName => setName(userName)}
              placeholder="Username"
              placeholderTextColor="#3911BD"
              autoCorrect={false}
            />
            <Input
              style={RegisterScreenStyle(theme).input}
              labelValue={email}
              onChangeText={userEmail => setEmail(userEmail)}
              placeholder="E-mail"
              keyboardType={'email-address'}
              autoCorrect={false}
            />
            <Input
              style={RegisterScreenStyle(theme).input}
              labelValue={password}
              onChangeText={userPassword => setPassword(userPassword)}
              placeholderText="Password"
              secureTextEntry={true}
            />
            <Input
              style={RegisterScreenStyle(theme).input}
              placeholderText="Re-type Password"
              secureTextEntry={true}
            />

            <TouchableOpacity style={RegisterScreenStyle(theme).btn} onPress={() => { __doCreateUser(); }}>
              <Text style={RegisterScreenStyle(theme).btnTxt}>Register</Text>
            </TouchableOpacity>
            <View style={RegisterScreenStyle(theme).textbox}>
              <Text style={RegisterScreenStyle(theme).text1}>or</Text>
            </View>
            <View style={RegisterScreenStyle(theme).textbox2}>
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