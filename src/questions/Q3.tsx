import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";

type Q3ScreenProps = NativeStackScreenProps<RootStackParamList,"Q3">;
function Q3({ navigation }: Q3ScreenProps) {
   return (
     <>
       <Text>Q3</Text>
       <TouchableOpacity
         onPress={() => {
           navigation.navigate("Q4");
         }}
       >
         <Text>Go to Q3</Text>
       </TouchableOpacity>
     </>
   );
 }
export default Q3;