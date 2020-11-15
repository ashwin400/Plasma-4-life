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
import FirebaseConfig from './ApiKeys';

import * as firebase from 'firebase';



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


function MainScreen({ navigation }){
  const [fontsLoaded] = useFonts({
    'opensans':  require('./OpenSansCondensed-Light.ttf'),})
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    <View style={styles.container}>
     <View style={styles.logo}>
     <Entypo name="drop" size={42} color="white" />
     <Text style={styles.textstyle}>
       Plasma-4-Life
     </Text>
     </View>
     <View style={styles.buttonscontainer}>
     <Mainbutton name="Login" onPress={()=>navigation.navigate('Login')}/>
     <Mainbutton name="Register" onPress={()=>navigation.navigate('Register')}/>
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



class LoginScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
      email:"",
      password:"",
      
    })
  }
  loginuser=(email,password)=>{
    
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
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert("Email/Password is incorrect");
        }
    
      });
      
      
    }
    catch(error){
      console.log(error.toString())

    }
  }
  render(){

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
      onChangeText={text => this.setState({email:text})}
      
      
    />
    <Input
      style={styles.placeholder}
      placeholder={"Password"}
      onChangeText={text => this.setState({password:text})}
      inputContainerStyle={{borderBottomWidth:0}}
      secureTextEntry={true}
    />
    
    </View>
    <Mainbutton name="Submit" onPress={()=>this.loginuser(this.state.email,this.state.password)}/>
    
    </View>
    )
  }
}

class RegisterScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
      email:"",
      password:"",
      passwordconfirm:"",
      first:"",
      last:"",
    })
  }
  signupuser=(email,password)=>{
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
      firebase.auth().createUserWithEmailAndPassword(email,password)

    }
    catch(error){
      console.log(error.toString())

    }
  }
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
      placeholder={'First name'}
      onChangeText={text => this.setState({first:text})}
      inputContainerStyle={{borderBottomWidth:0}}
      
    />
    <Input
    placeholder={'Last name'}
      style={styles.placeholder}
      onChangeText={text => this.setState({last:text})}
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
      placeholder={'Confirm Password'}
      style={styles.placeholder}
      onChangeText={text => this.setState({passwordconfirm:text})}
      secureTextEntry={true}
      inputContainerStyle={{borderBottomWidth:0}}
    />
    </View>
    <Mainbutton name="Submit" onPress={()=>this.signupuser(this.state.email,this.state.password)}/>
    </View>
      
    </ScrollView>
      
  );
}}

const Stack = createStackNavigator();

export default function App({navigation}) {
  const user = auth().currentUser;
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{title:'',headerStyle: {
            backgroundColor: '#800000',}}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title:'',headerStyle: {
            backgroundColor: '#800000',}}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{title:'',headerStyle: {
            backgroundColor: '#800000',}}}/>
      </Stack.Navigator>
    </NavigationContainer>

);
    
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#800000",
    
    alignItems: 'center',
    justifyContent:"flex-end"
  },
  
  
  textstyle:{
    marginTop:10,
    fontSize:30,
    justifyContent:"flex-start",
    fontFamily: 'opensans',
    color:"white",
  },
  logo:{
    position:"absolute",
    top:50,
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
