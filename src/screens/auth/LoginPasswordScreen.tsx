import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
// import {setLogin, setToken} from '../../redux/slices/authSlice';
import {RootState} from '../../redux/store/store';
import {loginStyles} from '../../theme/loginScreensTheme';
import {getCredentials} from '../../hooks/thunks';
import {ActivityIndicator} from 'react-native-paper';

export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    isAuth && navigation.navigate('MaterialBottomTabs');
  }, [isAuth, navigation]);

  // const handleLogin = () => {
  //   dispatch(setToken('tokenABC'));
  //   dispatch(setLogin());
  //   console.log('isAuth', isAuth);
  // };

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
          {/* <TextInput style={loginStyles.input} placeholder="Password" /> */}
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
      {/* <View style={loginStyles.bottomContainer}>
        <Text style={loginStyles.registerText}>or use</Text>
        <TouchableOpacity style={loginStyles.platformsSignIn}>
          <Image
            style={loginStyles.googleImage}
            source={require('../../../assets/logo-google.png')}
          />
          <Text style={loginStyles.platformsSignInText}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginStyles.platformsSignIn}>
          <Icon name="logo-apple" size={20} />
          <Text style={loginStyles.platformsSignInText}>
            Sign in with Apple
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
