
import React, { useEffect, useState } from 'react';
import AppInner from './AppInner';
import {Provider} from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Lottie from 'lottie-react-native';

function App(): JSX.Element {

  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.hide(); // splash screen은 바로 감춥니다!
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000); // 3초간 appLoaded 상태가 false이기 때문에
  }, []);

  return (
    appLoaded ? (
      <Provider store={store}>
      <NavigationContainer>
        <AppInner/>
      </NavigationContainer>
      </Provider>
      // Lottie 화면이 출력됩니다
    ):
       <Lottie
       source={require('./src/assets/lottieLily.json')}
       autoPlay
       loop
     />
  );
}

export default App;
