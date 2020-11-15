import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Mainbutton from '../mainscreenbutton/Mainbutton';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';



export default class RegisterScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
      email:"",
      password:"",
      first:"",
      last:"",
      pno:""
    })
  }
 
  signupuser=(email,password,pno,fullname)=>{
    try{
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.state.email)){
        alert("Please enter valid email id")
        return;
      }
      if(this.state.password.length < 6)
      {
        alert("Password should contain more than 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(user){
      console.log(user.user.uid,"Signed up")
        
          console.log(firebase.auth().currentUser)
  })
    .catch(function(error){
      console.log(error.toString())

    })
  }catch(error){
    console.log(error.toString())
  }}

  

  render(){
    
    return(
    <ScrollView  contentContainerStyle={{
      flex: 1
   }}> 

    <View style={styles.loginpage}>
    <Text style={styles.loginheader}>
    Register
    </Text>
    <View style={styles.place}>

    <Input
      style={styles.placeholder}
      placeholder={'Full name'}
      onChangeText={text => this.setState({first:text})}
      inputContainerStyle={{borderBottomWidth:0}}
      
    />
    
    <Input
      placeholder={'Email ID'}
      style={styles.placeholder}
      onChangeText={text => this.setState({email:text})}
      inputContainerStyle={{borderBottomWidth:0}}
    />
    <Input
      placeholder={'Set Password'}
      style={styles.placeholder}
      onChangeText={text => this.setState({password:text})}
      secureTextEntry={true}
      inputContainerStyle={{borderBottomWidth:0}}
    />
    <Input
      placeholder={'Phone Number'}
      style={styles.placeholder}
      onChangeText={text => this.setState({pno:text})}
      keyboardType="numeric"
      maxLength={10}
      inputContainerStyle={{borderBottomWidth:0}}
    />
    </View>
    <Mainbutton name="Submit" onPress={()=>this.signupuser(this.state.email,this.state.password,this.state.pno,this.state.first)}/>
    </View>
      
    </ScrollView>
      
  );
}}
  const styles = StyleSheet.create({
    
    
   
    loginpage:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#800000"
      
    },
    loginheader:{
      color:'white',
      alignItems:"center",
      marginTop:20,
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