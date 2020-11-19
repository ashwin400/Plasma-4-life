import { useFonts } from 'expo-font'

const [fontsLoaded] = useFonts({'montserrat':  require('./Montserrat-Regular.ttf'),})
if (!fontsLoaded) {
    return <AppLoading />;}
    else{
        export const montserrat
    }