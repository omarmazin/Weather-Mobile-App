import React,{useState} from "react";
import { ImageBackground, Text,View,StyleSheet,SafeAreaView, TextInput } from "react-native-web";
import One from "../../assets/one.jpg"
import { Entypo } from '@expo/vector-icons';
import axios, { Axios } from "axios";
const Home =()=>{
    const [weather,setWeather] = useState({})
    const getWeather = async () =>{
        // Fetch Data From OpenWeatherAPI
        try{
            const response = await axios.get('YOUR API')
            setWeather(response.data)
        }catch (error){
            alert("Please, Check the name of city ")
        }
    }
    const [text, onChangeText] = useState("City");
    return(
        <ImageBackground source={One} style={styles.image}>
            <SafeAreaView>
                <View style={styles.TextInputContainer}>
                    <TextInput
                    style={styles.TextInput}
                    Value={'city'}
                    placeholder={"Write your city name"}
                    onChangeText={onChangeText}
                    value={text}
                    >
                    </TextInput>
                    <Entypo 
                    name="check" 
                    size={24} 
                    color="black"
                    onPress={getWeather}  
                    />
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.location}>
                    {weather.name}
                    SAUDI ARABIA
                    </Text>
                </View>
                <View style={styles.weatherContainer}>
                <Text style={styles.C}>
               
                80C
                </Text>
                <Text style={styles.weather}>
                Sunny
                </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>        
    )
}
const styles = StyleSheet.create({
    image:{
        flex:1,
    },
    TextInputContainer:{
        backgroundColor:"#E8A9F2",
        alignItems:"center",
        flexDirection:"row",
        alignSelf:"center",
        borderRadius:10,
        paddingHorizontal:10,
        width:"60%",
        justifyContent:"space-between",
        marginTop:20,
    },
    TextInput:{
        height:40,
        fontWeight:'600'
    },
    locationContainer:{
        marginVertical:3,
    },
    location:{
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"500",
        textAlign:"center",

    },
    weatherContainer:{
        
    },
    weather:{
        color:"#FFFFFF",
        fontSize:50,
        fontWeight:"500",
        textAlign:"center",
    },
    
    C:{
        color:"#FFFFFF",
        fontSize:100,
        fontWeight:"500",
        textAlign:"center",


    }
})
export default Home;