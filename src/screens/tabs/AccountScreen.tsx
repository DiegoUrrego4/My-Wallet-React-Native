import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';

export const AccountScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={30} color="#900" />
    </View>
  );
};
