import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  const [comfort, setComfort] = useState('');
  const [advice, setAdvice] = useState('');
  const [isChanged, setIsChanged] = useState(false);

  const API_URL = 'http://127.0.0.1:5000';

  const load = () => {
    try {
      setModalVisible(!modalVisible);
    } catch (e) {
      // 오류 예외 처리
    }
  };
  const getTodoApi = async (value: string) => {
    await axios
      .post(`${API_URL}/todo`, {value})
      .then(res => {
        console.log(res.data.text);
        setTodo(res.data.text);
        setIsChanged(true);
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
        setComfort(res.data.text);
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
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    const today = moment().format('MM-DD');
    const checkKeyExist = async () => {
      const isKeyExist = await isKeyExists(today);
      if (!isKeyExist) {
        getUserData();
      } else {
        console.log('it already has!');
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
    checkKeyExist();
  }, [isChanged]);

  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={() => load()}>
        <Text>Click!</Text>
      </TouchableOpacity>
      <Text>{todo}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
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
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Main;
