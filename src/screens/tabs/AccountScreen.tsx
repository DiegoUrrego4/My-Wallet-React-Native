import React, {useEffect} from 'react';
import {Alert, BackHandler, Text, View} from 'react-native';
import {accountStyles} from '../../theme/accountScreenTheme';
import {Movement} from '../../components/Movement';
import {ScrollView} from 'react-native-gesture-handler';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';
import currencyFormatter from 'currency-formatter';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {getAccountBalance, useAppDispatch} from '../../hooks';
import {getAccountMovements} from '../../hooks/thunks';

export const AccountScreen = ({navigation}: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const dispatch = useAppDispatch();
  const {userData} = useSelector((state: RootState) => state.auth);
  const {email = ''} = userData;
  console.log('Email', email);
  const {data} = useSelector((state: RootState) => state.account);
  const {balance, id = '', incomes = [], outcomes = [], appColor} = data;

  const filteredOutcomes = outcomes?.filter(outcome => outcome.fees === 0);

  useEffect(() => {
    dispatch(getAccountBalance(email));
    dispatch(getAccountMovements(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance]);

  return (
    <View style={accountStyles.screenContainer}>
      <View
        style={{
          ...accountStyles.balanceContainer,
          backgroundColor: appColor,
        }}>
        <Text style={accountStyles.balanceMoney}>
          {currencyFormatter.format(Number(balance), {code: 'COP'})}
        </Text>
        {/* <Text style={accountStyles.balanceMoney}>$12</Text> */}
        <Text style={accountStyles.balanceText}>Balance in your account</Text>
      </View>
      <View style={accountStyles.movementsContainer}>
        <ScrollView>
          {incomes.map((income: any) => (
            <Movement
              key={income.id}
              imageUrl={income.pictureOutcome}
              movementFor={income.reason}
              date={income.datetime}
              quantity={income.amount}
              typeOfMovement={'income'}
            />
          ))}
          {filteredOutcomes.map((outcome: any) => (
            <Movement
              key={outcome.id}
              imageUrl={outcome.pictureIncome}
              movementFor={outcome.reason}
              date={outcome.datetime}
              quantity={outcome.amount}
              typeOfMovement={'outcome'}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
