import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const loansStyles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    // marginVertical: 10,
  },
  singlePagesContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
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
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  cancelButton: {
    width: 360,
    height: 50,
    backgroundColor: colors.appTextColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  buttonText: {
    color: colors.appTextColor,
    fontSize: 17,
  },
  cancelButtonText: {
    color: 'black',
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
