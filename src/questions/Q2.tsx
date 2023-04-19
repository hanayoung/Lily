import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { RootStackParamList } from "../../AppInner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../store";
import userSlice from '../slices/user';

type Q2ScreenProps = NativeStackScreenProps<RootStackParamList,"Q2">;

function Q2({ navigation }: Q2ScreenProps) {
  const dispatch = useAppDispatch();
  
  // const onHandle=()=>{
  //   load()
  //   navigation.navigate("Q3")

  // }
  // const load = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('q1');
  //     console.log("value : ",value)
  //   } catch (e) {
  //     // 오류 예외 처리
  //   }
  // }
  const onHandle=(ans:string)=>{
    save(ans)
    navigation.navigate("Q3")

  }
  const save = async (ans:string) => {
    try {
      // await AsyncStorage.setItem("q2", ans);
      dispatch(
        userSlice.actions.setQ2(ans),
      );
    } catch (e) {
      // 오류 예외 처리
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q2. 사소한 일도 버거워졌던 적이 있나요?
      </Text>

      <Image
        style={styles.image}
        source={require('../assets/Lily.png')}
        onError={(error) => console.log('Error loading image:', error)}
      />

      <TouchableOpacity
        onPress={() => onHandle("0")}
        style={styles.button}>
        <Text style={styles.buttonText}>
          거의 없어
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onHandle("1")}
        style={styles.button}>
        <Text style={styles.buttonText}>
          자주 그래
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>이전으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 12,
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 70,
    width:70,
    marginVertical: '10%',
  },
  button: {
    marginTop: 10,
    width: 200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    backgroundColor: 'white',
    shadowColor: '#8d8d8d',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777777',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 10,
  },
  backButtonText: {
    height: 4,
    color: '#8d8d8d',
  },
});

export default Q2;
