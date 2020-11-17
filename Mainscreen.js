import 'react-native-gesture-handler';
import React, { Component,useState } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar } from 'react-native';
import Box from './box';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import DropDownPicker from 'react-native-dropdown-picker';
import ScrollCard from "./scrollCard"

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Barshan',
    Location:"Bangalore",
    BloodType:"B+"
  },
  {
    id: '3ac68afc-c605-483-a4f8-fbd91aa97f63',
    title: 'Danish',
    Location:"Bihar",
    BloodType:"B-"
  },
  {
    id: '58694a0f-3da1-71f-bd96-145571e29d72',
    title: 'Ashwin',
    Location:"Bangalore",
    BloodType:"AB+"
  },
  {
    id: '3ac68afc-c605-48d3-a48-fbd91aa57f63',
    title: 'Faisal',
    Location:"Kashmir",
    BloodType:"O+"
  },
  {
    id: '58694a0f-3da1-471f-d96-145571e29d72',
    title: 'Third tem',
    Location:"Kashmir",
    BloodType:"O+"
  },
  {
    id: '3ac68afc-c605-48d3-48-fbd91aa57f63',
    title: 'Name',
    Location:"Kashmir",
    BloodType:"O+"
  },
  
];

export default function Mainscreen({navigation}){
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();
  const [fontsLoaded] = useFonts({'montserrat':  require('./Montserrat-Regular.ttf'),})
  const renderItem = ({ item }) => (
    <ScrollCard 
    title={item.title}
    location={item.Location}
    bloodgroup={item.BloodType}
     />
  );
  
    
  
    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    
     
   <View style={{backgroundColor:"white",flex: 1,}}>
    <StatusBar backgroundColor="#800000"/>
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
    containerStyle={{height: "20%",marginTop:10,width:"95%",alignSelf:"center",}}
    placeholder="Select Blood group"
    defaultValue={value}
    onChangeItem={item => setValue(item.value)}
    />
  

    <Mainbutton 
    name="Search" 
    textstyle={{color:"white"}}
    style={{backgroundColor:"#800000",alignSelf:"center",}}
    />
    
    </View>
    </View>

    <SafeAreaView style={{flex:1,marginTop:70,marginBottom:10}}>

    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    
    />
    </SafeAreaView>
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
    
    
   },
    redstyle:{
      width:"100%",
      height:0.25*deviceHeight,
      backgroundColor:"#800000",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
    
    
})