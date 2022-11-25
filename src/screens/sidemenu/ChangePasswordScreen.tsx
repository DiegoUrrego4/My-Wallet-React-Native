import React, {useEffect} from 'react';
import {
  View,
  Text,
  BackHandler,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';

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
    <View style={loansStyles.singlePagesContainer}>
      <View style={loansStyles.inputContainer}>
        <Icon name="lock-open-outline" size={30} />
        <TextInput style={loansStyles.input} placeholder="Current Password" />
      </View>
      <View style={loansStyles.inputContainer}>
        <Icon name="lock-closed-outline" size={30} />
        <TextInput style={loansStyles.input} placeholder="New Password" />
      </View>
      <View style={loansStyles.inputContainer}>
        <Icon name="lock-closed-outline" size={30} />
        <TextInput
          style={loansStyles.input}
          placeholder="Retype new password"
        />
      </View>
      <TouchableOpacity style={loansStyles.button}>
        <Text style={loansStyles.buttonText}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={loansStyles.cancelButton}
        onPress={() => navigation.navigate('MaterialBottomTabs')}>
        <Text style={loansStyles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};
