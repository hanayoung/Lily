import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

type Q3ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q3'>;

function Q3({navigation}: Q3ScreenProps) {
  const dispatch = useAppDispatch();

  const onHandle = (ans: string) => {
    save(ans);
    navigation.navigate('Q4');
  };
  const save = async (ans: string) => {
    try {
      // await AsyncStorage.setItem("q3", ans);
      dispatch(userSlice.actions.setQ3(ans));
    } catch (e) {
      // 오류 예외 처리
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q3. 최근 초조하거나 불안하거나 {'\n'} 조마조마하다고 느껴진 적이 있나요?
      </Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <TouchableOpacity onPress={() => onHandle('0')} style={styles.button}>
        <Text style={styles.buttonText}>거의 없어</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle('1')} style={styles.button}>
        <Text style={styles.buttonText}>자주 그래</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack}
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

export default Q3;
