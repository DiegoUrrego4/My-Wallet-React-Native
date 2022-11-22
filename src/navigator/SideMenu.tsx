import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {MaterialBottomTabs} from './MaterialBottomTab';
import {sideMenuStyles} from '../theme/sideMenuTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        drawerStyle: {
          //   backgroundColor: '#cbcbef',
          width: 240,
        },
      }}
      drawerContent={props => <InternalMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={MaterialBottomTabs} />
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
          <Text style={sideMenuStyles.menuText}>My Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={sideMenuStyles.menuText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={sideMenuStyles.menuText}>Change App Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sideMenuStyles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={sideMenuStyles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
