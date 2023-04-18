import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {TouchableOpacity,Text, Image, View} from 'react-native'
import { RootStackParamList } from "../../AppInner";
import tailwind from "twrnc";

type Q1ScreenProps = NativeStackScreenProps<RootStackParamList,"Q1">;
function Q1({ navigation }: Q1ScreenProps) {
    return (
      <View style={tailwind`flex flex-col items-center`}>
      <Text style={tailwind`mt-12 text-lg`}>
        Q2. 힘든 일이 있을 때 어떻게 극복하는 편인가요?
      </Text>

      <Image
        style={tailwind`h-28 my-10`}
        source={{
          uri:
            'https://user-images.githubusercontent.com/86648265/232454342-f172d4b7-0c91-401c-9223-a1833385115d.png',
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Q2")}
        style={tailwind`
          my-3 border-2 border-[#a5a5a5] w-44 p-3 rounded-md shadow-button
        `}>
        <Text
          style={tailwind`
            text-[#777777] font-bold text-sm text-center
          `}>
          친구들한테 얘기하면서 극복하는 편이야
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Q2")}
        style={tailwind`
          my-3 border-2 border-[#a5a5a5] w-44 p-3 rounded-md shadow-button
        `}>
        <Text
          style={tailwind`
            text-[#777777] font-bold text-sm text-center
          `}>
          혼자 극복할 수 있는 방법을 찾아보려고 하는 편이야
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.canGoBack}
        style={tailwind`absolute bottom-5 h-4px`}>
        <Text style={tailwind`text-[#8d8d8d]`}>이전으로</Text>
      </TouchableOpacity>
    </View>
    );
 }

export default Q1;