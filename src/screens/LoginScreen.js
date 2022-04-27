import * as React from 'react';
import { useState } from 'react';
import { Input } from '../components/Input';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { __doSingIn, login } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'
import { LoginScreenStyle } from '../css/LoginScreen'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const SignIn = (email, password) => {
    dispatch(login(email, password))
  }


  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
      style={LoginScreenStyle(theme).container1}
    >
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View style={LoginScreenStyle(theme).bgInput}>

          <View style={LoginScreenStyle(theme).Box}>
            <Text style={LoginScreenStyle(theme).loginText}>
              Login Account
            </Text>
            <Input
              style={LoginScreenStyle(theme).input}
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholder="Username or E-mail"
              placeholderTextColor="#3911BD"
              keyboardType={'email-address'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              style={LoginScreenStyle(theme).input}
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={LoginScreenStyle(theme).forget}
              onPress={() => alert("forget password?")}>
              <Text style={LoginScreenStyle(theme).forgettext}>forget password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={LoginScreenStyle(theme).btn} onPress={() => SignIn(email, password)}>
              <Text style={LoginScreenStyle(theme).btnTxt}>LOGIN</Text>
            </TouchableOpacity>
            <View style={LoginScreenStyle(theme).textbox}>
              <Text style={LoginScreenStyle(theme).text1}>or</Text>
            </View>
            <View style={LoginScreenStyle(theme).textbox2}>
              <SocialIcon
                type='facebook'
                onPress={() => alert("Coming soon")}
              />
              <SocialIcon
                type='google'
                onPress={() => alert("Coming soon")}

              />
            </View>
          </View>
          <Text style={LoginScreenStyle(theme).footerText}>
            Don't have an account ?
          </Text>
          <Text style={LoginScreenStyle(theme).RegisterText} onPress={() => navigation.navigate('RegisterScreen')}>
            Register
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>

  );
}

export default LoginScreen;