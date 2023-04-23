import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect} from 'react';
import Main from './src/Main';
import Start from './src/Start';
import Q0 from './src/questions/Q0';
import Q1 from './src/questions/Q1';
import Q2 from './src/questions/Q2';
import Q3 from './src/questions/Q3';
import Q4 from './src/questions/Q4';
import Q5 from './src/questions/Q5';
import Q6 from './src/questions/Q6';
import Q7 from './src/questions/Q7';
import Q8 from './src/questions/Q8';
import Result from './src/GuidePage';
import userSlice from './src/slices/user';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from './src/store';

export type LoggedInParamList = {
  Main: undefined;
};

export type RootStackParamList = {
  Start: undefined;
  Q0: undefined;
  Q1: undefined;
  Q2: undefined;
  Q3: undefined;
  Q4: undefined;
  Q5: undefined;
  Q6: undefined;
  Q7: undefined;
  Q8: undefined;
  Result: undefined;
}; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.ok); 
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     const key = await AsyncStorage.getItem('myData'); 
  //     const name = await AsyncStorage.getItem('myName');
  //     const color = await AsyncStorage.getItem('myLily');
  //     if (key != null) {
  //       dispatch(userSlice.actions.setOk(true)); 
  //       dispatch(userSlice.actions.setQ5(JSON.parse(key).q5)); 
  //       dispatch(userSlice.actions.setName(JSON.parse(name || '')));
  //       if (color != null) {
  //         dispatch(userSlice.actions.setColor(JSON.parse(color)));
  //       }
  //     } else {
       
  //     }
  //   };
  //   checkLoggedIn();
  // }, []); 

  return isLoggedIn ? (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{tabBarStyle: {display: 'none'}}}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{title: '시작 화면'}}
      />
      <Stack.Screen 
        name="Q0" 
        component={Q0} 
        options={{title: '이름'}} 
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
      <Stack.Screen
        name="Q5"
        component={Q5}
        options={{title: '다섯 번째 질문'}}
      />
      <Stack.Screen
        name="Q6"
        component={Q6}
        options={{title: '여섯 번째 질문'}}
      />
      <Stack.Screen 
        name="Q7" 
        component={Q7} 
        options={{title: '마지막 질문'}} 
        />
      <Stack.Screen 
        name="Q8" 
        component={Q8} 
        options={{title: '릴리 고르기'}} 
        />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{title: '결과지'}}
      />
    </Stack.Navigator>
  );
}

export default AppInner;

