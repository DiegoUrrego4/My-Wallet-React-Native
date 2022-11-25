import React, {useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';

export const ChangePasswordScreen = ({navigation}: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        // Navego hacia un navegador por defecto
        navigation.navigate('MaterialBottomTabs');
        // Me salgo de la APP
        // BackHandler.exitApp();
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
  return (
    <View>
      <Text>ChangePasswordScreen</Text>
    </View>
  );
};
