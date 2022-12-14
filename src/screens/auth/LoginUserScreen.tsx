import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import {loginStyles} from '../../theme/loginScreensTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useForm} from '../../hooks/useForm';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useAppDispatch} from '../../hooks/hooks';
import {createClient} from '../../hooks/thunks';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useAppDispatch();
  const {isAuth, userData, register} = useSelector(
    (state: RootState) => state.auth,
  );
  const {form, onChange} = useForm({
    phone: '',
  });

  useEffect(() => {
    console.log('userData - LoginUserScreen', userData);
    console.log('register - LoginUserScreen', register);
    register && navigation.navigate('MaterialBottomTabs');
    // isAuth && navigation.navigate('MaterialBottomTabs');
  }, [isAuth, navigation, userData, register]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={formStyles.globalContainer}>
            <View style={formStyles.imageContainer}>
              <Image
                style={loginStyles.logo}
                source={require('../../../assets/MUIIcon.png')}
              />
              <Text style={formStyles.title}>My Wallet App</Text>
            </View>
            <Text style={formStyles.screenText}>
              Por favor dígita tu número de teléfono
            </Text>
            {/* <View style={formStyles.formContainer}>
              <Icon name="person-outline" size={30} />
              <TextInput
                style={formStyles.inputStyle}
                placeholder="3012345678"
                onChangeText={value => onChange(value, 'phone')}
                keyboardType="phone-pad"
              />
            </View> */}
            <View style={formStyles.formContainer}>
              <Icon name="call-outline" size={30} />
              <TextInput
                style={formStyles.inputStyle}
                placeholder="3012345678"
                onChangeText={value => onChange(value, 'phone')}
                keyboardType="phone-pad"
              />
            </View>
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() =>
                dispatch(createClient({...userData, phone: form.phone}))
              }>
              <Text style={loginStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={formStyles.screenText}>
              {JSON.stringify(form, null, 5)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const formStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: 250,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  screenText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  inputStyle: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    width: 300,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
