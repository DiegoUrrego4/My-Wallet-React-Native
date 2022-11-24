import {StyleSheet} from 'react-native';
import {colores} from './appTheme';

export const accountStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colores.appTextColor,
  },
  balanceContainer: {
    flex: 1,
    backgroundColor: colores.appColor,
    borderBottomRightRadius: 130,
    borderBottomStartRadius: 20,
  },
  balanceMoney: {
    color: colores.appTextColor,
    fontSize: 60,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  balanceText: {
    color: colores.appTextColor,
    fontSize: 15,
    marginHorizontal: 20,
  },
  movementsContainer: {
    flex: 2,
    // backgroundColor: 'purple',
  },
  componentMovement: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  movementImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  movementText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  movementDate: {
    fontSize: 13,
    color: colores.datesColor,
  },
  movementAmmount: {
    fontSize: 18,
  },
});
