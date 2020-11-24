import { API_KEY } from './env';

const url=`https://newsapi.org/v2/top-headlines?q=covid-19&from=2020-11-23&sortBy=popularity&language=en&apiKey=${API_KEY}`;


export default async function getUSANews() {
    
   
    try {
        let response = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?pageSize=10&q=covid&autoCorrect=true&pageNumber=1&toPublishedDate=null&fromPublishedDate=null", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "5e9db6da7emshd575be20feedf3dp1efdddjsn32c2717b1d6d",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
          }
        })
        let responseJson = await response.json();
        console.log(responseJson)
        return responseJson.value;
      } catch (error) {
        console.error(error);
      }
     
    

}

