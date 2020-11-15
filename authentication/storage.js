//persist user authentication, not required with firebase



import * as SecureStore from "expo-secure-store";

const key="authToken";

const storeToken= async authToken=>{
    try{
        await SecureStore.setItemAsync(key,authToken);

    }
    catch(error){
        console.log("Error storing")

    }
}

const getToken=async ()=>{
    try{
        const authToken=await SecureStore.getItemAsync(key);

    }
    catch(error){
        console.log("Error getting auth token")
    }
}

const removeToken =async ()=>{
    try{
        await SecureStore.deleteItemAsync(key);
    }
    catch(error){
        console.log("Error removing")
    }
}

export default {getToken,removeToken,storeToken}