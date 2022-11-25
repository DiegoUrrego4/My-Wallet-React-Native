import React from 'react';
import {View, Text, Image} from 'react-native';
import {changeThemeStyles} from '../theme/changeThemeTheme';

interface Props {
  imageUrl?: string;
  title: string;
}

export const ThemeCard = ({title}: Props) => {
  return (
    <View style={changeThemeStyles.themeCard}>
      <Image
        style={changeThemeStyles.cardImage}
        source={require('../../assets/arbol.png')}
      />
      <Text style={changeThemeStyles.cardText}>{title}</Text>
    </View>
  );
};
