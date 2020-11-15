import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import Box from './box';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Discussion(){
    return(
        <View style={{flex:1,justifyContent:"center"}}>
        <Text style={{alignSelf:"center"}}>
            Discussion
        </Text>
        </View>
    );
}