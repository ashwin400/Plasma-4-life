import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

export default function Box({name,onPress}){
    return(
        
      <View style={styles.box}> 
      <Input 
      style={styles.boxtext} 
      inputContainerStyle={{borderBottomWidth:0,}}
      placeholder={name}    
      />
     </View>
      );
  }
  
  const styles = StyleSheet.create({
      
      box:{
        marginTop:15,
        width:"95%",
        alignSelf:"center",
        borderRadius:20,
        backgroundColor:"#d3d3d3",
        height:"20%",
        
      },
      boxtext:{
        alignSelf:"center",
        paddingLeft:20,
        fontSize:16,
       
        
    
      },
  })
  