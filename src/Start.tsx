import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import {RootStackParamList} from '../AppInner';

type StartScreenProps = NativeStackScreenProps<RootStackParamList, 'Start'>;
function Start({navigation}: StartScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>안녕하세요!</Text>
      <Text style={styles.text}>
        저는 당신의 행복을 위해 {'\n'}저 먼 해피니스 아일랜드에서부터 {'\n'}
        날아온 릴리에요!
      </Text>
      <Text style={styles.text}>
        당신이랑 더 가까워지기 위해{'\n'}릴리가 준비한 몇 가지 질문이 있어요!
      </Text>
      <Text style={styles.text}>
        몇 가지 안 되니까 {'\n'}잘 해주실거라고 릴리는 믿어요!
      </Text>
      <Text style={styles.click}>Click me!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Q0');
        }}>
        <Image style={styles.image} source={require('./assets/Lily.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: '20%',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '3%',
  },
  click: {
    marginTop: '20%',
    paddingBottom: '-20%',
    color: 'grey',
  },
});

export default Start;
