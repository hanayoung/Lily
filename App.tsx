
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppInner from './AppInner';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {

  return (
      <NavigationContainer>
        <AppInner/>
      </NavigationContainer>
  );
}

export default App;
