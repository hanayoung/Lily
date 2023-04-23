
import React, { useEffect, useState } from 'react';
import AppInner from './AppInner';
import { StyleSheet,View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Lottie from 'lottie-react-native';

function App(): JSX.Element {

  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.hide(); 
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 4000); 
  }, []);

  return (
    appLoaded ? (
      <Provider store={store}>
      <NavigationContainer>
        <AppInner/>
      </NavigationContainer>
      </Provider>
    ):
    <View style={styles.container}>
       <Lottie
       source={require('./src/assets/winkLily.json')}
       autoPlay
       loop
     />
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#deefff",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;
