
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Mainbutton({name,onPress,style,textstyle}) {
  

  return (
    <TouchableOpacity onPress={onPress}  >
    
    <View style={[styles.container,style]} >
    
      <Text style={[styles.text,textstyle]}>{name}</Text>
    </View>
    </TouchableOpacity>
    );
  }
  let deviceHeight = Dimensions.get('window').height
  let deviceWidth = Dimensions.get('window').width
    
  
const styles = StyleSheet.create({
    container: {
        height:deviceHeight>800?40:35,
        width:deviceHeight>800?200:180,
        backgroundColor:"white",
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        padding:15,
       marginTop:10,
        elevation:60,
        
        
    },
    text:{
      color:'#800000',
      fontSize: deviceHeight>800?16:14,
    }

  });
  