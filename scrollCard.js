import React from "react"
import { View ,Text,Dimensions} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';


export default function ScrollCard({title,location,bloodgroup}){
    
let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

    return(
<View style={{
      width:"90%",
      backgroundColor:"#d3d3d3",
      height:80,
      alignSelf:"center",
      borderRadius:25,
      marginVertical: 10,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      elevation:3
      
      
      }}>
     
<View style={{alignItems:"center",height:"50%",width:"30%",justifyContent:"center"}}>
<Text style={{
    fontSize:19,
    fontFamily:"montserrat"
}}>
{title}
</Text>
<Text style={{fontSize:12,fontFamily:"montserrat"}}>
    {location}
</Text>
<Text style={{fontSize:10,fontFamily:"montserrat"}}>
    Gender
</Text>
</View>
<View style={{alignItems:"center"}}>
<View style={{height:deviceHeight>800?60:50,backgroundColor:"#708090",width:deviceHeight>800?50:40,justifyContent:"center",borderRadius:15,alignItems:"center",position:"absolute",top:deviceHeight>800?-10:0,right:-20,elevation:40,}}>
<Feather name="droplet" size={24} color="black" />
<Text style={{fontFamily:"montserrat"}}>
    {bloodgroup}
</Text>

</View>
</View>
<TouchableOpacity 
style={{alignItems:"center",alignSelf:"center"}} 
containerStyle={{alignSelf:"center",paddingRight:15,}}
onPress={()=>console.log("Request details")}
>

<AntDesign name="retweet" size={25} color="black" />
<Text style={{fontFamily:"montserrat"}}>
    Request
</Text>
</TouchableOpacity>

 </View>   
    );

}