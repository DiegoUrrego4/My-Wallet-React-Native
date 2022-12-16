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
          <ThemeCard title="Original" color="#007AFF" />
          <ThemeCard title="Cadet Blue" color="#429EA6" />
          <ThemeCard title="Indigo Dye" color="#153B50" />
        </View>
        {/* Fila 2 */}
        <View style={changeThemeStyles.row}>
          <ThemeCard title="Charcoal" color="#2A3D45" />
          <ThemeCard title="French Bistre" color="#7A6C5D" />
          <ThemeCard title="Cornflower Blue" color="#758BFD" />
        </View>
        {/* Fila 3 */}
        <View style={changeThemeStyles.row}>
          <ThemeCard title="Dark Sienna" color="#421820" />
          <ThemeCard title="Old Rose" color="#C17C74" />
          <ThemeCard title="Morning Blue" color="#8E9B90" />
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
