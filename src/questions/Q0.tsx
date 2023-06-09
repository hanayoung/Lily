import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet, TextInput} from 'react-native';
import {RootStackParamList} from '../../AppInner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from '../slices/user';
import {useAppDispatch} from '../store';

type Q0ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q0'>;

function Q0({navigation}: Q0ScreenProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const onHandle = () => {
    if (name) {
      save();
      navigation.navigate('Q1');
    }
  };
  const onHandleName = (text: string) => {
    setName(text);
  };
  const save = async () => {
    try {
      dispatch(userSlice.actions.setName(name));
      await AsyncStorage.setItem('myName', JSON.stringify(name));
    } catch (e) {
      // 오류 예외 처리
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Q0. 당신의 이름을 알려주세요</Text>

      <Image
        style={styles.image}
        source={require('../assets/Lily.png')}
        onError={error => console.log('Error loading image:', error)}
      />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.in}
          placeholder="이름을 알려주세요"
          autoCorrect={false}
          value={name}
          onChangeText={onHandleName}
          onSubmitEditing={() => onHandle()}
          multiline={false}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.confirm} onPress={() => onHandle()}>
          <Text style={{color: 'white'}}>확인</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>이전으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  confirm: {
    marginLeft: 8,
    paddingHorizontal: 16,
    backgroundColor: '#b1b1b1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
  },
  in: {
    backgroundColor: '#f7f7f7',
    paddingHorizontal: '10%',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    height: 50,
  },
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

export default Q0;
