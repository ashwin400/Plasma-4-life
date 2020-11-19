import 'react-native-gesture-handler';
import React, { Component,useState} from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar,Animated, } from 'react-native';
import Box from './box';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo';
import Mainbutton from './mainscreenbutton/Mainbutton';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';


export default function MainCard({title}){
    const [fontsLoaded] = useFonts({'montserrat':  require('./Montserrat-Regular.ttf'),})
    const [value, setValue] = useState(null);
    const [items, setItems] = useState();
    
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return(
<View style={styles.mainpage}>
    <Text style={{color:"black",fontSize:20,paddingLeft:20,fontFamily:"montserrat"}}>
      {title}
    </Text>
    <Box name="Enter Your Location"/>
    
    <RNPickerSelect
    items={[
        {label: 'O+',value: 'o+',},
        {label: 'O-',value: 'o-',},
        {label: 'A+', value: 'a+',},
        {label: 'A-', value: 'a-',},
        {label: 'AB+',  value: 'ab+',},
        {label: 'AB-',  value: 'ab-',},
        {label: 'B-', value: 'b-',},
        {label: 'B+',  value: 'b+',}
    ]}
    
    
    //containerStyle={{height: "20%",marginTop:10,width:"95%",alignSelf:"center",}}
    placeholder="Select Blood group"
    
    
    
    onValueChange={(value) => console.log(value)}
    />
  
    <Mainbutton 
    name="Search" 
    textstyle={{color:"white"}}
    style={{backgroundColor:"#800000",alignSelf:"center",}}
    />

    </View>
    );
    }}
    
let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

    const styles = StyleSheet.create({
        mainpage:{
        alignSelf:"center",
        backgroundColor:"white",
        width:0.9*deviceWidth,
        height:0.27*deviceHeight,
        borderRadius:40,
        marginTop:40,
        elevation:80,
        padding:15,
        }
    
    })