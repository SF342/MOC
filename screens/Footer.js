import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
    return (
        <NativeBaseProvider>
            <Box>Hello world</Box>
        </NativeBaseProvider>
    )
}

export default Footer;