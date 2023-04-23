
import React, { useEffect, useState } from "react";
import {TouchableOpacity,Text, Image,View, StyleSheet, Alert} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AppInner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../store";
import userSlice from '../slices/user';
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import DoButton from "../components/DoButton";

type Q7ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q7'>;
function Q7({navigation}: Q7ScreenProps) {
  const q1Data = useSelector((state: RootState) => state.user.q1);
  const q2Data = useSelector((state: RootState) => state.user.q2);
  const q3Data = useSelector((state: RootState) => state.user.q3);
  const q4Data = useSelector((state: RootState) => state.user.q4);
  const q5Data = useSelector((state: RootState) => state.user.q5);
  const q6Data = useSelector((state: RootState) => state.user.q6);

  const dispatch = useAppDispatch();

  const [buttonList, setButtonList] = useState({});

  const toggleButton = (index: number) => {
    setButtonList(prevButtonLists => ({
      ...prevButtonLists,
      [index]: !prevButtonLists[index],
    }));
    console.log(buttonList);
    console.log(Object.keys(buttonList).filter(key => buttonList[key]));
  };

  const save = async () => {
    try {
      if (!Object.keys(buttonList).filter(key => buttonList[key])) {
        Alert.alert('하나 이상 골라주세요!');
      } else {
        // await AsyncStorage.setItem("q3", ans);
        const myData = {
          q1: q1Data,
          q2: q2Data,
          q3: q3Data,
          q4: q4Data,
          q5: q5Data,
          q6: q6Data,
          q7: Object.keys(buttonList).filter(key => buttonList[key]),
        };
        await AsyncStorage.setItem('myData', JSON.stringify(myData));
        navigation.navigate('Q8');
      }
    } catch (e) {
      // 오류 예외 처리
    }
  };

  useEffect(() => {}, [buttonList]);

  //"그림그리기","노래듣기","산책하기","책읽기","영화보기","쇼핑하기"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Q7. 당신이 선호하는 활동을 골라주세요!</Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <DoButton
        title="그림그리기"
        onClick={() => toggleButton(0)}
        state={buttonList[0]}
      />
      <DoButton
        title="노래듣기"
        onClick={() => toggleButton(1)}
        state={buttonList[1]}
      />
      <DoButton
        title="산책하기"
        onClick={() => toggleButton(2)}
        state={buttonList[2]}
      />
      <DoButton
        title="책읽기"
        onClick={() => toggleButton(3)}
        state={buttonList[3]}
      />
      <DoButton
        title="영화보기"
        onClick={() => toggleButton(4)}
        state={buttonList[4]}
      />
      <DoButton
        title="쇼핑하기"
        onClick={() => toggleButton(5)}
        state={buttonList[5]}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => save()}>
        <Text style={styles.backButtonText}>확인</Text>
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


export default Q7;
