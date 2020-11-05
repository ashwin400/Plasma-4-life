import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import Mainbutton from './mainscreenbutton/Mainbutton';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';

function MainScreen({ navigation }){
  return(
    
    <View style={styles.container}>
     <View style={styles.logo}>
     <Entypo name="drop" size={42} color="red" />
     <Text style={styles.textstyle}>
       Plasma-4-Life
     </Text>
     </View>
     <View style={styles.buttonscontainer}>
     <Mainbutton name="Login" onPress={()=>navigation.navigate('Login')}/>
     <Mainbutton name="Register" onPress={()=>navigation.navigate('Register')}/>
     </View>
     <StatusBar style="auto" />
   </View>
  );
}



class LoginScreen extends Component{
  render(){
    state={
      email:"",
      password:""
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
      
      onChangeText={text => this.setState({email:text})}
      
      
    />
    <Input
      style={styles.placeholder}
      placeholder={"Password"}
      onChangeText={text => this.setState({password:text})}
      
      secureTextEntry={true}
    />
    
    </View>
    </View>
    )
  }
}

class RegisterScreen extends Component{
  render(){
    state={
      email:"",
      password:"",
      first:"",
      last:"",
    }
  
  return(
    
    <View style={styles.loginpage}>
    <Text style={styles.loginheader}>
    Register
    </Text>
    <View style={styles.place}>

    <Input
      style={styles.placeholder}
      placeholder={'First name'}
      onChangeText={text => this.setState({first:text})}
      
    />
    <Input
    placeholder={'Last name'}
      style={styles.placeholder}
      onChangeText={text => this.setState({last:text})}
    />
    <Input
      placeholder={'Email ID'}
      style={styles.placeholder}
      onChangeText={text => this.setState({email:text})}
    />
    <Input
      placeholder={'Set Password'}
      style={styles.placeholder}
      onChangeText={text => this.setState({password:text})}
      secureTextEntry={true}
    />
    </View>
    
    </View>
      
      
  );
}}

const Stack = createStackNavigator();

export default function App({navigation}) {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{title:''}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitleAlign:"center"}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>

);
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  loginpage:{
    flex:1,
    alignItems:"center",
  },
  loginheader:{
    color:'#000000',
    alignItems:"center",
    marginTop:100,
    fontSize:20,
  },
  place:{
    width:150,
  },
  placeholder:{
    fontSize:15,
    alignItems:"center",
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth : 1, 
    marginTop: 20,
  },
  buttonscontainer:{
    padding:15,
    width:"100%",
    alignItems:"center",
  },

});
