import * as React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import { Input } from '../components/Input';
import auth from "@react-native-firebase/auth"
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { __doSingIn, register } from '../redux/actions/userActions';
import { SocialIcon } from 'react-native-elements'

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
    marginTop: 30,
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
    padding: 15,
    marginTop:10
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
export default RegisterScreen;