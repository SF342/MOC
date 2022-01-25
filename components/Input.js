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
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: 'black',
  },
});