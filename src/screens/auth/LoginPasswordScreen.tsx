import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {setLogin, setToken} from '../../redux/slices/authSlice';
import {RootState} from '../../redux/store/store';

export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // isAuth && navigation.navigate('MaterialBottomTabs');
    if (isAuth) {
      navigation.navigate('MaterialBottomTabs');
    }
  }, [isAuth, navigation]);

  const handleLogin = () => {
    dispatch(setToken('tokenABC'));
    dispatch(setLogin());
    console.log('isAuth', isAuth);
  };

  return (
    <View>
      <Text>LoginPasswordScreen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
