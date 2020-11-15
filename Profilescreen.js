import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { Alert, Dimensions,SafeAreaView,StyleSheet, Text, View,ToastAndroid, } from 'react-native';
import SmallTab from "./Smalltabselection"
import * as firebase from 'firebase';
import AuthContext from './authentication/context';



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


export default function Profile(){
  
  const {user,setUser}= useContext(AuthContext)

  function signoutuser(){
    firebase.auth().signOut().then(function() {
      console.log("Signed out")
      setUser(null)
      
  
    }).catch(function(error) {
      console.log(error)
    });
  }
  
  function check(user){
    if(user){
      ToastAndroid.show(user.uid,ToastAndroid.SHORT)
      
     
    }
    else{
      ToastAndroid.show("Not logged in",ToastAndroid.SHORT)
    }
  }

  
        return(
          <View style={{flex:1}}>
          <View style={styles.redstyle}>
            <View style={styles.profileview}>
            </View>
            <Text style={styles.profilename}>{user.email}</Text>
            </View>
            <View style={{backgroundColor:"#d3d3d3",flex:1}}>
              <Text style={{padding:15,fontSize:18}}>Account</Text>
              <SmallTab
                name="Elements"
               
                onPress={()=>check(user)}
              />
              <SmallTab
                name="Elements"
              />
              <SmallTab
                name="Elements"
              />
              <SmallTab
                name="Elements"
              /> 
              

              <SmallTab
                name="Sign out"
                iconname="account-arrow-left"
                size={24}
                style={{ position: 'absolute',bottom: 0,width:"100%",marginBottom:20}}
                colour="black"
                onPress={() => signoutuser()}
              /> 
              
               
              
            </View>
          </View>
        );
    }

 
    let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  profileview:{
    alignSelf:"center",
    width:75,
    height:75,
    borderRadius:37.5,
    backgroundColor:"gray",
    marginTop:50
    },
  profilename:{
    alignSelf:"center",
    fontSize:20,
    marginTop:15,
    color:"white"
    },
  redstyle:{
    height:0.25*deviceHeight,
    backgroundColor:"#800000",
    //borderBottomLeftRadius:70,
    //borderBottomRightRadius:70,
    width:"100%",
    elevation:60
    },
})