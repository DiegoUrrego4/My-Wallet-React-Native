import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginUserScreen} from '../screens/auth/LoginUserScreen';
import {LoginPasswordScreen} from '../screens/auth/LoginPasswordScreen';

const Stack = createStackNavigator<any>();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName=''
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="LoginPasswordScreen"
        component={LoginPasswordScreen}
      />
      <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
    </Stack.Navigator>
  );
};
