import getUSANews from "./src/config/fetchnews"
import React, { Component,useState,useEffect } from 'react';
import { FlatList, Vibration, View,Dimensions,Text} from 'react-native';
import NewsCard from './newscard'

export default function GetNews(){
  let deviceHeight = Dimensions.get('window').height
  let deviceWidth = Dimensions.get('window').width
    const [articles,setArticles]=useState([])
    const [refreshing,setRefreshing]=useState(false)
    
    useEffect(() => {
     
    })
  
    function fetchnews(){
      getUSANews()
              .then(articles => {
          setArticles(articles)
          setRefreshing(false);
              })
              .catch(() => setRefreshing(false));
    }
  
    function handleRefresh(){
      setRefreshing(true)
      fetchnews()
      console.log("refreshed")
      console.log(articles)
     
    }
    const renderItem = ({ item }) => (
        <NewsCard
        article={item}
      
        
         />
      );
    return (
      <View style={{flex:1,padding:3}}>

      <Text style={{alignSelf:"center",fontSize:deviceHeight>800?24:20,paddingVertical:10,fontFamily:"ptsans"}}>
      Latest Covid News
      </Text>
        <FlatList
            data={articles}
            renderItem={renderItem}
            keyExtractor={item => item.url}
            refreshing={refreshing}
            onRefresh={handleRefresh}
        />
      </View>
     
    );
}