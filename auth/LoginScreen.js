import 'react-native-gesture-handler';
import React, { Component, useContext, useState,useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View ,ToastAndroid,} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import Mainbutton from '../mainscreenbutton/Mainbutton';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';
import AuthContext from "../authentication/context"
import { LinearGradient } from 'expo-linear-gradient';
import { Hoshi } from 'react-native-textinput-effects';

async function storeToken(user) {
  try {
     await AsyncStorage.setItem("userData", JSON.stringify(user));
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
async function getToken(user) {
  try {
    let userData = await AsyncStorage.getItem("userData");
    let data = JSON.parse(userData);
    authContext.setUser(data);
    console.log(data);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyDIRm59fQWScI63HFDEQQWRI1LXP61O7-U",
  authDomain: "plasma-4-life-3925d.firebaseapp.com",
  databaseURL: "https://plasma-4-life-3925d.firebaseio.com",
  projectId: "plasma-4-life-3925d",
  storageBucket: "plasma-4-life-3925d.appspot.com",
  messagingSenderId: "1029520958201",
  appId: "1:1029520958201:web:6c86203b712084632c7828",
  measurementId: "G-ENBCRW7S2Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default function LoginScreen({navigation}){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const authContext=useContext(AuthContext);


  useEffect(() => {
    getToken() 
  })
  function loginuser(email,password){
    
    try{
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        alert("Please enter valid email id")
        return;
      }
      if(password.length < 6) 
      {
        alert("Password should contain more than 6 characters")
        return;
      }
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
     firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      
        var user = firebase.auth().currentUser;
        if(user){
          ToastAndroid.show("Success",ToastAndroid.SHORT)
          console.log(user);
          authContext.setUser(user);
          storeToken(JSON.stringify(user));
        }
        else{
          ToastAndroid.show("Email ID/Password incorrect",ToastAndroid.SHORT)
        }
  
    
      })}).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          ToastAndroid.show("Email/Password is incorrect",ToastAndroid.SHORT)
          return;
        }
      });
      
      
    }
    catch(error){
      console.log(error.toString())
  
    }
  
  }

  return(
    <ScrollView  contentContainerStyle={{
      flex: 1
   }}> 
    <View style={styles.loginpage}>
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
  <Text style={styles.loginheader}>
  Login
  </Text>
  <View style={styles.place}>

  
   <Hoshi
     label={'Email Address'}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
    labelStyle={{fontFamily: 'opensans',fontSize:18}}
    onChangeText={text => setEmail(text)}
    inputStyle={{fontSize:16}}
  />
  <Hoshi
     label={'Password'}
     labelStyle={{fontFamily: 'opensans',fontSize:16}}
     style={{marginTop:10}}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
   inputStyle={{fontSize:16}}

    onChangeText={text => setPassword(text)}
    secureTextEntry={true}
  />
 
  </View>
  <Mainbutton name="Submit" 
  onPress={()=>loginuser(email,password)}
    style={{marginTop:60}}
  />
    
  
  </View>
  </ScrollView>
  );


}



  const styles = StyleSheet.create({
    
    
   
    loginpage:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#800000",
      
      
      
    },
    loginheader:{
      color:'white',
      alignItems:"center",
      marginTop:150,
      paddingBottom:30,
      fontFamily: 'opensans',
      fontSize:60,
      
    },
    place:{
      width:250,
      
    },
   
  
  });