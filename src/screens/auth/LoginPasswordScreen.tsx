import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {RootState} from '../../redux/store/store';
import {loginStyles} from '../../theme/loginScreensTheme';
import {getCredentials, useAppDispatch} from '../../hooks';

export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useAppDispatch();
  const {isAuth, userData, register} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    console.log('useEffect LoginPasswordScreen');
    console.log('LoginPasswordScreen register', register);
    register && navigation.navigate('MaterialBottomTabs');
    isAuth && navigation.navigate('LoginUserScreen');
    // verifyClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, userData, navigation]);

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.inputContainer}>
        <Image
          style={loginStyles.logo}
          source={require('../../../assets/MUIIcon.png')}
        />
        <Text style={loginStyles.logoText}>MY WALLET APP</Text>
        <View style={loginStyles.loginDataContainer}>
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
