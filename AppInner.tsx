import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Alert, View } from 'react-native';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Main from './src/Main'
import Start from './src/Start';
import Q1 from './src/questions/Q1';
import Q2 from './src/questions/Q2';
import Q3 from './src/questions/Q3';
import Q4 from './src/questions/Q4';

export type LoggedInParamList = {
  Main: undefined;
};

export type RootStackParamList = {
  Start: undefined;
  Q1: undefined;
  Q2: undefined;
  Q3: undefined;
  Q4: undefined;
}; // 다른 페이지에서도 계속해서 가져다 쓸 거기 때문에 export


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
    const isLoggedIn=false;  // 이걸로 처음 접속하는 사용자인지 아닌지 구분하기
    
  return (
      isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Main"
            component={Main}
            options={{title: '메인 화면'}}
          />      
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{title: '시작 화면'}}
          />
           <Stack.Screen
            name="Q1"
            component={Q1}
            options={{title: '첫 번째 질문'}}
          />
           <Stack.Screen
            name="Q2"
            component={Q2}
            options={{title: '두 번째 질문'}}
          />
           <Stack.Screen
            name="Q3"
            component={Q3}
            options={{title: '세 번째 질문'}}
          />
          <Stack.Screen
            name="Q4"
            component={Q4}
            options={{title: '네 번째 질문'}}
          />

        </Stack.Navigator>
      )
  );
}
/* 
한 번 설문조사 하기 전에는 설문조사 페이지, 설문조사한 후에는 메인페이지
*/
export default AppInner;

 {/* Stack.Screen의 options는 어떤 것이 기본일지?라고 함 */}
              {/* <Stack.Screen name="Details">
                {props => <DetailsScreen {...props} />}  
                {/* 추가적인 props를 넘길 때 사용 */}
              {/* </Stack.Screen> */}
              // 리액트 네비게이션에서 자체적으로 safe area view를 적용해주고 있기 때문에 굳이 해주지 않아도 됨
