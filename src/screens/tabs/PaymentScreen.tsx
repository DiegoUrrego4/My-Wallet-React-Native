import React, {useEffect} from 'react';
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
import {useFetch} from '../../hooks/useFetch';
import {loansStyles} from '../../theme/loansTheme';
import {useForm} from '../../hooks/useForm';
import {useAppColor} from '../../hooks/useAppColor';
import currencyFormatter from 'currency-formatter';
import {useGetBalance} from '../../hooks/useGetBalance';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useAppDispatch} from '../../hooks/hooks';
import {getAccountBalance, createMovement} from '../../hooks/thunks';

export const PaymentScreen = () => {
  const dispatch = useAppDispatch();
  const {data} = useSelector((state: RootState) => state.account);
  const {userData} = useSelector((stateA: RootState) => stateA.auth);
  const {email = ''} = userData;
  const {balance = '', id: idOutcome} = data;
  const {form, onChange, resetForm} = useForm({
    idIncome: '',
    idOutcome: '',
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
  // const {createMovement} = useGetBalance();

  const {data: clientToPay, hasError} = useFetch(`/clients/${userForm.user}`);

  const {account = {id: ''}} = clientToPay;
  const {id: idIncome} = account;

  form.idIncome = idIncome || '';
  form.idOutcome = idOutcome || '';

  const {colorState} = useAppColor();

  const handleClick = () => {
    try {
      dispatch(createMovement(email, form));
      resetForm();
      resetUserForm();
    } catch (error) {
      console.log('ERROr', error);
    }
  };

  useEffect(() => {
    dispatch(getAccountBalance(email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loansStyles.mainContainer}>
            <View style={loansStyles.accountContainer}>
              <Text style={loansStyles.accountValue}>
                {currencyFormatter.format(Number(balance), {
                  code: 'COP',
                })}
              </Text>
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
                style={{...loansStyles.button, backgroundColor: colorState}}
                disabled={hasError ? true : false}
                onPress={handleClick}>
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
