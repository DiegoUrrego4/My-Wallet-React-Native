import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Tabs} from './src/navigator/Navigation';
import {MaterialBottomTabs} from './src/navigator/MaterialBottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabs />
    </NavigationContainer>
  );
};

export default App;
