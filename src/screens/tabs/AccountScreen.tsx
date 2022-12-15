import React, {useEffect} from 'react';
import {Alert, BackHandler, Text, View} from 'react-native';
import {accountStyles} from '../../theme/accountScreenTheme';
import {Movement} from '../../components/Movement';
import {ScrollView} from 'react-native-gesture-handler';
import {MyStackScreenProps} from '../../interfaces/MyStackScreenProps';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useFetch} from '../../hooks/useFetch';
import {Come} from '../../interfaces/accountInterface';
// import {useGetMovementPicture} from '../../helpers/getMovementPicture';

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

  const {userData} = useSelector((state: RootState) => state.auth);
  const {email} = userData;
  console.log('Email', email);
  const {data} = useFetch(`/clients/${email}`);
  const {
    account: {balance, id: accountId},
  } = data;

  const {data: accountData} = useFetch(`/account/${accountId}`);
  const {incomes = [], outcomes = []} = accountData;

  const filteredOutcomes: Come[] = outcomes.filter(
    (outcome: Come) => outcome.fees === 0,
  );

  // useGetMovementPicture(incomes);

  return (
    <View style={accountStyles.screenContainer}>
      <View style={accountStyles.balanceContainer}>
        <Text style={accountStyles.balanceMoney}>${balance}</Text>
        {/* <Text style={accountStyles.balanceMoney}>$12</Text> */}
        <Text style={accountStyles.balanceText}>Balance in your account</Text>
      </View>
      <View style={accountStyles.movementsContainer}>
        <ScrollView>
          {incomes.map((income: Come) => (
            <Movement
              key={income.id}
              imageUrl={income.pictureOutcome}
              movementFor={income.reason}
              date={income.datetime}
              quantity={income.amount}
              typeOfMovement={'income'}
            />
          ))}
          {filteredOutcomes.map((outcome: Come) => (
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
