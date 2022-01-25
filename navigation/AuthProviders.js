import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            auth()
              .signInWithEmailAndPassword(email, password)
              .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                  Alert.alert('That email is invaild!');
                }
                if (error.code === 'auth/wrong-password') {
                  Alert.alert('That password is worng!');
                }
                if (error.code === 'auth/user-not-found') {
                  Alert.alert('That email or password not found!');
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, name, lastname) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  Alert.alert('That email address is invalid!');
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};