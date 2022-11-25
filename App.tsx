import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/navigator/SideMenu';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SideMenu />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
