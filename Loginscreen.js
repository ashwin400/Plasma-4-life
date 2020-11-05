import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Mainbutton from './mainscreenbutton/Mainbutton'

export function Loginscreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Entypo name="drop" size={42} color="red" />
      <Text style={styles.textstyle}>
        Plasma-4-Life
      </Text>
      </View>
      <View style={styles.buttonscontainer}>
      <Mainbutton name="Login" onPress={()=>console.log("pressed")}/>
      <Mainbutton name="Register" onPress={()=>console.log("press")}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:60,
    justifyContent:"flex-end"
  },
  textstyle:{
    marginTop:10,
    fontSize:20,
    justifyContent:"flex-start"
  },
  logo:{
    position:"absolute",
    top:70,
    alignItems:"center",
  },
  buttonscontainer:{
    padding:15,
    width:"100%",
    alignItems:"center",
  },
});
