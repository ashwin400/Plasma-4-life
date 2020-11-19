import 'react-native-gesture-handler';
import React, { Component, useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View ,ToastAndroid,} from 'react-native';
import Mainbutton from '../mainscreenbutton/Mainbutton';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';
import AuthContext from "../authentication/context"

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
     firebase.auth().signInWithEmailAndPassword(email, password) 
      
        var user = firebase.auth().currentUser;
        if(user){
          ToastAndroid.show("Success",ToastAndroid.SHORT)
          console.log(user);
          authContext.setUser(user);
        }
        else{
          ToastAndroid.show("Email ID/Password incorrect",ToastAndroid.SHORT)
        }
  
    
      }).catch(function(error){
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
    <View style={styles.loginpage}>
  <Text style={styles.loginheader}>
  Login
  </Text>
  <View style={styles.place}>

  <Input
    style={styles.placeholder}
    placeholder={"Email ID"}
    inputContainerStyle={{borderBottomWidth:0}}
    onChangeText={text => setEmail(text)}
    
    
  />
  <Input
    style={styles.placeholder}
    placeholder={"Password"}
    onChangeText={text => setPassword(text)}
    inputContainerStyle={{borderBottomWidth:0}}
    secureTextEntry={true}
  />
  
  </View>
  <Mainbutton name="Submit" onPress={()=>loginuser(email,password)}/>
    
  
  </View>
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
    
  
  });