import React, {useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';

export const ChangePasswordScreen = ({navigation}: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('MaterialBottomTabs'); // Navego hacia un navegador por defecto
        // BackHandler.exitApp(); // Me salgo de la APP
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
