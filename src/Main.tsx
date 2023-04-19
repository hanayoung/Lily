import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
function Main() {
  const load = async () => {
    try {
      const value = await AsyncStorage.getItem('myData');
      console.log("value : ",value)
    } catch (e) {
      // 오류 예외 처리
    }
  }
   return(
      <View style={styles.container}>
    <TouchableOpacity 
    onPress={()=>load()}>
      <Text>Click!</Text>
    </TouchableOpacity>
    </View>

   )
   
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
   },
 });
export default Main;