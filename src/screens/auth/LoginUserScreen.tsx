import React from 'react';
import {Button, Text, View} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="CONTINUE"
        onPress={() => navigation.navigate('LoginPasswordScreen')}
      />
    </View>
  );
};
