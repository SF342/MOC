import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({labelValue,placeholderText,style, ...rest}) {
  return (
    <TextInput
      value = {labelValue}
      placeholder={placeholderText}
      placeholderTextColor={'darkgray'}
      style={[styles.input, style]}
      {...rest}

    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
    marginLeft: 25,
    marginTop: 10,
  },
});