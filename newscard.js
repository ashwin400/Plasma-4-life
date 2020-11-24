import React from "react"
import { View ,Text,Dimensions} from 'react-native';



export default function NewsCard({article}){
    let deviceHeight = Dimensions.get('window').height
    let deviceWidth = Dimensions.get('window').width
    return(
<View>

<Text style={{alignSelf:"center",fontSize:deviceHeight>800?24:20,paddingVertical:10,fontFamily:"ptsans"}}>
      Latest Covid News
      </Text>
<View style={{
      width:"90%",
      backgroundColor:"#d3d3d3",
      height:"45%",
      alignSelf:"center",
      borderRadius:25,
      marginBottom: 10,
     justifyContent:"center",
      alignItems:"center",
      elevation:3
      
      
      }}>
      
     <Text style={{alignSelf:"center",fontSize:deviceHeight>800?21:17,padding:10,fontFamily:"ptsans"}}>
        {article[0]}
      </Text>
 </View>
 
 </View>   
    );

}