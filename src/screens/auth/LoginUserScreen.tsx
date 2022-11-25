import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {loginStyles} from '../../theme/loginScreensTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.imageContainer}>
        <Image
          style={loginStyles.logo}
          source={require('../../../assets/MUIIcon.png')}
        />
        <Text style={loginStyles.logoText}>MY WALLET APP</Text>
      </View>
      <View style={loginStyles.midContainer}>
        <Text style={loginStyles.userInformationText}>
          Login or sign up for free.
        </Text>
        <TextInput style={loginStyles.input} placeholder="Email or Username" />
        <TouchableOpacity
          style={loginStyles.button}
          onPress={() => navigation.navigate('LoginPasswordScreen')}>
          <Text style={loginStyles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles.bottomContainer}>
        <Text style={loginStyles.registerText}>register</Text>
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
      </View>
    </View>
  );
};
