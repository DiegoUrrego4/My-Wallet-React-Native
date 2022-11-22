import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {SettingsScreen} from '../screens/sidemenu/SettingsScreen';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {MaterialBottomTabs} from './MaterialBottomTab';
import {sideMenuStyles} from '../theme/sideMenuTheme';
import {ChangePasswordScreen} from '../screens/sidemenu/ChangePasswordScreen';
import {ChangeAppThemeScreen} from '../screens/sidemenu/ChangeAppThemeScreen';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        drawerStyle: {
          //   backgroundColor: '#cbcbef',
          width: 300,
        },
      }}
      drawerContent={props => <InternalMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={MaterialBottomTabs} />
      <Drawer.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        name="ChangeAppThemeScreen"
        component={ChangeAppThemeScreen}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Conatiner Avatar */}
      <View style={sideMenuStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg',
          }}
          style={sideMenuStyles.avatar}
        />
        <Text style={sideMenuStyles.username}>User Name</Text>
      </View>
      {/* Opciones de Menú */}
      <View style={sideMenuStyles.menuContainer}>
        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon style={sideMenuStyles.menuIcon} name="wallet-sharp" size={25} />
          <Text style={sideMenuStyles.menuText}>My Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Icon
            style={sideMenuStyles.menuIcon}
            name="lock-closed-sharp"
            size={25}
          />
          <Text style={sideMenuStyles.menuText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('ChangeAppThemeScreen')}>
          <Icon
            style={sideMenuStyles.menuIcon}
            name="color-palette-sharp"
            size={25}
          />
          <Text style={sideMenuStyles.menuText}>Change App Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => console.log('LOGOUT')}>
          <Icon
            style={sideMenuStyles.menuIcon}
            name="log-out-sharp"
            size={25}
          />
          <Text style={sideMenuStyles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
