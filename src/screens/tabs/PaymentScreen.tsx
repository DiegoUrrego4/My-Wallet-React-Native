import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';

export const PaymentScreen = () => {
  return (
    <View style={loansStyles.mainContainer}>
      <View style={loansStyles.accountContainer}>
        <Text style={loansStyles.accountValue}>$ 140.234.543</Text>
        <Text style={loansStyles.accountText}>Account balance</Text>
      </View>
      <View style={loansStyles.inputsContainer}>
        <View style={loansStyles.inputContainer}>
          <Icon name="person-outline" size={30} />
          <TextInput
            style={loansStyles.input}
            placeholder="User's email or phone number"
          />
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
          <Text style={loansStyles.buttonText}>Send payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
