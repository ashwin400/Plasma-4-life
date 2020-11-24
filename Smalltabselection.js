import 'react-native-gesture-handler';
import React, { Component, Profiler } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';



export default function SmallTab({name,onPress,style,iconname,size,colour}){

    
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.profilescreenselection,style]}>
            <MaterialCommunityIcons name={iconname} size={size} color={colour} />
               <Text style={styles.tabtext}>
                   {name}
               </Text>
            </TouchableOpacity>
        );
    }
    

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({

profilescreenselection:{
backgroundColor:"white",
height:0.075*deviceHeight,
marginBottom:1.5,
alignItems:"center",
flexDirection:"row",
padding:20


},
tabtext:{
padding:15,
fontSize:16
}
})
             
               