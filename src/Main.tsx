import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Alert, Pressable } from "react-native";
function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const API_URL = "http://127.0.0.1:5000";
  const load = async () => {
    try {
      const value = await AsyncStorage.getItem('myData');
      console.log("value : ",value);
      setModalVisible(!modalVisible);
      if(value!=null){
        await api(value);
      }else{
        console.log("value is null")
      }
     
    } catch (e) {
      // 오류 예외 처리
    }
  }
  const api =async(value:string)=>{
    await axios.post(
      `${API_URL}/todo`,
      {value}
    ).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
   return(
      <View style={styles.centeredView}>
    <TouchableOpacity 
    onPress={()=>load()}>
      <Text>Click!</Text>
    </TouchableOpacity>
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