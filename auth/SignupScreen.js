import 'react-native-gesture-handler';
import React, { Component, useState,useContext } from 'react';
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Mainbutton from '../mainscreenbutton/Mainbutton';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from "../authentication/context"
import { LinearGradient } from 'expo-linear-gradient';
import { Hoshi } from 'react-native-textinput-effects';

export default function RegisterScreen(){
 
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [first,setFirst]=useState()
  const [pno,setPno]=useState()
  const authContext=useContext(AuthContext);
 
  function signupuser(email,password,pno,fullname){
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
      
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      var user = firebase.auth().currentUser;
      console.log(user.uid,"Signed up")
      if(user){
      console.log(user);
      authContext.setUser(user);
      }
      user.sendEmailVerification().then(function() {
        console.log("Verification email sent")
      }).catch(function(error) {
        console.log("Verification email not sent")
      });}).catch((error)=>{
        console.log(error)
      })
  })
    .catch(function(error){
      console.log(error.toString())

    })
  }catch(error){
    ToastAndroid.show(error,ToastAndroid.SHORT)
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
    Register
    </Text>
    <View style={styles.place}>
     <Hoshi
     label={'Full name'}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
    onChangeText={text => setFirst(text)}
    style={{marginTop:10}}
  />
   
    <Hoshi
     label={'Email Address'}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
    onChangeText={text => setEmail(text)}
    style={{marginTop:10}}
  />
   <Hoshi
     label={'Set Password'}
     style={{marginTop:10}}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
    onChangeText={text => setPassword(text)}
    secureTextEntry={true}
    style={{marginTop:10}}
  />
   <Hoshi
     label={'Phone Number'}
    borderColor={'#b76c94'}
    borderHeight={3}
    inputPadding={16}
    onChangeText={text => setPno(text)}
    keyboardType="numeric"
    maxLength={10}
    style={{marginTop:10}}
  />
   
    </View>
    <Mainbutton name="Submit" 
    onPress={()=>signupuser(email,password,pno,first)}
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
      backgroundColor:"#800000"
      
    },
    loginheader:{
      color:'white',
      alignItems:"center",
      marginTop:120,
      paddingBottom:30,
      fontFamily: 'opensans',
      fontSize:50,
    },
    place:{
      width:250,
    },
    
  
  });