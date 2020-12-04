import React from "react"
import { View ,Text,Dimensions} from 'react-native';



export default function NewsCard({article}){
    let deviceHeight = Dimensions.get('window').height
    let deviceWidth = Dimensions.get('window').width
    return(
<View>


<View style={{
      width:"90%",
      backgroundColor:"#d3d3d3",
      height:100,
      alignSelf:"center",
      borderRadius:25,
      marginBottom: 10,
     justifyContent:"center",
      alignItems:"center",
      elevation:3
      
      
      }}>
      
     <Text style={{alignSelf:"center",fontSize:deviceHeight>800?21:17,padding:10,fontFamily:"ptsans"}}>
      {article.title}
        
      </Text>
 </View>
 
 </View>   
    );

}