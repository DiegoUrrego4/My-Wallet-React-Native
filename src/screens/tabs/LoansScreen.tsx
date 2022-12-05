import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loansStyles} from '../../theme/loansTheme';
// import walletDB from '../../api/walletDB';
// import {ClientResponse} from '../../interfaces/clientsInterface';

export const LoansScreen = () => {
  const [apiResponse, setApiResponse] = useState<any>({
    clients: [],
  });
  const getData = async () => {
    console.log('getData');
    // const response = await walletDB.get<ClientResponse>('/clients');
    const res = await fetch('http://192.168.1.25:3000/api/v1/clients');
    const data = await res.json();
    setApiResponse({
      clients: data,
    });
    console.log(data);
  };

  // useEffect(() => {
  //   console.log('useEffect');
  //   await getData();
  // });

  useEffect(() => {
    getData();
  });

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
      <View>
        <Text>{JSON.stringify(apiResponse, null, 3)}</Text>
      </View>
    </View>
  );
};
