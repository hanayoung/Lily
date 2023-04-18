import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";

type Q2ScreenProps = NativeStackScreenProps<RootStackParamList,"Q2">;
function Q2({ navigation }: Q2ScreenProps) {
   return (
     <>
       <Text>Q2</Text>
       <TouchableOpacity
         onPress={() => {
           navigation.navigate("Q3");
         }}
       >
         <Text>Go to Q3</Text>
       </TouchableOpacity>
     </>
   );
 }

export default Q2;