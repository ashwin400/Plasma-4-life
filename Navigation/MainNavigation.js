import 'react-native-gesture-handler';
import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';  
import Profile from "../Profilescreen"
import { MaterialIcons } from '@expo/vector-icons';
import Mainscreen from "../Mainscreen";
import Discussion from "../DiscussionScreen";
import HomePage from "../HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


export default function BottomNav(){
  const Tab = createBottomTabNavigator();

  return (
    
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={HomePage}
      options={{
        tabBarIcon:()=>(
          <AntDesign name="home" size={24} color="black" />
        ) }}
        />
      <Tab.Screen name="Search" component={Mainscreen} 
        options={{
        tabBarIcon:()=>(
          <MaterialIcons name="search" size={24} color="black" />
        ) }
      }
      />
      <Tab.Screen name="Discussion" component={Discussion} 
        options={{
        tabBarIcon:()=>(
          <Octicons name="comment-discussion" size={24} color="black" />
        ) }
      }
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon:()=>(
          <MaterialIcons name="account-circle" size={24} color="black" />
        ) }
      }/>
    </Tab.Navigator>
    
  );}