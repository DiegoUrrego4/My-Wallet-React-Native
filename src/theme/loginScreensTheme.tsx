import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    // backgroundColor: 'pink',
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
  midContainer: {
    flex: 3,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    width: 300,
    height: 40,
    backgroundColor: colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
  platformsSignIn: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: colors.datesColor,
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
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
