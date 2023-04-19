
import React from 'react';
import AppInner from './AppInner';
import {Provider} from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner/>
      </NavigationContainer>
      </Provider>
  );
}

export default App;
