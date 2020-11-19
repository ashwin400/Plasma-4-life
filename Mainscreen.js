import 'react-native-gesture-handler';
import React, { Component,useState } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar,Animated, } from 'react-native';
import Box from './box';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import DropDownPicker from 'react-native-dropdown-picker';
import ScrollCard from "./scrollCard"

import MainCard from "./MainCard"
import Carousel from 'react-native-snap-carousel';

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

const carddata=[
  {
    title:"Find a donor",
    id: '3ac68afc-c605-48d3-48-fbd1aa57f63',
  },
  {
    title:"Requests",
    id: '3ac68afc-c605-48d3-48-fbd9aa57f63',
  }
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
  const renderCard = ({ item }) => (
    <MainCard
    title={item.title}
    
     />
  );
  
    
  
    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    
     
   <View style={{backgroundColor:"white",flex: 1,}}>
    <StatusBar backgroundColor="#800000"/>
    <View style={styles.redstyle}>
    <View style={{ height:0.4*deviceHeight,}}>

    <Carousel
              
              data={carddata}
              renderItem={renderCard}
              sliderWidth={deviceWidth}
              itemWidth={0.9*deviceWidth}
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
   
    redstyle:{
      width:"100%",
      height:0.25*deviceHeight,
      backgroundColor:"#800000",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
    
    
})