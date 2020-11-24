import 'react-native-gesture-handler';
import React, { Component,useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../auth/LoginScreen"
import RegisterScreen from "../auth/SignupScreen"
import StartScreen from "../StartScreen"
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Startnav(){
  
  const Stack = createStackNavigator();
    return (
        <View style={{flex:1}}>
         <LinearGradient
        // Background Linear Gradient
        colors={['#c31432',"#240b36"]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height:"100%"
        }}/>


        <Stack.Navigator headerMode="none" initialRouteName="Home" 
        >
            <Stack.Screen  name="Home" component={StartScreen}   />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        
        </View>
    );
}