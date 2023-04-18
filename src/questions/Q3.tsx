import React from "react";
import {TouchableOpacity,Text, Image,View} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";
import tailwind from "twrnc";

type Q3ScreenProps = NativeStackScreenProps<RootStackParamList,"Q3">;
function Q3({ navigation }: Q3ScreenProps) {
   return (
    <View style={tailwind `flex flex-col items-center text-lg`}>
    <Text style={tailwind`mt-12 mx-4`}>
      Q4. 사소한 일도 버거워졌던 적이 있나요? 있다면 어느 빈도야?
    </Text>
    <Image
      style={tailwind `h-28 my-[10%]`}
      source={{
        uri:
        "https://user-images.githubusercontent.com/86648265/232454342-f172d4b7-0c91-401c-9223-a1833385115d.png"
      }}
        />
    <TouchableOpacity
      onPress={() => navigation.navigate("Q4")}
      style={tailwind `my-1 ring-2 w-[200px] p-3 ring-[#a5a5a5] text-[#777777] font-bold text-sm borde rounded-md shadow-button`}
    >
      없었어
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("Q4")}
      style={tailwind`my-1 ring-2 w-[200px] p-3 ring-[#a5a5a5] text-[#777777] font-bold text-sm borde rounded-md shadow-button`}
    >
      2-3일 이상?
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("Q4")}
      style={tailwind`my-1 ring-2 w-[200px] p-3 ring-[#a5a5a5] text-[#777777] font-bold text-sm borde rounded-md shadow-button`}
    >
      일주일 이상
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("Q4")}
      style={tailwind `my-1 ring-2 w-[200px] p-3 ring-[#a5a5a5] text-[#777777] font-bold text-sm borde rounded-md shadow-button`}
    >
      거의 매일 그래
    </TouchableOpacity>
    <TouchableOpacity
      style={tailwind `fixed bottom-5 h-4px text-[#8d8d8d]`}
      onPress={() => navigation.goBack}
    >
      이전으로
    </TouchableOpacity>
  </View>
   );
 }
export default Q3;