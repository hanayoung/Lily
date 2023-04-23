import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import LilyButton from '../components/LilyButton';

function Q8() {
  const dispatch = useAppDispatch();
  const [lilyColor, setLilyColor] = useState(0);

  const onClick = (index: number) => {
    setLilyColor(index);
    console.log(lilyColor);
  };

  const save = async () => {
    try {
      dispatch(userSlice.actions.setOk(true));
      dispatch(userSlice.actions.setColor(lilyColor));

      await AsyncStorage.setItem('myLily', JSON.stringify(lilyColor));
    } catch (e) {
      // 오류 예외 처리
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q8. 당신과 함께 할 릴리의 색상을 선택해주세요.
      </Text>
      <View style={styles.wrapper}>
        <LilyButton
          onClick={() => onClick(0)}
          index={0}
          state={0 === lilyColor}
        />
        <LilyButton
          onClick={() => onClick(1)}
          index={1}
          state={1 === lilyColor}
        />
        <LilyButton
          onClick={() => onClick(2)}
          index={2}
          state={2 === lilyColor}
        />
        <LilyButton
          onClick={() => onClick(3)}
          index={3}
          state={3 === lilyColor}
        />
        <LilyButton
          onClick={() => onClick(4)}
          index={4}
          state={4 === lilyColor}
        />
        <LilyButton
          onClick={() => onClick(5)}
          index={5}
          state={5 === lilyColor}
        />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => save()}>
        <Text style={styles.backButtonText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: '5%',
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
