import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { RootStackParamList } from "../../AppInner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userSlice from '../slices/user';
import { useAppDispatch } from "../store";


type Q1ScreenProps = NativeStackScreenProps<RootStackParamList,"Q1">;

function Q1({ navigation }: Q1ScreenProps) {
  const dispatch = useAppDispatch();
  
  const onHandle=(ans:string)=>{
    save(ans)
    navigation.navigate("Q2")

  }
  const save = async (ans:string) => {
    try {
      // await AsyncStorage.setItem("q1", ans);
      dispatch(
        userSlice.actions.setQ1(ans),
      );
    } catch (e) {
      // 오류 예외 처리
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q1. 당신은 행복한가요?
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
          응
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onHandle("1")}
        style={styles.button}>
        <Text style={styles.buttonText}>
          ...
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
    width:50,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    bottom: 10,
  },
  backButtonText: {
    fontSize: 10,
    color: '#8d8d8d',
  },
});

export default Q1;
