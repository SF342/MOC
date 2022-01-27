// import { StatusBar } from 'native-base';
import React, {useState, useContext} from 'react';
import {Text, View, Button, Switch, StyleSheet, TouchableOpacity,FlatList,SafeAreaView,StatusBar} from 'react-native';
const SPACING = 20;

export default class ShowPricePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount (){
        this.apiCall();
    }
    async apiCall(){
        let resp =await fetch('https://dataapi.moc.go.th/gis-products')
        let respJson=await resp.json()
        // console.warn(respJson)
        this.setState({data:respJson})
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.text]}>
                ShowPricePage
                </Text>
                <FlatList
                data={this.state.data}   
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currenHeight || SPACING,
                }}         
                renderItem={({ item }) => {
                    return (
                        <View style={{flexDirection:'row',padding: SPACING, marginBottom: SPACING, backgroundColor:'#1544E2',borderRadius: 12,
                            elevation: 5}}>
                            <View>
                                <Text style={{fontSize:22,fontWeight: '700',color:'#FFC511'}}> 
                                    {item.product_name}
                                </Text>
                                <Text style={{fontSize:14,opacity:.8,color:'#FFFFFF'}}> 
                                    บาท/กก.
                                </Text>
                            </View>
                        </View>
                    )
                }}
                />
            </View>
          );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#E3EEFF',
      },
    
      text: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20,
      },
});
