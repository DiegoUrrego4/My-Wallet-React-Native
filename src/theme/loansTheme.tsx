import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const loansStyles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    // marginVertical: 10,
  },
  amountContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  amountText: {
    fontSize: 15,
    marginHorizontal: 30,
  },
  amount: {
    fontSize: 20,
    marginHorizontal: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    width: 360,
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.datesColor,
    width: 300,
    borderRadius: 5,
  },
  button: {
    width: 360,
    height: 50,
    backgroundColor: colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.appTextColor,
    fontSize: 17,
  },
  accountContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: 10,
  },
  accountValue: {
    fontSize: 45,
  },
  accountText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputsContainer: {
    marginVertical: 15,
  },
});
