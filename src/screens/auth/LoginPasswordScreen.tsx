import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {RootState} from '../../redux/store/store';
import {loginStyles} from '../../theme/loginScreensTheme';
import {getCredentials, useAppDispatch} from '../../hooks';

export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useAppDispatch();
  const {isAuth} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    isAuth && navigation.navigate('MaterialBottomTabs');
  }, [isAuth, navigation]);

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.imageContainer}>
        <Image
          style={loginStyles.logo}
          source={require('../../../assets/MUIIcon.png')}
        />
        <Text style={loginStyles.logoText}>MY WALLET APP</Text>
        <View style={loginStyles.midContainer}>
          <Text style={loginStyles.userInformationText}>
            Login or sign up for free.
          </Text>
          <TouchableOpacity
            style={loginStyles.button}
            onPress={() => navigation.navigate('LoginPasswordScreen')}>
            <Text
              style={loginStyles.buttonText}
              onPress={() => dispatch(getCredentials())}>
              LOGIN WITH AUTH0
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
