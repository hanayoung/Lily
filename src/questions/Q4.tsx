import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";

type Q4ScreenProps = NativeStackScreenProps<RootStackParamList,"Q4">;
function Q4({navigation}:Q4ScreenProps) {
   return(
    <>
    <Text>
      Q4
    </Text>
    </>
   )
   
}
export default Q4;