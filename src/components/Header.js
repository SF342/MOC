import { Center } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Moc_logo from '../../assets/moc_logo.png'
import {HeaderStyle} from '../css/Header';
import { useSelector, useDispatch } from 'react-redux'

const Header = (props) => {
    const {theme} = useSelector(state => state.theme);
    return (
        <View style={HeaderStyle(theme).header}>
            <Image 
                style={HeaderStyle(theme).img}
                source={Moc_logo}
            />
            <View>
            <Text style={HeaderStyle(theme).text}>
                กระทรวงพาณิชย์
            </Text>
            <Text style={HeaderStyle(theme).title}>
                Ministry of Commerce
            </Text>
            </View>
        </View>
    )
}

export default Header;