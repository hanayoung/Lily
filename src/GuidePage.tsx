import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './store/reducer';
import userSlice from './slices/user';
import { useAppDispatch } from './store';

const GuidePage = () => {
  const data = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const todolist = [
    '그림그리기',
    '노래듣기',
    '산책하기',
    '책읽기',
    '영화보기',
    '쇼핑하기',
  ];
  const todoStr = data.q7.map(index => todolist[index]).join(', ');

  const save = async () => {
    try {
      dispatch(userSlice.actions.setOk(true));
    } catch (e) {
    }
  };

  return (
    <View style={styles.guide}>
      <Text style={styles.text}>
        {data.name}님은 {!!parseInt(data.q1) && '행복도가 낮으며, '}
        {!!parseInt(data.q2) && '우울감이 높고, '}
        {!!parseInt(data.q3) && '불안 지수가 높은, '}
        {!!parseInt(data.q4) && '최근 스트레스를 많이 받은, '}
        {!!parseInt(data.q5)
          ? '실용적인 해결책을 통해 현재의 문제를 해결해나가고자 하는 사람입니다. '
          : '따뜻하고 감정적인 공감과 위로를 원하는 사람입니다. '}
        {'\n\n'}
        {data.name}님은{' '}
        {!!parseInt(data.q6)
          ? '힘든 일이 있을 때 사람들과 함께 극복하는 편이며, '
          : '혼자 있는 시간을 통해 극복하는 편이며,'}
        {todoStr} 등의 활동을 선호하는 사람입니다. {'\n\n'}
        힘든 순간은 누구에게나 불시에 찾아오며, {data.name}님은 이 순간을 극복해
        낼 수 있는 강한 사람입니다. {'\n\n\n\n'}릴리와 함께 더 좋은 내일을 위해
        노력해봐요!
      </Text>
      <TouchableOpacity onPress={() => save()}>
      <Image
        style={styles.image}
        source={require('./assets/Lily.png')}
        onError={error => console.log('Error loading image:', error)}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    marginVertical: '10%',
  },
  guide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    marginHorizontal: 30,
  },
  text: {
    padding: 20,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default GuidePage;
