import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {sideMenuStyles} from '../../theme/sideMenuTheme';
import {MyDrawerContentComponentProps} from '../../interfaces/MyDraweComponentProps';
import {useDispatch} from 'react-redux';
import {setLogout} from '../../redux/slices/authSlice';

export const InternalSideMenu = ({
  navigation,
}: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    navigation.navigate('LoginPasswordScreen');
  };
  return (
    <>
      <View style={sideMenuStyles.userOptionsContainer}>
        {/* Conatiner Avatar */}
        <View style={sideMenuStyles.avatarContainer}>
          <Image
            source={{
              uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg',
            }}
            style={sideMenuStyles.avatar}
          />
          {/* <Image
      source={require('../../assets/avatar.png')}
      style={sideMenuStyles.avatar}
    /> */}
          <Text style={sideMenuStyles.username}>User Name</Text>
        </View>
        {/* Opciones de Menú */}
        <View style={sideMenuStyles.menuContainer}>
          <TouchableOpacity
            style={sideMenuStyles.menuButton}
            onPress={() => navigation.navigate('MaterialBottomTabs')}>
            <Icon
              style={sideMenuStyles.menuIcon}
              name="wallet-sharp"
              size={25}
            />
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
            <Text style={sideMenuStyles.menuText} onPress={handleLogout}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={sideMenuStyles.logoContainer}>
        <Image
          style={sideMenuStyles.appLogo}
          source={require('../../../assets/MUIIcon.png')}
        />
      </View>
    </>
  );
};
