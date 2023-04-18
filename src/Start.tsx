import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {TouchableOpacity,Text,View, StyleSheet} from 'react-native'
import { RootStackParamList } from "../AppInner";

type StartScreenProps = NativeStackScreenProps<RootStackParamList,"Start">;
function Start({ navigation }: StartScreenProps) {
   return (
     <View style={styles.container}>
       <Text>Start</Text>
       <TouchableOpacity
         onPress={() => {
           navigation.navigate("Q1");
         }}
       >
         <Text>Go to Q1</Text>
       </TouchableOpacity>
     </View>
   );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Start;