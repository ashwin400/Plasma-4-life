import 'react-native-gesture-handler';
import React ,{useEffect, useState} from 'react';
import * as firebase from 'firebase';
import BottomNav from "./Navigation/MainNavigation"
import Startnav from "./Navigation/StartNavigation"
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from "./authentication/context"
import { Entypo } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font'

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


export default function App() {
  const [user,setUser]=useState();
    

  return(
    <AuthContext.Provider value={{user,setUser}}>
      
    <NavigationContainer>

      {user ?  <Startnav/>:<BottomNav/>}
    </NavigationContainer>
    </AuthContext.Provider>
    
  


   );}



  




