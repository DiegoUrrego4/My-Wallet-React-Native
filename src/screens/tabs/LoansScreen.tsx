import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useFetch} from '../../hooks/useFetch';

export const LoansScreen = () => {
  const {userData} = useSelector((state: RootState) => state.auth);
  const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const {
    account: {credit},
  } = data;
  return (
    <View style={loansStyles.mainContainer}>
      <View style={loansStyles.amountContainer}>
        <Icon name="logo-euro" size={30} />
        <View>
          <Text style={loansStyles.amountText}>Cupo Disponible</Text>
          <Text style={loansStyles.amount}>${credit}</Text>
        </View>
      </View>
      <View style={loansStyles.inputContainer}>
        <Icon name="cash-outline" size={30} />
        <TextInput style={loansStyles.input} placeholder="Amount" />
      </View>
      <View style={loansStyles.inputContainer}>
        <Icon name="chatbox-outline" size={30} />
        <TextInput style={loansStyles.input} placeholder="Reason" />
      </View>
      <TouchableOpacity style={loansStyles.button}>
        <Text style={loansStyles.buttonText}>Apply for loan</Text>
      </TouchableOpacity>
    </View>
  );
};
