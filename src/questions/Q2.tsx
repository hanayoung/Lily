import React from "react";
import {TouchableOpacity,Text, Image, View} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";
import tailwind from "twrnc";

type Q2ScreenProps = NativeStackScreenProps<RootStackParamList,"Q2">;
function Q2({ navigation }: Q2ScreenProps) {
   return (
    <View style={tailwind`flex flex-col items-center`}>
  <Text style={tailwind`mt-12 text-lg`}>
    Q3. 상대방이 위로가 필요하다고 할 때, 어떻게 위로해주는 편이야?
  </Text>
  <Image
    style={tailwind`h-28 my-[10%]`}
    source={{
      uri:
        'https://user-images.githubusercontent.com/86648265/232454342-f172d4b7-0c91-401c-9223-a1833385115d.png',
    }}
  />
  <TouchableOpacity
    onPress={() => navigation.navigate("Q3")}
    style={tailwind`
      my-3 border-2 border-[#a5a5a5] w-[200px] p-3 rounded-md shadow-button
    `}>
    <Text
      style={tailwind`
        text-[#777777] font-bold text-sm text-center
      `}>
      음.. 상대방의 감정을 우선시하는 편인것같아
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.navigate("Q3")}
    style={tailwind`
      my-3 border-2 border-[#a5a5a5] w-[200px] p-3 rounded-md shadow-button
    `}>
    <Text
      style={tailwind`
        text-[#777777] font-bold text-sm text-center
      `}>
      나는 상대방에게 도움이 되는 조언을 하려고하는 편인 것 같아!
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.goBack}
    style={tailwind`absolute bottom-5 h-4px`}>
    <Text style={tailwind`text-[#8d8d8d]`}>이전으로</Text>
  </TouchableOpacity>
</View>
   );
 }

export default Q2;