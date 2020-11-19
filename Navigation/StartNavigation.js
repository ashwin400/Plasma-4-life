import 'react-native-gesture-handler';
import React, { Component,useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../auth/LoginScreen"
import RegisterScreen from "../auth/SignupScreen"
import StartScreen from "../StartScreen"


import { createStackNavigator } from '@react-navigation/stack';

export default function Startnav(){
    
  const Stack = createStackNavigator();
    return (
        
        <Stack.Navigator headerMode="none" initialRouteName="Home"
        >
            <Stack.Screen  name="Home" component={StartScreen} options={{title:''}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{title:''}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{title:''}}/>
          </Stack.Navigator>
        
    );
}