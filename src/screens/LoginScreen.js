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

import { useDispatch, useSelector } from 'react-redux';
import { __doSingIn, login } from '../redux/actions/userActions';

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

          <Image
            style={styles.img}
            source={Moc_logo}
          />
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
          <TouchableOpacity style={styles.loginButton} onPress={() => SignIn(email, password)}>
            <Text style={styles.loginButtonText}>
              LOGIN
            </Text>
          </TouchableOpacity>
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  }
});

export default LoginScreen;