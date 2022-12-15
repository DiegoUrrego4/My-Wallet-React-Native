import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useFetch} from '../../hooks/useFetch';
import {useForm} from '../../hooks/useForm';
import {useAppColor} from '../../hooks/useAppColor';
import currencyFormatter from 'currency-formatter';
// import {useGetBalance} from '../../hooks/useGetBalance';

export const LoansScreen = () => {
  const {userData} = useSelector((state: RootState) => state.auth);
  const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const {
    account: {credit, id: clientId},
  } = data;
  // const {credit, idOutcome: clientId} = useGetBalance();

  console.log('CREDIT', credit);

  const {form, onChange, resetForm} = useForm({
    idIncome: '',
    idOutcome: '',
    amount: '',
    reason: '',
    fees: 60,
  });

  form.idIncome = clientId;
  form.idOutcome = clientId;

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
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const {colorState} = useAppColor();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loansStyles.mainContainer}>
            <View style={loansStyles.amountContainer}>
              <Icon name="logo-euro" size={30} />
              <View>
                <Text style={loansStyles.amountText}>Cupo Disponible</Text>
                <Text style={loansStyles.amount}>
                  {currencyFormatter.format(Number(credit), {code: 'COP'})}
                </Text>
              </View>
            </View>
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
              style={{...loansStyles.button, backgroundColor: colorState}}
              onPress={createMovement}>
              <Text style={loansStyles.buttonText}>Apply for loan</Text>
            </TouchableOpacity>
            <Text>{JSON.stringify(form, null, 5)}</Text>
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
