import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialBottomTabs} from './MaterialBottomTab';
import {ChangePasswordScreen} from '../screens/sidemenu/ChangePasswordScreen';
import {ChangeAppThemeScreen} from '../screens/sidemenu/ChangeAppThemeScreen';
import {colors} from '../theme/appTheme';
import {AuthNavigation} from './AuthNavigation';
import {LoginPasswordScreen} from '../screens/auth/LoginPasswordScreen';
import {InternalSideMenu} from '../screens/sidemenu/InternalSideMenu';
import {useAppColor} from '../hooks/useAppColor';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {colorState = '#007AFF'} = useAppColor();
  console.log('COLOR STATE SIDEMENU', colorState);

  return (
    <Drawer.Navigator
      initialRouteName="AuthNavigation"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
          elevation: 0,
        },
        headerTintColor: colors.appTextColor,
        drawerStyle: {
          width: 300,
        },
      }}
      drawerContent={props => <InternalSideMenu {...props} />}>
      {/* Logueo */}
      <Drawer.Screen
        options={{headerShown: false, swipeEnabled: false}}
        name="AuthNavigation"
        component={AuthNavigation}
      />
      <Drawer.Screen
        options={{headerShown: false, swipeEnabled: false}}
        name="LoginPasswordScreen"
        component={LoginPasswordScreen}
      />
      <Drawer.Screen
        name="MaterialBottomTabs"
        options={{title: 'My App'}}
        component={MaterialBottomTabs}
      />
      <Drawer.Screen
        name="ChangePasswordScreen"
        options={{title: 'My App'}}
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        name="ChangeAppThemeScreen"
        options={{title: 'My App'}}
        component={ChangeAppThemeScreen}
      />
    </Drawer.Navigator>
  );
};
