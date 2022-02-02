import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
export default function PhoneNumber(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['pink', 'white']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.profile}>
          <Text style={styles.welcome}> ยินดีต้อนรับสู่</Text>
          <Image source={require('./logo.png')} style={{ width: 280, height: 100, marginTop: 10, marginBottom: 0, }} />
        </View>
        <View style={{ alignItems: "center", }}>
      <Text style={styles.title}>กรอกหมายเลขโทรศัพท์มือถือ</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => props.onSubmit("+66"+phoneNumber)}>
            <Text style={styles.loginButtonText}>
              เข้าสู่ระบบ
            </Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2FCFA',
  },
  profile: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 50,
    backgroundColor: '#fbd',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  welcome: {
    textShadowColor:'#000000',
    textShadowOffset: {width: 0, height:1},
    textShadowRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
    color: '#FFFFFF',
  },
  loginButton: {
    marginRight: 25,
    backgroundColor: '#fbd',
    width: 130,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5
  },
  loginButtonText: {
    textShadowColor:'#000000',
    textShadowOffset: {width: 0, height:1},
    textShadowRadius: 10,
    textAlign: 'center',
    color: '#F0FFFF',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  title: {
    textShadowColor:'#000000',
    textShadowOffset: {width: 0, height:0.5},
    textShadowRadius: 8,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});