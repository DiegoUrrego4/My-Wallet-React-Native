import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {AccountScreen} from '../screens/tabs/AccountScreen';
import {LoansScreen} from '../screens/tabs/LoansScreen';
import {PaymentScreen} from '../screens/tabs/PaymentScreen';
import {Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'AccountScreen':
              iconName = 'AC';
              break;

            case 'LoansScreen':
              iconName = 'LN';
              break;

            case 'PaymentScreen':
              iconName = 'PM';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="AccountScreen"
        options={{title: 'Account'}}
        component={AccountScreen}
      />
      <Tab.Screen
        name="LoansScreen"
        options={{title: 'Loans'}}
        component={LoansScreen}
      />
      <Tab.Screen
        name="PaymentScreen"
        options={{title: 'Payment'}}
        component={PaymentScreen}
      />
    </Tab.Navigator>
  );
};
