import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Mainbutton({name,onPress}) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
      
        <Text style={styles.text}>{name}</Text>
        
      
      </TouchableOpacity>
    );
  }

  
const styles = StyleSheet.create({
    container: {
        height:"15%",
        width:"60%",
        backgroundColor: 'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        marginVertical:10,
        
    },
    Text:{
      color:'#FFFFFF',
      fontSize: 18,
    }

  });
  