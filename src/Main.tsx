import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {RootState} from './store/reducer';
import {Image} from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  const [advice, setAdvice] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const API_URL = 'http://127.0.0.1:5000';

  const mbti = useSelector((state: RootState) => state.user.q5); // F / T 구별 질문 답변 가져오기

  const playAnimation = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
  };

  const load = () => {
    try {
      setModalVisible(!modalVisible);
    } catch (e) {
      // 오류 예외 처리
    }
  };

  const close = async () => {
    setModalVisible(!modalVisible);
    const value = await AsyncStorage.getItem('myData');
    if (value != null) {
      if (mbti == '0') {
        await getComfortApi(value);
      } else {
        await getAdviceApi(value);
      }
    }
  };

  const getTodoApi = async (value: string) => {
    await axios
      .post(`${API_URL}/todo`, {value})
      .then(res => {
        console.log(res.data.text);
        setTodo(res.data.text);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getComfortApi = async (value: string) => {
    await axios
      .post(`${API_URL}/comfort`, {value})
      .then(res => {
        console.log(res.data.text);
        setAdvice(res.data.text);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getAdviceApi = async (value: string) => {
    await axios
      .post(`${API_URL}/advice`, {value})
      .then(res => {
        console.log(res.data.text);
        setAdvice(res.data.text);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isKeyExists = async (today: string) => {
    const isKeyExist = await AsyncStorage.getItem(today);
    if (isKeyExist !== null) {
      setTodo(isKeyExist);
      return true;
    } else {
      return false;
    }
  };

  const getUserData = async () => {
    const value = await AsyncStorage.getItem('myData');
    if (value != null) {
      await getTodoApi(value);
    } else {
      console.log('value is null');
    }
  };

  useEffect(() => {
    const today = moment().format('MM-DD');
    const checkKeyExist = async () => {
      const isKeyExist = await isKeyExists(today);
      if (!isKeyExist) {
        getUserData();
      } else {
        console.log('it already has key');
      }
    };
    checkKeyExist();
  }, []);

  useEffect(() => {
    const getWord = async () => {
      const value = await AsyncStorage.getItem('myData');
      if (value != null) {
        if (mbti == '0') {
          await getComfortApi(value);
        } else {
          await getAdviceApi(value);
        }
      }
    };
    getWord();
  }, []);

  return (
    <View style={styles.centeredView}>
      {showAnimation && (
        <LottieView
          style={{width: 100, height: 100}}
          source={require('./assets/rainbow.json')}
          autoPlay
          loop={false}
        />
      )}
      <TouchableOpacity onPress={() => load()}>
        <Text>Click me!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playAnimation()}>
        <Image style={styles.image} source={require('./assets/Lily.png')} />
      </TouchableOpacity>

      <Text style={{marginHorizontal: '12%'}}>{todo}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{advice}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => close()}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  image: {
    height: 140,
    width: 140,
    marginBottom: '5%',
    paddingTop: '-3%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: '5%',
  },
  textStyle: {
    color: 'white',
    // fontWeight: 'bold',
    paddingHorizontal: '10%',
    paddingVertical: 0,
    fontSize: 10,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Main;
