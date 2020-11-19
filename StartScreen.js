import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View ,Modal,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import Mainbutton from './mainscreenbutton/Mainbutton';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from "./auth/LoginScreen"
import RegisterScreen from "./auth/SignupScreen"
import { LinearGradient } from 'expo-linear-gradient';

export default function StartScreen({ navigation }){
    const [fontsLoaded] = useFonts({
      'opensans':  require('./OpenSansCondensed-Light.ttf'),})
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return(
      <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#c31432',"#240b36"]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height:"100%"
        }}
        
      />
       <View style={styles.logo}>
       <Entypo name="drop" size={42} color="white" />
       <Text style={styles.textstyle}>
         Plasma-4-Life
       </Text>
       </View>
       <View style={styles.buttonscontainer}>
       <Mainbutton name="Login" onPress={()=>navigation.navigate('Login')}/>
       <Mainbutton name="Register" onPress={()=>navigation.navigate('Register')} style={{marginTop:35}}/>
       </View>
       <StatusBar style="auto" />
       <TouchableOpacity>
       <Text style={{paddingBottom:20, color:"white"}} onPress={()=>console.log("forgot password")}>
         Forgot password?
       </Text>
       </TouchableOpacity>
     </View>
       
    );
  }}
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#800000",
      
      alignItems: 'center',
      justifyContent:"flex-end"
    },
    
    
    textstyle:{
      marginTop:20,
      fontSize:40,
      justifyContent:"flex-start",
      fontFamily: 'opensans',
      color:"white",
    },
    logo:{
      position:"absolute",
      top:120,
      alignItems:"center",
      
    },
    loginpage:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#800000"
      
    },
    loginheader:{
      color:'white',
      alignItems:"center",
      marginTop:55,
      paddingBottom:30,
      fontFamily: 'opensans',
      fontSize:40,
    },
    place:{
      width:250,
    },
    placeholder:{
      fontSize:15,
      color:"white",
      alignItems:"center",
      height: 40, 
      borderColor: 'gray', 
      borderWidth:2,
      borderRadius:20, 
      marginTop: 15,
      paddingLeft:20,
      },
    buttonscontainer:{
      padding:60,
      width:"100%",
      alignItems:"center",
    },
  
  });
  