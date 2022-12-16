import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialBottomTabs} from './MaterialBottomTab';
import {ChangePasswordScreen} from '../screens/sidemenu/ChangePasswordScreen';
import {ChangeAppThemeScreen} from '../screens/sidemenu/ChangeAppThemeScreen';
import {colors} from '../theme/appTheme';
import {AuthNavigation} from './AuthNavigation';
import {LoginPasswordScreen} from '../screens/auth/LoginPasswordScreen';
import {InternalSideMenu} from '../screens/sidemenu/InternalSideMenu';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {
    data: {appColor},
  } = useSelector((state: RootState) => state.account);

  return (
    <Drawer.Navigator
      initialRouteName="AuthNavigation"
      screenOptions={{
        headerStyle: {
          backgroundColor: appColor,
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
