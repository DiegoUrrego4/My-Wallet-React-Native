import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {AccountScreen} from '../screens/tabs/AccountScreen';
import {LoansScreen} from '../screens/tabs/LoansScreen';
import {PaymentScreen} from '../screens/tabs/PaymentScreen';
import {useAppColor} from '../hooks/useAppColor';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = () => {
  const {colorState} = useAppColor();
  console.log('COLOR SATE MATERIAL', colorState);
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colorState}}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'AccountScreen':
              iconName = 'home-sharp';
              break;

            case 'LoansScreen':
              iconName = 'cash-sharp';
              break;

            case 'PaymentScreen':
              iconName = 'card-sharp';
              break;
          }
          return <Icon name={iconName} size={25} color={color} />;
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
