import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const changeThemeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 18,
  },
  themesContainer: {
    flex: 7,
    // backgroundColor: 'green',
  },
  themeCard: {
    backgroundColor: '#FAFAFA',
    height: 150,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  cardImage: {
    height: 50,
    width: 50,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  buttonsContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.appColor,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: colors.appTextColor,
    width: 180,
    height: 50,
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
    fontSize: 17,
    color: colors.appTextColor,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    fontSize: 17,
    color: colors.appColor,
    fontWeight: 'bold',
  },
});
