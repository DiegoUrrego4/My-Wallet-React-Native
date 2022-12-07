import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';

export const LoansScreen = () => {
  return (
    <View style={loansStyles.mainContainer}>
      <View style={loansStyles.amountContainer}>
        <Icon name="logo-euro" size={30} />
        <View>
          <Text style={loansStyles.amountText}>Cupo Disponible</Text>
          <Text style={loansStyles.amount}>$ 50.000.000</Text>
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
