import React from "react"
import { View ,Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

export default function ScrollCard({title,location,bloodgroup}){
    return(
<View style={{
      width:"90%",
      backgroundColor:"#d3d3d3",
      height:80,
      alignSelf:"center",
      borderRadius:25,
      marginVertical: 8,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
      }}>
<View style={{alignItems:"center",paddingLeft:15}}>
<Text style={{
    fontSize:19,
    
}}>
{title}
</Text>
<Text style={{fontSize:12}}>
    {location}
</Text>
</View>
<View style={{alignItems:"center"}}>

<Feather name="droplet" size={24} color="black" />
<Text>
    {bloodgroup}
</Text>
</View>
<TouchableOpacity 
style={{alignItems:"center",alignSelf:"center"}} 
containerStyle={{alignSelf:"center",paddingRight:15,}}
onPress={()=>console.log("Request details")}
>

<AntDesign name="retweet" size={25} color="black" />
<Text>
    Request
</Text>
</TouchableOpacity>

 </View>   
    );

}