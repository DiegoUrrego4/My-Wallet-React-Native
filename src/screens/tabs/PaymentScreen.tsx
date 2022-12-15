import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useFetch} from '../../hooks/useFetch';
import {RootState} from '../../redux/store/store';
import {loansStyles} from '../../theme/loansTheme';
import {useForm} from '../../hooks/useForm';

export const PaymentScreen = () => {
  const {userData} = useSelector((state: RootState) => state.auth);

  const {form, onChange, resetForm} = useForm({
    idIncome: '',
    idOutcome: '',
    // user: '',
    amount: '',
    reason: '',
    fees: 0,
  });

  const {
    form: userForm,
    onChange: onChangeUser,
    resetForm: resetUserForm,
  } = useForm({
    user: '',
  });

  const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const {
    account: {balance, id: idOutcome},
  } = data;

  const {data: clientToPay, hasError} = useFetch(`/clients/${userForm.user}`);

  const {account = {id: ''}} = clientToPay;
  const {id: idIncome} = account;

  form.idIncome = idIncome || '';
  form.idOutcome = idOutcome || '';

  const createMovement = async () => {
    try {
      await fetch('http://192.168.1.25:3000/api/v1/movements', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resetForm();
      resetUserForm();
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loansStyles.mainContainer}>
            <View style={loansStyles.accountContainer}>
              <Text style={loansStyles.accountValue}>${balance}</Text>
              <Text style={loansStyles.accountText}>Account balance</Text>
            </View>
            <View style={loansStyles.inputsContainer}>
              <View style={loansStyles.inputContainer}>
                <Icon name="person-outline" size={30} />
                <TextInput
                  style={loansStyles.input}
                  placeholder="User's email or phone number"
                  onChangeText={value => onChangeUser(value, 'user')}
                  keyboardType="email-address"
                  value={userForm.user}
                />
              </View>

              {hasError && (
                <View style={loansStyles.errorMessageContainer}>
                  <Text style={loansStyles.errorMessage}>
                    Cuenta de usuario inexistente
                  </Text>
                </View>
              )}

              <View style={loansStyles.inputContainer}>
                <Icon name="cash-outline" size={30} />
                <TextInput
                  style={loansStyles.input}
                  placeholder="Amount"
                  onChangeText={value => onChange(value, 'amount')}
                  keyboardType="phone-pad"
                  value={form.amount}
                />
              </View>
              <View style={loansStyles.inputContainer}>
                <Icon name="chatbox-outline" size={30} />
                <TextInput
                  style={loansStyles.input}
                  placeholder="Reason"
                  onChangeText={value => onChange(value, 'reason')}
                  value={form.reason}
                />
              </View>
              <TouchableOpacity
                style={loansStyles.button}
                disabled={hasError ? true : false}
                onPress={createMovement}>
                <Text style={loansStyles.buttonText}>Send payment</Text>
              </TouchableOpacity>
            </View>
            <Text>{JSON.stringify(form, null, 5)}</Text>
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
