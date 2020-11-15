
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Mainbutton({name,onPress,style,textstyle}) {
    return (
    <TouchableOpacity onPress={onPress} >
    <View style={[styles.container,style]} >
      <Text style={[styles.text,textstyle]}>{name}</Text>
    </View>
    </TouchableOpacity>
    );
  }

  
const styles = StyleSheet.create({
    container: {
        height:40,
        width:200,
        backgroundColor:"white",
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        marginVertical:15,
        elevation:60,
        
        
    },
    text:{
      color:'#800000',
      fontSize: 16,
    }

  });
  