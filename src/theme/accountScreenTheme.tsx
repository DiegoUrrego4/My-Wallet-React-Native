import {StyleSheet} from 'react-native';
import {colors} from './appTheme';

export const accountStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.appTextColor,
  },
  balanceContainer: {
    flex: 1,
    backgroundColor: colors.appColor,
    borderBottomRightRadius: 180,
  },
  balanceMoney: {
    color: colors.appTextColor,
    fontSize: 58,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  balanceText: {
    color: colors.appTextColor,
    fontSize: 15,
    marginHorizontal: 20,
  },
  movementsContainer: {
    flex: 2,
  },
  componentMovement: {
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
    color: colors.datesColor,
  },
  movementAmmount: {
    fontSize: 18,
  },
});
