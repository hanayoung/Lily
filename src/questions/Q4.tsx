import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

type Q4ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q4'>;
function Q4({navigation}: Q4ScreenProps) {
  const dispatch = useAppDispatch();

  const onHandle = (ans: string) => {
    save(ans);
    navigation.navigate('Q5');
  };
  const save = async (ans: string) => {
    try {
      // await AsyncStorage.setItem("q4", ans);
      dispatch(userSlice.actions.setQ4(ans));
    } catch (e) {
      // 오류 예외 처리
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q4. 어려운 일이 너무 많이 쌓여서 {'\n'} 극복하지 못할 것 같다고 느낀
        적이 있나요?
      </Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <TouchableOpacity onPress={() => onHandle('0')} style={styles.button}>
        <Text style={styles.buttonText}>거의 없어</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle('1')} style={styles.button}>
        <Text style={styles.buttonText}>자주 그래</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
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
    width: 70,
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
    bottom: 30,
  },
  backButtonText: {
    color: '#717171',
  },
});

export default Q4;
