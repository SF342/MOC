import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { themeOptions } from '../redux/actions/themeActions';
import { changeTheme } from '../redux/actions/themeActions';

export class ColorPalette extends Component {
    
    renderPalette = (color) => (
        <TouchableOpacity key={color} onPress={() => this.props.changeTheme(color)}>
            <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: color, margin: 5}}>
            </View>
        </TouchableOpacity>
    );

    render() {
        const colorOptions = Object.keys(themeOptions);

        return (
            <View style={styles.box1}>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.topic}>Theme : </Text>

                    {
                        colorOptions.map(this.renderPalette)
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topic: {
        alignSelf: 'center', 
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    box1 :{
        alignItems: 'center',

    }
  });


const mapStateToProps = (state) => {
    
  
    return {
      color: state.theme.theme
    }
  }

export default connect(mapStateToProps, {changeTheme})(ColorPalette);