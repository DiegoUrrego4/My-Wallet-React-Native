import React, {useEffect} from 'react';
import {View, Text, BackHandler, TouchableOpacity} from 'react-native';
import {ThemeCard} from '../../components/ThemeCard';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {changeThemeStyles} from '../../theme/changeThemeTheme';

export const ChangeAppThemeScreen = ({navigation}: MyStackScreenProps) => {
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
    <View style={changeThemeStyles.mainContainer}>
      <View style={changeThemeStyles.textContainer}>
        <Text style={changeThemeStyles.title}>Choose your theme</Text>
        <Text style={changeThemeStyles.paragraph}>
          You can always change this at any time
        </Text>
      </View>
      <View style={changeThemeStyles.themesContainer}>
        {/* Fila 1 */}
        <View style={changeThemeStyles.row}>
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
        </View>
        {/* Fila 2 */}
        <View style={changeThemeStyles.row}>
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
        </View>
        {/* Fila 3 */}
        <View style={changeThemeStyles.row}>
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
          <ThemeCard title="Arts & Culture" />
        </View>
      </View>
      <View style={changeThemeStyles.buttonsContainer}>
        <TouchableOpacity style={changeThemeStyles.cancelButton}>
          <Text
            style={changeThemeStyles.cancelButtonText}
            onPress={() => navigation.navigate('MaterialBottomTabs')}>
            CANCEL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={changeThemeStyles.button}>
          <Text style={changeThemeStyles.buttonText}>ACCEPT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
