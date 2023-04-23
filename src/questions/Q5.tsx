import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

type Q5ScreenProps = NativeStackScreenProps<RootStackParamList, 'Q5'>;
function Q5({navigation}: Q5ScreenProps) {
  const dispatch = useAppDispatch();

  const onHandle = (ans: string) => {
    save(ans);
    navigation.navigate('Q6');
  };
  const save = async (ans: string) => {
    try {
      dispatch(userSlice.actions.setQ5(ans));
    } catch (e) {
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q5. 상대방이 위로가 필요하다고 할 때, {'\n'} 어떻게 위로해주는 편인가요?
      </Text>
      <Image style={styles.image} source={require('../assets/Lily.png')} />
      <TouchableOpacity onPress={() => onHandle('0')} style={styles.button}>
        <Text style={styles.buttonText}>
          음.. 상대방의 감정을 우선시하는 편인것같아
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle('1')} style={styles.button}>
        <Text style={styles.buttonText}>
          나는 상대방에게 도움이 되는 조언을 하려고하는 편인 것 같아!
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

export default Q5;
