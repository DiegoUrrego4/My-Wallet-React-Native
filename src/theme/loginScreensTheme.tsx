import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginVertical: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loginDataContainer: {
    // flexDirection: 'row',
    width: 290,
    alignItems: 'center',
    marginVertical: 150,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  userDataContainer: {
    flexDirection: 'row',
    width: 290,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  userInformationText: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: colors.datesColor,
    width: 300,
    borderRadius: 5,
  },
  inputPhone: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: colors.datesColor,
    width: 250,
    borderRadius: 5,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: colors.appTextColor,
    fontSize: 15,
  },
  bottomContainer: {
    flex: 3,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  registerText: {
    fontSize: 15,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
  },
  platformsSignInText: {
    fontSize: 15,
    marginHorizontal: 60,
  },
  googleImage: {
    height: 30,
    width: 30,
  },
});
