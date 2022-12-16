import React, {useEffect} from 'react';
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
import {useForm} from '../../hooks/useForm';
import {useAppColor} from '../../hooks/useAppColor';
import currencyFormatter from 'currency-formatter';
import {useSelector} from 'react-redux';
import {createMovement, getAccountBalance, useAppDispatch} from '../../hooks';
import {RootState} from '../../redux/store/store';

export const LoansScreen = () => {
  const dispatch = useAppDispatch();
  const {
    data: {id = '', credit},
  } = useSelector((state: RootState) => state.account);
  const {userData} = useSelector((stateA: RootState) => stateA.auth);
  const {email = ''} = userData;

  const {form, onChange, resetForm} = useForm({
    idIncome: '',
    idOutcome: '',
    amount: '',
    reason: '',
    fees: 60,
  });

  form.idIncome = id;
  form.idOutcome = id;

  const handleClick = () => {
    try {
      dispatch(createMovement(email, form));
      resetForm();
    } catch (error) {
      console.log('ERROr', error);
    }
  };

  const {colorState} = useAppColor();

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
              onPress={handleClick}>
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
