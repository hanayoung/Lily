import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

type Q6ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q6'>;
function Q6({navigation}: Q6ScreenProps) {
  const dispatch = useAppDispatch();

  const onHandle = (ans: string) => {
    save(ans);
    navigation.navigate('Q7');
  };
  const save = async (ans: string) => {
    try {
      dispatch(userSlice.actions.setQ6(ans));
    } catch (e) {
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q6. 힘든 일이 있을 때 어떻게 극복하는 편인가요?
      </Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <TouchableOpacity onPress={() => onHandle('0')} style={styles.button}>
        <Text style={styles.buttonText}>
          친구들한테 얘기하면서 극복하는 편이야
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle('1')} style={styles.button}>
        <Text style={styles.buttonText}>
          혼자 극복할 수 있는 방법을 찾아보려고 하는 편이야
        </Text>
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

export default Q6;
