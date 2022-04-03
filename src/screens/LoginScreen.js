import * as React from 'react';
import { useState } from 'react';
import { Input } from '../components/Input';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Moc_logo from '../../assets/moc_logo.png'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { __doSingIn, login } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'
import styles from '../css/LoginScreen'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const SignIn = (email, password) => {
    //dispatch(__doSingIn(email, password))
    dispatch(login(email, password))
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
              Login Account
            </Text>
            <Input
              style={styles.input}
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholder="Username or E-mail"
              placeholderTextColor="#3911BD" 
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
            <TouchableOpacity
              style={styles.forget}
              onPress={() => alert("forget password?")}>
              <Text style={styles.forgettext}>forget password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => SignIn(email, password)}>
              <Text style={styles.btnTxt}>LOGIN</Text>
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
          <Text style={styles.footerText}>
              Don't have an account ?
          </Text>
          <Text style={styles.RegisterText} onPress={() => navigation.navigate('RegisterScreen')}>
              Register
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>

  );
}

export default LoginScreen;