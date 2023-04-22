
import React, { useState } from "react";
import {TouchableOpacity,Text, Image,View, StyleSheet, Alert} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../store";
import userSlice from '../slices/user';
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function Q8() {
  const dispatch = useAppDispatch();
  
  const save = async () => {
    try {
      const myLily = {
        // Lily 번호?
      };
      dispatch(userSlice.actions.setOk(true));
      await AsyncStorage.setItem('myLily', JSON.stringify(myLily));
    } catch (e) {
      // 오류 예외 처리
    }
  }
  
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Q8. 당신이 선호하는 활동을 골라주세요!</Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <TouchableOpacity style={styles.backButton} onPress={() => save()}>
        <Text style={styles.backButtonText}>완료</Text>
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
    width: 70,
    marginVertical: '8%',
  },
  button: {
    marginBottom: 10,
    width: 200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    backgroundColor: 'white',
    shadowColor: '#8d8d8d',
    shadowOffset: {width: 2, height: 2},
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
    width: 100,
    padding: '10%',
    // borderRadius: 5,
    // borderWidth: 2,
    // backgroundColor: '#f1f1f1',
    // shadowColor: '#8d8d8d',
    // shadowOffset: {width: 2, height: 2},
    bottom: 20,
    // borderColor: '#a5a5a5',
  },
  backButtonText: {
    // height: 4,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#777777',
  },
});

export default Q8;
