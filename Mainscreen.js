import 'react-native-gesture-handler';
import React, { Component,useState } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,ScrollView, } from 'react-native';
import Box from './box';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import DropDownPicker from 'react-native-dropdown-picker';

export default function Mainscreen({navigation}){
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();
  const [fontsLoaded] = useFonts({
    'montserrat':  require('./Montserrat-Regular.ttf'),})
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    
    <ScrollView contentContainerStyle={{
      flex: 1
   }}>
   <View style={{backgroundColor:"white",flex: 1}}>
    <View style={styles.redstyle}>
    <View style={styles.mainpage}>
    <Text style={{color:"black",fontSize:20,paddingLeft:20,fontFamily:"montserrat"}}>
      Find a Donor
    </Text>
    <Box name="Enter Your Location"/>
    
    <DropDownPicker
    items={[
        {label: 'O+',value: 'O+',},
        {label: 'O-',value: 'O-',},
        {label: 'A+', value: 'A+',},
        {label: 'A-', value: 'A-',},
        {label: 'AB+',  value: 'AB+',},
        {label: 'AB-',  value: 'AB-',},
        {label: 'B-', value: 'B-',},
        {label: 'B+',  value: 'B+',}
    ]}
    
    onChangeList={(items, callback) => {
        new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
    }}
    containerStyle={{height: "20%",marginTop:10,width:"95%",alignSelf:"center"}}
    placeholder="Select Blood group"
    defaultValue={value}
    onChangeItem={item => setValue(item.value)}
    />
   <TouchableOpacity onPress={()=>console.log('Search')}
    style={{alignSelf:"center"}}>

    <Mainbutton 
    name="Search" 
    textstyle={{color:"white"}}
    style={{backgroundColor:"#800000"}}
    />
    </TouchableOpacity>
    </View>
    </View>
    </View>
    </ScrollView>
    );
}}


let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    mainpage:{
    alignSelf:"center",
    backgroundColor:"white",
    width:0.9*deviceWidth,
    height:0.3*deviceHeight,
    borderRadius:40,
    marginTop:80,
    elevation:80,
    padding:15,
   },
    redstyle:{
      width:"100%",
      height:0.35*deviceHeight,
      backgroundColor:"#800000",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
    
    
})