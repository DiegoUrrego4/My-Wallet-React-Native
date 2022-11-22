import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AccountScreen} from '../screens/tabs/AccountScreen';
import {SettingsScreen} from '../screens/sidemenu/SettingsScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen name="HomeScreen" component={AccountScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
