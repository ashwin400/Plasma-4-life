import 'react-native-gesture-handler';
import React, { Component,useState} from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar,Animated, } from 'react-native';
import Box from './box';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo';
import Mainbutton from './mainscreenbutton/Mainbutton';
import DropDownPicker from 'react-native-dropdown-picker';



export default function MainCard({title}){
    const [fontsLoaded] = useFonts({'montserrat':  require('./Montserrat-Regular.ttf'),})
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return(
<View style={styles.mainpage}>
    <Text style={{color:"black",fontSize:20,paddingLeft:20,fontFamily:"montserrat"}}>
      {title}
    </Text>
    <Box name="Enter Your Location"/>
    

    <DropDownPicker
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
    style={{
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20
}}
    defaultValue={value}
    containerStyle={{height: "20%",width:"95%",alignSelf:"center",marginTop:10}}
    placeholder="Select Blood group"
    onChangeList={(items, callback) => {
        new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
    }}
    
    onChangeItem={item => setValue(item.value)}
    />
   
   <View style={{marginTop:15}}>

    <Mainbutton 
    name="Search" 
    textstyle={{color:"white"}}
    style={{backgroundColor:"#651c36",alignSelf:"center",}}
    
    />
   </View>

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
        marginTop:10,
        elevation:80,
        padding:15,
        }
    
    })