import { API_KEY } from './env';

const url=`https://newsapi.org/v2/top-headlines?q=covid-19&from=2020-11-23&sortBy=popularity&language=en&apiKey=${API_KEY}`;


export default async function getUSANews() {
    
   
    try {
        let response = await fetch(url)
        let responseJson = await response.json();
        console.log(responseJson)
        return responseJson.articles;
      } catch (error) {
        console.error(error);
      }
     
    

}

