import 'react-native-gesture-handler';
import React, { Component,useState } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar,Animated, } from 'react-native';
import Box from './box';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import DropDownPicker from 'react-native-dropdown-picker';
import ScrollCard from "./scrollCard"
import { LinearGradient } from 'expo-linear-gradient';
import MainCard from "./MainCard"
import Carousel , { Pagination } from 'react-native-snap-carousel';
import Dots from 'react-native-dots-pagination';


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
  const [active ,setActive]=useState(0);
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
    <StatusBar style="auto"/>
    <View style={styles.redstyle}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#c31432',"#240b36"]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height:"100%",
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30
        }}/>
    <View style={{ height:0.4*deviceHeight,}}>
    <Dots 
    length={2} 
    active={active} 
    passiveColor={'rgba(255, 255, 255, 0.4)'} 
    activeColor={'rgba(255, 255, 255, 0.9)'}
    activeDotWidth={8}
    activeDotHeight={8}
    passiveDotWidth={5}
    passiveDotHeight={5}
    paddingVertical={7}
    />
    <Carousel
              
              data={carddata}
              renderItem={renderCard}
              sliderWidth={deviceWidth}
              itemWidth={0.9*deviceWidth}
              onSnapToItem={(index)=> setActive(index)}
            />
            
            
    </View>
    </View>
    

    <SafeAreaView style={{flex:1,marginTop:70,}}>

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
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
    },
    
    
})