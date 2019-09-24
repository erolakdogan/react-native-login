import React, { Component } from 'react';

import {StyleSheet, Text, View, TextInut, TouchableOpacity, AsynStorage, Keyboard } from 'react-native';

import { Actions } from 'react-native-router-flux';

import Form from '../components/Form';


export default class Login extends Component {
    signup(){
        Actions.signup()
    }
    render (){
        return (
            <View style = {styles.container}>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Form type= "Login"/>
            <View style = {styles.signupTextCont}>
                <Text style = {styles.signupText}>Heniz bir hesabınız yok mu?</Text>
                <TouchableOpacity onPress = {this.signup}><Text style={styles.signupButton}>Kayıt Ol</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    signupText: {
        color:'#12799f',
        fontSize:16,
    },
    signupTextCont:{
       flexGrow:1,
       justifyContent: 'center',
       alignItems:'flex-end',
       paddingVertical: 16,
       flexDirection: 'row',
    },
    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500',
        
    }
});