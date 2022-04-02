import * as React from 'react';
import { useState } from 'react';
import { Input } from '../components/Input';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Moc_logo from '../../assets/moc_logo.png'
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Picker,Button,} from 'react-native-ui-lib';

import { useDispatch, useSelector } from 'react-redux';
import { __doSingIn, login } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const SignIn = (email, password) => {
    //dispatch(__doSingIn(email, password))
    dispatch(login(email, password))
  }

  // const __doSingIn = async (email, password) => {
  //   try {
  //     let response = await auth().signInWithEmailAndPassword(email, password)
  //     if (response && response.user) {
  //       Alert.alert("Success ✅", "Authenticated successfully")
  //     }
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  //   let user = auth().currentUser.uid;

  //   if (user) {
  //     console.log(user);
  //     this.setState({ authenticated: true });
  //   } else {
  //     this.setState({ authenticated: false });
  //   }
  // }


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
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 15
  },
  container1: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bgInput: {
    height: '80%',
    width: '85%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: '2%'
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: "#37379C",
    borderRadius: 80,
    marginLeft: 75,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
  loginText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 30,
    padding: 15
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
    backgroundColor: '#E2FCFA',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  text: {
    color: 'black',
    fontSize: 18
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  Box: {
    width: "90%",
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  forget:{
    marginLeft: 25,
    marginTop: 10,
  },
  forgettext:{
    color: '#3D51CA',
    fontSize: 12
  },
  text1:{
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  textbox:{
    marginBottom: 10,
    
  },
  textbox2:{
    marginBottom: 20,
    marginLeft:85,
    flexDirection: 'row'
  },
  footerText:{
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20
  },
  RegisterText:{
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: "solid",
  },
});

export default LoginScreen;