import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from '../PhoneAuth/PhoneNumber';
import VerifyCode from '../PhoneAuth/VerifyCode';
import Authenticated from '../PhoneAuth/Authenticated';
import MenuPatient from '../Patient/MenuPatient';


export default function App() {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;