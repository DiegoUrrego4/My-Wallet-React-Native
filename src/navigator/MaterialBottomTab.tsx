import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {AccountScreen} from '../screens/tabs/AccountScreen';
import {LoansScreen} from '../screens/tabs/LoansScreen';
import {PaymentScreen} from '../screens/tabs/PaymentScreen';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Loans" component={LoansScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
    </Tab.Navigator>
  );
};
