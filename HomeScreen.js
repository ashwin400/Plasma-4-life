import 'react-native-gesture-handler';
import React, { Component,useState } from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, TouchableOpacity,FlatList,StatusBar,Animated, Pressable,ScrollView ,TouchableWithoutFeedback} from 'react-native';
import Mainbutton from './mainscreenbutton/Mainbutton';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from "react-native-chart-kit";
import { Entypo } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo';
import Modal from 'react-native-modal';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import GetNews from './news'




export default function HomePage({navigation}){

  const [isModalVisible, setModalVisible] = useState(false);  
  const [fontsLoaded] = useFonts({
        'opensans':  require('./OpenSansCondensed-Light.ttf'),
        'ptsans': require('./PTSansNarrow-Regular.ttf'),
        'opensansbold':require('./OpenSansCondensed-Bold.ttf')})
        const toggleModal = () => {
          setModalVisible(!isModalVisible);
        };
      
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
        <View style={{
        width:0.9*deviceWidth,
        height:0.36*deviceHeight,
        backgroundColor:"white",
        alignSelf:"center",
        borderRadius:40,
        marginTop:10,
        elevation:200,
        
         }}>
         <View style={{flexDirection:"row",justifyContent:"space-between",}}>
        <View style={{alignItems:"center", paddingTop:20,paddingLeft:20,width:"35%"}}>
        <Text style={{fontSize:deviceHeight>800?60:40,fontFamily:"ptsans"}}>
         100            
        </Text>
        <Text style={{fontFamily:"opensans",fontSize:20}}>
         Available
        </Text>
        </View>
        <View style={{paddingTop:40}}>
        <Entypo name="drop" size={42} color="#c31432" />
        </View>
        <View style={{paddingTop:20,paddingRight:20,alignItems:"center",width:"35%"}}>
        <Text style={{fontSize:deviceHeight>800?60:40,fontFamily:"ptsans"}}>
        80
         </Text>
         <Text style={{fontFamily:"opensans",fontSize:20}}>
         Requests
        </Text>
        </View>
         </View>
        <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ],
        
      }]
    }}
    
    width={0.9*Dimensions.get('window').width} // from react-native
    height={0.2*deviceHeight}
    withDots={false}
    withInnerLines={false}
    withOuterLines={false}
    yLabelsOffset={20}
    chartConfig={{
    
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
      
      decimalPlaces: 2, // optional, defaults to 2dp
      
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
        
        
      }
    }}
    
    bezier
    style={{
      marginVertical: 10,
      borderRadius: 40,
      alignSelf:"center",
      paddingBottom:10
      
      
    }}
  />
       
    </View>
    </View>
    <View style={{flex:1,justifyContent:"flex-end",}}>
    <View style={{flex:1,marginTop:0.155*deviceHeight,backgroundColor:"white",marginBottom:15,width:0.9*deviceWidth,borderRadius:30,alignSelf:"center",elevation:10}} >
    <GetNews/>
    
    </View>
    <Pressable onPress={toggleModal} >
    <Modal statusBarTranslucent={true} isVisible={isModalVisible}>
  <TouchableOpacity 
            style={{flex:1,justifyContent:"center"}} 
            activeOpacity={1} 
            onPressOut={toggleModal}
          >

    <View overflow="hidden" style={{borderRadius:0.9*deviceWidth/6,height:0.7*deviceHeight,width:0.9*deviceWidth,backgroundColor:"#ffffff",paddingHorizontal:15,}}>
    <TouchableOpacity onPress={toggleModal} style={{position:"absolute",right:22,top:10,zIndex:1}}>
    <AntDesign name="closecircle" size={30} color="black" />
    </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false} directionalLockEnabled={true}  >
          <TouchableWithoutFeedback>
          <View>

          <Text style={{alignSelf:"center",fontSize:deviceHeight>800?30:22,paddingTop:10,fontFamily:"ptsans"}}>
        What is Plasma Therapy?
      </Text>
      <Text style={{fontSize:deviceHeight>800?20:15,padding:10,fontFamily:"opensans",textAlign:"center",paddingTop:20}}>
      Plasma therapy is a medical procedure that uses the blood of a recovered patient to create antibodies on those infected individuals. Medically known as convalescent plasma therapy, this treatment uses antibodies found in the blood taken from a recovered Covid-19 patient. It is then used to treat those with severe SARS-CoV-2 infection to aid recovery.
      </Text>
      <Text style={{alignSelf:"center",fontSize:deviceHeight>800?30:22,paddingTop:10,fontFamily:"ptsans"}}>
      Does Plasma Therapy Cure COVID?
      </Text>
      <Text style={{fontSize:deviceHeight>800?20:15,padding:10,fontFamily:"opensans",textAlign:"center",paddingTop:20}}>
      Currently, it has shown positive results in Delhi and Mumbai where COVID cases are spiking high. It has also proven to improve the ability of a person to recover from the disease. However, there is more research required to prove its full efficacy in different patient types.
      </Text>
      <Text style={{alignSelf:"center",fontSize:deviceHeight>800?30:22,paddingTop:10,fontFamily:"ptsans"}}>
      How Does Plasma Therapy Work?
      </Text>
      <Text style={{fontSize:deviceHeight>800?20:15,padding:10,fontFamily:"opensans",textAlign:"center",paddingTop:20}}>
      A convalescent plasma therapy uses antibodies (a type of protein i.e produced by plasma) from patients who have completely recovered from COVID-19 infection. Here is how this procedure will fight coronavirus in your body.

Blood is taken from a previously infected but completely recovered patient, the plasma component of that blood is separated and that contains the antibodies against SARS-CoV-2 virus. This plasma is injected into an infected person’s body that will fight the virus and neutralise it from spreading.
Once the patient has recovered, he/she will be asked to donate their blood so that their antibodies will be used to treat other infected patients.
The blood sample will be checked for any existing harmful diseases such as Hepatitis B & C including HIV.
The recovered blood will be taken into study and a researcher will extract plasma from the blood that can be injected into an infected person.
     
      </Text>
          </View>
      </TouchableWithoutFeedback>
          </ScrollView>
    </View>
    </TouchableOpacity>
        </Modal>
    <View style={{
      height:0.25*deviceHeight,
      backgroundColor:"#ffffff",
      marginBottom:15,
      alignSelf:"center",
      width:0.9*deviceWidth,
      borderRadius:30,
      elevation:10
    }}>
      <Text style={{alignSelf:"center",fontSize:deviceHeight>800?30:22,paddingTop:10,fontFamily:"ptsans"}}>
        What is Plasma Therapy?
      </Text>
      <Text style={{fontSize:deviceHeight>800?20:15,padding:10,fontFamily:"opensans",textAlign:"center"}}>
      Plasma therapy is a medical procedure that uses the blood of a recovered patient to create antibodies on those infected individuals. Medically known as convalescent plasma therapy, this treatment uses antibodies found in the blood taken from a recovered Covid-19 patient. It is then used to treat those with severe SARS-CoV-2 infection to aid recovery.
      </Text>
        </View>
    </Pressable>
    </View>
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